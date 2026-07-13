'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Calendar, TrendingUp, Users, Target, Megaphone, Instagram, Video,
  MessageCircle, Gift, ShoppingCart, Briefcase, CheckCircle2, Sparkles,
  Heart, BookOpen, Bell, Award, BarChart3, ChevronRight, MapPin,
} from 'lucide-react'
import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Area, AreaChart, Legend, Cell,
} from 'recharts'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  MKT_QUARTER, CHANNEL_IMPACT, CALENDAR, PROJECTION_TIMESERIES,
  PROJECTION_TOTALS, KEY_DATES, FEEDBACK_CYCLES, REINFORCEMENT_ACTIONS,
  MISSION_PLAN,
} from '@/lib/marketing-data'

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

// Channel colors for Gantt
const CHANNEL_COLORS: Record<string, string> = {
  'IG': BLUE,
  'TikTok': INK,
  'WhatsApp': EMERALD,
  'Paid': AMBER,
  'Sales': BLUE_DARK,
  'Content': BLUE_LIGHT,
  'Email': '#8b5cf6',
  'MELI': '#fff200',
  'LinkedIn': '#0a66c2',
  'Webinar': ROSE,
  'Referral': '#10b981',
  'Partnership': '#f97316',
  'Interno': '#64748b',
  'Analytics': '#7c3aed',
  'Product': '#0d9488',
  'Planning': '#be185d',
  'Community': EMERALD,
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Instagram, Video, MessageCircle, Megaphone, Gift, ShoppingCart, Briefcase,
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

export function MarketingPlanView() {
  const [selectedWeek, setSelectedWeek] = useState<number>(1)
  const [selectedChannel, setSelectedChannel] = useState<string | 'all'>('all')

  const weekData = CALENDAR.find((w) => w.week === selectedWeek)!

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
              <Calendar className="size-3" /> {MKT_QUARTER.name}
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
              Plan de Marketing
              <span className="block mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold" style={{ color: AMBER_LIGHT }}>
                12 semanas · día a día
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
              {MKT_QUARTER.dates} → {MKT_QUARTER.endDate}. {MKT_QUARTER.goal}.
              <span className="block mt-2 text-white/60 text-sm">North star: {MKT_QUARTER.northStar}</span>
            </p>

            <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
              <HeroStat value={PROJECTION_TOTALS.totalLeads.toLocaleString()} label="Leads Q3" />
              <HeroStat value={`${PROJECTION_TOTALS.totalCustomers}`} label="Clientes activos" />
              <HeroStat value={PROJECTION_TOTALS.totalIgFollowers.toLocaleString()} label="Seguidores IG" />
              <HeroStat value={`$${PROJECTION_TOTALS.avgCac}`} label="CAC promedio" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== CHANNEL IMPACT ===================== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle
          kicker="Canales y medios"
          title="Canales con mayor impacto proyectado"
          desc="Ranking de canales por impacto esperado en adquisición de clientes para el público comerciante LATAM. Ordenado por ROI proyectado."
        />
        <div className="space-y-2.5">
          {CHANNEL_IMPACT.map((ch) => {
            const Icon = iconMap[ch.icon] ?? Megaphone
            return (
              <motion.div
                key={ch.channel}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-20px' }}
                className="rounded-2xl border border-blue-100 bg-white p-4 sm:p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center gap-1 shrink-0">
                    <span className="size-9 rounded-xl grid place-items-center text-white font-bold text-sm" style={{ background: BLUE }}>
                      <Icon className="size-4.5" />
                    </span>
                    <span className="text-[10px] font-bold text-muted-foreground">#{ch.rank}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-bold text-base" style={{ color: INK }}>{ch.channel}</h3>
                      <Badge variant="outline" className="text-[10px]">{ch.effort}</Badge>
                      {ch.cost > 0 && <Badge variant="outline" className="text-[10px]">${ch.cost}/mes</Badge>}
                      {ch.cpl > 0 && <Badge variant="outline" className="text-[10px]">CPL ${ch.cpl}</Badge>}
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-2">{ch.why}</p>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: SAND }}>
                        <div className="h-full rounded-full" style={{ width: `${ch.impact * 100}%`, background: `linear-gradient(90deg, ${BLUE}, ${AMBER})` }} />
                      </div>
                      <span className="text-xs font-bold font-mono shrink-0" style={{ color: BLUE }}>{Math.round(ch.impact * 100)}%</span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-x-4 gap-y-0.5 text-[11px]">
                      <div><span className="text-muted-foreground">Mejor para:</span> <span style={{ color: INK }}>{ch.bestFor}</span></div>
                      <div><span className="text-muted-foreground">Cadencia:</span> <span style={{ color: INK }}>{ch.cadence}</span></div>
                      <div className="sm:col-span-2"><span className="text-muted-foreground">KPI:</span> <span style={{ color: BLUE_DARK }} className="font-medium">{ch.kpi}</span></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ===================== PROJECTIONS CHARTS ===================== */}
      <section className="w-full" style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionTitle
            kicker="Proyecciones semanales"
            title="Leads, clientes y seguidores por semana"
            desc="Proyección de adquisición semana a semana. Las barras son nuevos; la línea es el acumulado de clientes pagos."
          />

          <div className="grid lg:grid-cols-2 gap-5 mb-5">
            <Card className="border-blue-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2"><Users className="size-4" style={{ color: BLUE }} /> Leads y clientes nuevos / sem</CardTitle>
                <CardDescription>Barras: nuevos por semana</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[280px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={PROJECTION_TIMESERIES} margin={{ top: 8, right: 8, left: -10, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                      <XAxis dataKey="week" tick={{ fontSize: 11, fill: GRAPHITE }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 11, fill: GRAPHITE }} axisLine={false} tickLine={false} />
                      <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e5e7eb', fontSize: 12 }} />
                      <Legend wrapperStyle={{ fontSize: 11 }} />
                      <Bar dataKey="leads" name="Leads nuevos" fill={BLUE_LIGHT} radius={[3, 3, 0, 0]} maxBarSize={20} />
                      <Bar dataKey="customers" name="Clientes nuevos" fill={BLUE} radius={[3, 3, 0, 0]} maxBarSize={20} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2"><TrendingUp className="size-4" style={{ color: AMBER }} /> Clientes acumulados</CardTitle>
                <CardDescription>Meta Q3: 65 clientes activos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[280px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={PROJECTION_TIMESERIES} margin={{ top: 8, right: 8, left: -10, bottom: 0 }}>
                      <defs>
                        <linearGradient id="cumGrad2" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor={BLUE} stopOpacity={0.35} />
                          <stop offset="100%" stopColor={BLUE} stopOpacity={0.02} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                      <XAxis dataKey="week" tick={{ fontSize: 11, fill: GRAPHITE }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 11, fill: GRAPHITE }} axisLine={false} tickLine={false} />
                      <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e5e7eb', fontSize: 12 }} />
                      <Area type="monotone" dataKey="cumulative" name="Clientes acumulados" stroke={BLUE} strokeWidth={2.5} fill="url(#cumGrad2)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            <Card className="border-blue-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2"><Instagram className="size-4" style={{ color: BLUE }} /> Seguidores sociales nuevos / sem</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[240px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={PROJECTION_TIMESERIES} margin={{ top: 8, right: 8, left: -10, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                      <XAxis dataKey="week" tick={{ fontSize: 11, fill: GRAPHITE }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 11, fill: GRAPHITE }} axisLine={false} tickLine={false} />
                      <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e5e7eb', fontSize: 12 }} />
                      <Legend wrapperStyle={{ fontSize: 11 }} />
                      <Bar dataKey="igFollowers" name="IG nuevos" fill={BLUE} radius={[3, 3, 0, 0]} maxBarSize={18} />
                      <Bar dataKey="tiktokFollowers" name="TikTok nuevos" fill={INK} radius={[3, 3, 0, 0]} maxBarSize={18} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2"><BarChart3 className="size-4" style={{ color: AMBER }} /> CAC y conversión / sem</CardTitle>
                <CardDescription>Línea: CAC ($) · Barras: conversión (%)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[240px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={PROJECTION_TIMESERIES} margin={{ top: 8, right: 8, left: -10, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                      <XAxis dataKey="week" tick={{ fontSize: 11, fill: GRAPHITE }} axisLine={false} tickLine={false} />
                      <YAxis yAxisId="left" tick={{ fontSize: 11, fill: GRAPHITE }} axisLine={false} tickLine={false} />
                      <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11, fill: GRAPHITE }} axisLine={false} tickLine={false} />
                      <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e5e7eb', fontSize: 12 }} />
                      <Legend wrapperStyle={{ fontSize: 11 }} />
                      <Bar yAxisId="right" dataKey="conv" name="Conversión %" fill={AMBER_LIGHT} radius={[3, 3, 0, 0]} maxBarSize={18} />
                      <Line yAxisId="left" type="monotone" dataKey="cac" name="CAC $" stroke={ROSE} strokeWidth={2.5} dot={{ r: 3 }} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ===================== GANTT CHART ===================== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle
          kicker="Calendario Gantt"
          title="Línea de tiempo de 12 semanas"
          desc="Cada barra es un track de trabajo que se ejecuta durante varias semanas. Filtra por canal para ver el detalle."
        />

        {/* Channel filter */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          <button
            onClick={() => setSelectedChannel('all')}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${selectedChannel === 'all' ? 'text-white' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'}`}
            style={selectedChannel === 'all' ? { background: BLUE } : {}}
          >
            Todos
          </button>
          {Object.entries(CHANNEL_COLORS).map(([ch, color]) => (
            <button
              key={ch}
              onClick={() => setSelectedChannel(ch)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${selectedChannel === ch ? 'text-white' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'}`}
              style={selectedChannel === ch ? { background: color } : {}}
            >
              {ch}
            </button>
          ))}
        </div>

        {/* Gantt grid */}
        <Card className="border-blue-100 overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <div className="min-w-[800px]">
                {/* Week headers */}
                <div className="grid grid-cols-[140px_repeat(12,1fr)] border-b" style={{ background: SAND }}>
                  <div className="px-3 py-2 text-xs font-semibold text-muted-foreground">Track</div>
                  {CALENDAR.map((w) => (
                    <div
                      key={w.week}
                      onClick={() => setSelectedWeek(w.week)}
                      className={`px-1 py-2 text-center text-[10px] font-semibold cursor-pointer transition-colors ${selectedWeek === w.week ? 'text-white' : 'text-muted-foreground hover:bg-blue-100'}`}
                      style={selectedWeek === w.week ? { background: BLUE } : {}}
                    >
                      <div>S{w.week}</div>
                      <div className="text-[9px] font-normal opacity-80">{w.dates}</div>
                    </div>
                  ))}
                </div>

                {/* Gantt tracks (aggregate tasks by track name) */}
                {(() => {
                  // Build tracks from week daily tasks — aggregate unique task names per channel span
                  const trackDefs = [
                    { name: 'Contenido IG', channel: 'IG', weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
                    { name: 'Contenido TikTok', channel: 'TikTok', weeks: [2, 3, 5, 6, 7, 8, 9, 10, 11, 12] },
                    { name: 'WhatsApp grupos', channel: 'WhatsApp', weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
                    { name: 'Meta Ads', channel: 'Paid', weeks: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
                    { name: 'Demos y ventas', channel: 'Sales', weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
                    { name: 'Email / Newsletter', channel: 'Email', weeks: [6, 7, 10, 11, 12] },
                    { name: 'MercadoLibre foro', channel: 'MELI', weeks: [4, 5, 6, 7] },
                    { name: 'LinkedIn B2B', channel: 'LinkedIn', weeks: [6, 9, 11] },
                    { name: 'Webinars', channel: 'Webinar', weeks: [4, 11] },
                    { name: 'Referidos', channel: 'Referral', weeks: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
                    { name: 'Partnerships', channel: 'Partnership', weeks: [9, 10, 11] },
                    { name: 'Producto / Features', channel: 'Product', weeks: [7, 10] },
                    { name: 'Analítica', channel: 'Analytics', weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
                    { name: 'Interno / Cultura', channel: 'Interno', weeks: [1, 4, 8, 12] },
                    { name: 'Planning Q', channel: 'Planning', weeks: [10, 12] },
                  ]
                  return trackDefs
                    .filter((t) => selectedChannel === 'all' || t.channel === selectedChannel)
                    .map((track) => {
                      const color = CHANNEL_COLORS[track.channel] ?? GRAPHITE
                      return (
                        <div key={track.name} className="grid grid-cols-[140px_repeat(12,1fr)] border-b last:border-0 items-center min-h-[34px] hover:bg-blue-50/30">
                          <div className="px-3 py-1.5 text-[11px] font-medium flex items-center gap-1.5" style={{ color: INK }}>
                            <span className="size-2 rounded-full shrink-0" style={{ background: color }} />
                            <span className="truncate">{track.name}</span>
                          </div>
                          {CALENDAR.map((w) => {
                            const active = track.weeks.includes(w.week)
                            return (
                              <div
                                key={w.week}
                                onClick={() => setSelectedWeek(w.week)}
                                className={`px-0.5 py-1.5 cursor-pointer ${selectedWeek === w.week ? 'bg-blue-50/40' : ''}`}
                              >
                                {active && (
                                  <div
                                    className="h-3 rounded-sm transition-all hover:h-4 hover:opacity-80"
                                    style={{ background: color }}
                                    title={`${track.name} · Sem ${w.week}`}
                                  />
                                )}
                              </div>
                            )
                          })}
                        </div>
                      )
                    })
                })()}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Legend */}
        <div className="flex flex-wrap gap-3 mt-4 text-[11px]">
          {Object.entries(CHANNEL_COLORS).map(([ch, color]) => (
            <span key={ch} className="flex items-center gap-1.5 text-muted-foreground">
              <span className="size-2.5 rounded-sm" style={{ background: color }} />
              {ch}
            </span>
          ))}
        </div>
      </section>

      {/* ===================== WEEK DETAIL ===================== */}
      <section className="w-full" style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionTitle
            kicker="Día a día"
            title="Detalle semanal"
            desc="Selecciona una semana en el Gantt o usa las pestañas. Cada día tiene su tarea, resultado esperado y responsable."
          />

          {/* Week selector tabs */}
          <div className="flex gap-1 overflow-x-auto pb-2 mb-5">
            {CALENDAR.map((w) => (
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
                  <Badge variant="outline" className="mb-1.5" style={{ borderColor: BLUE, color: BLUE_DARK }}>{weekData.phase}</Badge>
                  <h3 className="text-xl sm:text-2xl font-bold" style={{ color: INK }}>Semana {weekData.week} · {weekData.theme}</h3>
                  <p className="text-sm text-muted-foreground">{weekData.dates}</p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <MiniStat value={`+${weekData.projections.newLeads}`} label="Leads" color={BLUE} />
                  <MiniStat value={`+${weekData.projections.newCustomers}`} label="Clientes" color={AMBER} />
                  <MiniStat value={`+${weekData.projections.newIgFollowers}`} label="IG" color={BLUE_DARK} />
                </div>
              </div>

              {/* Segmentation */}
              <div className="rounded-xl p-4" style={{ background: '#ffffff', border: '1px solid #e5e7eb' }}>
                <p className="text-xs font-semibold uppercase tracking-wide mb-2 flex items-center gap-1.5" style={{ color: BLUE_DARK }}>
                  <Target className="size-3.5" /> Segmentación de la semana
                </p>
                <div className="grid sm:grid-cols-2 gap-2 text-xs">
                  <SegRow icon={Users} label="Persona" value={weekData.segmentation.persona} />
                  <SegRow icon={MapPin} label="Geo" value={weekData.segmentation.geo} />
                  <SegRow icon={Target} label="ICP" value={weekData.segmentation.icp} />
                  <SegRow icon={Megaphone} label="Foco canal" value={weekData.segmentation.channelFocus} />
                </div>
              </div>

              {weekData.keyDate && (
                <div className="mt-3 rounded-xl p-3 flex items-center gap-3" style={{ background: AMBER_LIGHT }}>
                  <Calendar className="size-5 shrink-0" style={{ color: INK }} />
                  <div className="text-xs">
                    <span className="font-bold" style={{ color: INK }}>{weekData.keyDate.date} · {weekData.keyDate.name}</span>
                    <span className="text-amber-900"> — {weekData.keyDate.action}</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Daily tasks */}
          <div className="space-y-2">
            {weekData.daily.map((d, i) => {
              const color = CHANNEL_COLORS[d.channel] ?? GRAPHITE
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
                      <Badge variant="outline" className="text-[10px] py-0" style={{ borderColor: color, color }}>{d.channel}</Badge>
                      <span className="text-[10px] text-muted-foreground">· {d.owner}</span>
                    </div>
                    <p className="text-sm font-medium" style={{ color: INK }}>{d.task}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                      <CheckCircle2 className="size-3" style={{ color: EMERALD }} />
                      {d.result}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Feedback + reinforcement */}
          <div className="grid sm:grid-cols-2 gap-3 mt-5">
            <Card className="border-blue-100">
              <CardContent className="p-4">
                <p className="text-xs font-semibold uppercase tracking-wide mb-1.5 flex items-center gap-1.5" style={{ color: BLUE_DARK }}>
                  <Bell className="size-3.5" /> Ciclo de retroalimentación
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{weekData.feedback}</p>
              </CardContent>
            </Card>
            <Card className="border-amber-200">
              <CardContent className="p-4">
                <p className="text-xs font-semibold uppercase tracking-wide mb-1.5 flex items-center gap-1.5" style={{ color: AMBER }}>
                  <Award className="size-3.5" /> Reforzamiento positivo
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{weekData.reinforcement}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ===================== SEGMENTATION JOURNEY ===================== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle
          kicker="Segmentación"
          title="Evolución del cliente objetivo"
          desc="Cómo evoluciona el ICP (Ideal Customer Profile) semana a semana: del early adopter local al reseller regional B2B."
        />
        <div className="space-y-2.5">
          {CALENDAR.map((w) => (
            <motion.div
              key={w.week}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-20px' }}
              className={`rounded-xl border p-4 cursor-pointer transition-all ${selectedWeek === w.week ? 'border-blue-400 ring-2 ring-blue-100' : 'border-blue-100 hover:shadow-sm'}`}
              onClick={() => setSelectedWeek(w.week)}
            >
              <div className="grid md:grid-cols-[80px_1fr_1fr_1fr] gap-3 items-start">
                <div>
                  <p className="text-xs text-muted-foreground">Semana</p>
                  <p className="text-2xl font-bold" style={{ color: BLUE }}>{w.week}</p>
                  <p className="text-[10px] text-muted-foreground">{w.dates}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground mb-0.5">Persona</p>
                  <p className="text-sm font-semibold" style={{ color: INK }}>{w.segmentation.persona}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground mb-0.5">Geo</p>
                  <p className="text-sm" style={{ color: GRAPHITE }}>{w.segmentation.geo}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground mb-0.5">Foco canal</p>
                  <p className="text-sm" style={{ color: BLUE_DARK }}>{w.segmentation.channelFocus}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== KEY DATES ===================== */}
      <section className="w-full" style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionTitle
            kicker="Calendario"
            title="Fechas nacionales y comerciales"
            desc="Fechas relevantes para el comercio LATAM durante Q3. Cada fecha tiene una acción de marketing específica."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {KEY_DATES.map((d, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-20px' }}
              >
                <Card className="border-blue-100 h-full">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-lg font-bold" style={{ color: BLUE }}>{d.date}</p>
                        <Badge variant="outline" className="text-[10px] mt-0.5">{d.type}</Badge>
                      </div>
                      <Badge className="border-0" style={{ background: AMBER_LIGHT, color: INK }}>{d.country}</Badge>
                    </div>
                    <p className="font-semibold text-sm mb-1" style={{ color: INK }}>{d.name}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{d.action}</p>
                    <p className="text-[10px] text-muted-foreground mt-2">Semana {d.week}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FEEDBACK CYCLES ===================== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle
          kicker="Cultura de feedback"
          title="Ciclos de retroalimentación"
          desc="5 rituales recurrentes que garantizan iteración rápida, alineación y aprendizaje continuo."
        />
        <div className="grid md:grid-cols-2 gap-4">
          {FEEDBACK_CYCLES.map((c, i) => (
            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-20px' }}>
              <Card className="border-blue-100 h-full">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="border-0 text-white" style={{ background: BLUE }}>{c.cadence}</Badge>
                    <h3 className="font-bold text-base" style={{ color: INK }}>{c.ritual}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2"><span className="font-medium">Participantes:</span> {c.participants}</p>
                  <p className="text-xs text-muted-foreground mb-3"><span className="font-medium">Objetivo:</span> {c.goal}</p>
                  <div className="rounded-lg p-3 mb-2" style={{ background: SAND }}>
                    <p className="text-[10px] uppercase tracking-wide text-muted-foreground mb-1">Preguntas clave</p>
                    <ul className="space-y-0.5">
                      {c.questions.map((q) => (
                        <li key={q} className="text-xs flex items-start gap-1.5" style={{ color: INK }}>
                          <ChevronRight className="size-3 mt-0.5 shrink-0" style={{ color: AMBER }} />
                          {q}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-[11px] text-muted-foreground"><span className="font-medium">Output:</span> {c.output}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Reinforcement actions */}
        <Card className="mt-6 border-amber-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base"><Award className="size-4" style={{ color: AMBER }} /> Reforzamientos positivos</CardTitle>
            <CardDescription>Acciones concretas para celebrar wins y mantener el momentum</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left text-xs text-muted-foreground">
                    <th className="px-5 py-3 font-medium">Cuándo</th>
                    <th className="px-5 py-3 font-medium">Acción</th>
                    <th className="px-5 py-3 font-medium">A quién</th>
                    <th className="px-5 py-3 font-medium">Impacto</th>
                  </tr>
                </thead>
                <tbody>
                  {REINFORCEMENT_ACTIONS.map((r, i) => (
                    <tr key={i} className="border-b last:border-0 hover:bg-amber-50/30">
                      <td className="px-5 py-3 font-semibold align-top whitespace-nowrap" style={{ color: BLUE_DARK }}>{r.when}</td>
                      <td className="px-5 py-3 align-top" style={{ color: INK }}>{r.action}</td>
                      <td className="px-5 py-3 align-top text-muted-foreground">{r.target}</td>
                      <td className="px-5 py-3 align-top text-xs" style={{ color: EMERALD }}>{r.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ===================== MISSION TO EMPLOYEES ===================== */}
      <section className="w-full" style={{ background: `linear-gradient(135deg, ${INK} 0%, ${BLUE_DARK} 100%)` }}>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-10">
            <Badge className="border-0 text-amber-950 mb-4" style={{ background: AMBER_LIGHT }}>
              <Heart className="size-3 mr-1" /> Cultura interna
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">Cómo vender la misión y visión al equipo</h2>
            <p className="text-white/70 mt-3 max-w-2xl mx-auto">{MISSION_PLAN.why}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <Card className="border-0" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <CardContent className="p-5">
                <p className="text-xs uppercase tracking-wide text-white/50 mb-1.5">Misión</p>
                <p className="text-white text-base leading-relaxed">{MISSION_PLAN.mission}</p>
              </CardContent>
            </Card>
            <Card className="border-0" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <CardContent className="p-5">
                <p className="text-xs uppercase tracking-wide text-white/50 mb-1.5">Visión</p>
                <p className="text-white text-base leading-relaxed">{MISSION_PLAN.vision}</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-3 mb-8">
            {MISSION_PLAN.rituals.map((r, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-20px' }}
                className="rounded-2xl p-5 ring-1 ring-white/15"
                style={{ background: 'rgba(255,255,255,0.05)' }}
              >
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="size-7 rounded-lg grid place-items-center text-xs font-bold shrink-0" style={{ background: AMBER_LIGHT, color: INK }}>{i + 1}</span>
                  <h3 className="font-bold text-white text-base">{r.name}</h3>
                  <Badge className="border-0 text-amber-950" style={{ background: AMBER_LIGHT }}>{r.when}</Badge>
                </div>
                <p className="text-sm text-white/80 leading-relaxed mb-2">{r.how}</p>
                <div className="rounded-lg p-2.5" style={{ background: 'rgba(0,0,0,0.25)' }}>
                  <p className="text-[10px] uppercase tracking-wide text-white/40 mb-0.5">Artefacto</p>
                  <p className="text-xs text-white/70">{r.artifact}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Artifacts */}
          <Card className="border-0 mb-6" style={{ background: 'rgba(255,255,255,0.05)' }}>
            <CardHeader><CardTitle className="text-base text-white flex items-center gap-2"><BookOpen className="size-4" style={{ color: AMBER_LIGHT }} /> Artefactos de cultura</CardTitle></CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-3">
              {MISSION_PLAN.artifacts.map((a) => (
                <div key={a.name} className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <p className="font-semibold text-sm text-white">{a.name}</p>
                  <p className="text-[11px] text-white/50 mb-1"><span className="font-medium">Dónde:</span> {a.where}</p>
                  <p className="text-[11px] text-white/70">{a.purpose}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* KPIs */}
          <Card className="border-0" style={{ background: 'rgba(255,255,255,0.05)' }}>
            <CardHeader><CardTitle className="text-base text-white flex items-center gap-2"><Sparkles className="size-4" style={{ color: AMBER_LIGHT }} /> KPIs de cultura interna</CardTitle></CardHeader>
            <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {Object.entries(MISSION_PLAN.kpis).map(([k, v]) => (
                <div key={k} className="rounded-xl p-3 text-center" style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <p className="text-[10px] uppercase tracking-wide text-white/50 mb-1">{k}</p>
                  <p className="text-sm font-bold" style={{ color: AMBER_LIGHT }}>{v}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t" style={{ background: INK, borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 text-center">
          <p className="text-white font-semibold text-sm">FichoX · Plan de Marketing Q3 2025</p>
          <p className="text-white/50 text-xs mt-1">{MKT_QUARTER.startDate} → {MKT_QUARTER.endDate} · {MKT_QUARTER.weeks} semanas · {MKT_QUARTER.goal}</p>
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

function MiniStat({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div className="rounded-lg px-2 py-1.5" style={{ background: color + '15' }}>
      <p className="text-base font-bold leading-none" style={{ color }}>{value}</p>
      <p className="text-[10px] text-muted-foreground mt-0.5">{label}</p>
    </div>
  )
}

function SegRow({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="flex items-start gap-1.5">
      <Icon className="size-3.5 mt-0.5 shrink-0" style={{ color: BLUE }} />
      <div>
        <span className="text-muted-foreground">{label}: </span>
        <span style={{ color: INK }}>{value}</span>
      </div>
    </div>
  )
}
