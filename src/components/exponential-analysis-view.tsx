'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Zap, TrendingUp, TrendingDown, AlertTriangle, Target, Users, DollarSign,
  CheckCircle2, XCircle, Sparkles, Rocket, Scale, ShieldAlert, GitBranch,
  Award, BarChart3, Lightbulb, ArrowRight, Activity, Flame, Share2,
} from 'lucide-react'
import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine, Legend, Cell, Area, AreaChart,
} from 'recharts'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  EXPO_ANALYSIS, PRICING_COMPARISON, PRICING_DISCLAIMER, MECHANICS_ANALYSIS, VIRAL_MODEL,
  K_PROJECTION_BY_STAGE, VIRAL_TIERS_DETAIL, MILESTONES_DETAIL, SHARE_TEMPLATES_DETAIL,
  VE_RISKS, SCENARIOS, COMBINED_CUSTOMER_TRAJECTORY, COMBINED_REVENUE,
  COMBINED_CUMULATIVE, SCENARIO_COMPARISON, PLAN_IMPACTS, RECOMMENDATIONS,
} from '@/lib/exponential-data'

const INK = '#0b1220'
const BLUE_DARK = '#1e3a8a'
const BLUE = '#1d4ed8'
const BLUE_LIGHT = '#3b82f6'
const AMBER = '#f59e0b'
const AMBER_LIGHT = '#fbbf24'
const SAND = '#f7f5f0'
const GRAPHITE = '#475569'
const EMERALD = '#059669'
const ROSE = '#e11d48'
const PURPLE = '#8b5cf6'

