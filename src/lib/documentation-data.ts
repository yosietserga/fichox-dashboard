// ============================================================================
// FichoX — Documentation & Corporate Procedures Plan
// Standardized protocols so everyone works in the same direction, same rhythm
// ============================================================================

export const DOC_QUARTER = {
  name: "Q3 2025 · Plan de Documentación & Procedimientos",
  mission: "Estandarizar cómo se hace cada cosa en FichoX: manuales por rol, rutinas diarias/semanales, protocolos de comunicación, video llamadas, debates e informes — para no perder tiempo, dinero ni esfuerzo lidiando con diferentes formas de hacer lo mismo",
  vision: "Que cualquier persona nueva sea productiva en 5 días siguiendo el manual, sin depender de la memoria de nadie",
  northStar: "100% de procedimientos documentados · onboarding 5 días · 0 ambigüedad operacional",
}

// ---------------------------------------------------------------------------
// DOCUMENTATION MAP — what exists, where it lives, who maintains it
// ---------------------------------------------------------------------------
export interface DocItem {
  id: string
  name: string
  category: "Manual de rol" | "Procedimiento operativo" | "Plantilla" | "Política" | "Playbook" | "Base de conocimiento"
  location: string
  owner: string
  reviewCadence: string
  lastReview: string
  status: "Existente" | "Crear Q3" | "Crear Q4" | "Mantener"
}

export const DOCS: DocItem[] = [
  // Manual de rol (10)
  { id: "d1", name: "Manual Founder/CEO", category: "Manual de rol", location: "Notion · /manuals/founder", owner: "Founder", reviewCadence: "Trimestral", lastReview: "Jul 2025", status: "Existente" },
  { id: "d2", name: "Manual Content Creator", category: "Manual de rol", location: "Notion · /manuals/content", owner: "Content Lead", reviewCadence: "Mensual", lastReview: "Crear Sem 1", status: "Crear Q3" },
  { id: "d3", name: "Manual Sales/Onboarding", category: "Manual de rol", location: "Notion · /manuals/sales", owner: "Sales Lead", reviewCadence: "Mensual", lastReview: "Crear Sem 2", status: "Crear Q3" },
  { id: "d4", name: "Manual Community Manager", category: "Manual de rol", location: "Notion · /manuals/community", owner: "Community Lead", reviewCadence: "Mensual", lastReview: "Crear Sem 3", status: "Crear Q3" },
  { id: "d5", name: "Manual Growth/Paid", category: "Manual de rol", location: "Notion · /manuals/growth", owner: "Growth Lead", reviewCadence: "Mensual", lastReview: "Crear Sem 3", status: "Crear Q3" },
  { id: "d6", name: "Manual Full-stack Dev", category: "Manual de rol", location: "Notion · /manuals/dev", owner: "Dev Lead", reviewCadence: "Quincenal", lastReview: "Crear Sem 4", status: "Crear Q3" },
  { id: "d7", name: "Manual Customer Success", category: "Manual de rol", location: "Notion · /manuals/cs", owner: "CS Lead", reviewCadence: "Mensual", lastReview: "Crear Sem 5", status: "Crear Q3" },
  { id: "d8", name: "Manual Designer", category: "Manual de rol", location: "Notion · /manuals/design", owner: "Design Lead", reviewCadence: "Trimestral", lastReview: "Crear Sem 6", status: "Crear Q3" },
  { id: "d9", name: "Manual Ops/Automation", category: "Manual de rol", location: "Notion · /manuals/ops", owner: "Ops Lead", reviewCadence: "Quincenal", lastReview: "Crear Sem 7", status: "Crear Q3" },
  { id: "d10", name: "Manual Data Analyst", category: "Manual de rol", location: "Notion · /manuals/data", owner: "Data Lead", reviewCadence: "Mensual", lastReview: "Crear Sem 9", status: "Crear Q3" },

  // Procedimientos operativos
  { id: "d11", name: "SOP: Onboarding nuevo cliente", category: "Procedimiento operativo", location: "Notion · /sops/onboarding", owner: "Sales", reviewCadence: "Mensual", lastReview: "Crear Sem 2", status: "Crear Q3" },
  { id: "d12", name: "SOP: Cierre de venta", category: "Procedimiento operativo", location: "Notion · /sops/sales-close", owner: "Sales", reviewCadence: "Mensual", lastReview: "Crear Sem 2", status: "Crear Q3" },
  { id: "d13", name: "SOP: Soporte WhatsApp <2h", category: "Procedimiento operativo", location: "Notion · /sops/support", owner: "CS", reviewCadence: "Quincenal", lastReview: "Crear Sem 5", status: "Crear Q3" },
  { id: "d14", name: "SOP: Escalado a founder", category: "Procedimiento operativo", location: "Notion · /sops/escalations", owner: "CS", reviewCadence: "Mensual", lastReview: "Crear Sem 5", status: "Crear Q3" },
  { id: "d15", name: "SOP: Deploy a producción", category: "Procedimiento operativo", location: "GitHub · /DEPLOY.md", owner: "Dev", reviewCadence: "Quincenal", lastReview: "Crear Sem 3", status: "Crear Q3" },
  { id: "d16", name: "SOP: Incidente de IA (API cae)", category: "Procedimiento operativo", location: "Notion · /sops/incident-ai", owner: "Ops", reviewCadence: "Mensual", lastReview: "Crear Sem 7", status: "Crear Q3" },
  { id: "d17", name: "SOP: Backup & restore", category: "Procedimiento operativo", location: "Notion · /sops/backup", owner: "Dev", reviewCadence: "Trimestral", lastReview: "Crear Sem 1", status: "Crear Q3" },
  { id: "d18", name: "SOP: Publicación IG/MELI", category: "Procedimiento operativo", location: "Notion · /sops/publish", owner: "Dev", reviewCadence: "Quincenal", lastReview: "Crear Sem 3", status: "Crear Q3" },

  // Plantillas
  { id: "d19", name: "Plantilla: Email onboarding cliente", category: "Plantilla", location: "Mailchimp · templates", owner: "Sales", reviewCadence: "Trimestral", lastReview: "Crear Sem 2", status: "Crear Q3" },
  { id: "d20", name: "Plantilla: Email follow-up post-demo", category: "Plantilla", location: "Mailchimp · templates", owner: "Sales", reviewCadence: "Trimestral", lastReview: "Crear Sem 2", status: "Crear Q3" },
  { id: "d21", name: "Plantilla: Reporte semanal", category: "Plantilla", location: "Metabase · /reports/weekly", owner: "Ops", reviewCadence: "Mensual", lastReview: "Crear Sem 3", status: "Crear Q3" },
  { id: "d22", name: "Plantilla: Reporte mensual", category: "Plantilla", location: "Metabase · /reports/monthly", owner: "Ops", reviewCadence: "Mensual", lastReview: "Crear Sem 4", status: "Crear Q3" },
  { id: "d23", name: "Plantilla: Caso de éxito", category: "Plantilla", location: "Notion · /templates/case-study", owner: "Content", reviewCadence: "Trimestral", lastReview: "Crear Sem 6", status: "Crear Q3" },
  { id: "d24", name: "Plantilla: Reel IG", category: "Plantilla", location: "Notion · /templates/reel", owner: "Content", reviewCadence: "Mensual", lastReview: "Crear Sem 2", status: "Crear Q3" },

  // Políticas
  { id: "d25", name: "Política: Seguridad cripto (no claves privadas)", category: "Política", location: "Notion · /policies/crypto", owner: "Founder", reviewCadence: "Trimestral", lastReview: "Crear Sem 1", status: "Crear Q3" },
  { id: "d26", name: "Política: Comunicación externa", category: "Política", location: "Notion · /policies/comms", owner: "Founder", reviewCadence: "Trimestral", lastReview: "Crear Sem 2", status: "Crear Q3" },
  { id: "d27", name: "Política: Home office y horarios", category: "Política", location: "Notion · /policies/remote", owner: "Founder", reviewCadence: "Trimestral", lastReview: "Crear Sem 1", status: "Crear Q3" },
  { id: "d28", name: "Política: Vacaciones y permisos", category: "Política", location: "Notion · /policies/time-off", owner: "Founder", reviewCadence: "Anual", lastReview: "Crear Sem 2", status: "Crear Q3" },

  // Playbooks
  { id: "d29", name: "Playbook: Lanzamiento nueva feature", category: "Playbook", location: "GitHub · /PLAYBOOK.md", owner: "Dev", reviewCadence: "Trimestral", lastReview: "Crear Sem 4", status: "Crear Q3" },
  { id: "d30", name: "Playbook: Crisis de comunicación", category: "Playbook", location: "Notion · /playbooks/crisis", owner: "Founder", reviewCadence: "Anual", lastReview: "Crear Sem 3", status: "Crear Q3" },

  // Base de conocimiento
  { id: "d31", name: "KB: Preguntas frecuentes clientes", category: "Base de conocimiento", location: "Crisp · /help", owner: "CS", reviewCadence: "Quincenal", lastReview: "Crear Sem 5", status: "Crear Q3" },
  { id: "d32", name: "KB: Wiki interna FichoX", category: "Base de conocimiento", location: "Notion · /wiki", owner: "Ops", reviewCadence: "Continuo", lastReview: "Continuo", status: "Mantener" },
]

