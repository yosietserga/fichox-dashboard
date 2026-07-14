'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Palette, Type, Layers, Ruler, ShieldCheck, Building2, Shirt, Signpost,
  CreditCard, Mail, Smartphone, Package, Car, Check, X, Grid3x3, Sparkles,
  Eye, Zap, Target, Heart, Quote,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { BRAND_MANUAL } from '@/lib/branding-data'

const BLUE = '#1d4ed8'
const BLUE_DARK = '#1e3a8a'
const BLUE_LIGHT = '#3b82f6'
const AMBER = '#f59e0b'
const AMBER_LIGHT = '#fbbf24'
const INK = '#0b1220'
const SAND = '#f7f5f0'
const GRAPHITE = '#475569'

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

export function BrandingManualView() {
  const [selectedLogo, setSelectedLogo] = useState<'A' | 'B' | 'C'>('C')

  return (
    <div className="bg-white">
      {/* ===================== COVER ===================== */}
      <section className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${INK} 0%, ${BLUE_DARK} 100%)` }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="absolute -top-24 -right-24 size-72 rounded-full blur-3xl opacity-30" style={{ background: AMBER }} />
        <div className="absolute -bottom-32 -left-20 size-80 rounded-full blur-3xl opacity-20" style={{ background: BLUE_LIGHT }} />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="max-w-3xl">
            <Badge className="mb-5 border-0 text-amber-950 gap-1.5" style={{ background: AMBER_LIGHT }}>
              <Sparkles className="size-3" /> Manual de Identidad Corporativa
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
              FichoX
              <span className="block mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold" style={{ color: AMBER_LIGHT }}>
                Brand Book v1.0
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
              Guía oficial de marca: logo, paleta cromática, tipografía, membretes, uniformes,
              letreros y aplicaciones. Toda pieza de comunicación FichoX debe seguir este manual.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-xs">
              {['Logo', 'Color', 'Tipografía', 'Membrete', 'Tarjetas', 'Uniformes', 'Letreros', 'Empaques', 'Digital'].map((t) => (
                <span key={t} className="rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1.5 text-white/80">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== BRAND ESSENCE ===================== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle kicker="Esencia de marca" title="Quién es FichoX" desc="La identidad visual nace de la identidad conceptual. Estos principios guían cada decisión de diseño." />

        <div className="grid lg:grid-cols-2 gap-5 mb-6">
          <Card className="border-blue-100">
            <CardHeader><CardTitle className="flex items-center gap-2 text-base"><Target className="size-4" style={{ color: AMBER }} /> Misión</CardTitle></CardHeader>
            <CardContent><p className="text-sm text-muted-foreground leading-relaxed">{BRAND_MANUAL.brand.mission}</p></CardContent>
          </Card>
          <Card className="border-blue-100">
            <CardHeader><CardTitle className="flex items-center gap-2 text-base"><Eye className="size-4" style={{ color: BLUE }} /> Visión</CardTitle></CardHeader>
            <CardContent><p className="text-sm text-muted-foreground leading-relaxed">{BRAND_MANUAL.brand.vision}</p></CardContent>
          </Card>
        </div>

        <Card className="border-blue-100 mb-6">
          <CardHeader><CardTitle className="flex items-center gap-2 text-base"><Heart className="size-4" style={{ color: AMBER }} /> Valores</CardTitle></CardHeader>
          <CardContent className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {BRAND_MANUAL.brand.values.map((v) => (
              <div key={v.title} className="rounded-xl p-3" style={{ background: SAND }}>
                <p className="font-semibold text-sm mb-1" style={{ color: INK }}>{v.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-blue-100 p-5">
            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Personalidad</p>
            <div className="flex flex-wrap gap-1.5">
              {BRAND_MANUAL.brand.personality.map((p) => (
                <Badge key={p} variant="outline" className="border-blue-200 text-blue-700">{p}</Badge>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-blue-100 p-5 flex items-center gap-3">
            <Quote className="size-6 shrink-0" style={{ color: AMBER }} />
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Arquetipo</p>
              <p className="font-semibold" style={{ color: INK }}>{BRAND_MANUAL.brand.archetype}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 3 LOGO CONCEPTS ===================== */}
      <section className="w-full" style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionTitle
            kicker="Logo · 3 conceptos"
            title="Propuestas de logotipo"
            desc="Tres direcciones de diseño aplicando principios corporativos: simetría, escalabilidad, reconocimiento a 16px y funcionamiento en monocromo. Selecciona una como logo oficial."
          />

          <div className="grid lg:grid-cols-3 gap-5 mb-8">
            {BRAND_MANUAL.logos.map((logo) => {
              const isSelected = selectedLogo === logo.id
              return (
                <motion.div key={logo.id} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }}>
                  <Card
                    className={`overflow-hidden cursor-pointer transition-all ${isSelected ? 'border-2 ring-2 ring-blue-200' : 'border border-blue-100 hover:shadow-md'}`}
                    style={isSelected ? { borderColor: BLUE } : {}}
                    onClick={() => setSelectedLogo(logo.id as 'A' | 'B' | 'C')}
                  >
                    <div className="aspect-[4/3] grid place-items-center p-6" style={{ background: '#ffffff' }}>
                      <img src={logo.file} alt={`Logo ${logo.name}`} className="max-w-full max-h-full object-contain" />
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="size-7 rounded-lg grid place-items-center text-xs font-bold text-white" style={{ background: BLUE }}>{logo.id}</span>
                          <h3 className="font-bold text-base" style={{ color: INK }}>{logo.name}</h3>
                        </div>
                        {isSelected ? (
                          <Badge className="border-0 text-white" style={{ background: BLUE }}><Check className="size-3 mr-0.5" /> Seleccionado</Badge>
                        ) : (
                          <span className="text-xs text-muted-foreground">Click para elegir</span>
                        )}
                      </div>
                      <p className="text-xs font-medium text-blue-700 mb-2">{logo.concept}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-3">{logo.rationale}</p>
                      <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                        <span>Ratio: <span className="font-mono">{logo.ratio}</span></span>
                      </div>
                      <Separator className="my-3" />
                      <div className="flex flex-wrap gap-1">
                        {logo.uses.slice(0, 4).map((u) => (
                          <span key={u} className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">{u}</span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Construction details of selected logo */}
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base"><Grid3x3 className="size-4" style={{ color: BLUE }} /> Construcción técnica · Concepto {selectedLogo}</CardTitle>
              <CardDescription>Rejilla, simetría, pesos y proporciones del logo seleccionado</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl p-6 grid place-items-center" style={{ background: '#ffffff', border: '1px solid #e5e7eb' }}>
                <img
                  src={BRAND_MANUAL.logos.find((l) => l.id === selectedLogo)!.file}
                  alt="Logo seleccionado"
                  className="max-w-full max-h-48 object-contain"
                />
              </div>
              <div className="space-y-3">
                {(() => {
                  const logo = BRAND_MANUAL.logos.find((l) => l.id === selectedLogo)!
                  return (
                    <>
                      <DetailRow label="Rejilla" value={logo.construction.grid} />
                      <DetailRow label="Simetría" value={logo.construction.symmetry} />
                      <DetailRow label="Proporción" value={logo.construction.ratio} />
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1.5">Pesos</p>
                        <ul className="space-y-1">
                          {logo.construction.weights.map((w) => (
                            <li key={w} className="flex items-start gap-2 text-sm">
                              <span className="size-1.5 rounded-full mt-1.5 shrink-0" style={{ background: AMBER }} />
                              <span>{w}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )
                })()}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===================== CLEAR SPACE & MIN SIZES ===================== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle kicker="Construcción" title="Área de protección y tamaños mínimos" desc="El clear space asegura que el logo respire. Ningún elemento puede invadir esta zona." />
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-5">
          <Card className="border-blue-100 overflow-hidden">
            <CardContent className="p-0">
              <div className="p-8 sm:p-12 grid place-items-center relative" style={{ background: '#ffffff', minHeight: '280px' }}>
                {/* clear space visualization */}
                <div className="relative inline-block">
                  <div className="absolute -inset-12 border-2 border-dashed" style={{ borderColor: AMBER, borderRadius: '8px' }} />
                  <div className="absolute -inset-12 flex items-center justify-center text-[10px] font-bold" style={{ color: AMBER }}>
                    <span className="absolute top-1 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-1">1X</span>
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white px-1">1X</span>
                    <span className="absolute left-1 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white px-1">1X</span>
                    <span className="absolute right-1 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white px-1">1X</span>
                  </div>
                  <img
                    src={BRAND_MANUAL.logos.find((l) => l.id === selectedLogo)!.file}
                    alt="Logo con clear space"
                    className="relative max-h-24 max-w-[200px] object-contain"
                  />
                </div>
                <p className="absolute bottom-3 left-4 text-[10px] text-muted-foreground">Zona punteada = clear space mínimo (1X)</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-blue-100">
            <CardHeader><CardTitle className="flex items-center gap-2 text-base"><Ruler className="size-4" style={{ color: AMBER }} /> Tamaños mínimos</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-xl" style={{ background: SAND }}>
                <div>
                  <p className="font-semibold text-sm" style={{ color: INK }}>Digital</p>
                  <p className="text-xs text-muted-foreground">Web y móvil con texto</p>
                </div>
                <span className="font-mono font-bold" style={{ color: BLUE }}>{BRAND_MANUAL.clearSpace.minSize.digital}</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl" style={{ background: SAND }}>
                <div>
                  <p className="font-semibold text-sm" style={{ color: INK }}>Print</p>
                  <p className="text-xs text-muted-foreground">Impresos comerciales</p>
                </div>
                <span className="font-mono font-bold" style={{ color: BLUE }}>{BRAND_MANUAL.clearSpace.minSize.print}</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl" style={{ background: SAND }}>
                <div>
                  <p className="font-semibold text-sm" style={{ color: INK }}>Favicon</p>
                  <p className="text-xs text-muted-foreground">Solo isotipo, sin texto</p>
                </div>
                <span className="font-mono font-bold" style={{ color: BLUE }}>{BRAND_MANUAL.clearSpace.minSize.favicon}</span>
              </div>
              <div className="rounded-xl p-3 text-xs text-muted-foreground leading-relaxed" style={{ background: '#fff', border: '1px solid #e5e7eb' }}>
                <strong style={{ color: INK }}>Unidad X:</strong> {BRAND_MANUAL.clearSpace.unit}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===================== COLOR PALETTE ===================== */}
      <section className="w-full" style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionTitle kicker="Sistema cromático" title="Paleta de colores" desc="Especificaciones completas para digital (HEX, RGB) e impresión (CMYK, Pantone). El Azul FichoX es el color principal; Ámbar se usa solo como acento (≤15%)." />

          {(['primary', 'accent', 'neutral'] as const).map((group) => (
            <div key={group} className="mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-3" style={{ color: BLUE_DARK }}>
                {group === 'primary' ? 'Colores primarios' : group === 'accent' ? 'Colores de acento' : 'Colores neutros'}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {BRAND_MANUAL.colors[group].map((c) => (
                  <Card key={c.name} className="overflow-hidden border-blue-100">
                    <div className="h-24" style={{ background: c.hex }} />
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-sm" style={{ color: INK }}>{c.name}</p>
                        <code className="text-[11px] font-mono uppercase" style={{ color: GRAPHITE }}>{c.hex}</code>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{c.role}</p>
                      <div className="grid grid-cols-2 gap-1 text-[10px] font-mono">
                        <div><span className="text-muted-foreground">RGB</span><br /><span style={{ color: INK }}>{c.rgb}</span></div>
                        <div><span className="text-muted-foreground">CMYK</span><br /><span style={{ color: INK }}>{c.cmyk}</span></div>
                        <div className="col-span-2"><span className="text-muted-foreground">Pantone</span> <span style={{ color: INK }}>{c.pantone}</span></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}

          {/* Color combinations */}
          <div className="grid md:grid-cols-2 gap-5">
            <Card className="border-emerald-100">
              <CardHeader><CardTitle className="flex items-center gap-2 text-base"><Check className="size-4 text-emerald-600" /> Combinaciones aprobadas</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                {BRAND_MANUAL.colorCombos.approved.map((combo) => (
                  <div key={combo.label} className="flex items-center gap-3 rounded-lg p-3" style={{ background: combo.bg, color: combo.fg }}>
                    <span className="text-sm font-semibold flex-1">{combo.label}</span>
                    <span className="text-[10px] font-mono opacity-75">{combo.bg} · {combo.fg}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="border-amber-100">
              <CardHeader><CardTitle className="flex items-center gap-2 text-base"><X className="size-4 text-amber-600" /> Combinaciones prohibidas</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                {BRAND_MANUAL.colorCombos.forbidden.map((combo) => (
                  <div key={combo.label} className="relative flex items-center gap-3 rounded-lg p-3 overflow-hidden" style={{ background: combo.bg, color: combo.fg }}>
                    <span className="text-sm font-semibold flex-1 line-through opacity-70">{combo.label}</span>
                    <X className="size-4 absolute right-3" style={{ color: '#dc2626' }} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ===================== TYPOGRAPHY ===================== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle kicker="Tipografía" title="Sistema tipográfico" desc="Geist Sans para todo el sistema, Geist Mono para datos y precios. Una sola familia garantiza consistencia y carga rápida." />
        <div className="grid md:grid-cols-2 gap-5 mb-6">
          <Card className="border-blue-100">
            <CardContent className="p-6">
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Tipografía principal</p>
              <p className="text-4xl font-bold tracking-tight mb-2" style={{ color: INK }}>Geist Sans</p>
              <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{BRAND_MANUAL.typography.primary.reason}</p>
              <div className="flex flex-wrap gap-1.5">
                {BRAND_MANUAL.typography.primary.weights.map((w) => (
                  <Badge key={w} variant="outline" className="text-[11px]">{w}</Badge>
                ))}
              </div>
              <p className="mt-4 text-3xl" style={{ color: INK }}>Aa Bb Cc 123</p>
            </CardContent>
          </Card>
          <Card className="border-blue-100">
            <CardContent className="p-6">
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Tipografía monoespaciada</p>
              <p className="text-4xl font-bold font-mono tracking-tight mb-2" style={{ color: INK }}>Geist Mono</p>
              <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{BRAND_MANUAL.typography.mono.reason}</p>
              <div className="flex flex-wrap gap-1.5">
                {BRAND_MANUAL.typography.mono.weights.map((w) => (
                  <Badge key={w} variant="outline" className="text-[11px]">{w}</Badge>
                ))}
              </div>
              <p className="mt-4 text-3xl font-mono" style={{ color: BLUE }}>$55.00 USDT</p>
            </CardContent>
          </Card>
        </div>

        {/* Hierarchy */}
        <Card className="border-blue-100">
          <CardHeader><CardTitle className="text-base flex items-center gap-2"><Type className="size-4" style={{ color: BLUE }} /> Jerarquía tipográfica</CardTitle></CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left text-xs text-muted-foreground">
                    <th className="px-5 py-3 font-medium">Nivel</th>
                    <th className="px-5 py-3 font-medium">Muestra</th>
                    <th className="px-5 py-3 font-medium">Especificación</th>
                  </tr>
                </thead>
                <tbody>
                  {BRAND_MANUAL.typography.hierarchy.map((h) => (
                    <tr key={h.level} className="border-b last:border-0">
                      <td className="px-5 py-4 align-top text-xs text-muted-foreground whitespace-nowrap">{h.level}</td>
                      <td className="px-5 py-4 align-top" style={{ color: h.color, fontWeight: 600 }}>{h.sample}</td>
                      <td className="px-5 py-4 align-top text-xs font-mono text-muted-foreground">{h.spec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ===================== DO'S AND DON'TS ===================== */}
      <section className="w-full" style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionTitle kicker="Usos correctos" title="Do's and Don'ts" desc="Reglas de uso del logo. Cualquier excepción debe ser aprobada por el área de marca." />
          <div className="grid md:grid-cols-2 gap-5">
            <Card className="border-emerald-200">
              <CardHeader><CardTitle className="flex items-center gap-2 text-base text-emerald-700"><Check className="size-4" /> Sí</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-2.5">
                  {BRAND_MANUAL.dosAndDonts.do.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm">
                      <Check className="size-4 mt-0.5 shrink-0 text-emerald-600" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-amber-200">
              <CardHeader><CardTitle className="flex items-center gap-2 text-base text-amber-700"><X className="size-4" /> No</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-2.5">
                  {BRAND_MANUAL.dosAndDonts.dont.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm">
                      <X className="size-4 mt-0.5 shrink-0 text-amber-600" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ===================== APPLICATIONS: MEMBERETE / LETTERHEAD ===================== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle kicker="Aplicaciones · Papelería" title="Membrete y papelería corporativa" desc="Hoja membretada, sobres y tarjetas de presentación. Plantillas listas para impresión." />

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-5 mb-6">
          {/* Letterhead mockup */}
          <Card className="border-blue-100 overflow-hidden">
            <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><Mail className="size-4" style={{ color: BLUE }} /> Hoja membretada</CardTitle></CardHeader>
            <CardContent>
              <div className="aspect-[1/1.414] rounded-lg overflow-hidden shadow-inner relative" style={{ background: '#ffffff', border: '1px solid #e5e7eb' }}>
                {/* Header band */}
                <div className="flex items-center justify-between px-8 py-5 border-b-2" style={{ borderColor: BLUE }}>
                  <img src={BRAND_MANUAL.logos.find((l) => l.id === selectedLogo)!.file} alt="Logo" className="h-8 object-contain" />
                  <div className="text-right text-[9px] leading-tight" style={{ color: GRAPHITE }}>
                    <p className="font-semibold" style={{ color: INK }}>FichoX</p>
                    <p>contacto@fichox.app</p>
                    <p>+58 412-0000000</p>
                  </div>
                </div>
                {/* Body lines */}
                <div className="px-8 py-4 space-y-1.5">
                  <div className="h-1.5 rounded w-1/3" style={{ background: INK }} />
                  <div className="h-1 w-full rounded" style={{ background: '#e5e7eb' }} />
                  <div className="h-1 w-full rounded" style={{ background: '#e5e7eb' }} />
                  <div className="h-1 w-5/6 rounded" style={{ background: '#e5e7eb' }} />
                  <div className="h-1 w-full rounded" style={{ background: '#e5e7eb' }} />
                  <div className="h-1 w-4/6 rounded" style={{ background: '#e5e7eb' }} />
                  <div className="h-2" />
                  <div className="h-1 w-full rounded" style={{ background: '#e5e7eb' }} />
                  <div className="h-1 w-full rounded" style={{ background: '#e5e7eb' }} />
                  <div className="h-1 w-3/4 rounded" style={{ background: '#e5e7eb' }} />
                </div>
                {/* Footer band */}
                <div className="absolute bottom-0 left-0 right-0 px-8 py-3 flex items-center justify-between text-[8px] border-t" style={{ background: SAND, borderColor: '#e5e7eb', color: GRAPHITE }}>
                  <span>fichox.app · @fichox.app</span>
                  <span>Panamá · USDT/BSC</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Business card */}
          <div className="space-y-5">
            <Card className="border-blue-100">
              <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><CreditCard className="size-4" style={{ color: AMBER }} /> Tarjeta de presentación</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                {/* Front */}
                <div className="aspect-[1.75/1] rounded-lg p-4 flex flex-col justify-between" style={{ background: `linear-gradient(135deg, ${INK}, ${BLUE_DARK})` }}>
                  <img src={BRAND_MANUAL.logos.find((l) => l.id === selectedLogo)!.file} alt="Logo" className="h-7 object-contain brightness-0 invert" />
                  <div className="text-white">
                    <p className="text-xs font-bold">Yosiet Serga</p>
                    <p className="text-[9px] text-white/70">Founder · FichoX</p>
                  </div>
                </div>
                {/* Back */}
                <div className="aspect-[1.75/1] rounded-lg p-4 flex flex-col justify-center gap-1" style={{ background: '#ffffff', border: '1px solid #e5e7eb' }}>
                  <p className="text-sm font-bold" style={{ color: INK }}>Yosiet Serga</p>
                  <p className="text-[10px]" style={{ color: GRAPHITE }}>Founder · FichoX</p>
                  <div className="h-px my-1" style={{ background: '#e5e7eb' }} />
                  <p className="text-[10px] font-mono" style={{ color: BLUE }}>yosiet@fichox.app</p>
                  <p className="text-[10px] font-mono" style={{ color: GRAPHITE }}>+58 412-0000000</p>
                  <p className="text-[10px] font-mono" style={{ color: GRAPHITE }}>fichox.app</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardHeader className="pb-2"><CardTitle className="text-base">Especificaciones</CardTitle></CardHeader>
              <CardContent className="text-xs space-y-1.5">
                <DetailRow label="Tamaño" value="90 × 50 mm" />
                <DetailRow label="Resolución" value="300 dpi / CMYK" />
                <DetailRow label="Papel" value="Couche 350g brillo mate" />
                <DetailRow label="Acabado" value="Laminado mate + UV spot en logo" />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Invoice / receipt template */}
        <Card className="border-blue-100">
          <CardHeader><CardTitle className="text-base">Plantilla de factura / recibo</CardTitle></CardHeader>
          <CardContent>
            <div className="rounded-lg overflow-hidden" style={{ background: '#ffffff', border: '1px solid #e5e7eb' }}>
              <div className="flex items-center justify-between px-6 py-4" style={{ background: BLUE, color: 'white' }}>
                <div className="flex items-center gap-3">
                  <img src={BRAND_MANUAL.logos.find((l) => l.id === selectedLogo)!.file} alt="Logo" className="h-6 object-contain brightness-0 invert" />
                  <div>
                    <p className="font-bold text-sm">FACTURA</p>
                    <p className="text-[10px] opacity-80">FichoX · Panamá</p>
                  </div>
                </div>
                <div className="text-right text-[10px]">
                  <p>No. FX-2025-0001</p>
                  <p>Fecha: 13/07/2025</p>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-12 gap-2 text-[10px] font-semibold pb-2 border-b" style={{ color: GRAPHITE }}>
                  <span className="col-span-6">Descripción</span>
                  <span className="col-span-2 text-right">Cant.</span>
                  <span className="col-span-2 text-right">P. Unit.</span>
                  <span className="col-span-2 text-right">Total</span>
                </div>
                {[
                  ['Suscripción FichoX anual', '1', '$399.00', '$399.00'],
                  ['Setup white-label', '1', '$0.00', '$0.00'],
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-12 gap-2 text-[10px] py-2 border-b border-dashed" style={{ color: INK }}>
                    <span className="col-span-6">{row[0]}</span>
                    <span className="col-span-2 text-right font-mono">{row[1]}</span>
                    <span className="col-span-2 text-right font-mono">{row[2]}</span>
                    <span className="col-span-2 text-right font-mono">{row[3]}</span>
                  </div>
                ))}
                <div className="flex justify-end mt-3">
                  <div className="text-right">
                    <p className="text-[10px] text-muted-foreground">Total USD</p>
                    <p className="text-2xl font-bold font-mono" style={{ color: BLUE }}>$399.00</p>
                    <p className="text-[9px] text-muted-foreground">Equivalente en Bs al BCV del día</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ===================== UNIFORMS ===================== */}
      <section className="w-full" style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionTitle kicker="Aplicaciones · Uniformes" title="Uniformes del equipo" desc="Para eventos, ferias de comerciantes, soporte en campo y grabación de contenido." />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <UniformCard title="Polo corporativa" desc="Piqueé azul marino · logo bordado en pecho izquierdo" primary={BLUE_DARK} accent={AMBER} logo={BRAND_MANUAL.logos.find((l) => l.id === selectedLogo)!.file} />
            <UniformCard title="Gorra" desc="Color arena · isotipo bordado al frente" primary={SAND} accent={BLUE} logo={BRAND_MANUAL.logos.find((l) => l.id === selectedLogo)!.file} dark />
            <UniformCard title="Delantal (eventos)" desc="Negro · logo grande al centro, ideal para ferias" primary={INK} accent={AMBER} logo={BRAND_MANUAL.logos.find((l) => l.id === selectedLogo)!.file} />
            <UniformCard title="Chaleco (campo)" desc="Azul brillante alto contraste · soporte en calle" primary={BLUE_LIGHT} accent={INK} logo={BRAND_MANUAL.logos.find((l) => l.id === selectedLogo)!.file} />
          </div>

          <Card className="mt-6 border-blue-100">
            <CardHeader><CardTitle className="text-base">Reglas de uniforme</CardTitle></CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-3 text-xs">
              <div className="flex items-start gap-2"><Check className="size-4 text-emerald-600 shrink-0 mt-0.5" /><span>El logo siempre bordado (no estampado transfer) para durabilidad</span></div>
              <div className="flex items-start gap-2"><Check className="size-4 text-emerald-600 shrink-0 mt-0.5" /><span>Tela piqueé 100% poliéster dry-fit en climas cálidos LATAM</span></div>
              <div className="flex items-start gap-2"><Check className="size-4 text-emerald-600 shrink-0 mt-0.5" /><span>Pantalón jeans azul medio o chino arena como combinación base</span></div>
              <div className="flex items-start gap-2"><Check className="size-4 text-emerald-600 shrink-0 mt-0.5" /><span>Calzado blanco o negro, limpio, sin logos de terceros</span></div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===================== SIGNS / LETREROS ===================== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle kicker="Aplicaciones · Letreros" title="Señalética y letreros" desc="Letrero de tienda frontal, valla publicitaria y señalización interna." />

        <div className="grid lg:grid-cols-2 gap-5 mb-6">
          {/* Storefront sign */}
          <Card className="border-blue-100 overflow-hidden">
            <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><Signpost className="size-4" style={{ color: AMBER }} /> Letrero frontal de tienda</CardTitle></CardHeader>
            <CardContent>
              <div className="aspect-[3/1] rounded-lg p-6 flex items-center justify-between relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${INK}, ${BLUE_DARK})` }}>
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '20px 20px' }} />
                <img src={BRAND_MANUAL.logos.find((l) => l.id === selectedLogo)!.file} alt="Logo" className="h-14 object-contain brightness-0 invert relative" />
                <div className="text-white text-right relative">
                  <p className="text-xl font-bold">Inventario IA</p>
                  <p className="text-xs opacity-80">para comerciantes LATAM</p>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                <DetailRow label="Material" value="Acrílico iluminado LED" />
                <DetailRow label="Tamaño" value="3m × 1m" />
              </div>
            </CardContent>
          </Card>

          {/* Billboard */}
          <Card className="border-blue-100 overflow-hidden">
            <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><Signpost className="size-4" style={{ color: BLUE }} /> Valla publicitaria</CardTitle></CardHeader>
            <CardContent>
              <div className="aspect-[3/1] rounded-lg p-6 flex flex-col justify-center items-center text-center relative" style={{ background: '#ffffff', border: '2px solid ' + BLUE }}>
                <img src={BRAND_MANUAL.logos.find((l) => l.id === selectedLogo)!.file} alt="Logo" className="h-10 object-contain mb-3" />
                <p className="text-2xl font-bold" style={{ color: INK }}>Foto → Ficha vendible</p>
                <p className="text-sm mt-1" style={{ color: GRAPHITE }}>en 30 segundos, con IA</p>
                <p className="mt-3 text-sm font-bold font-mono" style={{ color: AMBER }}>fichox.app</p>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                <DetailRow label="Material" value="Lona vinílica 13oz" />
                <DetailRow label="Tamaño" value="6m × 2m" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Vehicle wrap */}
        <Card className="border-blue-100 overflow-hidden">
          <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><Car className="size-4" style={{ color: AMBER }} /> Rotulación vehicular</CardTitle></CardHeader>
          <CardContent>
            <div className="aspect-[16/5] rounded-lg p-6 flex items-center justify-between relative overflow-hidden" style={{ background: `linear-gradient(90deg, ${BLUE_DARK}, ${BLUE})` }}>
              <div className="absolute -right-10 -top-10 size-40 rounded-full opacity-20" style={{ background: AMBER }} />
              <img src={BRAND_MANUAL.logos.find((l) => l.id === selectedLogo)!.file} alt="Logo" className="h-16 object-contain brightness-0 invert relative" />
              <div className="text-white relative">
                <p className="text-3xl font-bold">FichoX</p>
                <p className="text-sm opacity-80">fichox.app · @fichox.app</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Vinilo micro-perforado en ventanas; vinilo calandrado en carrocería. Logo siempre visible en puertas laterales y portón trasero.</p>
          </CardContent>
        </Card>
      </section>

      {/* ===================== PACKAGING + MERCH ===================== */}
      <section className="w-full" style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionTitle kicker="Aplicaciones · Empaques y merch" title="Empaques y merchandising" desc="Caja de envío, bolsa de compra, y merchandise para el equipo y comunidad." />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Box */}
            <Card className="border-blue-100 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square p-8 grid place-items-center" style={{ background: '#ffffff', border: '1px solid #e5e7eb' }}>
                  <div className="w-full h-full rounded-lg p-4 flex flex-col justify-between" style={{ background: SAND, border: '2px solid ' + BLUE }}>
                    <img src={BRAND_MANUAL.logos.find((l) => l.id === selectedLogo)!.file} alt="Logo" className="h-8 object-contain self-center" />
                    <div className="text-center">
                      <p className="text-[9px] font-bold" style={{ color: INK }}>FICHOX</p>
                      <p className="text-[7px]" style={{ color: GRAPHITE }}>fichox.app</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-semibold text-sm" style={{ color: INK }}>Caja de envío</p>
                  <p className="text-xs text-muted-foreground">Cartón corrugado · logo en 1 tinta azul</p>
                </div>
              </CardContent>
            </Card>

            {/* Bag */}
            <Card className="border-blue-100 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square p-8 grid place-items-center" style={{ background: '#ffffff', border: '1px solid #e5e7eb' }}>
                  <div className="w-3/5 h-full relative" style={{ background: AMBER, borderRadius: '4px 4px 0 0' }}>
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full" style={{ background: INK }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <img src={BRAND_MANUAL.logos.find((l) => l.id === selectedLogo)!.file} alt="Logo" className="h-10 object-contain" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-semibold text-sm" style={{ color: INK }}>Bolsa de compra</p>
                  <p className="text-xs text-muted-foreground">Kraft o amber · asas de cuerda</p>
                </div>
              </CardContent>
            </Card>

            {/* Mug */}
            <Card className="border-blue-100 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square p-8 grid place-items-center" style={{ background: '#ffffff', border: '1px solid #e5e7eb' }}>
                  <div className="w-3/5 h-4/5 rounded-l-xl relative" style={{ background: INK }}>
                    <div className="absolute top-1/2 left-4 -translate-y-1/2">
                      <img src={BRAND_MANUAL.logos.find((l) => l.id === selectedLogo)!.file} alt="Logo" className="h-8 object-contain brightness-0 invert" />
                    </div>
                    <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-6 h-10 border-4 rounded-r-full" style={{ borderColor: INK, background: 'transparent' }} />
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-semibold text-sm" style={{ color: INK }}>Taza corporativa</p>
                  <p className="text-xs text-muted-foreground">Cerámica blanca · logo en tinta noche</p>
                </div>
              </CardContent>
            </Card>

            {/* Tote */}
            <Card className="border-blue-100 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square p-8 grid place-items-center" style={{ background: '#ffffff', border: '1px solid #e5e7eb' }}>
                  <div className="w-3/5 h-4/5 relative" style={{ background: '#fff', border: '2px solid ' + BLUE, borderRadius: '4px' }}>
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-6 border-2 rounded-t-full" style={{ borderColor: BLUE, background: 'transparent' }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                      <img src={BRAND_MANUAL.logos.find((l) => l.id === selectedLogo)!.file} alt="Logo" className="h-8 object-contain mx-auto mb-1" />
                      <p className="text-[7px] font-mono" style={{ color: BLUE }}>foto → ficha</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-semibold text-sm" style={{ color: INK }}>Tote bag</p>
                  <p className="text-xs text-muted-foreground">Lona cruda · asas largas</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ===================== DIGITAL APPLICATIONS ===================== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle kicker="Aplicaciones · Digital" title="Aplicaciones digitales" desc="App icon, avatares de redes sociales, plantillas de post y firma de email." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* App icon */}
          <Card className="border-blue-100">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="size-24 rounded-3xl grid place-items-center shadow-lg mb-4" style={{ background: `linear-gradient(135deg, ${BLUE}, ${BLUE_DARK})` }}>
                <img src={BRAND_MANUAL.logos.find((l) => l.id === selectedLogo)!.file} alt="Logo" className="size-14 object-contain brightness-0 invert" />
              </div>
              <p className="font-semibold text-sm" style={{ color: INK }}>App icon</p>
              <p className="text-xs text-muted-foreground">iOS · Android · PWA</p>
              <div className="flex gap-1 mt-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700">1024px</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700">512px</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700">180px</span>
              </div>
            </CardContent>
          </Card>

          {/* Social avatar */}
          <Card className="border-blue-100">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="size-24 rounded-full grid place-items-center shadow-lg mb-4 overflow-hidden" style={{ background: BLUE }}>
                <img src={BRAND_MANUAL.logos.find((l) => l.id === selectedLogo)!.file} alt="Logo" className="size-16 object-contain brightness-0 invert" />
              </div>
              <p className="font-semibold text-sm" style={{ color: INK }}>Avatar de redes</p>
              <p className="text-xs text-muted-foreground">Instagram · TikTok · X · Facebook</p>
              <div className="flex gap-1 mt-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700">320px</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700">110px</span>
              </div>
            </CardContent>
          </Card>

          {/* Email signature */}
          <Card className="border-blue-100">
            <CardContent className="p-6">
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-3">Firma de email</p>
              <div className="rounded-lg p-4" style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderTop: '3px solid ' + BLUE }}>
                <p className="font-bold text-sm" style={{ color: INK }}>Yosiet Serga</p>
                <p className="text-xs mb-2" style={{ color: GRAPHITE }}>Founder · FichoX</p>
                <div className="space-y-0.5 text-[10px] font-mono" style={{ color: GRAPHITE }}>
                  <p>📧 yosiet@fichox.app</p>
                  <p>🌐 fichox.app</p>
                  <p>📱 +58 412-0000000</p>
                </div>
                <div className="mt-2 pt-2 border-t flex items-center gap-2" style={{ borderColor: '#e5e7eb' }}>
                  <img src={BRAND_MANUAL.logos.find((l) => l.id === selectedLogo)!.file} alt="Logo" className="h-4 object-contain" />
                  <span className="text-[9px]" style={{ color: BLUE }}>@fichox.app</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Instagram post template */}
          <Card className="border-blue-100 lg:col-span-2">
            <CardHeader className="pb-2"><CardTitle className="text-base">Plantilla post Instagram</CardTitle></CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { bg: BLUE, fg: '#ffffff', label: 'Producto' },
                  { bg: '#ffffff', fg: INK, label: 'Tip' },
                  { bg: AMBER, fg: INK, label: 'Anuncio' },
                ].map((tpl) => (
                  <div key={tpl.label} className="aspect-square rounded-lg p-4 flex flex-col justify-between relative overflow-hidden" style={{ background: tpl.bg, color: tpl.fg, border: '1px solid #e5e7eb' }}>
                    <img src={BRAND_MANUAL.logos.find((l) => l.id === selectedLogo)!.file} alt="Logo" className="h-4 object-contain" style={{ filter: tpl.bg === '#ffffff' ? 'none' : 'brightness(0) invert(1)' }} />
                    <div>
                      <p className="text-[10px] font-bold leading-tight">Foto → Ficha vendible en 30s</p>
                      <p className="text-[8px] mt-1 opacity-70">#ComercioLatam #IA</p>
                    </div>
                    <span className="absolute top-2 right-2 text-[8px] px-1.5 py-0.5 rounded-full" style={{ background: tpl.fg, color: tpl.bg }}>{tpl.label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-100">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-full aspect-[3/1] rounded-lg mb-3 flex items-center justify-center" style={{ background: `linear-gradient(90deg, ${INK}, ${BLUE_DARK})` }}>
                <img src={BRAND_MANUAL.logos.find((l) => l.id === selectedLogo)!.file} alt="Logo" className="h-8 object-contain brightness-0 invert" />
              </div>
              <p className="font-semibold text-sm" style={{ color: INK }}>Cover / banner</p>
              <p className="text-xs text-muted-foreground">LinkedIn · Facebook · Web</p>
              <span className="mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700">1500×500px</span>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===================== ICONOGRAPHY + PHOTOGRAPHY ===================== */}
      <section className="w-full" style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionTitle kicker="Estilo visual" title="Iconografía y fotografía" desc="Líneas guía para mantener consistencia en imágenes y pictogramas." />
          <div className="grid md:grid-cols-2 gap-5">
            <Card className="border-blue-100">
              <CardHeader><CardTitle className="text-base">Iconografía</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  {['📷', '💲', '🤖', '📈', '🏠'].map((icon, i) => (
                    <div key={i} className="size-12 rounded-xl grid place-items-center text-xl" style={{ background: '#ffffff', border: '2px solid ' + BLUE }}>{icon}</div>
                  ))}
                </div>
                <ul className="text-xs space-y-1.5 text-muted-foreground">
                  <li className="flex items-start gap-2"><Check className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />Estilo: lineal, trazo 2px, esquinas redondeadas</li>
                  <li className="flex items-start gap-2"><Check className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />Color: heredar color del texto contextual</li>
                  <li className="flex items-start gap-2"><Check className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />Biblioteca: Lucide Icons (consistente con la app)</li>
                  <li className="flex items-start gap-2"><Check className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />Tamaños: 16 / 20 / 24 / 32 px</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-blue-100">
              <CardHeader><CardTitle className="text-base">Fotografía</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-3 gap-2">
                  <div className="aspect-square rounded-lg" style={{ background: `linear-gradient(135deg, ${BLUE_LIGHT}, ${BLUE})` }} />
                  <div className="aspect-square rounded-lg" style={{ background: `linear-gradient(135deg, ${AMBER_LIGHT}, ${AMBER})` }} />
                  <div className="aspect-square rounded-lg" style={{ background: `linear-gradient(135deg, ${SAND}, ${GRAPHITE})` }} />
                </div>
                <ul className="text-xs space-y-1.5 text-muted-foreground">
                  <li className="flex items-start gap-2"><Check className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />Sujeto: comerciantes reales en su entorno de venta</li>
                  <li className="flex items-start gap-2"><Check className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />Tono: natural, luminoso, manos y producto visibles</li>
                  <li className="flex items-start gap-2"><Check className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />Evitar: stock photos corporativos fríos o genéricos</li>
                  <li className="flex items-start gap-2"><Check className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />Filtro cálido opcional, nunca degradados en UI</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ===================== CLOSING ===================== */}
      <section className="mx-auto max-w-6xl w-full px-4 sm:px-6 py-14 sm:py-20">
        <Card className="overflow-hidden border-0" style={{ background: `linear-gradient(135deg, ${BLUE_DARK}, ${INK})` }}>
          <CardContent className="p-8 sm:p-12 text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <ShieldCheck className="size-10 mx-auto mb-4" style={{ color: AMBER_LIGHT }} />
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Una marca, una voz, un sistema
              </h2>
              <p className="text-white/75 mt-3 max-w-2xl mx-auto">
                Este manual es vivo: se actualiza con cada nueva aplicación. Antes de producir cualquier
                pieza no contemplada aquí, consulta al área de marca. La consistencia es lo que convierte
                un logo en una marca.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3 text-xs text-white/60">
                <span>FichoX Brand Book v1.0</span>
                <span>·</span>
                <span>Última actualización: Julio 2025</span>
                <span>·</span>
                <span>contacto@fichox.app</span>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t" style={{ background: INK, borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 text-center">
          <img src={BRAND_MANUAL.logos.find((l) => l.id === selectedLogo)!.file} alt="FichoX" className="h-8 mx-auto mb-3 object-contain brightness-0 invert" />
          <p className="text-white font-semibold text-sm">FichoX · Manual de Identidad Corporativa</p>
          <p className="text-white/50 text-xs mt-1">Brand Book v1.0 · Panamá · 2025</p>
        </div>
      </footer>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------
function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-3">
      <span className="text-muted-foreground shrink-0">{label}</span>
      <span className="font-medium text-right" style={{ color: INK }}>{value}</span>
    </div>
  )
}

