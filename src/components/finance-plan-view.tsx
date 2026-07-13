'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Handshake, DollarSign, Building2, Landmark, Coins, TrendingUp, Shield,
  Wallet, Banknote, Users, Target, Award, CheckCircle2, XCircle, AlertTriangle,
  Sparkles, ArrowUpRight, PieChart, Lock, Globe2, Scale, Briefcase,
} from 'lucide-react'
import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine, Area, AreaChart, Legend, Cell,
  PieChart as RechartsPieChart, Pie,
} from 'recharts'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  FIN_QUARTER, ALLIANCES, FUNDING_SOURCES, CAPITAL_PATHS, TREASURY,
  CREDIT_APPLICATIONS, INVESTMENT_ALLOCATION, CAPITAL_TIMELINE,
  DILUTION_PROJECTION, FUNDING_MILESTONES,
} from '@/lib/finance-data'

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
  'Tecnológica': BLUE,
  'Distribución': EMERALD,
  'Co-marketing': AMBER,
  'Reseller': PURPLE,
  'Canal': BLUE_LIGHT,
  'Gobierno': INK,
  'Financiera': ROSE,
}

const STATUS_COLORS: Record<string, string> = {
  'Existente': EMERALD,
  'Target Q3': BLUE,
  'Target Q4': AMBER,
  'Target 2026': GRAPHITE,
}

const PRIORITY_COLORS: Record<string, string> = {
  'Crítica': ROSE,
  'Alta': AMBER,
  'Media': BLUE,
  'Baja': GRAPHITE,
}

const ALLOC_COLORS = [BLUE, AMBER, PURPLE, EMERALD, GRAPHITE]

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