// ---------------------------------------------------------------------------
// ROLE PROCEDURES — key SOPs per role
// ---------------------------------------------------------------------------
export interface RoleSOP {
  role: string
  morningStartup: string[] // rutina matutina
  endOfDayShutdown: string[] // rutina cierre
  mondayKickoff: string[] // rutina lunes
  fridayWrapUp: string[] // rutina viernes
  keyTools: string[]
  deliverables: string[]
  escalationPath: string
}

export const ROLE_SOPS: RoleSOP[] = [
  {
    role: "Founder/CEO",
    morningStartup: ["Revisar dashboard maestro (Metabase)", "Leer #why-we-do-this del fin de semana", "Revisar Slack #alerts y #incidents", "Check email crítico"],
    endOfDayShutdown: ["Actualizar OKR personal Notion", "Dejar nota en #founder-daily con 1 win y 1 bloqueo", "Cerrar tabs no esenciales", "Silenciar notificaciones no críticas"],
    mondayKickoff: ["Stand-up 9am con todo el equipo (15min)", "Definir 3 prioridades de la semana", "Revisar pipeline B2B (resellers/agencias)", "1:1 con Sales Lead 11am"],
    fridayWrapUp: ["Retrospectiva 18h con todo el equipo (45min)", "Aprobar bonus y reconocimientos", "Revisar métricas Sem vs OKR", "Grabar video update Sem para Slack"],
    keyTools: ["Notion", "Slack", "Metabase", "Google Meet", "Calendly"],
    deliverables: ["OKR trimestral", "Video update Sem", "Decisión de producto", "Cierres B2B"],
    escalationPath: "Founder → Board (cuando exista) → Advisors",
  },
  {
    role: "Content Creator",
    morningStartup: ["Revisar calendario de contenido (Notion)", "Check trending audio TikTok", "Leer DMs IG del día anterior", "Preparar banco de ideas del día"],
    endOfDayShutdown: ["Publicar/programar pieza del día", "Documentar performance en sheet", "Subir rushes a Drive", "Cerrar CapCut"],
    mondayKickoff: ["Planificar 10 piezas de la semana", "Stand-up 9am", "Grabar 3 piezas lunes", "Coordinar con Growth hooks de ads"],
    fridayWrapUp: ["Reporte de performance Sem (reach, engagement, conversiones)", "Editar mejor pieza para highlight", "Actualizar banco de ideas", "Backup de archivos a Drive"],
    keyTools: ["CapCut", "Canva", "Buffer", "Notion", "Drive", "Instagram", "TikTok"],
    deliverables: ["1 reel IG diario", "3 TikToks/semana", "Banco de 10 piezas/semana", "Reporte performance Sem"],
    escalationPath: "Content → Founder",
  },
  {
    role: "Sales/Onboarding",
    morningStartup: ["Revisar CRM (Notion) leads del día", "Check Calendly demos agendadas", "Leer WhatsApp Business (cola <2h)", "Priorizar 3 cierres del día"],
    endOfDayShutdown: ["Actualizar CRM con resultado de cada demo", "Follow-up emails a pendientes", "Cerrar notas de cada cliente nuevo", "Silenciar WhatsApp Business"],
    mondayKickoff: ["Stand-up 9am", "Revisar pipeline completo", "Definir 5 cierres objetivo Sem", "Mandar mensaje motivacional al equipo"],
    fridayWrapUp: ["Reporte ventas Sem (cierres, revenue, conversiones)", "Llamar NPS a 3 clientes clave", "Actualizar ICP con learnings", "Limpiar pipeline (archivar no-respondidos)"],
    keyTools: ["Notion CRM", "Calendly", "WhatsApp Business", "Mailchimp", "Google Meet", "Slack"],
    deliverables: ["10-15 demos/día en peak", "5-8 cierres/Sem", "Onboarding 100% nuevos", "Reporte ventas Sem"],
    escalationPath: "Sales → Founder → Board",
  },
  {
    role: "Community Manager",
    morningStartup: ["Revisar 40 grupos WhatsApp (cola)", "Check DMs IG y comentarios", "Programar stories del día", "Revisar menciones de marca"],
    endOfDayShutdown: ["Responder 100% DMs del día", "Documentar feedback en Notion", "Programar stories de mañana", "Cerrar WhatsApp Business"],
    mondayKickoff: ["Stand-up 9am", "Planificar contenido de grupos Sem", "Coordinar con Content hooks", "Actualizar programa referidos"],
    fridayWrapUp: ["Reporte comunidad Sem (grupos activos, referidos, sentimiento)", "Identificar 3 evangelistas Sem", "Mandar DM personalizado a top 5", "Backup lista de grupos"],
    keyTools: ["WhatsApp Business", "Instagram", "Buffer", "Notion", "Discord", "Slack"],
    deliverables: ["40 grupos activos", "5 referidos/Sem", "1 evangelista identificado/Sem", "Reporte comunidad Sem"],
    escalationPath: "Community → Sales (si oportunidad) → Founder",
  },
  {
    role: "Growth/Paid",
    morningStartup: ["Revisar Meta Ads Manager (gasto, CPL, ROAS)", "Check alertas Sentry de campañas", "Revisar Plausible (tráfico web)", "Priorizar A/B tests del día"],
    endOfDayShutdown: ["Pausar creativos perdedores", "Escalar creativos ganadores (10% budget)", "Documentar learnings en Notion", "Backup reporte de gasto"],
    mondayKickoff: ["Stand-up 9am", "Planificar 2 A/B tests Sem", "Coordinar con Content nuevos hooks", "Revisar budget Sem vs plan"],
    fridayWrapUp: ["Reporte Growth Sem (CPL, CAC, ROAS, conversiones)", "Identificar 1 aprendizaje clave", "Actualizar dashboard Meta Ads", "Planificar tests siguiente Sem"],
    keyTools: ["Meta Ads Manager", "Plausible", "PostHog", "Notion", "Slack"],
    deliverables: ["CPL < $5", "ROAS > 3:1", "2 A/B tests/Sem", "Reporte Growth Sem"],
    escalationPath: "Growth → Founder",
  },
  {
    role: "Full-stack Dev",
    morningStartup: ["Revisar GitHub Issues (P0/P1)", "Check Sentry errores de la noche", "Revisar PRs pendientes de review", "Pull latest main"],
    endOfDayShutdown: ["Commit WIP con mensaje claro", "Actualizar Issues (status, ETA)", "Documentar decisión técnica en ADR", "Cerrar VS Code y Docker"],
    mondayKickoff: ["Stand-up 9am", "Sprint planning (2h)", "Asignar Issues Sem", "Code review pendientes viernes"],
    fridayWrapUp: ["Sprint review + demo (1h)", "Deploy a producción (viernes 16h)", "On-call rota Sem siguiente", "Actualizar CHANGELOG"],
    keyTools: ["VS Code", "GitHub", "Vercel", "Railway", "Prisma", "Sentry", "Slack"],
    deliverables: ["1-2 features/Sem shippeadas", "0 P0 bugs abiertos", "PRs merged con review", "CHANGELOG actualizado"],
    escalationPath: "Dev → Founder (P0) → On-call rota",
  },
  {
    role: "Customer Success",
    morningStartup: ["Revisar Crisp (cola tickets <2h SLA)", "Check WhatsApp Business", "Leer #cs-alerts Slack", "Priorizar tickets por severidad"],
    endOfDayShutdown: ["Cerrar 100% tickets del día (o escalar)", "Actualizar KB con nuevos learnings", "Flagear churners para llamada Sem", "Silenciar notificaciones"],
    mondayKickoff: ["Stand-up 9am", "Revisar churn alerts (IA)", "Planificar llamadas NPS Sem", "Coordinar con Sales upsells"],
    fridayWrapUp: ["Reporte CS Sem (tickets resueltos, NPS, churn)", "Llamar 3 churners identificados", "Actualizar KB con top 5 preguntas Sem", "Mandar shoutout al equipo"],
    keyTools: ["Crisp", "WhatsApp Business", "Notion KB", "Slack", "z-ai LLM", "Metabase"],
    deliverables: ["SLA <2h garantizado", "50+ tickets/día resueltos", "3 llamadas NPS/Sem", "Reporte CS Sem"],
    escalationPath: "CS → Founder (P0) → Dev (bug)",
  },
  {
    role: "Designer",
    morningStartup: ["Revisar Figma comments pendientes", "Check Notion design requests", "Leer feedback de Content/Sales", "Preparar paleta del día"],
    endOfDayShutdown: ["Commit diseños a Figma", "Documentar decisiones de diseño en Notion", "Cerrar Figma y FIGJAM", "Backup assets a Drive"],
    mondayKickoff: ["Stand-up 9am", "Planificar 3 pantallas/features Sem", "Coordinar con Dev handoff", "Review manual de marca cambios"],
    fridayWrapUp: ["Reporte Design Sem (pantallas, assets, brand updates)", "Limpiar Figma library", "Documentar design system changes", "Mandar preview al equipo"],
    keyTools: ["Figma", "Notion", "Drive", "Slack", "Manual de marca"],
    deliverables: ["3 pantallas/Sem", "Manual de marca v2 iteraciones", "Plantillas IG/TikTok", "Reporte Design Sem"],
    escalationPath: "Design → Founder",
  },
  {
    role: "Ops/Automation",
    morningStartup: ["Revisar make.com scenarios (errores)", "Check Sentry automations", "Revisar health factor Aave (si hay loan)", "Monitorear uptime (Sentry perf)"],
    endOfDayShutdown: ["Documentar nuevas automatizaciones en Notion", "Actualizar playbook de mantenimiento", "Cerrar make.com tabs", "Silenciar alertas no críticas"],
    mondayKickoff: ["Stand-up 9am", "Revisar automatizaciones Sem anterior", "Planificar 2 mejoras Sem", "Coordinar con Dev integraciones"],
    fridayWrapUp: ["Reporte Ops Sem (automatizaciones live, errores, horas ahorradas)", "Backup configuración make.com", "Actualizar documentación", "Planificar optimizaciones Sem siguiente"],
    keyTools: ["make.com", "Zapier", "Notion", "Sentry", "Metabase", "Slack", "Aave"],
    deliverables: ["3 automatizaciones live/Sem", "0 automatizaciones rotas >24h", "Documentación actualizada", "Reporte Ops Sem"],
    escalationPath: "Ops → Founder (P0) → Dev (smart contract)",
  },
  {
    role: "Data Analyst",
    morningStartup: ["Revisar Metabase dashboards (anomalías)", "Check PostHog funnels", "Leer #data-alerts Slack", "Priorizar análisis del día"],
    endOfDayShutdown: ["Actualizar dashboards Metabase", "Documentar insights en Notion", "Cerrar Metabase y PostHog", "Backup queries a GitHub"],
    mondayKickoff: ["Stand-up 9am", "Análisis cohorte Sem anterior", "Planificar 2 análisis Sem", "Coordinar con Founder métricas OKR"],
    fridayWrapUp: ["Reporte Data Sem (insights, anomalías, predicciones)", "Actualizar dashboard maestro", "Mandar 1 insight accionable a Founder", "Backup dashboards"],
    keyTools: ["Metabase", "PostHog", "SQL", "Notion", "Slack", "GitHub"],
    deliverables: ["1 insight accionable/Sem", "Dashboard maestro actualizado", "Análisis cohorte mensual", "Reporte Data Sem"],
    escalationPath: "Data → Founder",
  },
]

