'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles, Wallet, TrendingUp, Target, Palette, Megaphone,
  Instagram, Video, MessageCircle, Gift, ShoppingCart, Check,
  ArrowUpRight, Users, DollarSign, Percent, Gauge, ShieldCheck,
  Building2, Lightbulb, Handshake, Wrench, Cog, Boxes, Banknote,
  Star, Zap, Globe2, Layers,
} from 'lucide-react'
import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine, Area, AreaChart, Legend,
} from 'recharts'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  BRAND, PALETTE, PRICING, FINANCE, TOTAL_FIXED, CONTRIBUTION_MARGIN,
  BREAKEVEN_CUSTOMERS, SAFE_BUFFER_CUSTOMERS, PAYBACK_MONTHS, AVG_LIFETIME_MONTHS,
  LTV, LTV_CAC, GROSS_MARGIN, PROJECTION, OPERATING_BREAKEVEN_MONTH,
  CUMULATIVE_BREAKEVEN_MONTH, CANVAS, MARKETING_CHANNELS, GROWTH_TARGETS,
} from '@/lib/business-data'

const BLUE = '#1d4ed8'
const BLUE_DARK = '#1e3a8a'
const BLUE_LIGHT = '#3b82f6'
const AMBER = '#f59e0b'
const AMBER_LIGHT = '#fbbf24'
const INK = '#0b1220'
const SAND = '#f7f5f0'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Instagram, Video, MessageCircle, Megaphone, Gift, ShoppingCart,
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
}