export function FinancePlanView() {
  const [selectedFunding, setSelectedFunding] = useState<number>(0)
  const funding = FUNDING_SOURCES[selectedFunding]

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
              <Landmark className="size-3" /> {FIN_QUARTER.name}
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
              Plan Financiero
              <span className="block mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold" style={{ color: AMBER_LIGHT }}>
                Alianzas, financiamiento y capitalización
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
              {FIN_QUARTER.mission}.
              <span className="block mt-2 text-white/60 text-sm">North star: {FIN_QUARTER.northStar}</span>
            </p>

            <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
              <HeroStat value="$250K" label="Capital Q3-Q4" />
              <HeroStat value="15" label="Alianzas mapeadas" />
              <HeroStat value="18 meses" label="Runway target" />
              <HeroStat value="0%" label="Dilución hasta Serie A" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== ALLIANCES MAP ===================== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle
          kicker="Alianzas y socios"
          title="15 alianzas estratégicas"
          desc="Mapa de socios por categoría (tecnológica, distribución, co-marketing, reseller, gobierno, financiera) con estado, prioridad e impacto esperado."
        />

        {/* Summary stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <Card className="border-blue-100"><CardContent className="p-4"><p className="text-2xl font-bold" style={{ color: EMERALD }}>{ALLIANCES.filter(a => a.status === 'Existente').length}</p><p className="text-xs text-muted-foreground">Alianzas activas</p></CardContent></Card>
          <Card className="border-blue-100"><CardContent className="p-4"><p className="text-2xl font-bold" style={{ color: BLUE }}>{ALLIANCES.filter(a => a.status === 'Target Q3').length}</p><p className="text-xs text-muted-foreground">Target Q3 2025</p></CardContent></Card>
          <Card className="border-blue-100"><CardContent className="p-4"><p className="text-2xl font-bold" style={{ color: AMBER }}>{ALLIANCES.filter(a => a.priority === 'Crítica').length}</p><p className="text-xs text-muted-foreground">Prioridad crítica</p></CardContent></Card>
          <Card className="border-blue-100"><CardContent className="p-4"><p className="text-2xl font-bold" style={{ color: INK }}>{ALLIANCES.filter(a => a.category === 'Reseller').length}</p><p className="text-xs text-muted-foreground">Resellers B2B</p></CardContent></Card>
        </div>

        <Card className="border-blue-100 overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto max-h-[640px] overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-white z-10">
                  <tr className="border-b text-left text-xs text-muted-foreground">
                    <th className="px-4 py-3 font-medium">Socio</th>
                    <th className="px-4 py-3 font-medium">Categoría</th>
                    <th className="px-4 py-3 font-medium">Estado</th>
                    <th className="px-4 py-3 font-medium text-center">Prioridad</th>
                    <th className="px-4 py-3 font-medium">Qué aportan</th>
                    <th className="px-4 py-3 font-medium">Qué damos</th>
                    <th className="px-4 py-3 font-medium">Impacto esperado</th>
                  </tr>
                </thead>
                <tbody>
                  {ALLIANCES.map((a) => (
                    <tr key={a.id} className="border-b last:border-0 hover:bg-blue-50/30">
                      <td className="px-4 py-3 align-top font-semibold" style={{ color: INK }}>{a.partner}</td>
                      <td className="px-4 py-3 align-top"><span className="size-2 rounded-full inline-block mr-1.5" style={{ background: CATEGORY_COLORS[a.category] }} /><span className="text-xs">{a.category}</span></td>
                      <td className="px-4 py-3 align-top"><Badge className="border-0 text-[10px] text-white" style={{ background: STATUS_COLORS[a.status] }}>{a.status}</Badge></td>
                      <td className="px-4 py-3 align-top text-center"><Badge className="border-0 text-[10px] text-white" style={{ background: PRIORITY_COLORS[a.priority] }}>{a.priority}</Badge></td>
                      <td className="px-4 py-3 align-top text-xs text-muted-foreground">{a.whatTheyBring}</td>
                      <td className="px-4 py-3 align-top text-xs text-muted-foreground">{a.whatWeGive}</td>
                      <td className="px-4 py-3 align-top text-xs" style={{ color: BLUE_DARK }}>{a.expectedImpact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ===================== FUNDING SOURCES ===================== */}
      <section className="w-full" style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionTitle
            kicker="Fuentes de financiamiento"
            title="10 fuentes de capital escalonadas"
            desc="Estrategia por etapas: bootstrap → friends & family → grants → accelerator → angels → revenue-based → pre-seed VC. Cada una con monto, dilución, requisitos y timing."
          />

          {/* Funding funnel chart */}
          <Card className="border-blue-100 mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2"><DollarSign className="size-4" style={{ color: EMERALD }} /> Capital raising por etapa</CardTitle>
              <CardDescription>Barras: monto levantado · Línea: dilución acumulada del founder</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={CAPITAL_TIMELINE} margin={{ top: 8, right: 8, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                    <XAxis dataKey="month" tick={{ fontSize: 10, fill: GRAPHITE }} axisLine={false} tickLine={false} angle={-20} textAnchor="end" height={50} />
                    <YAxis yAxisId="left" tick={{ fontSize: 11, fill: GRAPHITE }} axisLine={false} tickLine={false} tickFormatter={(v) => v >= 1000 ? `$${v / 1000}k` : `$${v}`} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11, fill: GRAPHITE }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
                    <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e5e7eb', fontSize: 12 }} />
                    <Legend wrapperStyle={{ fontSize: 11 }} />
                    <Bar yAxisId="left" dataKey="amount" name="Capital levantado $" fill={EMERALD} radius={[3, 3, 0, 0]} maxBarSize={36} />
                    <Line yAxisId="right" type="monotone" dataKey="equity" name="Dilución %" stroke={ROSE} strokeWidth={2.5} dot={{ r: 3 }} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Funding sources selector + detail */}
          <div className="flex gap-1.5 flex-wrap mb-4">
            {FUNDING_SOURCES.map((f, i) => (
              <button
                key={f.id}
                onClick={() => setSelectedFunding(i)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${selectedFunding === i ? 'text-white shadow-sm' : 'bg-white text-muted-foreground hover:bg-blue-50'}`}
                style={selectedFunding === i ? { background: BLUE } : {}}
              >
                {f.name}
              </button>
            ))}
          </div>

          <Card className="border-blue-200">
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="text-[10px]" style={{ borderColor: BLUE, color: BLUE_DARK }}>{funding.type}</Badge>
                    <Badge variant="outline" className="text-[10px]" style={{ borderColor: AMBER, color: AMBER }}>{funding.stage}</Badge>
                  </div>
                  <CardTitle className="text-lg">{funding.name}</CardTitle>
                  <CardDescription>{funding.amountRange} · {funding.cost}</CardDescription>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs text-muted-foreground">Dilución</p>
                  <p className="text-2xl font-bold" style={{ color: funding.dilution > 0 ? ROSE : EMERALD }}>{funding.dilution > 0 ? `${funding.dilution}%` : '0%'}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5">Uso de fondos</p>
                  <p className="text-sm mb-3" style={{ color: INK }}>{funding.useOfFunds}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5">Timeline</p>
                  <p className="text-sm" style={{ color: INK }}>{funding.timeline}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5 mt-3">Estado</p>
                  <p className="text-sm" style={{ color: BLUE_DARK }}>{funding.status}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5">Requisitos</p>
                  <ul className="space-y-1 mb-3">
                    {funding.requirements.map((r) => (
                      <li key={r} className="flex items-start gap-1.5 text-xs" style={{ color: INK }}>
                        <CheckCircle2 className="size-3 mt-0.5 shrink-0" style={{ color: EMERALD }} />
                        {r}
                      </li>
                    ))}
                  </ul>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg p-2.5" style={{ background: '#ecfdf5' }}>
                      <p className="text-[10px] font-bold uppercase text-emerald-700 mb-1">Pros</p>
                      <ul className="space-y-0.5">
                        {funding.pros.map((p) => <li key={p} className="text-[10px] text-muted-foreground">✓ {p}</li>)}
                      </ul>
                    </div>
                    <div className="rounded-lg p-2.5" style={{ background: '#fff7ed' }}>
                      <p className="text-[10px] font-bold uppercase text-amber-700 mb-1">Contras</p>
                      <ul className="space-y-0.5">
                        {funding.cons.map((c) => <li key={c} className="text-[10px] text-muted-foreground">✗ {c}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===================== CREDIT APPLICATIONS ===================== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle
          kicker="Créditos y préstamos"
          title="6 opciones de deuda"
          desc="Líneas de crédito fintech, factoring, préstamos revenue-based y préstamos cripto-backed (DeFi). Ordenadas por cuándo aplicar."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CREDIT_APPLICATIONS.map((c) => (
            <motion.div key={c.id} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-20px' }}>
              <Card className="border-blue-100 h-full">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-sm" style={{ color: INK }}>{c.lender}</h3>
                    <Badge variant="outline" className="text-[10px] shrink-0">{c.type}</Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-3 text-center">
                    <div><p className="text-[9px] text-muted-foreground">Monto</p><p className="text-xs font-mono font-bold" style={{ color: BLUE }}>{c.amount}</p></div>
                    <div><p className="text-[9px] text-muted-foreground">Tasa</p><p className="text-xs font-mono font-bold" style={{ color: AMBER }}>{c.rate}</p></div>
                    <div><p className="text-[9px] text-muted-foreground">Plazo</p><p className="text-xs font-mono font-bold" style={{ color: INK }}>{c.term}</p></div>
                  </div>
                  <Separator className="my-2" />
                  <p className="text-[10px] text-muted-foreground mb-1"><span className="font-semibold">Requisitos:</span></p>
                  <ul className="space-y-0.5 mb-2">
                    {c.requirements.slice(0, 3).map((r) => (
                      <li key={r} className="text-[10px] flex items-start gap-1" style={{ color: INK }}>
                        <span className="size-1 rounded-full mt-1.5 shrink-0" style={{ background: BLUE }} />
                        {r}
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-lg p-2" style={{ background: SAND }}>
                    <p className="text-[10px]"><span className="text-muted-foreground">Aplicar:</span> <span className="font-semibold" style={{ color: BLUE_DARK }}>{c.whenToApply}</span></p>
                    <p className="text-[10px] mt-0.5"><span className="text-muted-foreground">Timeline:</span> <span style={{ color: INK }}>{c.timeline}</span></p>
                  </div>
                  <p className="text-[10px] mt-2 italic" style={{ color: GRAPHITE }}>{c.status}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== TREASURY MANAGEMENT ===================== */}
      <section className="w-full" style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionTitle
            kicker="Tesoro y liquidez"
            title="Gestión del tesoro: 4 buckets"
            desc={TREASURY.strategy}
          />

          <div className="grid lg:grid-cols-[1fr_1fr] gap-5 mb-6">
            {/* Allocation pie */}
            <Card className="border-blue-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2"><PieChart className="size-4" style={{ color: BLUE }} /> Asignación target</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[260px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie data={TREASURY.targetAllocation} dataKey="pct" nameKey="bucket" cx="50%" cy="50%" innerRadius={50} outerRadius={90} paddingAngle={3}>
                        {TREASURY.targetAllocation.map((_, i) => (
                          <Cell key={i} fill={ALLOC_COLORS[i % ALLOC_COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e5e7eb', fontSize: 12 }} formatter={(v: number, n: string) => [`${v}%`, n]} />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {TREASURY.targetAllocation.map((b, i) => (
                    <div key={b.bucket} className="flex items-center gap-1.5 text-[10px]">
                      <span className="size-2 rounded-full shrink-0" style={{ background: ALLOC_COLORS[i] }} />
                      <span className="text-muted-foreground truncate">{b.bucket}</span>
                      <span className="font-mono font-bold ml-auto" style={{ color: INK }}>{b.pct}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Buckets detail */}
            <Card className="border-blue-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2"><Wallet className="size-4" style={{ color: AMBER }} /> Detalle de buckets</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {TREASURY.targetAllocation.map((b, i) => (
                  <div key={b.bucket} className="rounded-lg p-2.5" style={{ background: '#ffffff', borderLeft: `3px solid ${ALLOC_COLORS[i]}` }}>
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <p className="font-semibold text-xs" style={{ color: INK }}>{b.bucket}</p>
                      <Badge variant="outline" className="text-[9px]">{b.risk}</Badge>
                    </div>
                    <p className="text-[10px] text-muted-foreground mb-1">{b.purpose}</p>
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-muted-foreground">Yield: <span className="font-mono font-bold" style={{ color: EMERALD }}>{b.yield}%</span></span>
                      <span className="text-muted-foreground">Tools: <span style={{ color: BLUE_DARK }}>{b.tools}</span></span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Collateral strategy */}
          <Card className="border-purple-200 mb-6" style={{ background: '#faf5ff' }}>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2"><Lock className="size-4" style={{ color: PURPLE }} /> Estrategia de colateral cripto</CardTitle>
              <CardDescription>{TREASURY.collateralStrategy.concept}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: EMERALD }}>Beneficios</p>
                  <ul className="space-y-1 mb-3">
                    {TREASURY.collateralStrategy.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-1.5 text-xs" style={{ color: INK }}>
                        <CheckCircle2 className="size-3 mt-0.5 shrink-0" style={{ color: EMERALD }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: ROSE }}>Riesgos</p>
                  <ul className="space-y-1">
                    {TREASURY.collateralStrategy.risks.map((r) => (
                      <li key={r} className="flex items-start gap-1.5 text-xs" style={{ color: INK }}>
                        <AlertTriangle className="size-3 mt-0.5 shrink-0" style={{ color: ROSE }} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: BLUE_DARK }}>Mitigaciones</p>
                  <ul className="space-y-1">
                    {TREASURY.collateralStrategy.mitigations.map((m) => (
                      <li key={m} className="flex items-start gap-1.5 text-xs" style={{ color: INK }}>
                        <Shield className="size-3 mt-0.5 shrink-0" style={{ color: BLUE }} />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Liquidity tiers */}
          <Card className="border-blue-100">
            <CardHeader><CardTitle className="text-base flex items-center gap-2"><Coins className="size-4" style={{ color: AMBER }} /> Niveles de liquidez</CardTitle></CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-left text-xs text-muted-foreground">
                      <th className="px-5 py-3 font-medium">Tier</th>
                      <th className="px-5 py-3 font-medium text-right">Monto</th>
                      <th className="px-5 py-3 font-medium">Fuente</th>
                      <th className="px-5 py-3 font-medium">Caso de uso</th>
                      <th className="px-5 py-3 font-medium">Acceso</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TREASURY.liquidityTiers.map((t) => (
                      <tr key={t.tier} className="border-b last:border-0 hover:bg-blue-50/30">
                        <td className="px-5 py-3 font-semibold align-top" style={{ color: BLUE_DARK }}>{t.tier}</td>
                        <td className="px-5 py-3 align-top text-right font-mono font-bold" style={{ color: INK }}>{t.amount}</td>
                        <td className="px-5 py-3 align-top text-xs">{t.source}</td>
                        <td className="px-5 py-3 align-top text-xs text-muted-foreground">{t.useCase}</td>
                        <td className="px-5 py-3 align-top"><Badge variant="outline" className="text-[10px]">{t.timeToAccess}</Badge></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===================== CAPITAL MARKETS PATHS ===================== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle
          kicker="Capitalización bursátil"
          title="5 caminos al mercado de capitales"
          desc="Caminos a largo plazo (2027+): Serie A regional, tokenización cripto, SPAC, IPO directo en B3/BVC, o adquisición estratégica. Cada uno con valoración, dilución y evaluación realista."
        />

        <div className="grid lg:grid-cols-2 gap-4">
          {CAPITAL_PATHS.map((p) => {
            const priorityColor = p.priority === 'Optimistic' ? EMERALD : p.priority === 'Realistic' ? BLUE : AMBER
            return (
              <motion.div key={p.path} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-20px' }}>
                <Card className="border-blue-100 h-full">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-bold text-base" style={{ color: INK }}>{p.path}</h3>
                      <Badge className="border-0 text-[10px] text-white shrink-0" style={{ background: priorityColor }}>{p.priority}</Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-3 text-center">
                      <div><p className="text-[9px] text-muted-foreground">Timeline</p><p className="text-xs font-mono font-bold" style={{ color: INK }}>{p.timeline}</p></div>
                      <div><p className="text-[9px] text-muted-foreground">Market cap</p><p className="text-xs font-mono font-bold" style={{ color: BLUE }}>{p.marketCap}</p></div>
                      <div><p className="text-[9px] text-muted-foreground">Dilución</p><p className="text-xs font-mono font-bold" style={{ color: ROSE }}>{p.dilution}</p></div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2"><span className="font-semibold">Evaluación realista:</span> {p.realisticAssessment}</p>
                    <Separator className="my-2" />
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-[10px] font-bold uppercase mb-1" style={{ color: EMERALD }}>Pros</p>
                        <ul className="space-y-0.5">
                          {p.pros.map((x) => <li key={x} className="text-[10px] text-muted-foreground">✓ {x}</li>)}
                        </ul>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase mb-1" style={{ color: ROSE }}>Contras</p>
                        <ul className="space-y-0.5">
                          {p.cons.map((x) => <li key={x} className="text-[10px] text-muted-foreground">✗ {x}</li>)}
                        </ul>
                      </div>
                    </div>
                    <Separator className="my-2" />
                    <p className="text-[10px] font-bold uppercase mb-1" style={{ color: BLUE_DARK }}>Requisitos</p>
                    <div className="flex flex-wrap gap-1">
                      {p.requirements.map((r) => <span key={r} className="text-[9px] px-1.5 py-0.5 rounded bg-blue-50" style={{ color: BLUE_DARK }}>{r}</span>)}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ===================== DILUTION & INVESTMENT ALLOCATION ===================== */}
      <section className="w-full" style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionTitle
            kicker="Cap table & uso de fondos"
            title="Dilución proyectada y asignación de capital"
            desc="Cómo evoluciona la participación del founder con cada ronda, y cómo se asigna el capital levantado."
          />

          <div className="grid lg:grid-cols-2 gap-5 mb-6">
            {/* Dilution chart */}
            <Card className="border-blue-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2"><Scale className="size-4" style={{ color: ROSE }} /> Dilución del founder por ronda</CardTitle>
                <CardDescription>% del founder vs inversores tras cada ronda</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[260px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={DILUTION_PROJECTION} margin={{ top: 8, right: 8, left: -10, bottom: 30 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                      <XAxis dataKey="stage" tick={{ fontSize: 10, fill: GRAPHITE }} axisLine={false} tickLine={false} angle={-25} textAnchor="end" height={60} />
                      <YAxis tick={{ fontSize: 11, fill: GRAPHITE }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
                      <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e5e7eb', fontSize: 12 }} formatter={(v: number) => [`${v}%`, '']} />
                      <Legend wrapperStyle={{ fontSize: 11 }} />
                      <Bar dataKey="founderOwnership" name="Founder" stackId="a" fill={BLUE} radius={[0, 0, 0, 0]} maxBarSize={40} />
                      <Bar dataKey="investorsOwnership" name="Inversores" stackId="a" fill={AMBER} radius={[3, 3, 0, 0]} maxBarSize={40} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-[10px] text-muted-foreground text-center mt-2">El founder termina con ~46% post-Serie A — sano si control {'>'}40%</p>
              </CardContent>
            </Card>

            {/* Investment allocation */}
            <Card className="border-blue-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2"><Briefcase className="size-4" style={{ color: EMERALD }} /> Asignación de capital levantado</CardTitle>
                <CardDescription>Cómo se invierte cada dólar levantado</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[260px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie data={INVESTMENT_ALLOCATION} dataKey="pct" nameKey="category" cx="50%" cy="50%" innerRadius={50} outerRadius={90} paddingAngle={3}>
                        {INVESTMENT_ALLOCATION.map((_, i) => (
                          <Cell key={i} fill={ALLOC_COLORS[i % ALLOC_COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e5e7eb', fontSize: 12 }} formatter={(v: number, n: string) => [`${v}%`, n]} />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-1.5 mt-2">
                  {INVESTMENT_ALLOCATION.map((a, i) => (
                    <div key={a.category} className="flex items-center gap-2 text-[10px]">
                      <span className="size-2 rounded-full shrink-0" style={{ background: ALLOC_COLORS[i] }} />
                      <span className="text-muted-foreground flex-1">{a.category}</span>
                      <span className="font-mono font-bold" style={{ color: INK }}>{a.pct}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Allocation rationale */}
          <Card className="border-blue-100">
            <CardHeader><CardTitle className="text-base">Racional de asignación</CardTitle></CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-left text-xs text-muted-foreground">
                      <th className="px-5 py-3 font-medium">Categoría</th>
                      <th className="px-5 py-3 font-medium text-center">%</th>
                      <th className="px-5 py-3 font-medium">Ítems</th>
                      <th className="px-5 py-3 font-medium">Racional</th>
                    </tr>
                  </thead>
                  <tbody>
                    {INVESTMENT_ALLOCATION.map((a, i) => (
                      <tr key={a.category} className="border-b last:border-0 hover:bg-blue-50/30">
                        <td className="px-5 py-3 align-top"><span className="size-2 rounded-full inline-block mr-1.5" style={{ background: ALLOC_COLORS[i] }} /><span className="font-semibold" style={{ color: INK }}>{a.category}</span></td>
                        <td className="px-5 py-3 align-top text-center font-mono font-bold" style={{ color: BLUE_DARK }}>{a.pct}%</td>
                        <td className="px-5 py-3 align-top text-xs">{a.items}</td>
                        <td className="px-5 py-3 align-top text-xs text-muted-foreground">{a.rationale}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===================== FUNDING MILESTONES ===================== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle
          kicker="Hitos por etapa"
          title="Triggers para cada ronda de financiamiento"
          desc="Cada fuente de capital requiere un nivel de tracción distinto. Estos son los hitos que desbloquean cada ronda."
        />

        <div className="space-y-2">
          {FUNDING_MILESTONES.map((m, i) => (
            <motion.div
              key={m.stage}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-10px' }}
              transition={{ delay: i * 0.03 }}
              className="rounded-xl border border-blue-100 bg-white p-4 flex flex-wrap items-center gap-3"
            >
              <div className="w-32 shrink-0">
                <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Etapa</p>
                <p className="font-bold text-sm" style={{ color: BLUE_DARK }}>{m.stage}</p>
              </div>
              <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <MilestoneItem label="MRR" value={m.mrr} />
                <MilestoneItem label="Clientes" value={`${m.customers}`} />
                <MilestoneItem label="Equipo" value={`${m.team}`} />
                <MilestoneItem label="Trigger" value={m.trigger} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== CLOSING ===================== */}
      <section className="mx-auto max-w-6xl w-full px-4 sm:px-6 py-14 sm:py-20">
        <Card className="overflow-hidden border-0" style={{ background: `linear-gradient(135deg, ${BLUE_DARK}, ${INK})` }}>
          <CardContent className="p-8 sm:p-12 text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Landmark className="size-10 mx-auto mb-4" style={{ color: AMBER_LIGHT }} />
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                $1.2M+ capital raising · 15 alianzas · 5 caminos bursátiles
              </h2>
              <p className="text-white/75 mt-3 max-w-2xl mx-auto">
                Plan financiero por etapas que minimiza dilución (founder termina con ~46% post-Serie A),
                maximiza runway (18+ meses) y abre 5 caminos de capitalización bursátil a largo plazo.
                El tesoro diversificado (USDC + T-bills + colateral cripto) genera yield mientras da liquidez.
              </p>
              <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
                <ClosingStat value="$1.2M+" label="capital Q3-Q4 2026" />
                <ClosingStat value="15" label="alianzas" />
                <ClosingStat value="46%" label="founder post-Serie A" />
                <ClosingStat value="18m" label="runway target" />
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t" style={{ background: INK, borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 text-center">
          <p className="text-white font-semibold text-sm">FichoX · Plan Financiero & Alianzas Q3 2025</p>
          <p className="text-white/50 text-xs mt-1">Coherente con Plan de Negocio + Operativo + Automatización · Jurisdicción Panamá</p>
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

function MilestoneItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="text-sm font-semibold" style={{ color: INK }}>{value}</p>
    </div>
  )
}