// ---------------------------------------------------------------------------
// DAILY ROUTINES — universal for all roles
// ---------------------------------------------------------------------------
export const DAILY_ROUTINES = {
  morningStartup: {
    time: "9:00 AM (15 min)",
    name: "Startup matutino",
    steps: [
      { step: 1, action: "Abrir Slack → leer #announcements y #alerts primero", why: "No perderte información crítica del día" },
      { step: 2, action: "Abrir Notion → revisar OKR personal y tareas del día", why: "Saber qué priorizar antes de que lleguen interrupciones" },
      { step: 3, action: "Stand-up 9:00 (15 min, obligatorio para todos)", why: "Alinear el día con el equipo" },
      { step: 4, action: "Revisar tools específicas del rol (ver manual de rol)", why: "Detectar blockers temprano" },
      { step: 5, action: "Definir 3 prioridades del día (post-it Notion)", why: "Enfoque antes de reactivo" },
      { step: 6, action: "Silenciar notificaciones no esenciales hasta 11am", why: "Bloque de trabajo profundo 9-11" },
    ],
  },
  endOfDayShutdown: {
    time: "18:00 (10 min, antes de cerrar laptop)",
    name: "Cierre del día",
    steps: [
      { step: 1, action: "Actualizar estado de tareas en Notion (qué quedó, qué sigue)", why: "Mañana arrancas sin pensar qué seguía" },
      { step: 2, action: "Dejar nota de 1 win y 1 bloqueo en Slack #daily-wins", why: "Feedback continuo al equipo" },
      { step: 3, action: "Cerrar tabs no esenciales del navegador", why: "Arrancar mañana limpio mentalmente" },
      { step: 4, action: "Silenciar notificaciones de trabajo (Slack, WhatsApp Business)", why: "Desconexión real, previene burnout" },
      { step: 5, action: "Marcar calendario: ¿logré las 3 prioridades?", why: "Auto-feedback para iterar" },
      { step: 6, action: "Backup si eres Dev/Ops (commit WIP, push)", why: "Nunca perder trabajo por descuido" },
    ],
  },
  mondayKickoff: {
    time: "Lunes 9:00 AM (30 min después del stand-up)",
    name: "Inicio de semana",
    steps: [
      { step: 1, action: "Revisar OKR del trimestre → ¿qué avance necesita esta Sem?", why: "Conectar lo semanal con lo trimestral" },
      { step: 2, action: "Definir 3 prioridades de la Sem en Notion", why: "Enfoque semanal antes de lo diario" },
      { step: 3, action: "Revisar calendario de la Sem → bloquear tiempo profundo", why: "Defender el tiempo de trabajo profundo" },
      { step: 4, action: "Coordinar dependencias con otros roles (DM directo)", why: "Evitar bloqueos el viernes" },
      { step: 5, action: "Mandar mensaje motivacional al equipo en #general", why: "Tono de la Sem, cultura" },
    ],
  },
  fridayWrapUp: {
    time: "Viernes 18:00 (45 min)",
    name: "Cierre de semana",
    steps: [
      { step: 1, action: "Retrospectiva de Sem (45 min, todo el equipo)", why: "Iterar rápido: qué funcionó, qué no, qué cambiar" },
      { step: 2, action: "Actualizar reporte Sem (plantilla Metabase/Notion)", why: "Documentar learnings antes de olvidar" },
      { step: 3, action: "Limpiar inbox: archivar todo lo resuelto", why: "Arrancar lunes con inbox limpio" },
      { step: 4, action: "Planificar 3 prioridades lunes siguiente (Notion)", why: "Lunes arrancar sin fricción mental" },
      { step: 5, action: "Mandar 1 reconocimiento público a un compañero (#shoutouts)", why: "Cultura de aprecio, refuerzo positivo" },
      { step: 6, action: "Apagar laptop y disfrutar fin de Sem", why: "Desconexión real, previene burnout" },
    ],
  },
}

