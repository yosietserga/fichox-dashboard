'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Users, Cpu, Cloud, Zap, DollarSign, TrendingUp, Briefcase, Laptop,
  Video, MessageCircle, Megaphone, ShoppingCart, Heart, Target, CheckCircle2,
  Sparkles, Server, GitBranch, Bot, Calendar, Award, FileText, Code2,
  Smartphone, Wrench,
} from 'lucide-react'
import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Area, AreaChart, Legend, Cell, BarChart,
} from 'recharts'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  OPS_QUARTER, ROLES, HEADCOUNT_BY_WEEK, RECRUITMENT_FUNNEL, ONBOARDING_PLAN,
  REMOTE_CAPTATION, TOOLS, AI_INTEGRATIONS, AUTOMATIONS, INFRASTRUCTURE,
  COSTS_BY_WEEK, INVESTMENT_TIMELINE, AUTOMATION_MATURITY,
} from '@/lib/operational-data'

const BLUE = '#1d4ed8'
const BLUE_DARK = '#1e3a8a'
const BLUE_LIGHT = '#3b82f6'
const AMBER = '#f59e0b'
const AMBER_LIGHT = '#fbbf24'
const INK = '#0b1220'
const SAND = '#f7f5f0'
const GRAPHITE = '#475569'
const EMERALD = '#059669'
const ROSE = '#e11d48'
const PURPLE = '#8b5cf6'

const CATEGORY_COLORS: Record<string, string> = {
  Founder: INK,
  'Full-time': BLUE,
  'Part-time': BLUE_LIGHT,
  Freelancer: AMBER,
  Contractor: EMERALD,
}

const TOOL_CAT_COLORS: Record<string, string> = {
  'Comunicación': BLUE,
  'Productividad': BLUE_LIGHT,
  'CRM': EMERALD,
  'Sales': AMBER,
  'Marketing': ROSE,
  'Dev': INK,
  'Design': PURPLE,
  'Support': '#0d9488',
  'Community': EMERALD,
  'Analytics': '#7c3aed',
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
}

function SectionTitle({ kicker, title, desc }: { kicker: string; title: string; desc?: string }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="mb-6 sm:mb-8">
      <div className="flex items-center gap-2 mb-2">
        <span className="h-1.5 w-6 rounded-full" style={{ background: AMBER }} />
        <span className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: BLUE_DARK }}>{kicker}</span>
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {desc && <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-2xl">{desc}</p>}
    </motion.div>
  )
}

