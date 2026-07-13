'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  BookOpen, FileText, Clock, Mail, MessageSquare, Video, Users, Shield,
  CheckCircle2, XCircle, Sparkles, Coffee, Sunset, Sun, Moon, Calendar,
  GitBranch, Briefcase, Megaphone, AlertTriangle, RefreshCw, Library,
  Hash, Mic, Presentation, Scale, ChevronRight, Award,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  DOC_QUARTER, DOCS, ROLE_SOPS, DAILY_ROUTINES, COMMS_STANDARDS,
  WORKSPACE_PROTOCOLS, VIDEO_CALL_PROTOCOL, REPORT_STANDARDS,
  DOC_LIFECYCLE, DOC_BUILD_CALENDAR,
} from '@/lib/documentation-data'

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

const STATUS_COLORS: Record<string, string> = {
  'Existente': EMERALD,
  'Crear Q3': BLUE,
  'Crear Q4': AMBER,
  'Mantener': GRAPHITE,
}

const CATEGORY_COLORS: Record<string, string> = {
  'Manual de rol': BLUE,
  'Procedimiento operativo': EMERALD,
  'Plantilla': AMBER,
  'Política': ROSE,
  'Playbook': PURPLE,
  'Base de conocimiento': INK,
}

const ROUTINE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  morningStartup: Coffee,
  endOfDayShutdown: Sunset,
  mondayKickoff: Sun,
  fridayWrapUp: Moon,
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