// ---------------------------------------------------------------------------
// COMMUNICATION STANDARDS — email, chat, client, employee, boss
// ---------------------------------------------------------------------------
export interface CommsStandard {
  channel: string
  use_case: string
  responseTime: string
  template: string
  dos: string[]
  donts: string[]
}

export const COMMS_STANDARDS: CommsStandard[] = [
  {
    channel: "Email externo (cliente)",
    use_case: "Comunicación formal con clientes, propuesta comercial, follow-up post-demo",
    responseTime: "<4h en horario laboral",
    template: "Asunto: [FichoX] {Acción} — {Cliente}\n\nHola {Nombre},\n\n{Contexto en 1 frase}.\n\n{Cuerpo: qué pasó / qué sigue, en 2-3 párrafos cortos}.\n\n{CTA claro: ¿qué necesito de ti?}.\n\nSaludos,\n{Tu nombre}\n{Tu rol} · FichoX\nfichox.app · @fichox.app",
    dos: ["Asunto específico (no 'Hola')", "1 CTA por email", "Párrafos de máximo 3 líneas", "Firma con rol + contacto", "Reply-all solo si necesario"],
    donts: ["No usar 'espero que estés bien'", "No adjuntos >10MB (usar Drive)", "No más de 1 CTA", "No responder en <30min (parecer desesperado)"],
  },
  {
    channel: "Email interno (equipo)",
    use_case: "Comunicación formal interna, decisiones, handoffs",
    responseTime: "<24h",
    template: "Asunto: [Decision/{Área}] {Tema}\n\nContexto: {1 frase}\nDecisión: {qué decidimos}\nRationale: {2-3 bullets}\nImpacto: {quién/qué cambia}\nPróximo paso: {CTA}",
    dos: ["BLUF (Bottom Line Up Front)", "Decisión en el asunto si posible", "Bullet points para rationale", "Mencionar a todos los impactados"],
    donts: ["No cadenas largas (>3 replies → meet)", "No decisiones implícitas", "No 'por favor vean adjunto' (ponlo en el cuerpo)"],
  },
  {
    channel: "Slack (interno)",
    use_case: "Comunicación diaria, preguntas rápidas, updates",
    responseTime: "<2h en horario laboral",
    template: "Canal correcto → @mención si específico → mensaje claro en 1-3 líneas → usa threads para respuestas",
    dos: ["Canal correcto (#sales vs #general)", "Thread en lugar de nuevo mensaje", "@mención solo si específico", "Emoji reactions para confirmar", "DM solo si privado real"],
    donts: ["No @here o @channel sin urgencia real", "No más de 5 mensajes seguidos (mejor thread)", "No DM para lo que es de canal", "No esperes respuesta <2h si no es urgente"],
  },
  {
    channel: "WhatsApp Business (cliente)",
    use_case: "Soporte, demos, follow-up, onboarding",
    responseTime: "<2h SLA",
    template: "Hola {Nombre}, {saludo breve}. {Contexto}. {CTA clara}. Saludos, {Tu nombre} · FichoX 🚀",
    dos: ["Usar plantillas aprobadas (Meta)", "1 CTA por mensaje", "Emojis cálidos pero no exceso (🚀 💡 ✅)", "Confirmar recepción si no puedes responder ya", "Usar etiquetas para segmentar"],
    donts: ["No spam (máx 1 broadcast/día por cliente)", "No mandar links sin contexto", "No responder fuera de horario salvo emergencia", "No usar jerga técnica de IA/cripto"],
  },
  {
    channel: "Video llamada (Google Meet)",
    use_case: "Demos, 1:1, all-hands, webinars",
    responseTime: "Agendar con 24h anticipación (excepto emergencias)",
    template: "Agenda (5 items máx) → Timebox por item → Decisión → Action items con owner",
    dos: ["Agenda compartida 24h antes", "Empezar y terminar a tiempo", "Cámara on (excepto mala conexión)", "1 hablante a la vez", "Notas compartidas en Notion", "Action items con owner al final"],
    donts: ["No reuniones >45 min sin break", "No más de 6 personas sin facilitador", "No discusión de temas laterales (off-thread)", "No reunión sin agenda"],
  },
  {
    channel: "Debate / desacuerdo",
    use_case: "Decisiones técnicas, estratégicas o de producto con opiniones divididas",
    responseTime: "Resolver en <48h o escalar",
    template: "Disentir y comprometerse (disagree and commit). Documentar decisión en ADR (Architecture Decision Record).",
    dos: ["Atacar el problema, no a la persona", "Datos > opiniones", "Escuchar antes de responder", "Proponer alternativa si disientes", "Documentar decisión final en ADR", "Commitment: una vez decidido, todos ejecutan"],
    donts: ["No personalizar ('tu idea es mala')", "No repetir argumento 3 veces", "No bloquear sin alternativa", "No 'te lo dije' post-factum", "No decisión por consenso eterno (mejor decidir y iterar)"],
  },
]