function Stat({
  icon: Icon, label, value, sub, accent,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string; value: string; sub?: string; accent?: 'blue' | 'amber'
}) {
  const ring = accent === 'amber' ? 'border-amber-200 bg-amber-50' : 'border-blue-200 bg-blue-50'
  const fg = accent === 'amber' ? 'text-amber-600' : 'text-blue-600'
  return (
    <div className={`rounded-2xl border ${ring} p-4 sm:p-5`}>
      <div className="flex items-center gap-2 mb-1.5">
        <Icon className={`size-4 ${fg}`} />
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{label}</span>
      </div>
      <p className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">{value}</p>
      {sub && <p className="text-xs text-muted-foreground mt-1">{sub}</p>}
    </div>
  )
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

export function BusinessPlanView() {
  const [hoveredColor, setHoveredColor] = useState<string | null>(null)

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ===================== STICKY HEADER ===================== */}
      <header className="sticky top-0 z-50 border-b border-blue-100/70 bg-white/85 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <img src={BRAND.logo} alt="Logo FichoX" className="size-8 sm:size-9 rounded-xl object-cover ring-1 ring-blue-200" />
            <div className="leading-tight">
              <p className="font-bold text-sm sm:text-base" style={{ color: INK }}>{BRAND.name}</p>
              <p className="text-[10px] sm:text-[11px] text-muted-foreground -mt-0.5">Plan de Negocio · {BRAND.platform}</p>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-1 text-sm">
            {[
              ['Modelo', '#modelo'],
              ['Marketing', '#marketing'],
              ['Finanzas', '#finanzas'],
              ['Breakeven', '#breakeven'],
              ['ROI', '#roi'],
              ['Marca', '#marca'],
            ].map(([label, href]) => (
              <a key={href} href={href} className="px-3 py-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-blue-50 transition-colors">{label}</a>
            ))}
          </nav>
          <a
            href="#roi"
            className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition-transform hover:scale-105"
            style={{ background: BLUE }}
          >
            <Zap className="size-3.5" />
            Ver proyección
          </a>
        </div>
      </header>

      {/* ===================== HERO ===================== */}
      <section id="top" className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${INK} 0%, ${BLUE_DARK} 100%)` }}>
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="absolute -top-24 -right-24 size-72 rounded-full blur-3xl opacity-30" style={{ background: AMBER }} />
        <div className="absolute -bottom-32 -left-20 size-80 rounded-full blur-3xl opacity-20" style={{ background: BLUE_LIGHT }} />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20 lg:py-24">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center">
            <div>
              <Badge className="mb-5 border-0 text-amber-950 gap-1.5" style={{ background: AMBER_LIGHT }}>
                <Sparkles className="size-3" /> SaaS con IA · LATAM · Pagos USDT/BSC
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
                {BRAND.name}
                <span className="block mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold" style={{ color: AMBER_LIGHT }}>
                  {BRAND.tagline}
                </span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-white/80 max-w-xl leading-relaxed">
                {BRAND.promise} Inventario + ficha técnica + publicación a Instagram y
                MercadoLibre, todo desde el celular.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <div className="rounded-xl bg-white/10 ring-1 ring-white/20 px-4 py-2.5">
                  <p className="text-[11px] text-white/60 uppercase tracking-wide">Breakeven operativo</p>
                  <p className="text-xl font-bold text-white">{BREAKEVEN_CUSTOMERS} clientes</p>
                </div>
                <div className="rounded-xl bg-white/10 ring-1 ring-white/20 px-4 py-2.5">
                  <p className="text-[11px] text-white/60 uppercase tracking-wide">Margen bruto</p>
                  <p className="text-xl font-bold text-white">{(GROSS_MARGIN * 100).toFixed(0)}%</p>
                </div>
                <div className="rounded-xl bg-white/10 ring-1 ring-white/20 px-4 py-2.5">
                  <p className="text-[11px] text-white/60 uppercase tracking-wide">Payback CAC</p>
                  <p className="text-xl font-bold text-white">{PAYBACK_MONTHS.toFixed(1)} meses</p>
                </div>
                <div className="rounded-xl bg-white/10 ring-1 ring-white/20 px-4 py-2.5">
                  <p className="text-[11px] text-white/60 uppercase tracking-wide">LTV : CAC</p>
                  <p className="text-xl font-bold text-white">{LTV_CAC.toFixed(0)}:1</p>
                </div>
              </div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 rounded-[2rem] blur-2xl opacity-40" style={{ background: BLUE_LIGHT }} />
                <div className="relative rounded-[2rem] bg-white p-5 sm:p-7 shadow-2xl ring-1 ring-white/40 max-w-xs">
                  <img src={BRAND.logo} alt={`Logo ${BRAND.name}`} className="w-full aspect-square rounded-2xl object-cover ring-1 ring-blue-100" />
                  <div className="mt-4 text-center">
                    <p className="text-lg font-bold" style={{ color: INK }}>{BRAND.name}</p>
                    <p className="text-xs text-muted-foreground">Identidad de marca · Azul + Amber</p>
                  </div>
                  <div className="mt-4 flex gap-2 justify-center">
                    {[BLUE, AMBER, INK, SAND].map((c) => (
                      <span key={c} className="size-5 rounded-full ring-1 ring-black/10" style={{ background: c }} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="relative border-t border-white/10" style={{ background: 'rgba(0,0,0,0.18)' }}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex flex-wrap items-center gap-x-6 gap-y-1.5 text-xs text-white/70">
            <span className="flex items-center gap-1.5"><Building2 className="size-3.5" /> Jurisdicción: {BRAND.jurisdiction}</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="size-3.5" /> No requiere licencia VASP</span>
            <span className="flex items-center gap-1.5"><Globe2 className="size-3.5" /> Basado en código real de <span className="font-mono text-white/90">yosietserga/fichox</span></span>
          </div>
        </div>
      </section>

      {/* ===================== EXECUTIVE SUMMARY ===================== */}
      <section className="mx-auto max-w-6xl w-full px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle
          kicker="Resumen ejecutivo"
          title="Un producto que nace del código, no de un slide"
          desc="FichoX es una app mobile-first que convierte una foto en una ficha técnica vendible. El producto YA está construido — este plan define cómo monetizarlo y escalarlo."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Stat icon={Users} label="Cliente objetivo" value="Revendedores VE/LATAM" sub="Comerciantes de Instagram + MercadoLibre" />
          <Stat icon={DollarSign} label="ARPU mensual blendado" value={`$${FINANCE.arpu.toFixed(2)}`} sub="55% mensual · 45% anual" accent="amber" />
          <Stat icon={Target} label="Meta de breakeven" value={`${BREAKEVEN_CUSTOMERS} clientes`} sub={`Búfer seguro: ${SAFE_BUFFER_CUSTOMERS} clientes`} />
          <Stat icon={TrendingUp} label="Breakeven acumulado" value={`Mes ${CUMULATIVE_BREAKEVEN_MONTH}`} sub={`Operativo desde mes ${OPERATING_BREAKEVEN_MONTH}`} />
        </div>

        <Card className="mt-6 overflow-hidden border-blue-100">
          <CardContent className="p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <div className="size-9 rounded-xl grid place-items-center shrink-0" style={{ background: SAND }}>
                <Lightbulb className="size-5" style={{ color: AMBER }} />
              </div>
              <div className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">La tesis:</span> el comerciante venezolano ya vende por
                Instagram y MercadoLibre, pero pierde horas escribiendo descripciones, convirtiendo precios
                USD/Bs y limpiando fotos. FichoX elimina ese trabajo con IA en el celular, cobra en USDT
                (sin tarjetas ni fronteras) y ofrece <span className="font-semibold text-foreground">márgenes del {(GROSS_MARGIN * 100).toFixed(0)}%</span>
                con un costo variable por cliente de solo ${FINANCE.variableCostPerCustomer}/mes. Con {BREAKEVEN_CUSTOMERS} clientes
                pagando, el negocio cubre todos sus costos operativos mensuales.
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ===================== BUSINESS MODEL CANVAS ===================== */}
      <section id="modelo" className="w-full" style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionTitle
            kicker="Modelo de negocio"
            title="Business Model Canvas"
            desc="Nueve bloques mapeados directamente a las funciones que ya existen en el código: captura IA, publicación IG/MELI, dashboard, chats, white-label y suscripción USDT."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CanvasBlock icon={Star} title="Propuesta de valor" items={CANVAS.valueProps} highlight />
            <CanvasBlock icon={Users} title="Segmentos de cliente" items={CANVAS.segments} />
            <CanvasBlock icon={Globe2} title="Canales" items={CANVAS.channels} />
            <CanvasBlock icon={Handshake} title="Relaciones con cliente" items={CANVAS.relationships} />
            <CanvasBlock icon={Banknote} title="Fuentes de ingreso" items={CANVAS.revenue} highlight />
            <CanvasBlock icon={Layers} title="Recursos clave" items={CANVAS.resources} />
            <CanvasBlock icon={Cog} title="Actividades clave" items={CANVAS.activities} />
            <CanvasBlock icon={Handshake} title="Socios clave" items={CANVAS.partners} />
            <CanvasBlock icon={Wrench} title="Estructura de costos" items={CANVAS.costs} />
          </div>
        </div>
      </section>

      {/* ===================== PRICING ===================== */}
      <section className="mx-auto max-w-6xl w-full px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle kicker="Modelo de ingresos" title="Suscripción SaaS en USDT" desc="Sin tarjetas, sin fronteras, sin comisiones. Pago on-chain en BSC, verificación automática vía BSCscan. Extraído de /api/subscription/route.ts." />
        <div className="grid md:grid-cols-2 gap-5">
          <PricingCard
            plan="Mensual"
            price={`$${PRICING.monthly.price}`}
            unit="USDT / 30 días"
            network={PRICING.monthly.network}
            features={['Capturas IA ilimitadas', 'Publicación IG + MercadoLibre', 'Dashboard + inventario', 'Chats con auto-respuesta', 'White-label incluido']}
            cta="Para validar el producto"
          />
          <PricingCard
            plan="Anual"
            price={`$${PRICING.annual.price}`}
            unit="USDT / 365 días"
            network={PRICING.annual.network}
            badge={`Ahorra $${PRICING.annual.savings}`}
            features={['Todo lo del plan mensual', '2 meses gratis', 'Video promocional 5s', 'Soporte prioritario WhatsApp', 'Onboarding personalizado']}
            cta="Recomendado · mejora ARPU"
            highlight
          />
        </div>
        <p className="text-center text-xs text-muted-foreground mt-4">
          Sin auto-cargo · Período de gracia de 5 días · Datos preservados 30 días post-vencimiento (según LEGAL.md)
        </p>
      </section>

      {/* ===================== MARKETING PLAN ===================== */}
      <section id="marketing" className="w-full border-y border-blue-100" style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionTitle
            kicker="Plan de marketing"
            title="Crecimiento mensual compuesto"
            desc="Estrategia低成本 en canales donde los comerciantes YA están (Instagram, WhatsApp, MercadoLibre). Combinación de orgánico (70%) + pago (15%) + viral (15%) para sostener 25-40% MoM en fase inicial."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {MARKETING_CHANNELS.map((ch) => {
              const Icon = iconMap[ch.icon] ?? Megaphone
              return (
                <Card key={ch.channel} className="border-blue-100/70 hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="size-9 rounded-xl grid place-items-center" style={{ background: BLUE, color: 'white' }}>
                        <Icon className="size-4.5" />
                      </div>
                      <Badge variant="outline" className="text-[11px]">{Math.round(ch.share * 100)}% de leads</Badge>
                    </div>
                    <h3 className="font-semibold text-sm mb-1.5">{ch.channel}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">{ch.tactic}</p>
                    <Separator className="my-2.5" />
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div><span className="text-muted-foreground">Presupuesto:</span> <span className="font-semibold">${ch.budget}/mes</span></div>
                      <div><span className="text-muted-foreground">Cadencia:</span> <span className="font-semibold">{ch.cadence}</span></div>
                    </div>
                    <p className="text-[11px] mt-2 text-blue-700 font-medium">KPI: {ch.kpi}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base"><Target className="size-4" style={{ color: AMBER }} /> Metas de crecimiento por fase</CardTitle>
              <CardDescription>Clientes pagos acumulados al final de cada fase</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-left text-xs text-muted-foreground">
                      <th className="px-5 py-3 font-medium">Fase</th>
                      <th className="px-5 py-3 font-medium">Meta de clientes</th>
                      <th className="px-5 py-3 font-medium">Foco táctico</th>
                    </tr>
                  </thead>
                  <tbody>
                    {GROWTH_TARGETS.map((g, i) => (
                      <tr key={g.phase} className={i % 2 ? 'bg-blue-50/40' : ''}>
                        <td className="px-5 py-3.5 font-semibold align-top whitespace-nowrap">{g.phase}</td>
                        <td className="px-5 py-3.5 align-top">
                          <Badge style={{ background: BLUE, color: 'white' }} className="border-0">{g.target}</Badge>
                        </td>
                        <td className="px-5 py-3.5 text-muted-foreground align-top">{g.focus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===================== UNIT ECONOMICS ===================== */}
      <section id="finanzas" className="mx-auto max-w-6xl w-full px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle kicker="Unit economics" title="Los números por cliente" desc="Modelo derivado del pricing real del código y estimaciones de costo de IA (z-ai SDK) por captura." />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Stat icon={DollarSign} label="ARPU mensual" value={`$${FINANCE.arpu.toFixed(2)}`} sub="Blendado 55/45" />
          <Stat icon={Wrench} label="Costo variable" value={`$${FINANCE.variableCostPerCustomer}`} sub="IA + storage / cliente / mes" accent="amber" />
          <Stat icon={Percent} label="Margen de contribución" value={`$${CONTRIBUTION_MARGIN.toFixed(2)}`} sub={`${(GROSS_MARGIN * 100).toFixed(0)}% margen bruto`} />
          <Stat icon={Users} label="CAC blendado" value={`$${FINANCE.cac}`} sub="Meta Ads + orgánico" accent="amber" />
          <Stat icon={Gauge} label="Payback CAC" value={`${PAYBACK_MONTHS.toFixed(2)} meses`} sub="~23 días para recuperar adquisición" />
          <Stat icon={TrendingUp} label="LTV por cliente" value={`$${LTV.toFixed(0)}`} sub={`Vida media ${AVG_LIFETIME_MONTHS.toFixed(1)} meses`} />
          <Stat icon={Star} label="LTV : CAC" value={`${LTV_CAC.toFixed(0)}:1`} sub="Sano si > 3:1" />
          <Stat icon={Banknote} label="Costos fijos / mes" value={`$${TOTAL_FIXED}`} sub="Hosting + operador + ads baseline" accent="amber" />
        </div>

        <Card className="mt-6 border-blue-100">
          <CardHeader>
            <CardTitle className="text-base">Desglose de costos fijos mensuales</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="grid sm:grid-cols-3 gap-x-6 gap-y-2 px-5 sm:px-6 pb-5 text-sm">
              {Object.entries(FINANCE.fixedCosts).map(([k, v]) => (
                <div key={k} className="flex items-center justify-between py-1.5 border-b border-dashed border-blue-100/70 last:border-0">
                  <span className="capitalize text-muted-foreground">{k}</span>
                  <span className="font-mono font-semibold">${v}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ===================== BREAKEVEN ===================== */}
      <section id="breakeven" className="w-full" style={{ background: `linear-gradient(135deg, ${INK} 0%, ${BLUE_DARK} 100%)` }}>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-10">
            <Badge className="border-0 text-amber-950 mb-4" style={{ background: AMBER_LIGHT }}>
              <Target className="size-3 mr-1" /> Meta optimizada
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">Punto de equilibrio</h2>
            <p className="text-white/70 mt-3 max-w-2xl mx-auto">
              Cantidad de clientes pagos necesarios para que los ingresos mensuales iguales los costos mensuales.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-6 items-stretch">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-3xl bg-white/[0.06] ring-1 ring-white/15 p-8 sm:p-10 flex flex-col justify-center">
              <p className="text-sm text-white/60 uppercase tracking-wider mb-2">Clientes para breakeven operativo</p>
              <div className="flex items-end gap-3">
                <span className="text-7xl sm:text-8xl font-bold leading-none" style={{ color: AMBER_LIGHT }}>{BREAKEVEN_CUSTOMERS}</span>
                <span className="text-2xl text-white/70 mb-2">clientes</span>
              </div>
              <p className="text-white/70 mt-4 text-sm leading-relaxed">
                Con {BREAKEVEN_CUSTOMERS} comerciantes pagando, los ingresos por suscripción cubren <strong className="text-white">todos los costos operativos</strong>:
                hosting, IA, operador, contenido y ads. Cada cliente adicional es beneficio neto.
              </p>
              <div className="mt-6 rounded-2xl bg-black/25 p-4 font-mono text-xs sm:text-sm text-white/85 leading-relaxed">
                <div><span className="text-white/50">{"// Fórmula"}</span></div>
                <div>breakeven = costosFijos / margenContribución</div>
                <div>         = ${TOTAL_FIXED} / ${CONTRIBUTION_MARGIN.toFixed(2)}</div>
                <div className="mt-1" style={{ color: AMBER_LIGHT }}>         = {BREAKEVEN_CUSTOMERS} clientes ✓</div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-2 gap-3">
              <BreakTile big={`${SAFE_BUFFER_CUSTOMERS}`} label="Búfer seguro (1.5×)" sub="Cubre imprevistos + reinversión" />
              <BreakTile big={`Mes ${OPERATING_BREAKEVEN_MONTH}`} label="Breakeven operativo" sub="Ingreso ≥ costo mensual" amber />
              <BreakTile big={`Mes ${CUMULATIVE_BREAKEVEN_MONTH}`} label="Breakeven acumulado" sub="Recupera seed de $3,000" />
              <BreakTile big={`${PAYBACK_MONTHS.toFixed(1)}`} label="Meses payback CAC" sub="Por cliente nuevo" amber />
              <BreakTile big={`$${(BREAKEVEN_CUSTOMERS * FINANCE.arpu).toFixed(0)}`} label="MRR en breakeven" sub="Ingreso recurrente mensual" />
              <BreakTile big={`+${(LTV).toFixed(0)}`} label="LTV por cliente" sub={`Vida ${AVG_LIFETIME_MONTHS.toFixed(0)} meses`} amber />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== ROI CURVE ===================== */}
      <section id="roi" className="mx-auto max-w-6xl w-full px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle kicker="Curva de ROI" title="Proyección a 12 meses" desc="Ingreso vs. costo mensual, flujo de caja acumulado (incluyendo seed de $3,000) y ROI sobre capital invertido. El cruce a cero marca el breakeven acumulado." />

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-5">
          <Card className="border-blue-100">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2"><TrendingUp className="size-4" style={{ color: BLUE }} /> Ingreso vs. Costo mensual</CardTitle>
              <CardDescription>USD por mes · Barras: ingreso (azul) y costo total (ámbar)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] sm:h-[340px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={PROJECTION} margin={{ top: 8, right: 8, left: -8, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                    <XAxis dataKey="label" tick={{ fontSize: 12, fill: '#6b7280' }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: '#6b7280' }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
                    <Tooltip
                      contentStyle={{ borderRadius: 12, border: '1px solid #e5e7eb', fontSize: 12, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
                      formatter={(v: number, n: string) => [`$${v.toLocaleString()}`, n]}
                    />
                    <Legend wrapperStyle={{ fontSize: 12 }} />
                    <Bar dataKey="revenue" name="Ingreso" fill={BLUE} radius={[4, 4, 0, 0]} maxBarSize={26} />
                    <Bar dataKey="totalCosts" name="Costo total" fill={AMBER} radius={[4, 4, 0, 0]} maxBarSize={26} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-100">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2"><Gauge className="size-4" style={{ color: AMBER }} /> Flujo de caja acumulado</CardTitle>
              <CardDescription>Cruce de cero = breakeven acumulado (recupera el seed)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] sm:h-[340px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={PROJECTION} margin={{ top: 8, right: 8, left: -8, bottom: 0 }}>
                    <defs>
                      <linearGradient id="cumGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={BLUE} stopOpacity={0.35} />
                        <stop offset="100%" stopColor={BLUE} stopOpacity={0.02} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                    <XAxis dataKey="label" tick={{ fontSize: 12, fill: '#6b7280' }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: '#6b7280' }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
                    <Tooltip
                      contentStyle={{ borderRadius: 12, border: '1px solid #e5e7eb', fontSize: 12 }}
                      formatter={(v: number, n: string) => [`$${v.toLocaleString()}`, n]}
                    />
                    <ReferenceLine y={0} stroke="#9ca3af" strokeWidth={1.5} strokeDasharray="4 4" />
                    <Area type="monotone" dataKey="cumulativeNet" name="Caja acumulada" stroke={BLUE} strokeWidth={2.5} fill="url(#cumGrad)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ROI % line */}
        <Card className="mt-5 border-blue-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2"><Percent className="size-4" style={{ color: BLUE_DARK }} /> ROI sobre capital invertido</CardTitle>
            <CardDescription>Caja acumulada / capital invertido a la fecha</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[220px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={PROJECTION} margin={{ top: 8, right: 8, left: -8, bottom: 0 }}>
                  <defs>
                    <linearGradient id="roiGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={AMBER} stopOpacity={0.35} />
                      <stop offset="100%" stopColor={AMBER} stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                  <XAxis dataKey="label" tick={{ fontSize: 12, fill: '#6b7280' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: '#6b7280' }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
                  <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e5e7eb', fontSize: 12 }} formatter={(v: number) => [`${v}%`, 'ROI']} />
                  <ReferenceLine y={0} stroke="#9ca3af" strokeWidth={1.5} strokeDasharray="4 4" />
                  <Area type="monotone" dataKey="roi" name="ROI %" stroke={AMBER} strokeWidth={2.5} fill="url(#roiGrad)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Projection table */}
        <Card className="mt-5 border-blue-100">
          <CardHeader>
            <CardTitle className="text-base">Tabla de proyección · 12 meses</CardTitle>
            <CardDescription>Clientes, ingreso, costos, beneficio neto y caja acumulada</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto max-h-[460px] overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-white z-10">
                  <tr className="border-b text-left text-xs text-muted-foreground">
                    <th className="px-4 py-3 font-medium">Mes</th>
                    <th className="px-4 py-3 font-medium text-right">Clientes</th>
                    <th className="px-4 py-3 font-medium text-right">Nuevos</th>
                    <th className="px-4 py-3 font-medium text-right">Ingreso</th>
                    <th className="px-4 py-3 font-medium text-right">Costos</th>
                    <th className="px-4 py-3 font-medium text-right">Neto</th>
                    <th className="px-4 py-3 font-medium text-right">Acumulado</th>
                    <th className="px-4 py-3 font-medium text-right">ROI</th>
                  </tr>
                </thead>
                <tbody>
                  {PROJECTION.map((r) => (
                    <tr key={r.month} className={`border-b last:border-0 ${r.netProfit >= 0 ? 'bg-blue-50/40' : 'bg-amber-50/30'}`}>
                      <td className="px-4 py-2.5 font-semibold">{r.label}</td>
                      <td className="px-4 py-2.5 text-right font-mono">{r.customers}</td>
                      <td className="px-4 py-2.5 text-right font-mono text-muted-foreground">+{r.newCustomers}</td>
                      <td className="px-4 py-2.5 text-right font-mono">${r.revenue.toLocaleString()}</td>
                      <td className="px-4 py-2.5 text-right font-mono text-muted-foreground">${r.totalCosts.toLocaleString()}</td>
                      <td className={`px-4 py-2.5 text-right font-mono font-semibold ${r.netProfit >= 0 ? 'text-blue-700' : 'text-amber-700'}`}>
                        {r.netProfit >= 0 ? '+' : ''}{r.netProfit.toLocaleString()}
                      </td>
                      <td className={`px-4 py-2.5 text-right font-mono font-semibold ${r.cumulativeNet >= 0 ? 'text-blue-700' : 'text-foreground'}`}>
                        {r.cumulativeNet >= 0 ? '+' : ''}{r.cumulativeNet.toLocaleString()}
                      </td>
                      <td className="px-4 py-2.5 text-right font-mono">
                        <span className={r.roi >= 0 ? 'text-blue-700' : 'text-muted-foreground'}>{r.roi}%</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ===================== BRAND IDENTITY ===================== */}
      <section id="marca" className="w-full border-t border-blue-100" style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionTitle kicker="Identidad de marca" title="Logo y paleta de colores" desc="Paleta azul + ámbar. Azul = confianza/dinero/tecnología/crecimiento; Ámbar = energía/valor/calidez venezolana. Mantenemos el ámbar del WhiteLabel model original (#f59e0b) y cambiamos el verde por azul (#1d4ed8)." />

          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6">
            {/* Logo card */}
            <Card className="overflow-hidden border-blue-100">
              <CardContent className="p-0">
                <div className="p-8 grid place-items-center" style={{ background: `linear-gradient(135deg, ${INK}, ${BLUE_DARK})` }}>
                  <img src={BRAND.logo} alt={`Logo ${BRAND.name}`} className="w-40 h-40 rounded-2xl object-cover ring-2 ring-white/20 shadow-xl" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg" style={{ color: INK }}>{BRAND.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">Marca del producto · plataforma {BRAND.platform}</p>
                  <div className="mt-4 space-y-2 text-sm">
                    <ConceptRow label="Forma" value="Techo/hogar + etiqueta de precio + chispa IA" />
                    <ConceptRow label="Concepto" value="“Un hogar digital para tu inventario”" />
                    <ConceptRow label="Estilo" value="Geométrico plano, vectorial, mobile-first" />
                    <ConceptRow label="Usos" value="App icon, favicon, watermark en fichas, avatar IG" />
                  </div>
                  <div className="mt-4 flex gap-2">
                    <span className="size-8 rounded-lg ring-1 ring-black/10" style={{ background: BLUE }} title="Primario" />
                    <span className="size-8 rounded-lg ring-1 ring-black/10" style={{ background: AMBER }} title="Acento" />
                    <span className="size-8 rounded-lg ring-1 ring-black/10" style={{ background: INK }} title="Tinta" />
                    <span className="size-8 rounded-lg ring-1 ring-black/10" style={{ background: SAND }} title="Arena" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Palette */}
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2"><Palette className="size-4" style={{ color: BLUE }} /> Paleta cromática</CardTitle>
                <CardDescription>8 colores · usa Azul como primario y Ámbar como acento (≤15%)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2.5">
                {PALETTE.map((c) => (
                  <div
                    key={c.hex}
                    onMouseEnter={() => setHoveredColor(c.hex)}
                    onMouseLeave={() => setHoveredColor(null)}
                    className="flex items-center gap-3 rounded-xl p-2.5 transition-all cursor-pointer ring-1 ring-transparent hover:ring-blue-200"
                    style={{ background: hoveredColor === c.hex ? c.hex + '12' : 'transparent' }}
                  >
                    <div className="size-12 rounded-lg shrink-0 ring-1 ring-black/10 shadow-sm" style={{ background: c.hex }} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-sm">{c.name}</p>
                        <code className="text-[11px] text-muted-foreground font-mono uppercase">{c.hex}</code>
                      </div>
                      <p className="text-xs text-muted-foreground truncate">{c.role}</p>
                    </div>
                    <button
                      onClick={() => navigator.clipboard?.writeText(c.hex)}
                      className="text-[11px] px-2 py-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-white transition-colors shrink-0"
                    >
                      Copiar
                    </button>
                  </div>
                ))}
                <div className="mt-3 rounded-xl p-3.5 text-xs leading-relaxed" style={{ background: '#fff', border: '1px solid #e5e7eb' }}>
                  <strong>Regla 60-30-10:</strong> 60% Arena cálida / Blanco, 30% Azul, 10% Ámbar.
                  Reserva <span style={{ color: INK, fontWeight: 600 }}>Tinta Noche</span> para texto y fondos oscuros de marca.
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Typography + voice */}
          <div className="grid md:grid-cols-2 gap-5 mt-6">
            <Card className="border-blue-100">
              <CardHeader><CardTitle className="text-base">Tipografía</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Display / Headings</p>
                  <p className="text-2xl font-bold tracking-tight" style={{ color: INK }}>Geist Sans — Bold</p>
                  <p className="text-xs text-muted-foreground">Geométrica, moderna, excelente legibilidad en móvil</p>
                </div>
                <Separator />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Cuerpo / UI</p>
                  <p className="text-base">Geist Sans — Regular</p>
                  <p className="text-xs text-muted-foreground">14–16px base, interlineado 1.5</p>
                </div>
                <Separator />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Datos / Precios</p>
                  <p className="text-base font-mono">Geist Mono — $80.00 USDT</p>
                  <p className="text-xs text-muted-foreground">Para precios, wallets, hashes y métricas</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardHeader><CardTitle className="text-base">Tono de voz</CardTitle></CardHeader>
              <CardContent className="space-y-3 text-sm">
                <VoiceRow do_="Cercano, venezolano, directo" dont="Corporativo o traducido del inglés" />
                <VoiceRow do_="“Foto → ficha en 30s”" dont="“Solución integral de inventario”" />
                <VoiceRow do_="Emojis cálidos (🏠 💲 📸)" dont="Jerga técnica de IA o blockchain" />
                <VoiceRow do_="CTAs claros y de acción" dont="Pasivos (“podría”, “tal vez”)" />
                <VoiceRow do_="Precios en USD + Bs siempre" dont="Solo una moneda" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ===================== CLOSING / CTA ===================== */}
      <section className="mx-auto max-w-6xl w-full px-4 sm:px-6 py-14 sm:py-20">
        <Card className="overflow-hidden border-0" style={{ background: `linear-gradient(135deg, ${BLUE_DARK}, ${INK})` }}>
          <CardContent className="p-8 sm:p-12 text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Sparkles className="size-8 mx-auto mb-4" style={{ color: AMBER_LIGHT }} />
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                De código a negocio en {CUMULATIVE_BREAKEVEN_MONTH} meses
              </h2>
              <p className="text-white/75 mt-3 max-w-2xl mx-auto">
                El producto ya está construido y validado técnicamente. Con {BREAKEVEN_CUSTOMERS} clientes pagos el negocio
                cubre costos; con {SAFE_BUFFER_CUSTOMERS} genera caja para reinvertir. La curva de ROI cruza cero
                en el mes {CUMULATIVE_BREAKEVEN_MONTH} y supera el 100% antes del mes 12.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <a href="#breakeven" className="inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold text-amber-950 shadow-lg transition-transform hover:scale-105" style={{ background: AMBER_LIGHT }}>
                  <Target className="size-4" /> Revisar meta de clientes
                </a>
                <a href="#roi" className="inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/30 hover:bg-white/10 transition-colors">
                  Ver proyección <ArrowUpRight className="size-4" />
                </a>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </section>

      {/* ===================== FOOTER (sticky bottom) ===================== */}
      <footer className="mt-auto border-t" style={{ background: INK, borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <img src={BRAND.logo} alt="Logo FichoX" className="size-8 rounded-lg object-cover ring-1 ring-white/20" />
              <div className="text-white/80 text-sm">
                <p className="font-semibold text-white">{BRAND.name} · Plan de negocio</p>
                <p className="text-xs text-white/50">Generado del análisis de código de yosietserga/fichox</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/50">
              <span className="flex items-center gap-1.5"><Building2 className="size-3.5" /> {BRAND.jurisdiction}</span>
              <span className="flex items-center gap-1.5"><Wallet className="size-3.5" /> Pagos USDT · BSC (BEP-20)</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="size-3.5" /> Licencia MIT · no VASP</span>
            </div>
          </div>
          <Separator className="my-5 bg-white/10" />
          <p className="text-center text-xs text-white/40">
            Modelo financiero basado en pricing real del código y estimaciones de mercado LATAM. Las proyecciones son orientativas.
          </p>
        </div>
      </footer>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------
function CanvasBlock({
  icon: Icon, title, items, highlight,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  items: string[]
  highlight?: boolean
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
      className={`rounded-2xl border p-5 ${highlight ? 'border-blue-300 bg-white ring-1 ring-blue-200' : 'border-black/5 bg-white'}`}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="size-8 rounded-lg grid place-items-center" style={{ background: highlight ? BLUE : SAND, color: highlight ? 'white' : INK }}>
          <Icon className="size-4" />
        </div>
        <h3 className="font-semibold text-sm" style={{ color: INK }}>{title}</h3>
      </div>
      <ul className="space-y-1.5">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-1.5 text-xs text-muted-foreground leading-relaxed">
            <Check className="size-3 mt-0.5 shrink-0" style={{ color: BLUE }} />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

function PricingCard({
  plan, price, unit, network, features, cta, badge, highlight,
}: {
  plan: string; price: string; unit: string; network: string
  features: string[]; cta: string; badge?: string; highlight?: boolean
}) {
  return (
    <Card className={`relative overflow-hidden ${highlight ? 'border-2 ring-2 ring-blue-200' : 'border'}`} style={highlight ? { borderColor: BLUE } : {}}>
      {badge && (
        <div className="absolute top-0 right-0 px-3 py-1 text-[11px] font-bold text-amber-950 rounded-bl-xl" style={{ background: AMBER_LIGHT }}>
          {badge}
        </div>
      )}
      <CardContent className="p-6 sm:p-7">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-semibold" style={{ color: INK }}>{plan}</span>
          {highlight && <Badge className="border-0 text-white" style={{ background: BLUE }}>Recomendado</Badge>}
        </div>
        <div className="flex items-end gap-1.5 mt-2">
          <span className="text-4xl font-bold tracking-tight" style={{ color: INK }}>{price}</span>
          <span className="text-sm text-muted-foreground mb-1.5">{unit}</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1"><Wallet className="size-3" /> {network}</p>
        <Separator className="my-4" />
        <ul className="space-y-2 mb-5">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm">
              <Check className="size-4 mt-0.5 shrink-0" style={{ color: BLUE }} />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <div className={`rounded-lg px-3 py-2.5 text-xs text-center font-medium ${highlight ? 'text-white' : 'text-muted-foreground'}`} style={highlight ? { background: BLUE } : { background: SAND }}>
          {cta}
        </div>
      </CardContent>
    </Card>
  )
}

function BreakTile({ big, label, sub, amber }: { big: string; label: string; sub: string; amber?: boolean }) {
  return (
    <div className="rounded-2xl bg-white/[0.06] ring-1 ring-white/15 p-4 sm:p-5 flex flex-col justify-center">
      <p className="text-3xl sm:text-4xl font-bold leading-none" style={{ color: amber ? AMBER_LIGHT : '#fff' }}>{big}</p>
      <p className="text-sm font-semibold text-white mt-2">{label}</p>
      <p className="text-[11px] text-white/55 mt-0.5">{sub}</p>
    </div>
  )
}

function ConceptRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-3">
      <span className="text-muted-foreground shrink-0">{label}</span>
      <span className="font-medium text-right" style={{ color: INK }}>{value}</span>
    </div>
  )
}

function VoiceRow({ do_, dont }: { do_: string; dont: string }) {
  return (
    <div className="flex gap-3">
      <div className="flex-1 rounded-lg p-2.5" style={{ background: '#ecfdf5' }}>
        <p className="text-[10px] font-bold uppercase tracking-wide text-blue-700 mb-0.5">Sí</p>
        <p className="text-xs text-foreground">{do_}</p>
      </div>
      <div className="flex-1 rounded-lg p-2.5" style={{ background: '#fff7ed' }}>
        <p className="text-[10px] font-bold uppercase tracking-wide text-amber-700 mb-0.5">No</p>
        <p className="text-xs text-muted-foreground line-through">{dont}</p>
      </div>
    </div>
  )
}