export function DocumentationPlanView() {
  const [selectedRole, setSelectedRole] = useState<number>(0)
  const [selectedComms, setSelectedComms] = useState<number>(0)
  const role = ROLE_SOPS[selectedRole]
  const comms = COMMS_STANDARDS[selectedComms]

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
              <BookOpen className="size-3" /> {DOC_QUARTER.name}
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
              Plan de Documentación
              <span className="block mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold" style={{ color: AMBER_LIGHT }}>
                Manuales, rutinas y protocolos
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
              {DOC_QUARTER.mission}.
              <span className="block mt-2 text-white/60 text-sm">North star: {DOC_QUARTER.northStar}</span>
            </p>

            <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
              <HeroStat value="32" label="Documentos" />
              <HeroStat value="10" label="Manuales por rol" />
              <HeroStat value="4" label="Rutinas diarias" />
              <HeroStat value="6" label="Protocolos comms" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== DOCUMENTATION MAP ===================== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle
          kicker="Mapa documental"
          title="32 documentos corporativos"
          desc="Qué existe, dónde vive, quién lo mantiene y cada cuánto se revisa. Organizado por categoría: manuales de rol, SOPs, plantillas, políticas, playbooks y base de conocimiento."
        />

        {/* Summary by category */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
          {Object.keys(CATEGORY_COLORS).map((cat) => {
            const count = DOCS.filter(d => d.category === cat).length
            return (
              <Card key={cat} className="border-blue-100">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="size-2.5 rounded-full" style={{ background: CATEGORY_COLORS[cat] }} />
                    <p className="text-xs font-medium text-muted-foreground truncate">{cat}</p>
                  </div>
                  <p className="text-2xl font-bold" style={{ color: CATEGORY_COLORS[cat] }}>{count}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card className="border-blue-100 overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto max-h-[640px] overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-white z-10">
                  <tr className="border-b text-left text-xs text-muted-foreground">
                    <th className="px-4 py-3 font-medium">Documento</th>
                    <th className="px-4 py-3 font-medium">Categoría</th>
                    <th className="px-4 py-3 font-medium">Ubicación</th>
                    <th className="px-4 py-3 font-medium">Owner</th>
                    <th className="px-4 py-3 font-medium">Cadencia review</th>
                    <th className="px-4 py-3 font-medium">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {DOCS.map((d) => (
                    <tr key={d.id} className="border-b last:border-0 hover:bg-blue-50/30">
                      <td className="px-4 py-3 align-top font-medium" style={{ color: INK }}>{d.name}</td>
                      <td className="px-4 py-3 align-top"><span className="size-2 rounded-full inline-block mr-1.5" style={{ background: CATEGORY_COLORS[d.category] }} /><span className="text-xs">{d.category}</span></td>
                      <td className="px-4 py-3 align-top text-xs font-mono" style={{ color: GRAPHITE }}>{d.location}</td>
                      <td className="px-4 py-3 align-top text-xs">{d.owner}</td>
                      <td className="px-4 py-3 align-top text-xs">{d.reviewCadence}</td>
                      <td className="px-4 py-3 align-top"><Badge className="border-0 text-[10px] text-white" style={{ background: STATUS_COLORS[d.status] }}>{d.status}</Badge></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ===================== DAILY ROUTINES ===================== */}
      <section className="w-full" style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionTitle
            kicker="Rutinas diarias y semanales"
            title="El ritmo de FichoX"
            desc="4 rutinas universales para todos los roles: startup matutino, cierre del día, inicio de semana (lunes) y cierre de semana (viernes). Estandarizar para no perder tiempo decidien"
          />

          <div className="grid md:grid-cols-2 gap-5">
            {Object.entries(DAILY_ROUTINES).map(([key, routine]) => {
              const Icon = ROUTINE_ICONS[key] ?? Clock
              const color = key === 'morningStartup' ? AMBER : key === 'endOfDayShutdown' ? PURPLE : key === 'mondayKickoff' ? BLUE : INK
              return (
                <motion.div key={key} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-20px' }}>
                  <Card className="border-blue-100 h-full">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="size-9 rounded-xl grid place-items-center shrink-0" style={{ background: color + '20' }}>
                          <Icon className="size-4.5" style={{ color }} />
                        </div>
                        <div>
                          <CardTitle className="text-base">{routine.name}</CardTitle>
                          <CardDescription className="text-[11px]">{routine.time}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ol className="space-y-2">
                        {routine.steps.map((s) => (
                          <li key={s.step} className="flex items-start gap-2.5 text-xs">
                            <span className="size-5 rounded-full grid place-items-center text-[10px] font-bold text-white shrink-0" style={{ background: color }}>{s.step}</span>
                            <div>
                              <p style={{ color: INK }}>{s.action}</p>
                              <p className="text-[10px] text-muted-foreground italic mt-0.5">→ {s.why}</p>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===================== ROLE PROCEDURES ===================== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle
          kicker="Manuales por rol"
          title="10 roles · 10 manuales"
          desc="Cada rol tiene su startup, cierre, kickoff lunes, wrap-up viernes, tools, entregables y path de escalación. Selecciona un rol para ver el detalle."
        />

        {/* Role selector */}
        <div className="flex gap-1.5 flex-wrap mb-5">
          {ROLE_SOPS.map((r, i) => (
            <button
              key={r.role}
              onClick={() => setSelectedRole(i)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${selectedRole === i ? 'text-white shadow-sm' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'}`}
              style={selectedRole === i ? { background: BLUE } : {}}
            >
              {r.role}
            </button>
          ))}
        </div>

        <Card className="border-blue-200 mb-4">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2"><Users className="size-5" style={{ color: BLUE }} /> {role.role}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-5">
              <RoutineBlock title="Startup matutino" color={AMBER} items={role.morningStartup} icon={Coffee} />
              <RoutineBlock title="Cierre del día" color={PURPLE} items={role.endOfDayShutdown} icon={Sunset} />
              <RoutineBlock title="Inicio de semana (lunes)" color={BLUE} items={role.mondayKickoff} icon={Sun} />
              <RoutineBlock title="Cierre de semana (viernes)" color={INK} items={role.fridayWrapUp} icon={Moon} />
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-4">
          <Card className="border-blue-100">
            <CardHeader className="pb-2"><CardTitle className="text-sm flex items-center gap-2"><Hash className="size-3.5" style={{ color: BLUE }} /> Herramientas</CardTitle></CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1.5">
                {role.keyTools.map((t) => <Badge key={t} variant="outline" className="text-[10px]">{t}</Badge>)}
              </div>
            </CardContent>
          </Card>
          <Card className="border-blue-100">
            <CardHeader className="pb-2"><CardTitle className="text-sm flex items-center gap-2"><Award className="size-3.5" style={{ color: AMBER }} /> Entregables</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-1">
                {role.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-1.5 text-xs" style={{ color: INK }}>
                    <CheckCircle2 className="size-3 mt-0.5 shrink-0" style={{ color: EMERALD }} />
                    {d}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-blue-100">
            <CardHeader className="pb-2"><CardTitle className="text-sm flex items-center gap-2"><AlertTriangle className="size-3.5" style={{ color: ROSE }} /> Path de escalación</CardTitle></CardHeader>
            <CardContent>
              <p className="text-xs" style={{ color: INK }}>{role.escalationPath}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===================== COMMUNICATION STANDARDS ===================== */}
      <section className="w-full" style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionTitle
            kicker="Comunicación protocolar"
            title="Cómo se habla en FichoX"
            desc="6 canales de comunicación estandarizados con plantilla, tiempo de respuesta, do's y don'ts. Para no perder tiempo con formas diferentes de hacer lo mismo."
          />

          {/* Comms selector */}
          <div className="flex gap-1.5 flex-wrap mb-5">
            {COMMS_STANDARDS.map((c, i) => (
              <button
                key={c.channel}
                onClick={() => setSelectedComms(i)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${selectedComms === i ? 'text-white shadow-sm' : 'bg-white text-muted-foreground hover:bg-blue-50'}`}
                style={selectedComms === i ? { background: BLUE } : {}}
              >
                {c.channel.split(' ')[0]}
              </button>
            ))}
          </div>

          <Card className="border-blue-200 mb-5">
            <CardHeader>
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MessageSquare className="size-5" style={{ color: BLUE }} />
                    {comms.channel}
                  </CardTitle>
                  <CardDescription className="mt-1">{comms.use_case}</CardDescription>
                </div>
                <Badge variant="outline" className="text-[10px] shrink-0" style={{ borderColor: AMBER, color: AMBER }}>Respuesta: {comms.responseTime}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5">Plantilla</p>
                  <pre className="text-[11px] font-mono whitespace-pre-wrap rounded-lg p-3 leading-relaxed" style={{ background: INK, color: '#e5e7eb' }}>{comms.template}</pre>
                </div>
                <div>
                  <div className="mb-3">
                    <p className="text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: EMERALD }}>Sí</p>
                    <ul className="space-y-1">
                      {comms.dos.map((d) => (
                        <li key={d} className="flex items-start gap-1.5 text-xs" style={{ color: INK }}>
                          <CheckCircle2 className="size-3 mt-0.5 shrink-0" style={{ color: EMERALD }} />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: ROSE }}>No</p>
                    <ul className="space-y-1">
                      {comms.donts.map((d) => (
                        <li key={d} className="flex items-start gap-1.5 text-xs" style={{ color: INK }}>
                          <XCircle className="size-3 mt-0.5 shrink-0" style={{ color: ROSE }} />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===================== WORKSPACE PROTOCOLS ===================== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle
          kicker="Espacios de trabajo"
          title="Protocolos de tools"
          desc="Cómo se usa Slack (canales, reglas), Notion (estructura, permisos), GitHub (branching, PRs) y Google Meet (agendas, grabaciones)."
        />

        <div className="grid md:grid-cols-2 gap-4">
          {WORKSPACE_PROTOCOLS.map((wp) => (
            <motion.div key={wp.tool} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-20px' }}>
              <Card className="border-blue-100 h-full">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2"><Briefcase className="size-4" style={{ color: BLUE }} /> {wp.tool}</CardTitle>
                  <CardDescription>{wp.purpose}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1.5">Estructura</p>
                  <div className="space-y-1 mb-3">
                    {wp.structure.map((s) => (
                      <div key={s} className="text-[11px] font-mono rounded px-2 py-1" style={{ background: SAND, color: BLUE_DARK }}>{s}</div>
                    ))}
                  </div>
                  <Separator className="my-3" />
                  <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1.5">Reglas</p>
                  <ul className="space-y-1">
                    {wp.rules.map((r) => (
                      <li key={r} className="flex items-start gap-1.5 text-xs" style={{ color: INK }}>
                        <ChevronRight className="size-3 mt-0.5 shrink-0" style={{ color: AMBER }} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== VIDEO CALL PROTOCOL ===================== */}
      <section className="w-full" style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionTitle
            kicker="Video llamadas"
            title="Protocolo de reuniones"
            desc="Pre, during y post reunión. Para que cada Meet tenga agenda, decisiones documentadas, action items con owner y follow-up."
          />

          <div className="grid md:grid-cols-3 gap-4 mb-5">
            <VideoCallPhase phase="Antes" color={BLUE} icon={Calendar} items={VIDEO_CALL_PROTOCOL.before} />
            <VideoCallPhase phase="Durante" color={EMERALD} icon={Video} items={VIDEO_CALL_PROTOCOL.during} />
            <VideoCallPhase phase="Después" color={AMBER} icon={RefreshCw} items={VIDEO_CALL_PROTOCOL.after} />
          </div>

          {/* Anti-patterns */}
          <Card className="border-rose-200" style={{ background: '#fff5f5' }}>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2 text-rose-700"><AlertTriangle className="size-4" /> Anti-patrones (lo que NUNCA hacer)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-2">
                {VIDEO_CALL_PROTOCOL.antiPatterns.map((a) => (
                  <div key={a} className="flex items-start gap-1.5 text-xs" style={{ color: INK }}>
                    <XCircle className="size-3.5 mt-0.5 shrink-0" style={{ color: ROSE }} />
                    {a}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===================== REPORT STANDARDS ===================== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle
          kicker="Presentación de informes"
          title="Cómo presentar y explicar reportes"
          desc="3 tipos de reporte (semanal, mensual, trimestral) con estructura, protocolo de presentación y tips para explicar. Para que cada reporte cuente la misma historia."
        />

        <div className="space-y-4">
          {REPORT_STANDARDS.map((r, i) => (
            <motion.div key={r.type} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-20px' }}>
              <Card className="border-blue-100">
                <CardContent className="p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-bold text-base flex items-center gap-2" style={{ color: INK }}>
                        <Presentation className="size-4" style={{ color: [BLUE, AMBER, PURPLE][i] }} />
                        {r.type}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">Audiencia: {r.audience}</p>
                    </div>
                    <Badge variant="outline" className="text-[10px] shrink-0">{r.format.split('+')[0].trim()}</Badge>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1.5">Estructura</p>
                      <ol className="space-y-0.5">
                        {r.structure.map((s, idx) => (
                          <li key={s} className="flex items-start gap-1.5 text-xs" style={{ color: INK }}>
                            <span className="font-mono font-bold text-[10px] shrink-0" style={{ color: [BLUE, AMBER, PURPLE][i] }}>{idx + 1}.</span>
                            {s}
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1.5">Protocolo de presentación</p>
                      <p className="text-xs leading-relaxed" style={{ color: INK }}>{r.presentationProtocol}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1.5">Tips para explicar</p>
                      <ul className="space-y-0.5">
                        {r.explainTips.map((t) => (
                          <li key={t} className="flex items-start gap-1.5 text-xs" style={{ color: INK }}>
                            <Mic className="size-3 mt-0.5 shrink-0" style={{ color: EMERALD }} />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== DEBATE PROTOCOL ===================== */}
      <section className="w-full" style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionTitle
            kicker="Cómo afrontar debates"
            title="Disentir y comprometerse"
            desc="Protocolo para desacuerdos técnicos, estratégicos o de producto. Atacar el problema, no a la persona. Datos > opiniones. Documentar decisión en ADR."
          />

          <Card className="border-purple-200" style={{ background: '#faf5ff' }}>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-12 rounded-xl grid place-items-center" style={{ background: PURPLE }}>
                  <Scale className="size-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg" style={{ color: INK }}>Protocolo de debate</h3>
                  <p className="text-xs text-muted-foreground">Resolver en {'<'}48h o escalar al Founder</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl p-4" style={{ background: '#ecfdf5' }}>
                  <p className="text-sm font-bold mb-2" style={{ color: EMERALD }}>✓ Reglas del debate</p>
                  <ul className="space-y-1.5">
                    <li className="text-xs" style={{ color: INK }}>1. Atacar el problema, no a la persona</li>
                    <li className="text-xs" style={{ color: INK }}>2. Datos {'>'} opiniones (trae métricas)</li>
                    <li className="text-xs" style={{ color: INK }}>3. Escuchar antes de responder (sin interrumpir)</li>
                    <li className="text-xs" style={{ color: INK }}>4. Si disientes, proponer alternativa</li>
                    <li className="text-xs" style={{ color: INK }}>5. Documentar decisión en ADR (Notion)</li>
                    <li className="text-xs" style={{ color: INK }}>6. Una vez decidido, todos ejecutan (commit)</li>
                    <li className="text-xs" style={{ color: INK }}>7. Timebox: 30 min, después escalar</li>
                  </ul>
                </div>
                <div className="rounded-xl p-4" style={{ background: '#fff7ed' }}>
                  <p className="text-sm font-bold mb-2" style={{ color: AMBER }}>✗ Lo que nunca hacer</p>
                  <ul className="space-y-1.5">
                    <li className="text-xs" style={{ color: INK }}>1. Personalizar ('tu idea es mala')</li>
                    <li className="text-xs" style={{ color: INK }}>2. Repetir argumento 3 veces</li>
                    <li className="text-xs" style={{ color: INK }}>3. Bloquear sin alternativa</li>
                    <li className="text-xs" style={{ color: INK }}>4. 'Te lo dije' post-factum</li>
                    <li className="text-xs" style={{ color: INK }}>5. Decisión por consenso eterno</li>
                    <li className="text-xs" style={{ color: INK }}>6. Decidir en Slack (mejor Meet con nota Notion)</li>
                    <li className="text-xs" style={{ color: INK }}>7. Decisiones implícitas (siempre ADR)</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 rounded-xl p-4" style={{ background: INK }}>
                <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: AMBER_LIGHT }}>ADR — Architecture Decision Record</p>
                <p className="text-xs text-white/80 leading-relaxed">
                  Toda decisión importante se documenta en <span className="font-mono">Notion /wiki/decisions/</span> con: contexto, opciones consideradas, decisión, rationale, consecuencias. Plantilla estándar para que cualquiera pueda entender 'por qué se decidió X' meses después.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===================== DOC LIFECYCLE ===================== */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <SectionTitle
          kicker="Ciclo de vida documental"
          title="Cómo crear y actualizar docs"
          desc="Principios, proceso de creación, proceso de actualización, cadencia de review y estándares de calidad. Para que la documentación viva, no muera."
        />

        {/* Principles */}
        <Card className="border-blue-100 mb-5">
          <CardHeader><CardTitle className="text-base flex items-center gap-2"><Shield className="size-4" style={{ color: BLUE }} /> Principios</CardTitle></CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-2">
              {DOC_LIFECYCLE.principles.map((p) => (
                <div key={p} className="flex items-start gap-2 text-xs" style={{ color: INK }}>
                  <Sparkles className="size-3.5 mt-0.5 shrink-0" style={{ color: AMBER }} />
                  {p}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-4 mb-5">
          {/* Creation process */}
          <Card className="border-blue-100">
            <CardHeader><CardTitle className="text-base flex items-center gap-2"><GitBranch className="size-4" style={{ color: EMERALD }} /> Proceso de creación</CardTitle></CardHeader>
            <CardContent>
              <ol className="space-y-2">
                {DOC_LIFECYCLE.creationProcess.map((s) => (
                  <li key={s.step} className="flex items-start gap-2.5 text-xs">
                    <span className="size-5 rounded-full grid place-items-center text-[10px] font-bold text-white shrink-0" style={{ background: EMERALD }}>{s.step}</span>
                    <div>
                      <p style={{ color: INK }}>{s.action}</p>
                      <p className="text-[10px] text-muted-foreground">Owner: {s.owner}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          {/* Update process */}
          <Card className="border-blue-100">
            <CardHeader><CardTitle className="text-base flex items-center gap-2"><RefreshCw className="size-4" style={{ color: AMBER }} /> Proceso de actualización</CardTitle></CardHeader>
            <CardContent>
              <ol className="space-y-2">
                {DOC_LIFECYCLE.updateProcess.map((s) => (
                  <li key={s.step} className="flex items-start gap-2.5 text-xs">
                    <span className="size-5 rounded-full grid place-items-center text-[10px] font-bold text-white shrink-0" style={{ background: AMBER }}>{s.step}</span>
                    <div>
                      <p style={{ color: INK }}>{s.action}</p>
                      <p className="text-[10px] text-muted-foreground">Trigger: {s.trigger}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>

        {/* Review cadence */}
        <Card className="border-blue-100 mb-5">
          <CardHeader><CardTitle className="text-base">Cadencia de review por tipo</CardTitle></CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left text-xs text-muted-foreground">
                    <th className="px-5 py-3 font-medium">Tipo</th>
                    <th className="px-5 py-3 font-medium">Cadencia</th>
                    <th className="px-5 py-3 font-medium">Owner</th>
                    <th className="px-5 py-3 font-medium">Qué revisar</th>
                  </tr>
                </thead>
                <tbody>
                  {DOC_LIFECYCLE.reviewCadence.map((r) => (
                    <tr key={r.type} className="border-b last:border-0 hover:bg-blue-50/30">
                      <td className="px-5 py-3 font-medium align-top" style={{ color: INK }}>{r.type}</td>
                      <td className="px-5 py-3 align-top"><Badge variant="outline" className="text-[10px]">{r.cadence}</Badge></td>
                      <td className="px-5 py-3 align-top text-xs">{r.owner}</td>
                      <td className="px-5 py-3 align-top text-xs text-muted-foreground">{r.what}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Quality standards */}
        <Card className="border-emerald-200" style={{ background: '#f0fdf4' }}>
          <CardHeader><CardTitle className="text-base flex items-center gap-2 text-emerald-700"><CheckCircle2 className="size-4" /> Estándares de calidad</CardTitle></CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-2">
              {DOC_LIFECYCLE.qualityStandards.map((q) => (
                <div key={q} className="flex items-start gap-2 text-xs" style={{ color: INK }}>
                  <CheckCircle2 className="size-3.5 mt-0.5 shrink-0" style={{ color: EMERALD }} />
                  {q}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ===================== BUILD CALENDAR ===================== */}
      <section className="w-full" style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionTitle
            kicker="Calendario de creación"
            title="Cuándo se crea cada documento"
            desc="Las 32 docs se construyen a lo largo de 12 semanas, priorizando lo crítico para operar (Sem 1-3) y después los manuales de rol."
          />

          <div className="space-y-2">
            {DOC_BUILD_CALENDAR.map((c) => (
              <motion.div
                key={c.week}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-10px' }}
                className="rounded-xl border border-blue-100 bg-white p-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <Badge variant="outline" className="text-[10px]" style={{ borderColor: BLUE, color: BLUE_DARK }}>Semana {c.week}</Badge>
                  <p className="text-xs italic" style={{ color: GRAPHITE }}>{c.focus}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {c.docs.map((d) => (
                    <span key={d} className="text-[10px] px-2 py-1 rounded-lg" style={{ background: BLUE + '12', color: BLUE_DARK }}>{d}</span>
                  ))}
                </div>
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
              <Library className="size-10 mx-auto mb-4" style={{ color: AMBER_LIGHT }} />
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                32 docs · 10 manuales · 6 protocolos · 1 mismo ritmo
              </h2>
              <p className="text-white/75 mt-3 max-w-2xl mx-auto">
                Documentación viva: cada rol sabe qué hacer mañana, tarde, lunes y viernes. Cada comunicación tiene plantilla.
                Cada debate tiene protocolo. Cada reporte tiene estructura. El resultado: cero tiempo perdido en
                'cómo se hace esto' y todo el equipo avanzando en la misma dirección con el mismo ritmo.
              </p>
              <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
                <ClosingStat value="32" label="documentos" />
                <ClosingStat value="5 días" label="onboarding" />
                <ClosingStat value="100%" label="procedimientos" />
                <ClosingStat value="0%" label="ambigüedad" />
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t" style={{ background: INK, borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 text-center">
          <p className="text-white font-semibold text-sm">FichoX · Plan de Documentación Q3 2025</p>
          <p className="text-white/50 text-xs mt-1">32 documentos · 10 manuales de rol · 6 protocolos de comunicación · Coherente con los 6 planes anteriores</p>
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

function RoutineBlock({ title, color, items, icon: Icon }: {
  title: string
  color: string
  items: string[]
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <Icon className="size-3.5" style={{ color }} />
        <p className="text-xs font-bold uppercase tracking-wide" style={{ color }}>{title}</p>
      </div>
      <ul className="space-y-1">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-1.5 text-xs" style={{ color: INK }}>
            <span className="size-1 rounded-full mt-1.5 shrink-0" style={{ background: color }} />
            {it}
          </li>
        ))}
      </ul>
    </div>
  )
}

function VideoCallPhase({ phase, color, icon: Icon, items }: {
  phase: string
  color: string
  icon: React.ComponentType<{ className?: string }>
  items: { step: string; who: string }[]
}) {
  return (
    <Card className="border-blue-100">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm flex items-center gap-2">
          <Icon className="size-4" style={{ color }} />
          {phase}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="space-y-2">
          {items.map((s, i) => (
            <li key={i} className="flex items-start gap-2 text-xs">
              <span className="size-5 rounded-full grid place-items-center text-[9px] font-bold text-white shrink-0" style={{ background: color }}>{i + 1}</span>
              <div>
                <p style={{ color: INK }}>{s.step}</p>
                <p className="text-[10px] text-muted-foreground">→ {s.who}</p>
              </div>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}