// ---------------------------------------------------------------------------
// WORKSPACE USAGE PROTOCOLS — Slack, Notion, GitHub, Meet
// ---------------------------------------------------------------------------
export const WORKSPACE_PROTOCOLS = [
  {
    tool: "Slack",
    purpose: "Comunicación diaria del equipo",
    structure: [
      "#announcements (solo founder, importante)",
      "#general (cualquier tema)",
      "#daily-wins (1 win y 1 bloqueo por persona/día)",
      "#shoutouts (reconocimientos viernes)",
      "#why-we-do-this (historias de cliente)",
      "#alerts (automatizaciones, Sentry)",
      "#incidents (P0/P1, todo el equipo)",
      "#sales (pipeline, cierres)",
      "#dev (PRs, deploys, bugs)",
      "#cs (tickets, churn alerts)",
      "#random (memes, off-topic)",
    ],
    rules: [
      "Horario: 9-18h. Notificaciones silenciadas fuera (excepto on-call)",
      "@here/@channel: solo urgencia real (P0)",
      "Thread siempre que sea respuesta a un mensaje",
      "DM solo para privado real (no para evitar canal)",
      "Status: actualízalo (en meeting, en lunch, focus)",
      "Reacciones emoji para confirmar antes que escribir 'ok'",
    ],
  },
  {
    tool: "Notion",
    purpose: "Wiki interna, OKRs, manuales, SOPs, CRM",
    structure: [
      "/wiki (página principal, onboarding día 1)",
      "/manuals/{rol} (10 manuales de rol)",
      "/sops/ (procedimientos operativos)",
      "/policies/ (políticas corporativas)",
      "/templates/ (plantillas reutilizables)",
      "/okrs/ (OKRs trimestrales por persona y equipo)",
      "/crm/ (pipeline sales)",
      "/wiki/decisions/ (ADR — Architecture Decision Records)",
    ],
    rules: [
      "Toda decisión importante → ADR en /wiki/decisions/",
      "Cambio de proceso → actualizar SOP en <48h",
      "OKRs se actualizan los lunes",
      "Comentarios en Notion para feedback async",
      "Permisos: edit por rol, comment para todos, read para invitados",
      "Nomenclatura: /manuals/{rol}, /sops/{acción}",
    ],
  },
  {
    tool: "GitHub",
    purpose: "Código, Issues, PRs, Actions CI/CD",
    structure: [
      "/fichox (repo principal)",
      "/fichox/issues (bugs, features, P0/P1/P2 labels)",
      "/fichox/pulls (PRs con review obligatorio)",
      "/fichox/DEPLOY.md (SOP deploy)",
      "/fichox/PLAYBOOK.md (lanzamiento feature)",
      "/fichox/CHANGELOG.md (cambios por versión)",
      "/fichox/wiki (documentación técnica)",
    ],
    rules: [
      "Branch naming: feat/{ticket}, fix/{ticket}, chore/{desc}",
      "Commit message: tipo(scope): descripción (Conventional Commits)",
      "PR: mínimo 1 reviewer, CI verde, descripción clara",
      "No push directo a main (siempre PR)",
      "Issues: template obligatorio (bug/feature)",
      "CHANGELOG actualizado en cada release",
    ],
  },
  {
    tool: "Google Meet",
    purpose: "Video llamadas, demos, all-hands, webinars",
    structure: [
      "Link fijo por tipo de reunión en Notion",
      "Grabación automática si >3 personas",
      "Notas compartidas en Notion durante la meet",
      "Action items al final con owner",
    ],
    rules: [
      "Agenda 24h antes (Notion o Calendly)",
      "Timebox estricto (empezar y terminar a tiempo)",
      "Cámara on (excepto mala conexión)",
      "1 hablante a la vez (usar 'levantar mano')",
      "Mute cuando no hablas (ruido fondo)",
      "No reuniones >45 min sin break de 5 min",
      "Grabar y subir a Drive para quien no pudo asistir",
    ],
  },
]