export function OperationalPlanView() {
  const [selectedWeek, setSelectedWeek] = useState<number>(1)
  const week = HEADCOUNT_BY_WEEK.find((w) => w.week === selectedWeek)!

  return (
    <div className="bg-white">
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${INK} 0%, ${BLUE_DARK} 100%)` }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="absolute -top-24 -right-24 size-72 rounded-full blur-3xl opacity-30" style={{ background: AMBER }} />
        <div className="absolute -bottom-32 -left-20 size-80 rounded-full blur-3xl opacity-20" style={{ background: BLUE_LIGHT }} />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <Badge className="mb-5 border-0 text-amber-950 gap-1.5" style={{ background: AMBER_LIGHT }}>
              <Briefcase className="size-3" /> {OPS_QUARTER.name}
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
              Plan Operativo
              <span className="block mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold" style={{ color: AMBER_LIGHT }}>
                Equipo, infraestructura y automatización
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
              {OPS_QUARTER.mission}.
              <span className="block mt-2 text-white/60 text-sm">North star: {OPS_QUARTER.northStar}</span>
            </p>

            <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
              <HeroStat value="10" label="Roles al final de Q3" />
              <HeroStat value="6.4" label="FTEs equivalentes" />
              <HeroStat value={`$${(COSTS_BY_WEEK[11].total).toFixed(0)}`} label="Costo semanal S12" />
              <HeroStat value="85%" label="Work automatizado" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== TEAM & HEADCOUNT TIMELINE ===================== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle
          kicker="Equipo humano"
          title="Headcount semana a semana"
          desc="10 roles (founder + 3 full-time + 2 part-time + 4 freelancers) contratados progresivamente según el plan de marketing. Todos remotos LATAM con política BYOD."
        />

        {/* Headcount chart */}
        <Card className="border-blue-100 mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2"><Users className="size-4" style={{ color: BLUE }} /> Roles activos y FTE por semana</CardTitle>
            <CardDescription>Barras: roles activos · Línea: FTE equivalente (40h=1.0)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={HEADCOUNT_BY_WEEK} margin={{ top: 8, right: 8, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                  <XAxis dataKey="week" tick={{ fontSize: 11, fill: GRAPHITE }} axisLine={false} tickLine={false} tickFormatter={(v) => `S${v}`} />
                  <YAxis yAxisId="left" tick={{ fontSize: 11, fill: GRAPHITE }} axisLine={false} tickLine={false} />
                  <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11, fill: GRAPHITE }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e5e7eb', fontSize: 12 }} formatter={(v: number, n: string) => [n === 'FTE' ? v.toFixed(2) : v, n]} />
                  <Legend wrapperStyle={{ fontSize: 11 }} />
                  <Bar yAxisId="left" dataKey="activeRoles" name="Roles activos" fill={BLUE} radius={[3, 3, 0, 0]} maxBarSize={28} />
                  <Line yAxisId="right" type="monotone" dataKey="fte" name="FTE" stroke={AMBER} strokeWidth={2.5} dot={{ r: 3 }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Headcount Gantt-like timeline */}
        <Card className="border-blue-100 overflow-hidden mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Timeline de contratación por rol</CardTitle>
            <CardDescription>Cuándo entra cada rol al equipo (click en una semana para ver el detalle)</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <div className="min-w-[800px]">
                <div className="grid grid-cols-[180px_repeat(12,1fr)] border-b" style={{ background: SAND }}>
                  <div className="px-3 py-2 text-xs font-semibold text-muted-foreground">Rol</div>
                  {Array.from({ length: 12 }, (_, i) => (
                    <div
                      key={i}
                      onClick={() => setSelectedWeek(i + 1)}
                      className={`px-1 py-2 text-center text-[10px] font-semibold cursor-pointer transition-colors ${selectedWeek === i + 1 ? 'text-white' : 'text-muted-foreground hover:bg-blue-100'}`}
                      style={selectedWeek === i + 1 ? { background: BLUE } : {}}
                    >
                      S{i + 1}
                    </div>
                  ))}
                </div>
                {ROLES.map((r) => {
                  const color = CATEGORY_COLORS[r.category] ?? GRAPHITE
                  const isActive = (w: number) => r.hireWeek <= w && (!r.endWeek || r.endWeek >= w)
                  const isHiredThisWeek = r.hireWeek === selectedWeek
                  return (
                    <div key={r.id} className="grid grid-cols-[180px_repeat(12,1fr)] border-b last:border-0 items-center min-h-[36px] hover:bg-blue-50/30">
                      <div className="px-3 py-1.5 text-xs flex items-center gap-1.5">
                        <span className="size-2 rounded-full shrink-0" style={{ background: color }} />
                        <div className="min-w-0">
                          <p className="font-medium truncate" style={{ color: INK }}>{r.role}</p>
                          <p className="text-[9px] text-muted-foreground">{r.category} · {r.weeklyHours}h/sem</p>
                        </div>
                      </div>
                      {Array.from({ length: 12 }, (_, i) => {
                        const w = i + 1
                        const active = isActive(w)
                        const hiredThisWeek = r.hireWeek === w
                        return (
                          <div key={i} onClick={() => setSelectedWeek(w)} className={`px-0.5 py-1.5 cursor-pointer ${selectedWeek === w ? 'bg-blue-50/40' : ''}`}>
                            {active && (
                              <div
                                className={`h-4 rounded-sm transition-all hover:h-5 ${hiredThisWeek ? 'ring-2 ring-amber-400' : ''}`}
                                style={{ background: color }}
                                title={`${r.role} · S${w}${hiredThisWeek ? ' (contratación)' : ''}`}
                              />
                            )}
                          </div>
                        )
                      })}
                    </div>
                  )
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Week detail */}
        <Card className="border-blue-200">
          <CardContent className="p-5 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <Badge variant="outline" className="mb-1.5" style={{ borderColor: BLUE, color: BLUE_DARK }}>Semana {week.week}</Badge>
                <h3 className="text-xl font-bold" style={{ color: INK }}>{week.activeRoles} roles activos · {week.fte} FTE</h3>
                <p className="text-sm text-muted-foreground">Costo mensual de personal: ${week.monthlyCost.toLocaleString()}</p>
              </div>
              {week.newHires.length > 0 && (
                <div className="rounded-xl p-3" style={{ background: AMBER_LIGHT }}>
                  <p className="text-[10px] font-bold uppercase tracking-wide mb-1" style={{ color: INK }}>Nuevas contrataciones</p>
                  {week.newHires.map((h) => (
                    <p key={h.roleId} className="text-xs font-semibold" style={{ color: INK }}>+ {h.role}</p>
                  ))}
                </div>
              )}
            </div>

            {/* Active roles this week */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {ROLES.filter((r) => r.hireWeek <= week.week && (!r.endWeek || r.endWeek >= week.week)).map((r) => {
                const color = CATEGORY_COLORS[r.category] ?? GRAPHITE
                const weekIndex = week.week - r.hireWeek
                const productivity = r.rampCurve[Math.min(weekIndex, r.rampCurve.length - 1)] * 100
                return (
                  <div key={r.id} className="rounded-xl p-3" style={{ background: SAND, border: `2px solid ${color}30` }}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="size-2 rounded-full shrink-0" style={{ background: color }} />
                      <p className="font-semibold text-xs flex-1 truncate" style={{ color: INK }}>{r.role}</p>
                    </div>
                    <p className="text-[10px] text-muted-foreground mb-1.5">{r.modality} · {r.weeklyHours}h/sem · ${r.monthlyCostUsd}/mes</p>
                    <div className="flex items-center gap-1.5">
                      <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: '#e5e7eb' }}>
                        <div className="h-full rounded-full transition-all" style={{ width: `${productivity}%`, background: color }} />
                      </div>
                      <span className="text-[10px] font-mono font-bold" style={{ color }}>{Math.round(productivity)}%</span>
                    </div>
                    <p className="text-[9px] text-muted-foreground mt-1">Productividad (rampa Sem {weekIndex + 1})</p>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ===================== ROLES DETAIL ===================== */}
      <section className="w-full" style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionTitle kicker="Roles y perfiles" title="10 especialistas necesarios" desc="Cada rol con responsabilidades, skills, proceso de contratación y curva de rampa." />
          <div className="grid lg:grid-cols-2 gap-4">
            {ROLES.map((r) => {
              const color = CATEGORY_COLORS[r.category] ?? GRAPHITE
              return (
                <motion.div key={r.id} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-20px' }}>
                  <Card className="border-blue-100 h-full">
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="size-3 rounded-full shrink-0" style={{ background: color }} />
                          <h3 className="font-bold text-base" style={{ color: INK }}>{r.role}</h3>
                        </div>
                        <Badge variant="outline" className="text-[10px] shrink-0" style={{ borderColor: color, color }}>Sem {r.hireWeek}+</Badge>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        <Badge variant="outline" className="text-[10px]">{r.category}</Badge>
                        <Badge variant="outline" className="text-[10px]">{r.modality}</Badge>
                        <Badge variant="outline" className="text-[10px]">{r.weeklyHours}h/sem</Badge>
                        <Badge variant="outline" className="text-[10px] font-mono">${r.monthlyCostUsd}/mes</Badge>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div>
                          <p className="font-semibold text-[10px] uppercase tracking-wide text-muted-foreground mb-0.5">Responsabilidades</p>
                          <ul className="space-y-0.5">
                            {r.responsibilities.map((x) => (
                              <li key={x} className="flex items-start gap-1.5" style={{ color: INK }}>
                                <CheckCircle2 className="size-3 mt-0.5 shrink-0" style={{ color: EMERALD }} />
                                {x}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-[10px] uppercase tracking-wide text-muted-foreground mb-0.5">Skills</p>
                          <div className="flex flex-wrap gap-1">
                            {r.skills.map((s) => (
                              <span key={s} className="text-[10px] px-1.5 py-0.5 rounded bg-blue-50" style={{ color: BLUE_DARK }}>{s}</span>
                            ))}
                          </div>
                        </div>
                        <Separator className="my-2" />
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <p className="font-semibold text-[10px] uppercase tracking-wide text-muted-foreground mb-0.5">Contratación</p>
                            <p style={{ color: INK }}>{r.recruitment.source}</p>
                            <p className="text-muted-foreground">Lead time: {r.recruitment.leadTimeWeeks} sem · {r.recruitment.interviewRounds} rondas</p>
                          </div>
                          <div>
                            <p className="font-semibold text-[10px] uppercase tracking-wide text-muted-foreground mb-0.5">Onboarding</p>
                            <p style={{ color: INK }}>{r.onboarding.durationWeeks} sem · mentor: {r.onboarding.mentor}</p>
                            <p className="text-muted-foreground">1er entregable: {r.onboarding.firstDeliverable}</p>
                          </div>
                        </div>
                        <div className="text-[10px] text-muted-foreground italic">Test task: {r.recruitment.testTask}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===================== RECRUITMENT FUNNEL ===================== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle kicker="Captación remota" title="Funnel de contratación" desc="De 20 candidatos a 1 contratación en 12-18 días. Cada etapa tiene tools específicas." />

        {/* Funnel */}
        <div className="space-y-2 mb-6">
          {RECRUITMENT_FUNNEL.map((s, i) => {
            const widthPct = (s.target / 20) * 100
            return (
              <motion.div key={s.stage} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-center gap-3">
                <div className="w-28 shrink-0 text-right">
                  <p className="text-xs font-bold" style={{ color: BLUE_DARK }}>{s.stage}</p>
                  <p className="text-[10px] text-muted-foreground">{s.timeDays} días</p>
                </div>
                <div className="flex-1 relative">
                  <div className="h-12 rounded-lg flex items-center px-3 transition-all" style={{
                    width: `${Math.max(widthPct, 15)}%`,
                    background: `linear-gradient(90deg, ${BLUE}, ${BLUE_LIGHT})`,
                    opacity: 0.85 + (i * 0.02),
                  }}>
                    <span className="text-white text-sm font-bold">{s.target} candidatos</span>
                  </div>
                </div>
                <div className="w-56 shrink-0 hidden md:block">
                  <p className="text-xs" style={{ color: INK }}>{s.action}</p>
                  <p className="text-[10px] text-muted-foreground">Conv: {Math.round(s.conversion * 100)}% · {s.tools}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Remote captation channels */}
        <Card className="border-blue-100">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2"><Laptop className="size-4" style={{ color: AMBER }} /> Canales de captación remota</CardTitle>
            <CardDescription>Dónde encontrar talento LATAM home office</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left text-xs text-muted-foreground">
                    <th className="px-5 py-3 font-medium">Canal</th>
                    <th className="px-5 py-3 font-medium">Mejor para</th>
                    <th className="px-5 py-3 font-medium">Costo</th>
                    <th className="px-5 py-3 font-medium">Tiempo contratación</th>
                    <th className="px-5 py-3 font-medium">Calidad</th>
                  </tr>
                </thead>
                <tbody>
                  {REMOTE_CAPTATION.map((c) => (
                    <tr key={c.channel} className="border-b last:border-0 hover:bg-blue-50/30">
                      <td className="px-5 py-3 font-semibold align-top" style={{ color: INK }}>{c.channel}</td>
                      <td className="px-5 py-3 align-top text-muted-foreground text-xs">{c.bestFor}</td>
                      <td className="px-5 py-3 align-top text-xs font-mono">{c.cost}</td>
                      <td className="px-5 py-3 align-top text-xs">{c.avgTimeToHire}</td>
                      <td className="px-5 py-3 align-top"><Badge variant="outline" className="text-[10px]">{c.quality}</Badge></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ===================== ONBOARDING & TRAINING ===================== */}
      <section className="w-full" style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionTitle kicker="Capacitación" title="Onboarding y entrenamiento" desc="Proceso de 4 semanas para llevar a un nuevo hire del 0% al 100% de productividad." />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <OnboardingCard phase="Día 1" color={BLUE} items={ONBOARDING_PLAN.day1} />
            <OnboardingCard phase="Días 2-5" color={BLUE_LIGHT} items={ONBOARDING_PLAN.day2to5} />
            <OnboardingCard phase="Semana 2" color={AMBER} items={ONBOARDING_PLAN.week2} />
            <OnboardingCard phase="Semanas 3-4" color={EMERALD} items={ONBOARDING_PLAN.week3to4} />
          </div>

          {/* Training topics */}
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2"><FileText className="size-4" style={{ color: BLUE }} /> Temas de capacitación obligatoria</CardTitle>
              <CardDescription>Todos los hires deben completar estos módulos en su 1ra semana</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-left text-xs text-muted-foreground">
                      <th className="px-5 py-3 font-medium">Tema</th>
                      <th className="px-5 py-3 font-medium">Duración</th>
                      <th className="px-5 py-3 font-medium">Audiencia</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ONBOARDING_PLAN.trainingTopics.map((t) => (
                      <tr key={t.topic} className="border-b last:border-0 hover:bg-blue-50/30">
                        <td className="px-5 py-3 align-top" style={{ color: INK }}>{t.topic}</td>
                        <td className="px-5 py-3 align-top font-mono text-xs">{t.duration}</td>
                        <td className="px-5 py-3 align-top"><Badge variant="outline" className="text-[10px]">{t.audience}</Badge></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===================== AI INTEGRATIONS ===================== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle kicker="Inteligencia artificial" title="Integraciones y automatizaciones de IA" desc="8 integraciones de IA sobre z-ai-web-dev-sdk que automatizan el core del producto y soporte." />

        <div className="grid lg:grid-cols-2 gap-4 mb-6">
          {AI_INTEGRATIONS.map((ai) => (
            <motion.div key={ai.name} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-20px' }}>
              <Card className="border-blue-100 h-full">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <div className="size-8 rounded-lg grid place-items-center shrink-0" style={{ background: PURPLE + '20' }}>
                        <Bot className="size-4" style={{ color: PURPLE }} />
                      </div>
                      <h3 className="font-bold text-sm" style={{ color: INK }}>{ai.name}</h3>
                    </div>
                    <Badge className="border-0 text-amber-950 shrink-0" style={{ background: AMBER_LIGHT }}>${ai.monthlyCost}/mes</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2 leading-relaxed">{ai.purpose}</p>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div><span className="text-muted-foreground">Provider:</span> <span style={{ color: INK }}>{ai.provider}</span></div>
                    <div><span className="text-muted-foreground">Modelos:</span> <span style={{ color: INK }}>{ai.models}</span></div>
                    <div><span className="text-muted-foreground">Costo/use:</span> <span className="font-mono" style={{ color: INK }}>${ai.costPerUse}</span></div>
                    <div><span className="text-muted-foreground">Volumen/mes:</span> <span className="font-mono" style={{ color: INK }}>{ai.monthlyVolume.toLocaleString()}</span></div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-dashed border-blue-100">
                    <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Nivel de automatización</p>
                    <p className="text-xs font-medium" style={{ color: PURPLE }}>{ai.automationLevel}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* AI cost summary */}
        <Card className="border-purple-200" style={{ background: '#faf5ff' }}>
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-3">
              <Cpu className="size-5" style={{ color: PURPLE }} />
              <h3 className="font-bold text-base" style={{ color: INK }}>Costo total de IA: ${AI_INTEGRATIONS.reduce((s, a) => s + a.monthlyCost, 0)}/mes</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Equivalente a <strong style={{ color: INK }}>${(AI_INTEGRATIONS.reduce((s, a) => s + a.monthlyCost, 0) / 65).toFixed(2)}/cliente/mes</strong> a 65 clientes activos.
              Esto representa el costo variable principal del producto y mantiene márgenes del 85%.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* ===================== AUTOMATIONS ===================== */}
      <section className="w-full" style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionTitle kicker="Automatizaciones" title="10 workflows automatizados" desc="Automatizaciones que ahorran horas-hombre semanales y reducen error humano." />

          <div className="grid lg:grid-cols-2 gap-3 mb-6">
            {AUTOMATIONS.map((a, i) => (
              <motion.div key={a.name} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-10px' }} transition={{ delay: i * 0.03 }}>
                <Card className="border-blue-100 h-full">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="size-8 rounded-lg grid place-items-center shrink-0" style={{ background: EMERALD + '20' }}>
                        <Zap className="size-4" style={{ color: EMERALD }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm mb-1" style={{ color: INK }}>{a.name}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed mb-2">{a.action}</p>
                        <div className="flex flex-wrap items-center gap-1.5 text-[10px]">
                          <Badge variant="outline" className="text-[10px]">Trigger: {a.trigger}</Badge>
                          <Badge variant="outline" className="text-[10px]">{a.tool}</Badge>
                          <Badge className="border-0 text-emerald-900" style={{ background: '#d1fae5' }}>Ahorra {a.saves}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Automation maturity chart */}
          <Card className="border-blue-100">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2"><TrendingUp className="size-4" style={{ color: EMERALD }} /> Madurez de automatización por semana</CardTitle>
              <CardDescription>% de trabajo automatizado vs manual. Meta final: 85%</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[240px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={AUTOMATION_MATURITY} margin={{ top: 8, right: 8, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                    <XAxis dataKey="week" tick={{ fontSize: 11, fill: GRAPHITE }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: GRAPHITE }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
                    <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e5e7eb', fontSize: 12 }} formatter={(v: number) => [`${v}%`, '']} />
                    <Legend wrapperStyle={{ fontSize: 11 }} />
                    <Bar dataKey="automation" name="Automatizado" stackId="a" fill={EMERALD} radius={[0, 0, 0, 0]} maxBarSize={32} />
                    <Bar dataKey="manual" name="Manual" stackId="a" fill={SAND} radius={[3, 3, 0, 0]} maxBarSize={32} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===================== TOOLS & SOFTWARE ===================== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle kicker="Herramientas y SaaS" title="Stack de software" desc="22 herramientas SaaS organizadas por categoría. Política BYOD: cada uno usa su laptop." />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {Object.keys(TOOL_CAT_COLORS).map((cat) => {
            const tools = TOOLS.filter((t) => t.category === cat)
            if (tools.length === 0) return null
            const color = TOOL_CAT_COLORS[cat]
            return (
              <Card key={cat} className="border-blue-100 h-fit">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <span className="size-2.5 rounded-full" style={{ background: color }} />
                    {cat}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {tools.map((t) => (
                    <div key={t.name} className="rounded-lg p-2.5" style={{ background: SAND }}>
                      <div className="flex items-start justify-between gap-2">
                        <p className="font-semibold text-xs" style={{ color: INK }}>{t.name}</p>
                        <span className="text-[10px] font-mono shrink-0" style={{ color: BLUE_DARK }}>
                          ${t.costUsdMonth}{t.perUser ? '/u' : ''}/mes
                        </span>
                      </div>
                      <p className="text-[10px] text-muted-foreground mt-0.5 leading-relaxed">{t.purpose}</p>
                      <p className="text-[9px] text-muted-foreground mt-1">Activa desde Sem {t.startWeek}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card className="mt-5 border-blue-100">
          <CardContent className="p-4 flex items-center gap-3">
            <Laptop className="size-5 shrink-0" style={{ color: BLUE }} />
            <p className="text-sm text-muted-foreground">
              <strong style={{ color: INK }}>Política BYOD (Bring Your Own Device):</strong> cada freelance/contractor usa su propia laptop.
              La empresa provee licencias de software. Inversión única en hardware: MacBook Air M2 + iPhone 13 (founder, ya existentes) + setup streaming $150.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* ===================== CLOUD & INFRASTRUCTURE ===================== */}
      <section className="w-full" style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionTitle kicker="Infraestructura" title="Cloud, IA y local" desc="Inversión en cloud (recurring), IA APIs (variable por uso) y hardware local (one-time)." />

          <div className="grid lg:grid-cols-3 gap-4 mb-6">
            {/* Cloud */}
            <Card className="border-blue-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2"><Cloud className="size-4" style={{ color: BLUE }} /> Cloud SaaS</CardTitle>
                <CardDescription>Recurring mensual</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {INFRASTRUCTURE.cloud.map((c) => (
                  <div key={c.service} className="rounded-lg p-2.5" style={{ background: '#ffffff' }}>
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-semibold text-xs" style={{ color: INK }}>{c.service}</p>
                      <span className="text-[10px] font-mono shrink-0" style={{ color: BLUE_DARK }}>${c.costMonth}/mes</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{c.purpose}</p>
                    <p className="text-[9px] mt-1" style={{ color: EMERALD }}>Escala: {c.scale}</p>
                  </div>
                ))}
                <div className="rounded-lg p-2.5 flex items-center justify-between" style={{ background: BLUE, color: 'white' }}>
                  <span className="text-xs font-bold">Total cloud</span>
                  <span className="text-sm font-mono font-bold">${INFRASTRUCTURE.cloud.reduce((s, c) => s + c.costMonth, 0)}/mes</span>
                </div>
              </CardContent>
            </Card>

            {/* AI */}
            <Card className="border-purple-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2"><Cpu className="size-4" style={{ color: PURPLE }} /> APIs de IA</CardTitle>
                <CardDescription>Variable por uso</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {INFRASTRUCTURE.ai.map((a) => (
                  <div key={a.service} className="rounded-lg p-2.5" style={{ background: '#ffffff' }}>
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-semibold text-xs" style={{ color: INK }}>{a.service}</p>
                      <span className="text-[10px] font-mono shrink-0" style={{ color: PURPLE }}>${a.costMonth}/mes</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{a.purpose}</p>
                    <p className="text-[9px] mt-1" style={{ color: GRAPHITE }}>{a.scale}</p>
                  </div>
                ))}
                <div className="rounded-lg p-2.5 flex items-center justify-between" style={{ background: PURPLE, color: 'white' }}>
                  <span className="text-xs font-bold">Total IA</span>
                  <span className="text-sm font-mono font-bold">${INFRASTRUCTURE.ai.reduce((s, a) => s + a.costMonth, 0)}/mes</span>
                </div>
              </CardContent>
            </Card>

            {/* Local + Integrations */}
            <div className="space-y-4">
              <Card className="border-blue-100">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2"><Server className="size-4" style={{ color: AMBER }} /> Hardware local</CardTitle>
                  <CardDescription>One-time</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {INFRASTRUCTURE.local.map((l) => (
                    <div key={l.item} className="rounded-lg p-2.5" style={{ background: '#ffffff' }}>
                      <div className="flex items-start justify-between gap-2">
                        <p className="font-semibold text-xs" style={{ color: INK }}>{l.item}</p>
                        <span className="text-[10px] font-mono shrink-0" style={{ color: l.costOneTime > 0 ? AMBER : EMERALD }}>
                          {l.costOneTime > 0 ? `$${l.costOneTime}` : '$0 (BYOD)'}
                        </span>
                      </div>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{l.purpose}</p>
                      <p className="text-[9px] mt-0.5" style={{ color: GRAPHITE }}>{l.notes}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-blue-100">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2"><GitBranch className="size-4" style={{ color: EMERALD }} /> Integraciones</CardTitle>
                </CardHeader>
                <CardContent className="space-y-1.5">
                  {INFRASTRUCTURE.integrations.map((it) => (
                    <div key={it.name} className="text-xs">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-semibold" style={{ color: INK }}>{it.name}</span>
                        <span className="font-mono text-[10px]" style={{ color: it.costMonth > 0 ? AMBER : EMERALD }}>
                          {it.costMonth > 0 ? `$${it.costMonth}/mes` : 'Gratis'}
                        </span>
                      </div>
                      <p className="text-[10px] text-muted-foreground">{it.purpose}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== WEEKLY COSTS BREAKDOWN ===================== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle kicker="Costos operativos" title="Desglose semanal de costos" desc="Personal, herramientas, cloud, IA, integraciones y ads. Coherente con el modelo financiero del plan de negocio." />

        <Card className="border-blue-100 mb-5">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2"><DollarSign className="size-4" style={{ color: AMBER }} /> Costos por categoría / semana</CardTitle>
            <CardDescription>Stacked bars: composición del costo semanal</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={COSTS_BY_WEEK} margin={{ top: 8, right: 8, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                  <XAxis dataKey="week" tick={{ fontSize: 11, fill: GRAPHITE }} axisLine={false} tickLine={false} tickFormatter={(v) => `S${v}`} />
                  <YAxis tick={{ fontSize: 11, fill: GRAPHITE }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}`} />
                  <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e5e7eb', fontSize: 12 }} formatter={(v: number) => [`$${v}`, '']} />
                  <Legend wrapperStyle={{ fontSize: 11 }} />
                  <Bar dataKey="personnel" name="Personal" stackId="a" fill={BLUE} maxBarSize={32} />
                  <Bar dataKey="ai" name="IA" stackId="a" fill={PURPLE} maxBarSize={32} />
                  <Bar dataKey="tools" name="Herramientas" stackId="a" fill={BLUE_LIGHT} maxBarSize={32} />
                  <Bar dataKey="cloud" name="Cloud" stackId="a" fill={INK} maxBarSize={32} />
                  <Bar dataKey="ads" name="Ads" stackId="a" fill={ROSE} maxBarSize={32} />
                  <Bar dataKey="integrations" name="Integraciones" stackId="a" fill={EMERALD} radius={[3, 3, 0, 0]} maxBarSize={32} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Costo acumulado del trimestre</CardTitle>
            <CardDescription>Crecimiento del gasto total semana a semana</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={COSTS_BY_WEEK} margin={{ top: 8, right: 8, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="costGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={AMBER} stopOpacity={0.35} />
                      <stop offset="100%" stopColor={AMBER} stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                  <XAxis dataKey="week" tick={{ fontSize: 11, fill: GRAPHITE }} axisLine={false} tickLine={false} tickFormatter={(v) => `S${v}`} />
                  <YAxis tick={{ fontSize: 11, fill: GRAPHITE }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
                  <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e5e7eb', fontSize: 12 }} formatter={(v: number) => [`$${v.toLocaleString()}`, '']} />
                  <Area type="monotone" dataKey="cumulative" name="Costo acumulado" stroke={AMBER} strokeWidth={2.5} fill="url(#costGrad)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Cost table */}
        <Card className="mt-5 border-blue-100">
          <CardHeader>
            <CardTitle className="text-base">Tabla de costos semanales</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto max-h-[420px] overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-white z-10">
                  <tr className="border-b text-left text-xs text-muted-foreground">
                    <th className="px-4 py-3 font-medium">Sem</th>
                    <th className="px-4 py-3 font-medium text-right">Personal</th>
                    <th className="px-4 py-3 font-medium text-right">IA</th>
                    <th className="px-4 py-3 font-medium text-right">Tools</th>
                    <th className="px-4 py-3 font-medium text-right">Cloud</th>
                    <th className="px-4 py-3 font-medium text-right">Ads</th>
                    <th className="px-4 py-3 font-medium text-right">Integr.</th>
                    <th className="px-4 py-3 font-medium text-right">Total/sem</th>
                    <th className="px-4 py-3 font-medium text-right">Acum.</th>
                  </tr>
                </thead>
                <tbody>
                  {COSTS_BY_WEEK.map((c) => (
                    <tr key={c.week} className="border-b last:border-0 hover:bg-blue-50/30">
                      <td className="px-4 py-2.5 font-semibold">S{c.week}</td>
                      <td className="px-4 py-2.5 text-right font-mono">${c.personnel.toFixed(0)}</td>
                      <td className="px-4 py-2.5 text-right font-mono">${c.ai.toFixed(0)}</td>
                      <td className="px-4 py-2.5 text-right font-mono">${c.tools.toFixed(0)}</td>
                      <td className="px-4 py-2.5 text-right font-mono">${c.cloud.toFixed(0)}</td>
                      <td className="px-4 py-2.5 text-right font-mono">${c.ads.toFixed(0)}</td>
                      <td className="px-4 py-2.5 text-right font-mono">${c.integrations.toFixed(0)}</td>
                      <td className="px-4 py-2.5 text-right font-mono font-bold" style={{ color: BLUE_DARK }}>${c.total.toFixed(0)}</td>
                      <td className="px-4 py-2.5 text-right font-mono font-bold" style={{ color: AMBER }}>${c.cumulative.toFixed(0)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ===================== INVESTMENT TIMELINE ===================== */}
      <section className="w-full" style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionTitle kicker="Inversiones" title="Timeline de inversiones" desc="Cuándo entra cada gasto (one-time + recurring). Necesita flujo de caja para no quedarse sin cash." />

          <div className="space-y-2">
            {INVESTMENT_TIMELINE.map((inv, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-10px' }}
                transition={{ delay: i * 0.03 }}
                className="rounded-xl border border-blue-100 bg-white p-3.5 flex items-center gap-3"
              >
                <div className="w-16 shrink-0 text-center">
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Semana</p>
                  <p className="text-lg font-bold" style={{ color: BLUE }}>{inv.week}</p>
                </div>
                <div className="w-1 self-stretch rounded-full shrink-0" style={{ background: inv.type === 'One-time' ? ROSE : BLUE }} />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                    <Badge variant="outline" className="text-[10px]" style={{ borderColor: inv.type === 'One-time' ? ROSE : BLUE, color: inv.type === 'One-time' ? ROSE : BLUE }}>
                      {inv.type}
                    </Badge>
                    <p className="font-semibold text-sm" style={{ color: INK }}>{inv.item}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">{inv.purpose}</p>
                </div>
                <span className="font-mono font-bold text-base shrink-0" style={{ color: inv.type === 'One-time' ? ROSE : BLUE_DARK }}>
                  ${inv.amount.toLocaleString()}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Cash flow warning */}
          <Card className="mt-5 border-amber-200" style={{ background: '#fffbeb' }}>
            <CardContent className="p-4 flex items-start gap-3">
              <Sparkles className="size-5 shrink-0 mt-0.5" style={{ color: AMBER }} />
              <div className="text-sm">
                <p className="font-semibold mb-1" style={{ color: INK }}>Nota de flujo de caja</p>
                <p className="text-muted-foreground leading-relaxed">
                  El pico de inversión en personal ocurre entre Sem 5-9 con 7-9 roles activos.
                  El plan de negocio proyecta breakeven operativo en Mes 4-5, pero se necesita
                  <strong style={{ color: INK }}> reservar ~$8,000 working capital</strong> para cubrir el déficit
                  hasta que los ingresos alcancen los costos. Recomendación: el seed inicial de $3,000 + $5,000 de
                  runway personal del founder.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===================== CLOSING ===================== */}
      <section className="mx-auto max-w-6xl w-full px-4 sm:px-6 py-14 sm:py-20">
        <Card className="overflow-hidden border-0" style={{ background: `linear-gradient(135deg, ${BLUE_DARK}, ${INK})` }}>
          <CardContent className="p-8 sm:p-12 text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Wrench className="size-10 mx-auto mb-4" style={{ color: AMBER_LIGHT }} />
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                10 personas, 22 herramientas, 8 IAs — coherentemente orquestadas
              </h2>
              <p className="text-white/75 mt-3 max-w-2xl mx-auto">
                Este plan operativo traduce el plan de negocio (65 clientes, $4.9K MRR) y el plan de marketing
                (12 semanas) en headcount, infraestructura y automatizaciones concretas. Cada rol, herramienta y
                costo está justificado por una necesidad del plan anterior.
              </p>
              <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
                <ClosingStat value="10" label="Roles" />
                <ClosingStat value="6.4" label="FTEs S12" />
                <ClosingStat value={`$${(COSTS_BY_WEEK[11].total * 4).toFixed(0)}`} label="Costo mes S12" />
                <ClosingStat value="85%" label="Automatizado" />
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t" style={{ background: INK, borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 text-center">
          <p className="text-white font-semibold text-sm">FichoX · Plan Operativo Q3 2025</p>
          <p className="text-white/50 text-xs mt-1">{OPS_QUARTER.startDate} → {OPS_QUARTER.endDate} · Coherente con Plan de Negocio + Plan de Marketing</p>
        </div>
      </footer>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------
function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl bg-white/10 ring-1 ring-white/20 px-3 py-2.5">
      <p className="text-xl sm:text-2xl font-bold text-white leading-none">{value}</p>
      <p className="text-[11px] text-white/60 mt-1">{label}</p>
    </div>
  )
}

function ClosingStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl bg-white/10 ring-1 ring-white/20 px-3 py-2.5">
      <p className="text-xl font-bold text-white leading-none">{value}</p>
      <p className="text-[11px] text-white/60 mt-1">{label}</p>
    </div>
  )
}

function OnboardingCard({ phase, color, items }: { phase: string; color: string; items: string[] }) {
  return (
    <Card className="border-blue-100 h-full">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="size-6 rounded-full grid place-items-center text-[10px] font-bold text-white shrink-0" style={{ background: color }}>{phase.charAt(0)}</span>
          <h3 className="font-bold text-sm" style={{ color: INK }}>{phase}</h3>
        </div>
        <ul className="space-y-1.5">
          {items.map((it, i) => (
            <li key={i} className="flex items-start gap-1.5 text-xs" style={{ color: INK }}>
              <CheckCircle2 className="size-3 mt-0.5 shrink-0" style={{ color }} />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