function UniformCard({ title, desc, primary, accent, logo, dark }: {
  title: string; desc: string; primary: string; accent: string; logo: string; dark?: boolean
}) {
  return (
    <Card className="border-blue-100 overflow-hidden">
      <CardContent className="p-0">
        <div className="aspect-[4/5] p-6 grid place-items-center relative" style={{ background: primary }}>
          <div className="absolute top-3 left-1/2 -translate-x-1/2 text-[9px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full" style={{ background: accent, color: dark ? '#fff' : INK }}>
            {title}
          </div>
          <div className="w-full">
            {/* Polo shape */}
            <div className="relative mx-auto" style={{ width: '70%' }}>
              <div className="aspect-[3/4] rounded-t-lg relative" style={{ background: dark ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.85)', border: '1px solid rgba(0,0,0,0.05)' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0" style={{
                  borderLeft: '14px solid transparent',
                  borderRight: '14px solid transparent',
                  borderBottom: '12px solid ' + (dark ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.85)'),
                }} />
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-1 h-4" style={{ background: accent, borderRadius: '1px' }} />
                <img src={logo} alt="Logo" className="absolute top-6 left-1/2 -translate-x-1/2 h-5 object-contain" style={{ filter: dark ? 'brightness(0) invert(1)' : 'none' }} />
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <p className="font-semibold text-sm" style={{ color: INK }}>{title}</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
        </div>
      </CardContent>
    </Card>
  )
}