// ---------------------------------------------------------------------------
// VIDEO CALL PROTOCOL — pre, during, post
// ---------------------------------------------------------------------------
export const VIDEO_CALL_PROTOCOL = {
  before: [
    { step: "Agenda compartida en Notion 24h antes (5 items máx)", who: "Organizador" },
    { step: "Calendly invite con link Meet y Notion", who: "Organizador" },
    { step: "Preparar materials (slides, demo, dashboard)", who: "Presentadores" },
    { step: "Test audio/video 5 min antes (si primera vez)", who: "Todos" },
    { step: "Entrar 2 min antes (no llegar tarde)", who: "Todos" },
  ],
  during: [
    { step: "Hola breve (30s), repaso agenda", who: "Facilitador" },
    { step: "Timebox estricto por item (timer visible)", who: "Facilitador" },
    { step: "Notas en Notion compartida en vivo", who: "Note-taker asignado" },
    { step: "1 hablante a la vez (usar 'levantar mano')", who: "Todos" },
    { step: "Decisión documentada en ADR si aplica", who: "Facilitador" },
    { step: "Action items con owner al final (5 min)", who: "Facilitador" },
    { step: "Cerrar con resumen de 30s", who: "Facilitador" },
  ],
  after: [
    { step: "Subir grabación a Drive (si grabó)", who: "Organizador" },
    { step: "Mandar action items por Slack en <1h", who: "Note-taker" },
    { step: "Crear Notion page con notas + decision", who: "Note-taker" },
    { step: "Follow-up email si cliente externo (24h)", who: "Organizador" },
    { step: "Actualizar calendar con próxima reunión si aplica", who: "Organizador" },
  ],
  antiPatterns: [
    "Reunión sin agenda (no se agenda)",
    "Empezar tarde (>5min = falta de respeto)",
    "Monólogo del organizador >10 min",
    "Discusión lateral sin decisión",
    "Terminar sin action items con owner",
    "No seguir up post-meeting",
  ],
}