const SCENARIO_COLORS = {
  optimistic: EMERALD,
  pragmatic: BLUE,
  pessimistic: ROSE,
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

export function ExponentialAnalysisView() {
  const [selectedScenario, setSelectedScenario] = useState<number>(1) // pragmatic by default

  return (
    <div className="bg-white">
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${INK} 0%, ${BLUE_DARK} 100%)` }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="absolute -top-24 -right-24 size-72 rounded-full blur-3xl opacity-30" style={{ background: AMBER }} />
        <div className="absolute -bottom-32 -left-20 size-80 rounded-full blur-3xl opacity-20" style={{ background: EMERALD }} />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <Badge className="mb-5 border-0 text-amber-950 gap-1.5" style={{ background: AMBER_LIGHT }}>
              <Flame className="size-3" /> {EXPO_ANALYSIS.name}
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
              Análisis Exponencial
              <span className="block mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold" style={{ color: AMBER_LIGHT }}>
                3 escenarios · realista para mercado VE
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
              {EXPO_ANALYSIS.summary}
            </p>

            <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
              <HeroStat value="3" label="Escenarios" />
              <HeroStat value="$55" label="Nuevo precio/mes" />
              <HeroStat value="K>0.9" label="Target viral alcanzable" />
              <HeroStat value="23-34" label="Breakeven clientes" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== PRICING TIERS ===================== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle
          kicker="Pricing"
          title="Tiers de suscripción"
          desc="4 tiers: Trial freemium, mensual, anual (más popular) y lifetime con escasez (primeros 50). Strategy: equilibrio volumen + margen con viralidad."
        />

        <Card className="border-blue-100 overflow-hidden mb-6">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left text-xs text-muted-foreground" style={{ background: SAND }}>
                    <th className="px-5 py-3 font-medium">Tier</th>
                    <th className="px-5 py-3 font-medium">Precio</th>
                    <th className="px-5 py-3 font-medium text-right">$/mes equivalente</th>
                    <th className="px-5 py-3 font-medium">Nota</th>
                  </tr>
                </thead>
                <tbody>
                  {PRICING_COMPARISON.map((p) => (
                    <tr key={p.tier} className="border-b last:border-0 hover:bg-blue-50/30">
                      <td className="px-5 py-3 font-semibold align-top" style={{ color: INK }}>{p.tier}</td>
                      <td className="px-5 py-3 align-top text-xs font-semibold" style={{ color: BLUE_DARK }}>{p.price}</td>
                      <td className="px-5 py-3 align-top text-right font-mono text-xs font-bold" style={{ color: INK }}>{p.monthly}</td>
                      <td className="px-5 py-3 align-top text-xs text-muted-foreground">{p.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="border-amber-200" style={{ background: '#fffbeb' }}>
          <CardContent className="p-4 flex items-start gap-3">
            <Lightbulb className="size-5 shrink-0 mt-0.5" style={{ color: AMBER }} />
            <div className="text-sm">
              <p className="font-semibold mb-1" style={{ color: INK }}>Insight clave del pricing</p>
              <p className="text-muted-foreground leading-relaxed">
                ARPU blendado $34-46 según mix de tiers, manteniendo márgenes del 75-80%.
                <strong style={{ color: INK }}> Breakeven en 23-34 clientes</strong> — muy alcanzable,
                y el trial + referrals pueden llevar ahí rápido si K {'>'} 0.25. Pricing $55 equilibra volumen y margen.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Card className="border-rose-200 mt-4" style={{ background: '#fff5f5' }}>
          <CardContent className="p-4 flex items-start gap-3">
            <AlertTriangle className="size-5 shrink-0 mt-0.5" style={{ color: ROSE }} />
            <div className="text-sm">
              <p className="font-semibold mb-1" style={{ color: INK }}>{PRICING_DISCLAIMER.title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{PRICING_DISCLAIMER.text}</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ===================== MECHANICS ANALYSIS ===================== */}
      <section className="w-full" style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionTitle
            kicker="Mecánicas exponenciales"
            title="6 mecánicas analizadas"
            desc="Cada mecánica con su potencial exponencial, rationale, riesgo y métrica clave. El referral unlock es el motor principal."
          />

          <div className="grid lg:grid-cols-2 gap-4">
            {MECHANICS_ANALYSIS.map((m, i) => {
              const expColor = m.exponentialPotential === "Muy alto" ? EMERALD : m.exponentialPotential === "Alto" ? BLUE : m.exponentialPotential === "Medio" ? AMBER : GRAPHITE
              return (
                <motion.div key={m.mechanic} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-20px' }} transition={{ delay: i * 0.04 }}>
                  <Card className="border-blue-100 h-full">
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <Badge variant="outline" className="text-[10px] mb-1">{m.type}</Badge>
                          <h3 className="font-bold text-base" style={{ color: INK }}>{m.mechanic}</h3>
                        </div>
                        <Badge className="border-0 text-[10px] text-white shrink-0" style={{ background: expColor }}>
                          <Flame className="size-2.5 mr-0.5" /> {m.exponentialPotential}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2 leading-relaxed">{m.howItWorks}</p>
                      <div className="rounded-lg p-2.5 mb-2" style={{ background: '#ffffff' }}>
                        <p className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground mb-0.5">Rationale</p>
                        <p className="text-xs leading-relaxed" style={{ color: INK }}>{m.rationale}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div>
                          <p className="font-bold text-rose-600 mb-0.5">Riesgo</p>
                          <p className="text-muted-foreground">{m.risk}</p>
                        </div>
                        <div>
                          <p className="font-bold text-blue-600 mb-0.5">Métrica</p>
                          <p className="text-muted-foreground">{m.metric}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===================== VIRAL MODEL ===================== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle
          kicker="Modelo viral"
          title="Coeficiente K por escenario"
          desc="K = invitations per user × conversion rate. K>1 = exponencial real. Ningún escenario lo alcanza, pero el optimista se acerca."
        />

        <Card className="border-blue-100 mb-5">
          <CardContent className="p-5">
            <div className="rounded-xl p-4 mb-4 font-mono text-sm" style={{ background: INK, color: '#e5e7eb' }}>
              <div className="text-white/50 text-xs mb-1">Fórmula del crecimiento viral</div>
              <div className="text-white">K = invitations_per_user × conversion_rate</div>
              <div className="text-white/70 text-xs mt-1">Si K {'>'} 1: crecimiento exponencial real (cada user trae {'>'}1 nuevo)</div>
              <div className="text-white/70 text-xs">Si K = 0.5: cada 2 users traen 1 nuevo (crecimiento acelerado)</div>
              <div className="text-white/70 text-xs">Si K {'<'} 0.3: mayormente paid acquisition</div>
            </div>

            <div className="grid md:grid-cols-3 gap-3">
              {VIRAL_MODEL.scenarios.map((s, i) => {
                const color = i === 0 ? EMERALD : i === 1 ? BLUE : ROSE
                return (
                  <div key={s.name} className="rounded-xl p-4" style={{ background: color + '0d', border: `1px solid ${color}30` }}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-sm" style={{ color }}>{s.name}</h3>
                      <span className="text-2xl font-bold" style={{ color }}>K={s.k}</span>
                    </div>
                    <p className="text-xs mb-2" style={{ color: INK }}>{s.interpretation}</p>
                    <div className="grid grid-cols-2 gap-2 text-[11px] mb-2">
                      <div><span className="text-muted-foreground">Invitations/user:</span> <span className="font-mono font-bold" style={{ color: INK }}>{s.invitationsPerUser}</span></div>
                      <div><span className="text-muted-foreground">Conversión:</span> <span className="font-mono font-bold" style={{ color: INK }}>{(s.conversionRate * 100)}%</span></div>
                    </div>
                    <div className="text-[10px] text-muted-foreground">
                      <p className="font-semibold mb-0.5">Asumpciones:</p>
                      <ul className="space-y-0.5">
                        {s.assumptions.map((a) => <li key={a}>• {a}</li>)}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ===================== K PROJECTION BY STAGE ===================== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle
          kicker="Proyección de K por etapa"
          title="Cómo se construye K > 0.9"
          desc="Del backend cold run: cada mecánica viral añade palanca al coeficiente K. El backend está completo — la palanca restante es UX del frontend (botones un-clic, celebraciones, visualización de niveles)."
        />

        {/* K projection chart */}
        <Card className="border-blue-100 mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2"><TrendingUp className="size-4" style={{ color: EMERALD }} /> K acumulado por etapa de mecánica</CardTitle>
            <CardDescription>Target K {'>'} 0.9 alcanzable con adopción completa del frontend</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  data={K_PROJECTION_BY_STAGE.map(s => ({ stage: s.stage.split(' +')[0].substring(0, 25), kMid: s.kMid, kMin: parseFloat(s.kRange.split(' - ')[0]), kMax: parseFloat(s.kRange.split(' - ')[1]), color: s.color }))}
                  margin={{ top: 8, right: 8, left: -10, bottom: 40 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                  <XAxis dataKey="stage" tick={{ fontSize: 9, fill: GRAPHITE }} axisLine={false} tickLine={false} angle={-25} textAnchor="end" height={70} />
                  <YAxis domain={[0, 1]} tick={{ fontSize: 11, fill: GRAPHITE }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e5e7eb', fontSize: 12 }} formatter={(v: number) => [v.toFixed(3), 'K']} />
                  <ReferenceLine y={0.9} stroke={EMERALD} strokeWidth={2} strokeDasharray="5 5" label={{ value: 'Target K>0.9', position: 'right', fill: EMERALD, fontSize: 11 }} />
                  <Bar dataKey="kMid" name="K promedio" radius={[4, 4, 0, 0]} maxBarSize={50}>
                    {K_PROJECTION_BY_STAGE.map((s, i) => <Cell key={i} fill={s.color} />)}
                  </Bar>
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Stage detail table */}
        <Card className="border-blue-100 mb-6">
          <CardHeader><CardTitle className="text-base">Detalle por etapa</CardTitle></CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left text-xs text-muted-foreground">
                    <th className="px-5 py-3 font-medium">Etapa</th>
                    <th className="px-5 py-3 font-medium text-center">K range</th>
                    <th className="px-5 py-3 font-medium">Mecánica añadida</th>
                    <th className="px-5 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {K_PROJECTION_BY_STAGE.map((s, i) => (
                    <tr key={i} className="border-b last:border-0 hover:bg-blue-50/30">
                      <td className="px-5 py-3 align-top">
                        <span className="size-2.5 rounded-full inline-block mr-1.5" style={{ background: s.color }} />
                        <span className="font-semibold" style={{ color: INK }}>{s.stage}</span>
                      </td>
                      <td className="px-5 py-3 align-top text-center font-mono font-bold" style={{ color: s.color }}>{s.kRange}</td>
                      <td className="px-5 py-3 align-top text-xs text-muted-foreground">{s.mechanic}</td>
                      <td className="px-5 py-3 align-top"><Badge variant="outline" className="text-[10px]" style={{ borderColor: s.color, color: s.color }}>{s.status}</Badge></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Viral tiers + milestones + share templates */}
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Viral tiers */}
          <Card className="border-blue-100">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2"><Award className="size-4" style={{ color: PURPLE }} /> 6 viral tiers + 2 ambassador badges</CardTitle>
              <CardDescription>Escalado de recompensas + feature unlocks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-1.5">
              {VIRAL_TIERS_DETAIL.map((t) => (
                <div key={t.id} className="rounded-lg p-2 text-xs" style={{ background: SAND }}>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold" style={{ color: INK }}>{t.threshold}</span>
                    <span className="font-mono font-bold" style={{ color: EMERALD }}>{t.reward}</span>
                  </div>
                  <div className="flex items-center justify-between gap-2 mt-0.5 text-[10px] text-muted-foreground">
                    <span>Unlock: <span style={{ color: BLUE_DARK }}>{t.unlock}</span></span>
                    {t.ambassador !== "—" && <span>{t.ambassador}</span>}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Milestones */}
          <Card className="border-blue-100">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2"><Sparkles className="size-4" style={{ color: AMBER }} /> 7 milestones auto-recompensados</CardTitle>
              <CardDescription>Celebración visual al lograrlos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-1.5">
              {MILESTONES_DETAIL.map((m) => (
                <div key={m.id} className="rounded-lg p-2 flex items-center justify-between gap-2 text-xs" style={{ background: SAND }}>
                  <span style={{ color: INK }}>{m.trigger}</span>
                  <Badge className="border-0 text-[10px] text-amber-950" style={{ background: AMBER_LIGHT }}>{m.reward}</Badge>
                </div>
              ))}
              <p className="text-[10px] text-muted-foreground mt-2 italic">Total posible: +15 días por milestones</p>
            </CardContent>
          </Card>

          {/* Share templates */}
          <Card className="border-blue-100">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2"><Share2 className="size-4" style={{ color: BLUE }} /> 5 plantillas un-clic</CardTitle>
              <CardDescription>Friction mínima para compartir</CardDescription>
            </CardHeader>
            <CardContent className="space-y-1.5">
              {SHARE_TEMPLATES_DETAIL.map((t) => (
                <div key={t.platform} className="rounded-lg p-2 text-xs" style={{ background: SAND }}>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold" style={{ color: INK }}>{t.platform}</span>
                    <Badge variant="outline" className="text-[9px]">{t.friction}</Badge>
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{t.how}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===================== 3 SCENARIOS COMPARISON ===================== */}
      <section className="w-full" style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionTitle
            kicker="3 escenarios"
            title="Proyecciones optimista, pragmática y pesimista"
            desc="3 escenarios completos a 12 meses con diferentes asunciones de churn, CAC, K viral y trial conversion. El pragmático es la base recomendada."
          />

          {/* Scenario cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {SCENARIOS.map((s, i) => {
              const isSelected = selectedScenario === i
              return (
                <Card
                  key={s.id}
                  className={`cursor-pointer transition-all ${isSelected ? 'border-2 ring-2 ring-blue-200' : 'border'}`}
                  style={isSelected ? { borderColor: s.color } : {}}
                  onClick={() => setSelectedScenario(i)}
                >
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{s.emoji}</span>
                      <div>
                        <h3 className="font-bold text-base" style={{ color: s.color }}>{s.name}</h3>
                        <p className="text-[10px] text-muted-foreground">{s.tagline}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div><p className="text-[9px] text-muted-foreground">Clientes M12</p><p className="font-bold" style={{ color: INK }}>{s.totalCustomers}</p></div>
                      <div><p className="text-[9px] text-muted-foreground">Breakeven</p><p className="font-bold" style={{ color: s.breakevenMonth ? EMERALD : ROSE }}>{s.breakevenMonth ? `M${s.breakevenMonth}` : "Nunca"}</p></div>
                      <div><p className="text-[9px] text-muted-foreground">Net Q3</p><p className="font-bold" style={{ color: s.q3NetProfit >= 0 ? EMERALD : ROSE }}>{s.q3NetProfit >= 0 ? "+" : ""}${Math.round(s.q3NetProfit).toLocaleString()}</p></div>
                      <div><p className="text-[9px] text-muted-foreground">LTV:CAC</p><p className="font-bold" style={{ color: INK }}>{s.ltvCac.toFixed(1)}:1</p></div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Combined charts */}
          <div className="grid lg:grid-cols-2 gap-5 mb-5">
            <Card className="border-blue-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2"><Users className="size-4" style={{ color: BLUE }} /> Clientes por mes · 3 escenarios</CardTitle>
                <CardDescription>Comparación de trayectorias de clientes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[280px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={COMBINED_CUSTOMER_TRAJECTORY} margin={{ top: 8, right: 8, left: -10, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                      <XAxis dataKey="month" tick={{ fontSize: 11, fill: GRAPHITE }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 11, fill: GRAPHITE }} axisLine={false} tickLine={false} />
                      <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e5e7eb', fontSize: 12 }} />
                      <Legend wrapperStyle={{ fontSize: 11 }} />
                      <Line type="monotone" dataKey="optimista" name="🚀 Optimista" stroke={EMERALD} strokeWidth={2.5} dot={{ r: 2 }} />
                      <Line type="monotone" dataKey="pragmatica" name="⚖️ Pragmática" stroke={BLUE} strokeWidth={2.5} dot={{ r: 2 }} />
                      <Line type="monotone" dataKey="pesimista" name="⚠️ Pesimista" stroke={ROSE} strokeWidth={2.5} dot={{ r: 2 }} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2"><DollarSign className="size-4" style={{ color: EMERALD }} /> Revenue mensual · 3 escenarios</CardTitle>
                <CardDescription>Ingreso por mes en USD</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[280px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={COMBINED_REVENUE} margin={{ top: 8, right: 8, left: -10, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                      <XAxis dataKey="month" tick={{ fontSize: 11, fill: GRAPHITE }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 11, fill: GRAPHITE }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
                      <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e5e7eb', fontSize: 12 }} formatter={(v: number) => [`$${v.toLocaleString()}`, '']} />
                      <Legend wrapperStyle={{ fontSize: 11 }} />
                      <Line type="monotone" dataKey="optimista" name="🚀 Optimista" stroke={EMERALD} strokeWidth={2.5} dot={{ r: 2 }} />
                      <Line type="monotone" dataKey="pragmatica" name="⚖️ Pragmática" stroke={BLUE} strokeWidth={2.5} dot={{ r: 2 }} />
                      <Line type="monotone" dataKey="pesimista" name="⚠️ Pesimista" stroke={ROSE} strokeWidth={2.5} dot={{ r: 2 }} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-blue-100 mb-5">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2"><TrendingUp className="size-4" style={{ color: AMBER }} /> Neto acumulado · 3 escenarios</CardTitle>
              <CardDescription>Cruce de cero = breakeven acumulado (recupera seed + costos)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={COMBINED_CUMULATIVE} margin={{ top: 8, right: 8, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                    <XAxis dataKey="month" tick={{ fontSize: 11, fill: GRAPHITE }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: GRAPHITE }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
                    <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e5e7eb', fontSize: 12 }} formatter={(v: number) => [`$${v.toLocaleString()}`, '']} />
                    <ReferenceLine y={0} stroke="#9ca3af" strokeWidth={1.5} strokeDasharray="4 4" />
                    <Legend wrapperStyle={{ fontSize: 11 }} />
                    <Line type="monotone" dataKey="optimista" name="🚀 Optimista" stroke={EMERALD} strokeWidth={2.5} dot={{ r: 2 }} />
                    <Line type="monotone" dataKey="pragmatica" name="⚖️ Pragmática" stroke={BLUE} strokeWidth={2.5} dot={{ r: 2 }} />
                    <Line type="monotone" dataKey="pesimista" name="⚠️ Pesimista" stroke={ROSE} strokeWidth={2.5} dot={{ r: 2 }} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Scenario comparison table */}
          <Card className="border-blue-100">
            <CardHeader><CardTitle className="text-base">Comparación detallada de métricas</CardTitle></CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-left text-xs text-muted-foreground">
                      <th className="px-5 py-3 font-medium">Métrica</th>
                      <th className="px-5 py-3 font-medium text-center" style={{ color: EMERALD }}>🚀 Optimista</th>
                      <th className="px-5 py-3 font-medium text-center" style={{ color: BLUE }}>⚖️ Pragmática</th>
                      <th className="px-5 py-3 font-medium text-center" style={{ color: ROSE }}>⚠️ Pesimista</th>
                      <th className="px-5 py-3 font-medium">Nota</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SCENARIO_COMPARISON.map((row, i) => (
                      <tr key={row.metric} className={i % 2 ? 'bg-blue-50/20' : ''}>
                        <td className="px-5 py-2.5 font-medium align-top" style={{ color: INK }}>{row.metric}</td>
                        <td className="px-5 py-2.5 align-top text-center font-mono text-xs" style={{ color: EMERALD }}>{row.optimista}</td>
                        <td className="px-5 py-2.5 align-top text-center font-mono text-xs font-bold" style={{ color: BLUE }}>{row.pragmatica}</td>
                        <td className="px-5 py-2.5 align-top text-center font-mono text-xs" style={{ color: ROSE }}>{row.pesimista}</td>
                        <td className="px-5 py-2.5 align-top text-xs text-muted-foreground">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===================== SELECTED SCENARIO DETAIL ===================== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle
          kicker="Detalle del escenario seleccionado"
          title={`${SCENARIOS[selectedScenario].emoji} ${SCENARIOS[selectedScenario].name}`}
          desc={SCENARIOS[selectedScenario].tagline}
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
          <StatCard label="ARPU mensual" value={`$${SCENARIOS[selectedScenario].arpu.toFixed(2)}`} color={BLUE} />
          <StatCard label="Churn mensual" value={`${(SCENARIOS[selectedScenario].monthlyChurn * 100).toFixed(0)}%`} color={ROSE} />
          <StatCard label="CAC" value={`$${SCENARIOS[selectedScenario].cac}`} color={AMBER} />
          <StatCard label="K viral" value={SCENARIOS[selectedScenario].k.toFixed(2)} color={EMERALD} />
          <StatCard label="Clientes M12" value={`${SCENARIOS[selectedScenario].totalCustomers}`} color={BLUE_DARK} />
          <StatCard label="Breakeven ops" value={SCENARIOS[selectedScenario].breakevenMonth ? `M${SCENARIOS[selectedScenario].breakevenMonth}` : "Nunca"} color={SCENARIOS[selectedScenario].breakevenMonth ? EMERALD : ROSE} />
          <StatCard label="LTV : CAC" value={`${SCENARIOS[selectedScenario].ltvCac.toFixed(1)}:1`} color={PURPLE} />
          <StatCard label="Net Q3" value={`${SCENARIOS[selectedScenario].q3NetProfit >= 0 ? '+' : ''}$${Math.round(SCENARIOS[selectedScenario].q3NetProfit).toLocaleString()}`} color={SCENARIOS[selectedScenario].q3NetProfit >= 0 ? EMERALD : ROSE} />
        </div>

        {/* Month by month table */}
        <Card className="border-blue-100">
          <CardHeader><CardTitle className="text-base">Proyección mes a mes · 12 meses</CardTitle></CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto max-h-[480px] overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-white z-10">
                  <tr className="border-b text-left text-xs text-muted-foreground">
                    <th className="px-4 py-3 font-medium">Mes</th>
                    <th className="px-4 py-3 font-medium text-right">Clientes</th>
                    <th className="px-4 py-3 font-medium text-right">Nuevos</th>
                    <th className="px-4 py-3 font-medium text-right">Churn</th>
                    <th className="px-4 py-3 font-medium text-right">Revenue</th>
                    <th className="px-4 py-3 font-medium text-right">Costos</th>
                    <th className="px-4 py-3 font-medium text-right">Neto</th>
                    <th className="px-4 py-3 font-medium text-right">Acum.</th>
                  </tr>
                </thead>
                <tbody>
                  {SCENARIOS[selectedScenario].months.map((m) => (
                    <tr key={m.month} className={`border-b last:border-0 ${m.netProfit >= 0 ? 'bg-emerald-50/30' : 'bg-rose-50/20'}`}>
                      <td className="px-4 py-2.5 font-semibold">{m.label}</td>
                      <td className="px-4 py-2.5 text-right font-mono">{m.customers}</td>
                      <td className="px-4 py-2.5 text-right font-mono text-emerald-700">+{m.newCustomers}</td>
                      <td className="px-4 py-2.5 text-right font-mono text-rose-600">-{m.churned}</td>
                      <td className="px-4 py-2.5 text-right font-mono">${Math.round(m.revenue).toLocaleString()}</td>
                      <td className="px-4 py-2.5 text-right font-mono text-muted-foreground">${Math.round(m.totalCosts).toLocaleString()}</td>
                      <td className={`px-4 py-2.5 text-right font-mono font-bold ${m.netProfit >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
                        {m.netProfit >= 0 ? '+' : ''}${Math.round(m.netProfit).toLocaleString()}
                      </td>
                      <td className={`px-4 py-2.5 text-right font-mono font-bold ${m.cumulativeNet >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
                        {m.cumulativeNet >= 0 ? '+' : ''}${Math.round(m.cumulativeNet).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ===================== VE MARKET RISKS ===================== */}
      <section className="w-full" style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionTitle
            kicker="Variables del mercado venezolano"
            title="Matriz de riesgos VE"
            desc="10 factores de riesgo del mercado venezolano con probabilidad, impacto, descripción, mitigación y métrica afectada. Clave para el escenario pesimista."
          />

          <div className="grid md:grid-cols-2 gap-3">
            {VE_RISKS.map((r, i) => {
              const sevColor = r.impact === "Crítico" ? ROSE : r.impact === "Alto" ? AMBER : r.impact === "Medio" ? BLUE : EMERALD
              const probColor = r.probability === "Alta" ? ROSE : r.probability === "Media" ? AMBER : EMERALD
              return (
                <motion.div key={r.factor} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-10px' }} transition={{ delay: i * 0.03 }}>
                  <Card className="border-blue-100 h-full">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-semibold text-sm flex-1" style={{ color: INK }}>{r.factor}</h3>
                        <div className="flex flex-col gap-1 shrink-0">
                          <Badge className="border-0 text-[9px] text-white" style={{ background: probColor }}>Prob: {r.probability}</Badge>
                          <Badge className="border-0 text-[9px] text-white" style={{ background: sevColor }}>Imp: {r.impact}</Badge>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2 leading-relaxed">{r.description}</p>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div>
                          <p className="font-bold text-blue-600 mb-0.5">Mitigación</p>
                          <p className="text-muted-foreground">{r.mitigation}</p>
                        </div>
                        <div>
                          <p className="font-bold text-rose-600 mb-0.5">Impacto métrica</p>
                          <p className="text-muted-foreground font-mono">{r.metricImpact}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===================== IMPACT ON 7 PLANS ===================== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle
          kicker="Impacto en los 7 planes"
          title="Qué cambia en cada plan"
          desc="Las nuevas mecánicas afectan todos los planes anteriores. Aquí está el impacto concreto y la acción requerida para cada uno."
        />

        <div className="space-y-3">
          {PLAN_IMPACTS.map((p, i) => {
            const sevColor = p.severity === "Crítica" ? ROSE : p.severity === "Alta" ? AMBER : p.severity === "Media" ? BLUE : EMERALD
            return (
              <motion.div key={p.plan} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-10px' }} transition={{ delay: i * 0.04 }}>
                <Card className="border-blue-100" style={{ borderLeft: `4px solid ${sevColor}` }}>
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 className="font-bold text-base" style={{ color: INK }}>{p.plan}</h3>
                      <Badge className="border-0 text-[10px] text-white shrink-0" style={{ background: sevColor }}>{p.severity}</Badge>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1.5">Cambios</p>
                        <ul className="space-y-1">
                          {p.changes.map((c) => (
                            <li key={c} className="flex items-start gap-1.5 text-xs" style={{ color: INK }}>
                              <ArrowRight className="size-3 mt-0.5 shrink-0" style={{ color: sevColor }} />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-lg p-3" style={{ background: SAND }}>
                        <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: BLUE_DARK }}>Acción requerida</p>
                        <p className="text-xs leading-relaxed" style={{ color: INK }}>{p.action}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ===================== RECOMMENDATIONS ===================== */}
      <section className="w-full" style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionTitle
            kicker="Recomendaciones ejecutivas"
            title="6 acciones críticas"
            desc="Qué hacer AHORA para maximizar probabilidad del escenario pragmático/optimista y mitigar el pesimista."
          />

          <div className="space-y-3">
            {RECOMMENDATIONS.map((r, i) => {
              const sevColor = r.priority === "Crítica" ? ROSE : r.priority === "Alta" ? AMBER : EMERALD
              return (
                <motion.div key={r.title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-10px' }} transition={{ delay: i * 0.04 }}>
                  <Card className="border-blue-100">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3">
                        <span className="size-7 rounded-full grid place-items-center text-xs font-bold text-white shrink-0" style={{ background: sevColor }}>{i + 1}</span>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge className="border-0 text-[9px] text-white" style={{ background: sevColor }}>{r.priority}</Badge>
                            <h3 className="font-bold text-sm" style={{ color: INK }}>{r.title}</h3>
                          </div>
                          <p className="text-xs text-muted-foreground mb-2 leading-relaxed">{r.rationale}</p>
                          <div className="rounded-lg p-2.5" style={{ background: '#ffffff' }}>
                            <p className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground mb-0.5">Acción</p>
                            <p className="text-xs" style={{ color: INK }}>{r.action}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===================== CLOSING ===================== */}
      <section className="mx-auto max-w-6xl w-full px-4 sm:px-6 py-14 sm:py-20">
        <Card className="overflow-hidden border-0" style={{ background: `linear-gradient(135deg, ${BLUE_DARK}, ${INK})` }}>
          <CardContent className="p-8 sm:p-12 text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Activity className="size-10 mx-auto mb-4" style={{ color: AMBER_LIGHT }} />
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Exponencial potencial · realista pragmática · pesimista como seguro
              </h2>
              <p className="text-white/75 mt-3 max-w-2xl mx-auto">
                Las nuevas mecánicas pueden llevar a FichoX a 450 clientes (optimista) o estancarse en 35 (pesimista).
                Planifica con el pragmático (158 clientes, breakeven M5 operativo), mantén $11K buffer para el pesimista,
                y ejecuta agresivamente hacia el optimista. El factor crítico: K viral {'>'} 0.25 confirmado en Sem 4.
              </p>
              <div className="mt-7 grid grid-cols-3 gap-3 max-w-xl mx-auto">
                <ClosingStat emoji="🚀" value="450" label="optimista M12" color={EMERALD} />
                <ClosingStat emoji="⚖️" value="158" label="pragmática M12" color={AMBER_LIGHT} />
                <ClosingStat emoji="⚠️" value="35" label="pesimista M12" color={ROSE} />
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t" style={{ background: INK, borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 text-center">
          <p className="text-white font-semibold text-sm">FichoX · Análisis Exponencial · Nuevas Mecánicas</p>
          <p className="text-white/50 text-xs mt-1">3 escenarios · 10 riesgos VE · Impacto en 7 planes · 6 recomendaciones · Mercado venezolano</p>
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

function ClosingStat({ emoji, value, label, color }: { emoji: string; value: string; label: string; color: string }) {
  return (
    <div className="rounded-xl bg-white/10 ring-1 ring-white/20 px-3 py-3">
      <p className="text-2xl mb-1">{emoji}</p>
      <p className="text-2xl font-bold leading-none" style={{ color }}>{value}</p>
      <p className="text-[11px] text-white/60 mt-1">{label}</p>
    </div>
  )
}

function StatCard({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <Card className="border-blue-100">
      <CardContent className="p-4">
        <p className="text-[10px] uppercase tracking-wide text-muted-foreground">{label}</p>
        <p className="text-xl font-bold mt-0.5" style={{ color }}>{value}</p>
      </CardContent>
    </Card>
  )
}
