'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Zap, Bot, TrendingUp, DollarSign, AlertTriangle, CheckCircle2, XCircle,
  RefreshCw, Wrench, ShieldAlert, Calendar, Cpu, GitBranch, ArrowRight,
  Clock, AlertOctagon, Layers, Sparkles,
} from 'lucide-react'
import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine, Area, AreaChart, Legend, Cell,
} from 'recharts'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  AUTO_QUARTER, REPLACEMENTS, TOTAL_HOURS_SAVED_WEEKLY, BLEND_HOURLY,
  AUTO_CALENDAR, AUTO_TOOLS, TOTAL_TOOLS_MONTHLY, TOTAL_SETUP_HOURS,
  TOTAL_MAINTENANCE_WEEKLY, ROI_TIMESERIES, ROI_SUMMARY, RISK_SCENARIOS,
  PARALLEL_MAP,
} from '@/lib/automation-data'

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

const SEVERITY_COLORS: Record<string, string> = {
  Crítica: ROSE,
  Alta: AMBER,
  Media: BLUE,
  Baja: EMERALD,
}

const PHASE_COLORS: Record<string, string> = {
  build: BLUE,
  deploy: EMERALD,
  test: AMBER,
  monitor: GRAPHITE,
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

export function AutomationPlanView() {
  const [selectedWeek, setSelectedWeek] = useState<number>(1)
  const [selectedRisk, setSelectedRisk] = useState<number>(0)
  const week = AUTO_CALENDAR.find((w) => w.week === selectedWeek)!
  const risk = RISK_SCENARIOS[selectedRisk]

  return (
    <div className="bg-white">
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${INK} 0%, ${BLUE_DARK} 100%)` }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="absolute -top-24 -right-24 size-72 rounded-full blur-3xl opacity-30" style={{ background: AMBER }} />
        <div className="absolute -bottom-32 -left-20 size-80 rounded-full blur-3xl opacity-20" style={{ background: PURPLE }} />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <Badge className="mb-5 border-0 text-amber-950 gap-1.5" style={{ background: AMBER_LIGHT }}>
              <Zap className="size-3" /> {AUTO_QUARTER.name}
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
              Plan de Automatización
              <span className="block mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold" style={{ color: AMBER_LIGHT }}>
                Paralelo · día a día · con ROI y riesgos
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
              {AUTO_QUARTER.mission}.
              <span className="block mt-2 text-white/60 text-sm">{AUTO_QUARTER.parallel}.</span>
            </p>

            <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
              <HeroStat value={`${ROI_SUMMARY.hoursSavedQ3.toLocaleString()}h`} label="Horas ahorradas Q3" />
              <HeroStat value={`$${ROI_SUMMARY.q3NetSavings.toLocaleString()}`} label="Net savings Q3" />
              <HeroStat value={`Sem ${ROI_SUMMARY.paybackWeek}`} label="Payback" />
              <HeroStat value="85%" label="Work automatizado" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== REPLACEMENT MAP ===================== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle
          kicker="Qué suplanta"
          title="Mapa de reemplazos"
          desc="18 tareas manuales de los planes de Marketing y Operativo que se automatizan. Cada una con nivel de automatización, horas antes/después y herramientas."
        />

        {/* Summary stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <Card className="border-blue-100"><CardContent className="p-4"><p className="text-2xl font-bold" style={{ color: BLUE }}>{REPLACEMENTS.length}</p><p className="text-xs text-muted-foreground">Tareas automatizadas</p></CardContent></Card>
          <Card className="border-blue-100"><CardContent className="p-4"><p className="text-2xl font-bold" style={{ color: EMERALD }}>{TOTAL_HOURS_SAVED_WEEKLY}h</p><p className="text-xs text-muted-foreground">Ahorradas/semana (estado estable)</p></CardContent></Card>
          <Card className="border-blue-100"><CardContent className="p-4"><p className="text-2xl font-bold" style={{ color: AMBER }}>${(TOTAL_HOURS_SAVED_WEEKLY * BLEND_HOURLY).toLocaleString()}</p><p className="text-xs text-muted-foreground">Ahorradas/semana en $</p></CardContent></Card>
          <Card className="border-blue-100"><CardContent className="p-4"><p className="text-2xl font-bold" style={{ color: INK }}>{REPLACEMENTS.filter(r => r.level === 'Total').length}</p><p className="text-xs text-muted-foreground">Automatizaciones totales</p></CardContent></Card>
        </div>

        <Card className="border-blue-100 overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto max-h-[560px] overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-white z-10">
                  <tr className="border-b text-left text-xs text-muted-foreground">
                    <th className="px-4 py-3 font-medium">Tarea original</th>
                    <th className="px-4 py-3 font-medium">Plan</th>
                    <th className="px-4 py-3 font-medium">Automatización</th>
                    <th className="px-4 py-3 font-medium text-center">Nivel</th>
                    <th className="px-4 py-3 font-medium text-right">Antes</th>
                    <th className="px-4 py-3 font-medium text-right">Después</th>
                    <th className="px-4 py-3 font-medium text-right">Ahorrado</th>
                    <th className="px-4 py-3 font-medium">Herramientas</th>
                  </tr>
                </thead>
                <tbody>
                  {REPLACEMENTS.map((r) => (
                    <tr key={r.id} className="border-b last:border-0 hover:bg-blue-50/30">
                      <td className="px-4 py-3 align-top font-medium" style={{ color: INK }}>{r.originalTask}</td>
                      <td className="px-4 py-3 align-top"><Badge variant="outline" className="text-[10px]" style={{ borderColor: r.sourcePlan === 'Marketing' ? ROSE : BLUE, color: r.sourcePlan === 'Marketing' ? ROSE : BLUE }}>Sem {r.sourceWeek}</Badge></td>
                      <td className="px-4 py-3 align-top text-xs text-muted-foreground">{r.automation}</td>
                      <td className="px-4 py-3 align-top text-center"><Badge className="border-0 text-[10px]" style={{ background: r.level === 'Total' ? EMERALD : r.level === 'Parcial' ? AMBER : BLUE, color: 'white' }}>{r.level}</Badge></td>
                      <td className="px-4 py-3 align-top text-right font-mono text-xs text-muted-foreground">{r.hoursBefore}h</td>
                      <td className="px-4 py-3 align-top text-right font-mono text-xs">{r.hoursAfter}h</td>
                      <td className="px-4 py-3 align-top text-right font-mono text-xs font-bold" style={{ color: EMERALD }}>-{r.saved}h</td>
                      <td className="px-4 py-3 align-top"><div className="flex flex-wrap gap-0.5">{r.tools.map(t => <span key={t} className="text-[9px] px-1 py-0.5 rounded bg-blue-50" style={{ color: BLUE_DARK }}>{t}</span>)}</div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ===================== DAY-BY-DAY CALENDAR ===================== */}
      <section className="w-full" style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionTitle
            kicker="Calendario día a día"
            title="12 semanas de build, deploy, test y monitor"
            desc="Cada día tiene una tarea de automatización específica que reemplaza una tarea de marketing u operativo. Fases: build (construir), deploy (desplegar), test (probar), monitor (vigilar)."
          />

          {/* Week selector */}
          <div className="flex gap-1 overflow-x-auto pb-2 mb-5">
            {AUTO_CALENDAR.map((w) => (
              <button
                key={w.week}
                onClick={() => setSelectedWeek(w.week)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${selectedWeek === w.week ? 'text-white shadow-sm' : 'bg-white text-muted-foreground hover:bg-blue-50'}`}
                style={selectedWeek === w.week ? { background: BLUE } : {}}
              >
                <div>S{w.week}</div>
                <div className="text-[9px] font-normal opacity-80">{w.dates}</div>
              </button>
            ))}
          </div>

          {/* Week header */}
          <Card className="border-blue-200 mb-4">
            <CardContent className="p-5 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <Badge variant="outline" className="mb-1.5" style={{ borderColor: BLUE, color: BLUE_DARK }}>{week.phase}</Badge>
                  <h3 className="text-xl sm:text-2xl font-bold" style={{ color: INK }}>Semana {week.week} · {week.theme}</h3>
                  <p className="text-sm text-muted-foreground">{week.dates}</p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <MiniStat value={`${week.weeklyHoursSaved}h`} label="Ahorrado/sem" color={EMERALD} />
                  <MiniStat value={`$${week.weeklyInvestment}`} label="Inversión/sem" color={AMBER} />
                  <MiniStat value={`$${week.cumulativeNet}`} label="Neto acum." color={week.cumulativeNet >= 0 ? EMERALD : ROSE} />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Daily tasks */}
          <div className="space-y-2">
            {week.daily.map((d, i) => {
              const color = PHASE_COLORS[d.phase] ?? GRAPHITE
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="rounded-xl bg-white border border-blue-100 p-3.5 flex items-start gap-3 hover:shadow-sm transition-shadow"
                >
                  <div className="flex flex-col items-center shrink-0 w-12">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">{d.day}</span>
                    <span className="text-lg font-bold leading-none" style={{ color: INK }}>{d.date}</span>
                  </div>
                  <div className="w-1 self-stretch rounded-full shrink-0" style={{ background: color }} />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                      <Badge variant="outline" className="text-[10px] py-0 capitalize" style={{ borderColor: color, color }}>{d.phase}</Badge>
                      {d.tool !== '—' && <span className="text-[10px] text-muted-foreground">🔧 {d.tool}</span>}
                    </div>
                    <p className="text-sm font-medium" style={{ color: INK }}>{d.task}</p>
                    {d.replaces !== '—' && (
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                        <ArrowRight className="size-3" style={{ color: ROSE }} />
                        Reemplaza: {d.replaces}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-end shrink-0 gap-0.5">
                    {d.hoursSaved > 0 && <span className="text-[10px] font-mono font-bold" style={{ color: EMERALD }}>+{d.hoursSaved}h</span>}
                    {d.investment > 0 && <span className="text-[10px] font-mono" style={{ color: AMBER }}>-${d.investment}</span>}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===================== ROI CHARTS ===================== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle
          kicker="ROI"
          title="Inversión vs. ahorro semana a semana"
          desc={`Inversión total setup: $${ROI_SUMMARY.totalSetupInvestment} (one-time). Herramientas: $${ROI_SUMMARY.totalToolsMonthly}/mes. Mantenimiento: $${Math.round(ROI_SUMMARY.totalMaintenanceWeekly)}/semana. Payback: Semana ${ROI_SUMMARY.paybackWeek}.`}
        />

        <div className="grid lg:grid-cols-2 gap-5 mb-5">
          <Card className="border-blue-100">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2"><DollarSign className="size-4" style={{ color: EMERALD }} /> Ahorro vs. inversión / sem</CardTitle>
              <CardDescription>Barras: ahorro (esmeralda) e inversión (ámbar)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={ROI_TIMESERIES} margin={{ top: 8, right: 8, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                    <XAxis dataKey="week" tick={{ fontSize: 11, fill: GRAPHITE }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: GRAPHITE }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}`} />
                    <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e5e7eb', fontSize: 12 }} formatter={(v: number) => [`$${v}`, '']} />
                    <Legend wrapperStyle={{ fontSize: 11 }} />
                    <Bar dataKey="savings" name="Ahorro $" fill={EMERALD} radius={[3, 3, 0, 0]} maxBarSize={24} />
                    <Bar dataKey="investment" name="Inversión $" fill={AMBER} radius={[3, 3, 0, 0]} maxBarSize={24} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-100">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2"><TrendingUp className="size-4" style={{ color: BLUE }} /> Neto acumulado</CardTitle>
              <CardDescription>Cruce de cero = payback (Sem {ROI_SUMMARY.paybackWeek})</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={ROI_TIMESERIES} margin={{ top: 8, right: 8, left: -10, bottom: 0 }}>
                    <defs>
                      <linearGradient id="netGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={EMERALD} stopOpacity={0.35} />
                        <stop offset="100%" stopColor={EMERALD} stopOpacity={0.02} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                    <XAxis dataKey="week" tick={{ fontSize: 11, fill: GRAPHITE }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: GRAPHITE }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}`} />
                    <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e5e7eb', fontSize: 12 }} formatter={(v: number) => [`$${v.toLocaleString()}`, '']} />
                    <ReferenceLine y={0} stroke="#9ca3af" strokeWidth={1.5} strokeDasharray="4 4" />
                    <Area type="monotone" dataKey="cumulative" name="Neto acumulado $" stroke={EMERALD} strokeWidth={2.5} fill="url(#netGrad)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hours saved chart */}
        <Card className="border-blue-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2"><Clock className="size-4" style={{ color: PURPLE }} /> Horas-hombre ahorradas / semana</CardTitle>
            <CardDescription>Crecimiento del ahorro en horas a medida que se despliegan automatizaciones</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={ROI_TIMESERIES} margin={{ top: 8, right: 8, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="hoursGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={PURPLE} stopOpacity={0.35} />
                      <stop offset="100%" stopColor={PURPLE} stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                  <XAxis dataKey="week" tick={{ fontSize: 11, fill: GRAPHITE }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: GRAPHITE }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}h`} />
                  <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e5e7eb', fontSize: 12 }} formatter={(v: number) => [`${v}h`, 'Horas ahorradas']} />
                  <Area type="monotone" dataKey="hoursSaved" name="Horas ahorradas" stroke={PURPLE} strokeWidth={2.5} fill="url(#hoursGrad)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* ROI summary cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
          <RoiCard label="Inversión setup (one-time)" value={`$${ROI_SUMMARY.totalSetupInvestment}`} sub={`${TOTAL_SETUP_HOURS}h dev × $${BLEND_HOURLY}/h`} color={AMBER} />
          <RoiCard label="Herramientas (mensual)" value={`$${ROI_SUMMARY.totalToolsMonthly}`} sub={`${AUTO_TOOLS.length} herramientas SaaS`} color={BLUE} />
          <RoiCard label="Mantenimiento (semanal)" value={`$${Math.round(ROI_SUMMARY.totalMaintenanceWeekly)}`} sub={`${TOTAL_MAINTENANCE_WEEKLY}h/semana × $${BLEND_HOURLY}/h`} color={PURPLE} />
          <RoiCard label="Ahorro estado estable" value={`$${(ROI_SUMMARY.weeklySavingsSteady).toLocaleString()}/sem`} sub="Semana 12 · 293h × $20" color={EMERALD} />
        </div>
      </section>

      {/* ===================== TOOLS STACK ===================== */}
      <section className="w-full" style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionTitle kicker="Stack de herramientas" title="15 herramientas para orquestar todo" desc="Cada herramienta con propósito, costo mensual, horas de setup y mantenimiento semanal." />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {AUTO_TOOLS.map((t) => (
              <Card key={t.name} className={`border-blue-100 h-fit ${t.critical ? 'ring-1 ring-rose-200' : ''}`}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-sm" style={{ color: INK }}>{t.name}</h3>
                    {t.critical && <Badge className="border-0 text-[9px] shrink-0" style={{ background: ROSE, color: 'white' }}>Crítica</Badge>}
                  </div>
                  <p className="text-[10px] text-muted-foreground mb-2">{t.category}</p>
                  <p className="text-xs text-muted-foreground mb-2 leading-relaxed">{t.purpose}</p>
                  <div className="grid grid-cols-3 gap-1 text-center">
                    <div><p className="text-[9px] text-muted-foreground">Costo/mes</p><p className="text-xs font-mono font-bold" style={{ color: t.costMonth > 0 ? BLUE : EMERALD }}>${t.costMonth}</p></div>
                    <div><p className="text-[9px] text-muted-foreground">Setup</p><p className="text-xs font-mono font-bold" style={{ color: AMBER }}>{t.setupHours}h</p></div>
                    <div><p className="text-[9px] text-muted-foreground">Mant./sem</p><p className="text-xs font-mono font-bold" style={{ color: PURPLE }}>{t.maintenanceWeek}h</p></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== RISK SCENARIOS ===================== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle
          kicker="Análisis de riesgos"
          title="4 escenarios por cada clúster de automatización"
          desc="Qué pasa si NO se hace, qué pasa si se hace, qué pasa si se hace y se deja, qué pasa si falla técnicamente. Cada clúster tiene un plan de fallback."
        />

        {/* Risk selector */}
        <div className="flex gap-1.5 flex-wrap mb-5">
          {RISK_SCENARIOS.map((r, i) => (
            <button
              key={i}
              onClick={() => setSelectedRisk(i)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${selectedRisk === i ? 'text-white shadow-sm' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'}`}
              style={selectedRisk === i ? { background: SEVERITY_COLORS[r.severity] } : {}}
            >
              {r.cluster}
            </button>
          ))}
        </div>

        {/* Risk detail */}
        <Card className="border-2 mb-5" style={{ borderColor: SEVERITY_COLORS[risk.severity] + '40' }}>
          <CardHeader>
            <div className="flex items-start justify-between gap-2">
              <div>
                <CardTitle className="text-lg flex items-center gap-2">
                  <ShieldAlert className="size-5" style={{ color: SEVERITY_COLORS[risk.severity] }} />
                  {risk.cluster}
                </CardTitle>
                <CardDescription className="mt-1">{risk.automations}</CardDescription>
              </div>
              <Badge className="border-0 text-white shrink-0" style={{ background: SEVERITY_COLORS[risk.severity] }}>{risk.severity}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-3">
              <ScenarioCard
                icon={XCircle}
                color={ROSE}
                title="Si NO se hace"
                text={risk.ifNotDone}
              />
              <ScenarioCard
                icon={CheckCircle2}
                color={EMERALD}
                title="Si se hace"
                text={risk.ifDone}
              />
              <ScenarioCard
                icon={AlertOctagon}
                color={AMBER}
                title="Si se hace y se deja de mantener"
                text={risk.ifDoneThenStopped}
              />
              <ScenarioCard
                icon={AlertTriangle}
                color={PURPLE}
                title="Si falla técnicamente (factor ajeno)"
                text={risk.ifFailsTechnically}
              />
            </div>

            {/* Fallback */}
            <div className="mt-4 rounded-xl p-4" style={{ background: INK }}>
              <div className="flex items-start gap-2.5">
                <RefreshCw className="size-5 shrink-0 mt-0.5" style={{ color: AMBER_LIGHT }} />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: AMBER_LIGHT }}>Plan de fallback</p>
                  <p className="text-sm text-white/85 leading-relaxed">{risk.fallback}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Risk matrix overview */}
        <Card className="border-blue-100">
          <CardHeader><CardTitle className="text-base">Matriz de severidad</CardTitle></CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left text-xs text-muted-foreground">
                    <th className="px-5 py-3 font-medium">Clúster</th>
                    <th className="px-5 py-3 font-medium text-center">Severidad</th>
                    <th className="px-5 py-3 font-medium">Impacto si falla</th>
                  </tr>
                </thead>
                <tbody>
                  {RISK_SCENARIOS.map((r, i) => (
                    <tr key={i} className={`border-b last:border-0 cursor-pointer hover:bg-blue-50/30 ${selectedRisk === i ? 'bg-blue-50/50' : ''}`} onClick={() => setSelectedRisk(i)}>
                      <td className="px-5 py-3 font-medium align-top" style={{ color: INK }}>{r.cluster}</td>
                      <td className="px-5 py-3 align-top text-center"><Badge className="border-0 text-white text-[10px]" style={{ background: SEVERITY_COLORS[r.severity] }}>{r.severity}</Badge></td>
                      <td className="px-5 py-3 align-top text-xs text-muted-foreground">{r.ifFailsTechnically.substring(0, 80)}...</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ===================== PARALLEL EXECUTION MAP ===================== */}
      <section className="w-full" style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionTitle
            kicker="Ejecución paralela"
            title="Cómo corre la automatización junto a marketing y ops"
            desc="Línea de tiempo mostrando qué hace cada plan en paralelo y dónde la automatización suplanta trabajo manual."
          />

          <div className="space-y-3">
            {PARALLEL_MAP.map((p, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-20px' }}>
                <Card className="border-blue-100">
                  <CardContent className="p-5">
                    <Badge variant="outline" className="mb-3" style={{ borderColor: BLUE, color: BLUE_DARK }}>{p.week}</Badge>
                    <div className="grid md:grid-cols-4 gap-3">
                      <ParallelCol icon={MegaphoneIcon} color={ROSE} label="Marketing" text={p.marketing} />
                      <ParallelCol icon={Wrench} color={BLUE} label="Operativo" text={p.ops} />
                      <ParallelCol icon={Zap} color={EMERALD} label="Automatización" text={p.automation} highlight />
                      <ParallelCol icon={Sparkles} color={AMBER} label="Impacto" text={p.impact} />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CLOSING ===================== */}
      <section className="mx-auto max-w-6xl w-full px-4 sm:px-6 py-14 sm:py-20">
        <Card className="overflow-hidden border-0" style={{ background: `linear-gradient(135deg, ${BLUE_DARK}, ${INK})` }}>
          <CardContent className="p-8 sm:p-12 text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Bot className="size-10 mx-auto mb-4" style={{ color: AMBER_LIGHT }} />
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                25 automatizaciones · $3,400 netos en Q3 · 85% del trabajo liberado
              </h2>
              <p className="text-white/75 mt-3 max-w-2xl mx-auto">
                Este plan corre en paralelo desde el día 1. Suplanta 18 tareas manuales de marketing y operaciones,
                alcanza payback en Semana {ROI_SUMMARY.paybackWeek}, y libera {ROI_SUMMARY.hoursSavedQ3.toLocaleString()} horas
                de trabajo humano en Q3 para que el equipo se enfoque en lo que la IA no puede hacer.
              </p>
              <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
                <ClosingStat value={`${ROI_SUMMARY.hoursSavedQ3}`} label="horas Q3" />
                <ClosingStat value={`$${ROI_SUMMARY.q3NetSavings}`} label="net Q3" />
                <ClosingStat value={`Sem ${ROI_SUMMARY.paybackWeek}`} label="payback" />
                <ClosingStat value="25" label="automatizaciones" />
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t" style={{ background: INK, borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 text-center">
          <p className="text-white font-semibold text-sm">FichoX · Plan de Automatización Q3 2025</p>
          <p className="text-white/50 text-xs mt-1">{AUTO_QUARTER.startDate} → {AUTO_QUARTER.endDate} · Paralelo a Marketing + Operativo · Payback Sem {ROI_SUMMARY.paybackWeek}</p>
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

function MiniStat({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div className="rounded-lg px-2 py-1.5" style={{ background: color + '15' }}>
      <p className="text-base font-bold leading-none" style={{ color }}>{value}</p>
      <p className="text-[10px] text-muted-foreground mt-0.5">{label}</p>
    </div>
  )
}

function RoiCard({ label, value, sub, color }: { label: string; value: string; sub: string; color: string }) {
  return (
    <Card className="border-blue-100">
      <CardContent className="p-4">
        <p className="text-xs text-muted-foreground mb-1">{label}</p>
        <p className="text-xl font-bold" style={{ color }}>{value}</p>
        <p className="text-[10px] text-muted-foreground mt-1">{sub}</p>
      </CardContent>
    </Card>
  )
}

function ScenarioCard({ icon: Icon, color, title, text }: {
  icon: React.ComponentType<{ className?: string }>
  color: string
  title: string
  text: string
}) {
  return (
    <div className="rounded-xl p-4" style={{ background: color + '0d', border: `1px solid ${color}30` }}>
      <div className="flex items-center gap-2 mb-2">
        <Icon className="size-4 shrink-0" style={{ color }} />
        <p className="font-bold text-sm" style={{ color }}>{title}</p>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">{text}</p>
    </div>
  )
}

function ParallelCol({ icon: Icon, color, label, text, highlight }: {
  icon: React.ComponentType<{ className?: string }>
  color: string
  label: string
  text: string
  highlight?: boolean
}) {
  return (
    <div className={`rounded-xl p-3 ${highlight ? 'ring-1' : ''}`} style={{ background: highlight ? color + '0d' : '#ffffff', borderColor: highlight ? color : undefined }}>
      <div className="flex items-center gap-1.5 mb-1.5">
        <Icon className="size-3.5 shrink-0" style={{ color }} />
        <p className="text-[10px] font-bold uppercase tracking-wide" style={{ color }}>{label}</p>
      </div>
      <p className="text-xs leading-relaxed" style={{ color: INK }}>{text}</p>
    </div>
  )
}

// Megaphone icon alias (to avoid name collision with imported Megaphone if any)
function MegaphoneIcon({ className }: { className?: string }) {
  return <Zap className={className} />
}