// ---------------------------------------------------------------------------
// REPORT STANDARDS — how to present and explain reports
// ---------------------------------------------------------------------------
export const REPORT_STANDARDS = [
  {
    type: "Reporte semanal",
    audience: "Equipo + Founder",
    format: "PDF auto-generado (Metabase) + Slack post lunes 7am",
    structure: [
      "1. Highlight del win Sem (1 frase)",
      "2. Métricas clave (MRR, clientes, CAC, churn, NPS)",
      "3. vs OKR: ¿avance o atraso?",
      "4. Top 3 learnings Sem",
      "5. Top 3 bloqueos",
      "6. Prioridades Sem siguiente",
    ],
    presentationProtocol: "Founder lo lee lunes 8am en all-hands stand-up. 5 min para preguntas. Decisiones se documentan en ADR.",
    explainTips: [
      "Empezar con la métrica que más cambió (arriba o abajo)",
      "Comparar siempre vs Sem anterior y vs OKR",
      "Si métrica mala: 1 causa raíz + 1 acción",
      "Si métrica buena: 1 driver + cómo replicar",
      "Nunca solo números — siempre contexto (qué pasó)",
    ],
  },
  {
    type: "Reporte mensual",
    audience: "Founder + Advisors",
    format: "Notion doc + all-hands 1er viernes del mes",
    structure: [
      "1. Resumen ejecutivo (3 bullets)",
      "2. OKR scorecard (verde/amarillo/rojo por OKR)",
      "3. Funnel completo (leads → demos → clientes)",
      "4. Cohortes de retención",
      "5. Unit economics (CAC, LTV, payback)",
      "6. Highlight de cliente del mes (con testimonio)",
      "7. Learnings clave + decisiones tomadas",
      "8. Plan mes siguiente",
    ],
    presentationProtocol: "All-hands 1er viernes (60 min). Founder presenta 30 min, Q&A 30 min. Grabado y subido a Drive.",
    explainTips: [
      "BLUF: resumen ejecutivo arriba (3 bullets)",
      "Una sola historia: ¿qué pasó este mes?",
      "Datos > opiniones (siempre con métricas)",
      "Si algo malo: ownership + plan (no culpar)",
      "Si algo bueno: equipo + replicable (no suerte)",
    ],
  },
  {
    type: "Reporte trimestral",
    audience: "Founder + Board/Advisors + Inversores (cuando existan)",
    format: "PDF + Notion + quarterly review media jornada",
    structure: [
      "1. North star metric (clientes activos)",
      "2. OKR scorecard trimestre (todos)",
      "3. MRR, runway, burn rate",
      "4. Top 3 wins del trimestre",
      "5. Top 3 learnings (qué iterar)",
      "6. Mercado: qué cambió en LATAM",
      "7. Plan siguiente trimestre (OKRs propuestos)",
      "8. Peticiones al board/advisors",
    ],
    presentationProtocol: "Quarterly review media jornada. Founder presenta 90 min, Q&A 90 min. Scorecard compartido 48h antes.",
    explainTips: [
      "Honestidad brutal (no esconder malas noticias)",
      "Datos financiaros claros (runway es crítico)",
      "Si pides algo al board: específico (no 'consejo')",
      "Aprender del trimestre (no solo reportar)",
      "Plan siguiente trimestre: accionable, no aspiracional",
    ],
  },
]

// ---------------------------------------------------------------------------
// DOCUMENTATION LIFECYCLE — how to create and update docs
// ---------------------------------------------------------------------------
export const DOC_LIFECYCLE = {
  principles: [
    "Docs live, no dead: si nadie las actualiza en 6 meses, se archivan",
    "Owner claro: cada doc tiene un owner responsable de mantenerla",
    "Review cadence: mensual/quincenal/trimestral según criticidad",
    "ADRs para decisiones: no para 'cómo se hace' (eso es SOP)",
    "Plantillas primero: estandarizar antes de customizar",
    "Onboarding testeado: cada nuevo hire prueba los manuales y da feedback",
  ],
  creationProcess: [
    { step: 1, action: "Identificar necesidad (nuevo proceso, nueva herramienta)", owner: "Cualquiera" },
    { step: 2, action: "Proponer doc en #docs-propose Slack", owner: "Proponente" },
    { step: 3, action: "Founder/Ops aprueba o pide ajuste", owner: "Founder/Ops" },
    { step: 4, action: "Asignar owner y cadencia de review", owner: "Founder" },
    { step: 5, action: "Crear doc en Notion con plantilla correspondiente", owner: "Owner asignado" },
    { step: 6, action: "Review por pares (1 persona del rol)", owner: "Par" },
    { step: 7, action: "Publicar en /wiki y anunciar en #announcements", owner: "Owner" },
    { step: 8, action: "Onboard al equipo en siguiente stand-up", owner: "Owner" },
  ],
  updateProcess: [
    { step: 1, action: "Cambio detectado (proceso, herramienta, persona)", trigger: "Cualquiera reporta" },
    { step: 2, action: "Owner actualiza doc en <48h", trigger: "Owner" },
    { step: 3, action: "Diff visible en Notion (versionado)", trigger: "Automático" },
    { step: 4, action: "Anunciar cambio en #docs-updates", trigger: "Owner" },
    { step: 5, action: "Onboarding al equipo si cambio mayor", trigger: "Owner" },
  ],
  reviewCadence: [
    { type: "Manual de rol", cadence: "Mensual", owner: "Lead del rol", what: "¿Proceso cambió? ¿Herramienta nueva? ¿Nuevo entregable?" },
    { type: "SOP operativo", cadence: "Quincenal", owner: "Owner del SOP", what: "¿Pasos correctos? ¿Faltan edge cases? ¿Auto-tests funcionan?" },
    { type: "Política", cadence: "Trimestral", owner: "Founder", what: "¿Cumplimiento? ¿Conflictos con nuevas leyes?" },
    { type: "Plantilla", cadence: "Trimestral", owner: "Owner", what: "¿Conversión mejoró? ¿Feedback de usuarios?" },
    { type: "Playbook", cadence: "Trimestral", owner: "Owner", what: "¿Se ejecutó? ¿Learnings? ¿Actualizar?" },
    { type: "KB", cadence: "Continuo", owner: "CS/Ops", what: "Nuevas preguntas → nuevo artículo" },
  ],
  qualityStandards: [
    "Cada doc tiene: propósito, owner, última revisión, próxima revisión",
    "Pasos numerados (no párrafos largos)",
    "Screenshots/looms para herramientas visuales",
    "Plantillas descargables para emails, reportes",
    "Links cruzados entre docs relacionados",
    "Buscabilidad: títulos claros, tags en Notion",
    "Onboarding test: cada 3 meses un nuevo hire prueba los manuales y da feedback",
  ],
}

// ---------------------------------------------------------------------------
// DOCUMENTATION BUILD CALENDAR — when each doc is created
// ---------------------------------------------------------------------------
export const DOC_BUILD_CALENDAR = [
  { week: 1, docs: ["Wiki principal", "Política home office", "Política cripto", "SOP backup", "Manual Founder"], focus: "Fundación: lo crítico para operar día 1" },
  { week: 2, docs: ["Manual Content", "Manual Sales", "SOP onboarding cliente", "SOP cierre venta", "Plantilla email onboarding", "Política comunicación"], focus: "Sales y content: lo que genera revenue" },
  { week: 3, docs: ["Manual Community", "Manual Growth", "SOP deploy", "SOP publicación IG/MELI", "Política vacaciones"], focus: "Canales y dev: escalar adquisición y publicación" },
  { week: 4, docs: ["Manual Dev", "Plantilla reporte semanal", "Plantilla reporte mensual", "Playbook feature launch"], focus: "Dev: documenting technical knowledge" },
  { week: 5, docs: ["Manual CS", "SOP soporte WhatsApp", "SOP escalado founder", "KB preguntas frecuentes"], focus: "CS: soporte estandarizado desde día 1" },
  { week: 6, docs: ["Manual Designer", "Plantilla caso éxito", "Plantilla reel IG"], focus: "Design: brand consistency" },
  { week: 7, docs: ["Manual Ops", "SOP incidente IA", "Playbook crisis comunicación"], focus: "Ops: automatizaciones y crisis" },
  { week: 9, docs: ["Manual Data"], focus: "Data: métricas y análisis estandarizado" },
  { week: 12, docs: ["Review Q3 todos los manuales", "Plan documentación Q4"], focus: "Consolidación: review y plan siguiente Q" },
]
