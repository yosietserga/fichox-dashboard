// ============================================================================
// FichoX — Operational Plan: Team, Tools, Cloud, AI, Automations
// Coherent with the Business Plan (65 clients goal) and Marketing Plan (12 weeks)
// ============================================================================

export const OPS_QUARTER = {
  name: "Q3 2025 · Plan Operativo",
  startDate: "14 Jul 2025",
  endDate: "5 Oct 2025",
  weeks: 12,
  mission: "Dotar a FichoX del equipo, herramientas e infraestructura para sostener 65 clientes activos con SLA y margen",
  northStar: "85 clientes · 99.5% uptime · NPS > 50 · $4.9K MRR · costo operativo < 35% del ingreso",
}

// ---------------------------------------------------------------------------
// ROLES & HEADCOUNT PLAN — week by week
// ---------------------------------------------------------------------------
export interface RolePlan {
  id: string
  role: string
  category: "Founder" | "Full-time" | "Part-time" | "Freelancer" | "Contractor"
  modality: "Home office" | "Remoto LATAM" | "Híbrido" | "On-site"
  weeklyHours: number
  monthlyCostUsd: number
  hireWeek: number // week when this role starts
  endWeek?: number // optional end week
  responsibilities: string[]
  skills: string[]
  recruitment: {
    source: string
    leadTimeWeeks: number
    interviewRounds: number
    testTask: string
  }
  onboarding: {
    durationWeeks: number
    mentor: string
    firstDeliverable: string
  }
  rampCurve: number[] // productivity % per week after hire (1.0 = full productivity)
}

export const ROLES: RolePlan[] = [
  {
    id: "founder",
    role: "Founder / CEO",
    category: "Founder",
    modality: "Home office",
    weeklyHours: 50,
    monthlyCostUsd: 400,
    hireWeek: 1,
    responsibilities: ["Visión y estrategia", "Cierre de ventas complejas", "Partnerships B2B", "All-hands y cultura", "Decisión de producto"],
    skills: ["Sales", "Producto", "Liderazgo", "Conocimiento del mercado LATAM"],
    recruitment: { source: "—", leadTimeWeeks: 0, interviewRounds: 0, testTask: "—" },
    onboarding: { durationWeeks: 0, mentor: "—", firstDeliverable: "Kickoff Q3" },
    rampCurve: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  {
    id: "content",
    role: "Content Creator (Reels + TikTok)",
    category: "Freelancer",
    modality: "Remoto LATAM",
    weeklyHours: 20,
    monthlyCostUsd: 350,
    hireWeek: 1,
    responsibilities: ["1 reel IG diario", "3 TikToks/semana", "Edición de video", "Guiones basados en demos reales", "Banco de contenido semanal"],
    skills: ["CapCut", "Storytelling", "Conocimiento de comercio LATAM", "Manejo de celular"],
    recruitment: { source: "Workana / Fiverr / red personal", leadTimeWeeks: 1, interviewRounds: 1, testTask: "Editar 1 reel demo de 15s" },
    onboarding: { durationWeeks: 1, mentor: "Founder", firstDeliverable: "10 reels listos Sem 1" },
    rampCurve: [0.4, 0.7, 0.9, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  {
    id: "sales",
    role: "Sales / Onboarding Specialist",
    category: "Full-time",
    modality: "Remoto LATAM",
    weeklyHours: 40,
    monthlyCostUsd: 600,
    hireWeek: 1,
    responsibilities: ["Demos 1:1 (10-15/día en peak)", "Onboarding de clientes nuevos", "Cierre de ventas", "Follow-up WhatsApp", "Llamadas NPS 30 días"],
    skills: ["Sales B2C LATAM", "Empatía", "Manejo de CRM", "Demo de producto móvil"],
    recruitment: { source: "LinkedIn / Vecindario / referidos", leadTimeWeeks: 2, interviewRounds: 3, testTask: "Rol-play de demo 15 min" },
    onboarding: { durationWeeks: 2, mentor: "Founder", firstDeliverable: "5 demos solas Sem 2" },
    rampCurve: [0.3, 0.5, 0.7, 0.85, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  {
    id: "community",
    role: "Community Manager (WhatsApp + IG)",
    category: "Part-time",
    modality: "Remoto LATAM",
    weeklyHours: 25,
    monthlyCostUsd: 300,
    hireWeek: 2,
    responsibilities: ["40 grupos WhatsApp activos", "Respuesta DMs IG", "Programar contenido", "Programa de referidos", "Comunidad cerrada Discord"],
    skills: ["Community management", "Manejo de WhatsApp Business", "Copywriting", "Empatía"],
    recruitment: { source: "Workana / referidos", leadTimeWeeks: 1, interviewRounds: 2, testTask: "Redactar 5 respuestas a comerciantes en grupo" },
    onboarding: { durationWeeks: 1, mentor: "Founder", firstDeliverable: "20 grupos activos Sem 3" },
    rampCurve: [0.5, 0.8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  {
    id: "growth",
    role: "Growth / Paid Media",
    category: "Freelancer",
    modality: "Remoto LATAM",
    weeklyHours: 15,
    monthlyCostUsd: 400,
    hireWeek: 2,
    responsibilities: ["Meta Ads (campañas + optimización)", "Píxel y tracking", "A/B testing de creatividades", "Retargeting", "Reportes CPL/CAC"],
    skills: ["Meta Ads Manager", "Google Analytics", "Excel/Sheets", "Análisis de funnel"],
    recruitment: { source: "Workana / LinkedIn", leadTimeWeeks: 1, interviewRounds: 2, testTask: "Setup de 1ra campaña Meta Ads VE" },
    onboarding: { durationWeeks: 1, mentor: "Founder", firstDeliverable: "1ra campaña activa Sem 2" },
    rampCurve: [0.6, 0.9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  {
    id: "product",
    role: "Full-stack Developer",
    category: "Full-time",
    modality: "Remoto LATAM",
    weeklyHours: 40,
    monthlyCostUsd: 1200,
    hireWeek: 3,
    responsibilities: ["Mantenimiento plataforma Next.js", "Features pedidas por top clientes", "Integraciones IG/MELI/make.com", "Optimización prompts IA", "Bug fixes críticos"],
    skills: ["Next.js 16", "TypeScript", "Prisma", "z-ai-web-dev-sdk", "APIs REST/Graph"],
    recruitment: { source: "LinkedIn / GitHub / referidos", leadTimeWeeks: 3, interviewRounds: 4, testTask: "Implementar 1 feature end-to-end en fork" },
    onboarding: { durationWeeks: 2, mentor: "Founder", firstDeliverable: "1 feature ship Sem 5" },
    rampCurve: [0.2, 0.4, 0.6, 0.75, 0.85, 0.95, 1, 1, 1, 1, 1, 1],
  },
  {
    id: "support",
    role: "Customer Success / Soporte",
    category: "Full-time",
    modality: "Remoto LATAM",
    weeklyHours: 40,
    monthlyCostUsd: 500,
    hireWeek: 5,
    responsibilities: ["Soporte WhatsApp (respuestas <2h)", "Documentación base de conocimientos", "Onboarding asíncrono", "Detección temprana de churn", "Escalado a founder"],
    skills: ["Empatía", "Conocimiento del producto", "Escritura clara", "Paciencia"],
    recruitment: { source: "Referidos / Vecindario", leadTimeWeeks: 2, interviewRounds: 2, testTask: "Responder 5 tickets de ejemplo" },
    onboarding: { durationWeeks: 1, mentor: "Sales", firstDeliverable: "50 tickets resueltos Sem 6" },
    rampCurve: [0.5, 0.8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  {
    id: "design",
    role: "Designer (UI + Branding)",
    category: "Freelancer",
    modality: "Remoto LATAM",
    weeklyHours: 10,
    monthlyCostUsd: 250,
    hireWeek: 6,
    responsibilities: ["Iterar UI mobile", "Plantillas IG/TikTok", "Casos de éxito design", "Manual de marca v2", "Brand assets"],
    skills: ["Figma", "Diseño mobile-first", "Brand identity", "Prototipado"],
    recruitment: { source: "Dribbble / referidos", leadTimeWeeks: 2, interviewRounds: 2, testTask: "Rediseñar 1 pantalla de la app" },
    onboarding: { durationWeeks: 1, mentor: "Founder", firstDeliverable: "Manual de marca v1.1 Sem 7" },
    rampCurve: [0.6, 0.9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  {
    id: "ops",
    role: "Operations / Automation Lead",
    category: "Part-time",
    modality: "Remoto LATAM",
    weeklyHours: 20,
    monthlyCostUsd: 450,
    hireWeek: 7,
    responsibilities: ["Automatizaciones make.com", "Setup de IA para auto-respuestas", "Dashboards de métricas", "Procesos de onboarding", "Documentación operativa"],
    skills: ["make.com", "n8n", "Python", "z-ai-web-dev-sdk", "Notion/Slack ops"],
    recruitment: { source: "Workana / Upwork", leadTimeWeeks: 2, interviewRounds: 2, testTask: "Automatizar 1 workflow con make.com" },
    onboarding: { durationWeeks: 1, mentor: "Founder", firstDeliverable: "3 automatizaciones live Sem 8" },
    rampCurve: [0.5, 0.8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  {
    id: "data",
    role: "Data Analyst (part-time)",
    category: "Freelancer",
    modality: "Remoto LATAM",
    weeklyHours: 10,
    monthlyCostUsd: 300,
    hireWeek: 9,
    responsibilities: ["Análisis de cohorte", "Dashboard métricas Sem", "Funnels y conversión", "Predicción de churn", "Insights para_growth"],
    skills: ["SQL", "Metabase/Looker", "Excel avanzado", "Estadística aplicada"],
    recruitment: { source: "Upwork / LinkedIn", leadTimeWeeks: 1, interviewRounds: 2, testTask: "Análisis de cohorte sobre dataset sintético" },
    onboarding: { durationWeeks: 1, mentor: "Founder", firstDeliverable: "Dashboard Q3 Sem 10" },
    rampCurve: [0.7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
]

// ---------------------------------------------------------------------------
// HEADCOUNT BY WEEK — derived from ROLES (active roles + weighted FTE)
// ---------------------------------------------------------------------------
export interface HeadcountWeek {
  week: number
  activeRoles: number
  fte: number // full-time equivalent (weighted by hours/40)
  monthlyCost: number
  newHires: { roleId: string; role: string }[]
}

export const HEADCOUNT_BY_WEEK: HeadcountWeek[] = Array.from({ length: 12 }, (_, i) => {
  const week = i + 1
  const activeRoles = ROLES.filter((r) => r.hireWeek <= week && (!r.endWeek || r.endWeek >= week))
  const fte = activeRoles.reduce((s, r) => s + r.weeklyHours / 40, 0)
  const monthlyCost = activeRoles.reduce((s, r) => s + r.monthlyCostUsd, 0)
  const newHires = ROLES.filter((r) => r.hireWeek === week).map((r) => ({ roleId: r.id, role: r.role }))
  return { week, activeRoles: activeRoles.length, fte: +fte.toFixed(2), monthlyCost, newHires }
})

// ---------------------------------------------------------------------------
// RECRUITMENT PROCESS — funnel from sourcing to hire
// ---------------------------------------------------------------------------
export const RECRUITMENT_FUNNEL = [
  { stage: "Sourcing", action: "Publicar en Workana/Fiverr/LinkedIn + pedir referidos", target: 20, conversion: 1.0, timeDays: "1-2", tools: "Workana, Fiverr, LinkedIn, red personal" },
  { stage: "Filtro inicial", action: "Screening CV + 1ra llamada 15 min", target: 10, conversion: 0.5, timeDays: "3-5", tools: "Calendly, Loom, Notion" },
  { stage: "Test task", action: "Tarea práctica pagada (1-3h)", target: 6, conversion: 0.6, timeDays: "3-5", tools: "Notion, GitHub, Figma según rol" },
  { stage: "Entrevista técnica", action: "Revisión test + preguntas situacionales 60 min", target: 3, conversion: 0.5, timeDays: "2-3", tools: "Google Meet, Loom" },
  { stage: "Entrevista cultural", action: "Fit cultural + misión/visión con founder 45 min", target: 2, conversion: 0.67, timeDays: "1-2", tools: "Google Meet" },
  { stage: "Oferta y contratación", action: "Oferta escrita + contrato freelance/full-time", target: 1, conversion: 0.5, timeDays: "2-3", tools: "DocuSign, contrato PAN" },
]

// ---------------------------------------------------------------------------
// ONBOARDING & TRAINING PLAN — for new hires
// ---------------------------------------------------------------------------
export const ONBOARDING_PLAN = {
  day1: [
    "Bienvenida del founder (60 min) — historia, misión, visión",
    "Setup de cuentas: email, Slack, Notion, GitHub (según rol)",
    "Welcome kit digital: manual de marca, deck onboarding, video cliente",
    "Lectura: README del repo + LEGAL.md + TECHNICAL.md",
  ],
  day2to5: [
    "Pairing con mentor (founder o senior del rol)",
    "Tarea práctica supervisada (la misma del test pero en producción)",
    "Shadowing: observar 2 demos de ventas reales (si rol es customer-facing)",
    "Setup de herramientas específicas del rol",
  ],
  week2: [
    "Primer entregable en producción (con review del mentor)",
    "Stand-up diario + retrospectiva viernes",
    "Feedback 360 con mentor (qué fue bien, qué falta)",
    "Definir OKR personal del trimestre",
  ],
  week3to4: [
    "Trabajo autónomo con check-in diario",
    "Ramp-up al 85-100% de productividad según ramp curve",
    "1ra contribución al manual operativo (mejora de proceso)",
    "Evaluación de rampa con founder",
  ],
  trainingTopics: [
    { topic: "Producto FichoX end-to-end", duration: "2h", mandatory: true, audience: "Todos" },
    { topic: "z-ai-web-dev-sdk y pipeline de IA", duration: "1.5h", mandatory: true, audience: "Dev, Ops, Data" },
    { topic: "Sales B2C para comerciantes LATAM", duration: "2h", mandatory: true, audience: "Sales, Support" },
    { topic: "Manejo de objeciones (precio en cripto)", duration: "1h", mandatory: true, audience: "Sales, Support" },
    { topic: "Comunidad WhatsApp (anti-spam, valor primero)", duration: "1h", mandatory: true, audience: "Community, Sales" },
    { topic: "Meta Ads para LATAM low-budget", duration: "1.5h", mandatory: true, audience: "Growth" },
    { topic: "Seguridad: nunca pedir claves privadas ni seed phrases", duration: "30min", mandatory: true, audience: "Todos" },
    { topic: "Manual de marca y tono de voz", duration: "1h", mandatory: true, audience: "Content, Community, Design" },
  ],
}

// ---------------------------------------------------------------------------
// REMOTE CAPTATION — channels and process for remote hiring
// ---------------------------------------------------------------------------
export const REMOTE_CAPTATION = [
  { channel: "Workana", bestFor: "Freelancers LATAM (content, design, ops)", cost: "0 (gratis para publicar)", avgTimeToHire: "5 días", quality: "Media-alta" },
  { channel: "Fiverr", bestFor: "Tareas puntuales (edición, voiceover)", cost: "5-10% comisión", avgTimeToHire: "3 días", quality: "Variable" },
  { channel: "Upwork", bestFor: "Devs, data analysts, growth specialists", cost: "10% comisión", avgTimeToHire: "7 días", quality: "Alta" },
  { channel: "LinkedIn", bestFor: "Full-time LATAM (sales, devs)", cost: "$0-50/post", avgTimeToHire: "14 días", quality: "Alta" },
  { channel: "Vecindario / Torre", bestFor: "Talentos LATAM remoto", cost: "Gratis", avgTimeToHire: "10 días", quality: "Media-alta" },
  { channel: "Referidos (red personal)", bestFor: "Confianza, roles críticos", cost: "Bonus $100 si contratas", avgTimeToHire: "5 días", quality: "Muy alta" },
  { channel: "Discord/Slack comunidades", bestFor: "Devs especialistas (Next.js, IA)", cost: "Gratis", avgTimeToHire: "10 días", quality: "Alta" },
]

// ---------------------------------------------------------------------------
// TOOLS & SOFTWARE — by category with weekly cost
// ---------------------------------------------------------------------------
export interface ToolItem {
  name: string
  category: string
  purpose: string
  costUsdMonth: number
  startWeek: number
  perUser: boolean
}

export const TOOLS: ToolItem[] = [
  // Comms & collab
  { name: "Slack (Pro)", category: "Comunicación", purpose: "Chat interno, canales por función, #why-we-do-this", costUsdMonth: 8, startWeek: 1, perUser: true },
  { name: "Google Workspace", category: "Comunicación", purpose: "Email, Meet, Drive, Docs, Sheets", costUsdMonth: 6, startWeek: 1, perUser: true },
  { name: "Loom (Business)", category: "Comunicación", purpose: "Videos tutoriales async, demos grabadas, onboarding", costUsdMonth: 12.5, startWeek: 1, perUser: true },
  { name: "Notion (Plus)", category: "Productividad", purpose: "Wiki interna, OKRs, manual operativo, base de conocimientos", costUsdMonth: 10, startWeek: 1, perUser: true },
  // CRM & sales
  { name: "Notion CRM (DIY)", category: "CRM", purpose: "Pipeline de leads, demos agendadas, cierres", costUsdMonth: 0, startWeek: 1, perUser: false },
  { name: "Calendly (Standard)", category: "Sales", purpose: "Agendamiento de demos automático", costUsdMonth: 10, startWeek: 1, perUser: true },
  { name: "WhatsApp Business API", category: "Sales", purpose: "Plantillas, respuestas automáticas, broadcasts", costUsdMonth: 25, startWeek: 2, perUser: false },
  // Marketing
  { name: "Meta Ads", category: "Marketing", purpose: "Campañas IG Stories + Feed VE/CO", costUsdMonth: 150, startWeek: 2, perUser: false },
  { name: "Buffer / Later", category: "Marketing", purpose: "Programación IG + TikTok", costUsdMonth: 12, startWeek: 2, perUser: false },
  { name: "Mailchimp (Essentials)", category: "Marketing", purpose: "Newsletter semanal, campañas de upgrade", costUsdMonth: 13, startWeek: 4, perUser: false },
  // Product & dev
  { name: "GitHub (Team)", category: "Dev", purpose: "Repo, Issues, Actions CI/CD", costUsdMonth: 4, startWeek: 1, perUser: true },
  { name: "Vercel (Pro)", category: "Dev", purpose: "Hosting frontend + API (Next.js)", costUsdMonth: 20, startWeek: 1, perUser: false },
  { name: "Railway", category: "Dev", purpose: "Node persistente para background jobs de IA", costUsdMonth: 20, startWeek: 1, perUser: false },
  { name: "Neon / Turso (Postgres)", category: "Dev", purpose: "Base de datos serverless", costUsdMonth: 0, startWeek: 1, perUser: false },
  { name: "Sentry (Team)", category: "Dev", purpose: "Error tracking + perf monitoring", costUsdMonth: 26, startWeek: 1, perUser: false },
  { name: "Cloudflare", category: "Dev", purpose: "CDN, DNS, WAF, dominio", costUsdMonth: 5, startWeek: 1, perUser: false },
  { name: "Figma (Professional)", category: "Design", purpose: "Diseño UI + brand assets", costUsdMonth: 12, startWeek: 6, perUser: true },
  // Support & community
  { name: "Crisp / Intercom (Lite)", category: "Support", purpose: "Chat en vivo web, base de conocimientos", costUsdMonth: 25, startWeek: 5, perUser: false },
  { name: "Discord (Nitro Server)", category: "Community", purpose: "Comunidad cerrada de comerciantes", costUsdMonth: 10, startWeek: 6, perUser: false },
  // Analytics
  { name: "Plausible", category: "Analytics", purpose: "Web analytics privacy-friendly", costUsdMonth: 9, startWeek: 1, perUser: false },
  { name: "Metabase (self-hosted)", category: "Analytics", purpose: "Dashboard de métricas, cohortes, funnels", costUsdMonth: 0, startWeek: 9, perUser: false },
  { name: "PostHog (free tier)", category: "Analytics", purpose: "Product analytics, funnels, retention", costUsdMonth: 0, startWeek: 4, perUser: false },
]

// ---------------------------------------------------------------------------
// AI INTEGRATIONS & AUTOMATIONS
// ---------------------------------------------------------------------------
export const AI_INTEGRATIONS = [
  {
    name: "Pipeline de captura IA (core)",
    provider: "z-ai-web-dev-sdk",
    models: "GLM-4.6v (VLM) + LLM + ASR + image-edit",
    purpose: "Foto → ficha técnica en 30s. Pipeline principal del producto.",
    costPerUse: 0.08,
    monthlyVolume: 4500, // ~70 capturas/cliente/mes × 65 clientes
    monthlyCost: 360,
    automationLevel: "Total (fire-and-forget en background)",
  },
  {
    name: "Auto-respuesta de chats/IM",
    provider: "z-ai-web-dev-sdk (LLM)",
    models: "LLM",
    purpose: "Detectar oportunidades de venta en DMs + responder consultas frecuentes de productos",
    costPerUse: 0.005,
    monthlyVolume: 8000,
    monthlyCost: 40,
    automationLevel: "Asistida (humano aprueba antes de enviar)",
  },
  {
    name: "Generación de captions IG",
    provider: "z-ai-web-dev-sdk (LLM)",
    models: "LLM",
    purpose: "Caption + hashtags en español venezolano por producto",
    costPerUse: 0.003,
    monthlyVolume: 4500,
    monthlyCost: 13.5,
    automationLevel: "Total (se genera en cada captura)",
  },
  {
    name: "Búsqueda web enriquecida",
    provider: "z-ai-web-dev-sdk (web-search)",
    models: "Web Search",
    purpose: "Enriquecer ficha cuando la IA tiene baja confianza (<0.5)",
    costPerUse: 0.01,
    monthlyVolume: 900,
    monthlyCost: 9,
    automationLevel: "Condicional (solo baja confianza)",
  },
  {
    name: "Video promocional 5s",
    provider: "z-ai-web-dev-sdk (video-gen)",
    models: "Image-to-video",
    purpose: "Generar video corto de producto para cliente premium",
    costPerUse: 0.15,
    monthlyVolume: 200,
    monthlyCost: 30,
    automationLevel: "Manual (cliente lo solicita)",
  },
  {
    name: "Webhook → make.com → Kommo CRM",
    provider: "make.com + Kommo",
    models: "—",
    purpose: "Sincronizar productos publicados con CRM para seguimiento comercial",
    costPerUse: 0,
    monthlyVolume: 1500,
    monthlyCost: 25,
    automationLevel: "Total (webhook fire-and-forget)",
  },
  {
    name: "Detección de churn con IA",
    provider: "z-ai-web-dev-sdk (LLM)",
    models: "LLM",
    purpose: "Analiza patrones de uso semanal y flagnea clientes en riesgo",
    costPerUse: 0.002,
    monthlyVolume: 260, // 65 clientes × 4 semanas
    monthlyCost: 0.5,
    automationLevel: "Total (semana, alerta a CS)",
  },
  {
    name: "BCV rate auto-fetch",
    provider: "Web scraping (bcv.org.ve)",
    models: "—",
    purpose: "Auto-actualizar tasa USD/Bs diariamente a las 9am",
    costPerUse: 0,
    monthlyVolume: 30,
    monthlyCost: 0,
    automationLevel: "Total (cron diario)",
  },
]

export const AUTOMATIONS = [
  { name: "Onboarding email sequence", trigger: "Nuevo cliente paga", action: "5 emails automáticos (día 0, 1, 3, 7, 14) con tutoriales", tool: "Mailchimp + Zapier", saves: "2h/semana" },
  { name: "Lead capture → CRM", trigger: "Form en web o DM IG", action: "Crea lead en Notion CRM + Slack #new-leads", tool: "Zapier", saves: "30min/lead" },
  { name: "Demo booking", trigger: "Lead elige horario en Calendly", action: "Crea evento Meet + recordatorio WhatsApp + entrada CRM", tool: "Calendly + Zapier + WhatsApp API", saves: "10min/demo" },
  { name: "Post-demo follow-up", trigger: "Demo completada", action: "Email con resumen + propuesta + 2 recordatorios", tool: "Mailchimp + Zapier", saves: "15min/demo" },
  { name: "NPS auto-trigger", trigger: "Cliente cumple 30 días", action: "Email NPS + si detractor, alerta a founder", tool: "Mailchimp + Zapier + Slack", saves: "1h/semana" },
  { name: "Churn alert", trigger: "Cliente no captura en 7 días", action: "Alerta Slack a CS + email de reactivación al cliente", tool: "z-ai + make.com + Slack", saves: "1 cliente/mes" },
  { name: "Reporte semanal automático", trigger: "Cada lunes 7am", action: "Genera PDF con métricas Sem + envía al equipo", tool: "Metabase + Zapier + Slack", saves: "2h/semana" },
  { name: "Programar contenido IG/TikTok", trigger: "Lunes 9am", action: "10 piezas programadas para la semana", tool: "Buffer", saves: "3h/semana" },
  { name: "Backup DB automático", trigger: "Diario 3am", action: "Backup Postgres → S3 + retención 30 días", tool: "pg_dump + cron + AWS S3", saves: "Crítico (sin backup = riesgo)" },
  { name: "Verificación de pago USDT", trigger: "Cliente pega TX hash", action: "BSCscan API verifica + activa suscripción", tool: "BSCscan API + webhook", saves: "10min/cliente" },
]

// ---------------------------------------------------------------------------
// CLOUD & INFRASTRUCTURE INVESTMENT
// ---------------------------------------------------------------------------
export const INFRASTRUCTURE = {
  cloud: [
    { service: "Vercel Pro (frontend + API)", purpose: "Hosting Next.js, Edge functions, CDN global", costMonth: 20, scale: "Hasta 100K visitas/mes sin escalar", notes: "Serverless; para jobs largos usar Railway" },
    { service: "Railway (background jobs)", purpose: "Node persistente para pipeline IA fire-and-forget", costMonth: 20, scale: "Escala vertical a $50/mes en 100 clientes", notes: "Crítico: los jobs largos no corren en Vercel" },
    { service: "Neon Postgres (DB)", purpose: "Base de datos principal serverless", costMonth: 0, scale: "Free tier 0.5GB; $19/mes en 100 clientes", notes: "Branching para staging gratis" },
    { service: "Cloudflare", purpose: "DNS + CDN + WAF + dominio", costMonth: 5, scale: "Prácticamente ilimitado", notes: "Protección DDoS incluida" },
    { service: "AWS S3 (uploads + backups)", purpose: "Fotos de productos + backups DB", costMonth: 8, scale: "$0.023/GB, crece con clientes", notes: "Lifecycle policy 30 días a Glacier" },
    { service: "Sentry", purpose: "Error tracking + performance", costMonth: 26, scale: "Team plan cubre 50K errores/mes", notes: "Alertas a Slack en tiempo real" },
  ],
  ai: [
    { service: "z-ai-web-dev-sdk (VLM glm-4.6v)", purpose: "Visión: analizar fotos de productos", costMonth: 200, scale: "$0.05/use × ~4000/mes", notes: "Es el 55% del costo variable total" },
    { service: "z-ai-web-dev-sdk (LLM)", purpose: "Generación de fichas + captions + auto-respuestas", costMonth: 80, scale: "$0.003-0.005/use", notes: "Segundo mayor costo IA" },
    { service: "z-ai-web-dev-sdk (image-edit)", purpose: "Limpiar fotos + HD enhance", costMonth: 60, scale: "$0.03/use × ~2000/mes", notes: "Opcional pero diferencial de producto" },
    { service: "z-ai-web-dev-sdk (ASR)", purpose: "Transcribir notas de voz del comerciante", costMonth: 15, scale: "$0.01/use", notes: "Uso bajo (<10% de clientes)" },
    { service: "z-ai-web-dev-sdk (video-gen)", purpose: "Video promocional 5s", costMonth: 30, scale: "$0.15/use × 200/mes", notes: "Solo plan anual" },
    { service: "z-ai-web-dev-sdk (web-search)", purpose: "Enriquecer fichas con baja confianza", costMonth: 9, scale: "$0.01/use", notes: "Condicional" },
  ],
  local: [
    { item: "MacBook Air M2 (founder/dev)", purpose: "Desarrollo + demos + content", costOneTime: 999, owner: "Founder", notes: "Ya existe" },
    { item: "iPhone 13 (founder/sales)", purpose: "Demos en vivo + captura de contenido", costOneTime: 400, owner: "Founder", notes: "Ya existe" },
    { item: "Laptops freelancer (BYOD)", purpose: "Cada freelancer usa su laptop", costOneTime: 0, owner: "Freelancers", notes: "Política BYOD (Bring Your Own Device)" },
    { item: "Setup streaming (founder)", purpose: "Webinars + all-hands grabadas", costOneTime: 150, owner: "Founder", notes: "Webcam Logitech + mic USB" },
    { item: "Constitución Panamá SA", purpose: "Entidad legal crypto-friendly", costOneTime: 3000, owner: "Empresa", notes: "One-time, año 1" },
  ],
  integrations: [
    { name: "Instagram Graph API", purpose: "Publicación directa a IG sin make.com", costMonth: 0, complexity: "Media (OAuth + Graph API)", notes: "Requiere cuenta Business de IG" },
    { name: "MercadoLibre API", purpose: "Publicación automática en MELI", costMonth: 0, complexity: "Alta (OAuth + category_predictor + attributes)", notes: "Por país (VE, CO, EC)" },
    { name: "make.com", purpose: "Orquestación de webhooks → CRM + IG", costMonth: 25, complexity: "Baja (visual)", notes: "Free tier 1000 ops/mes" },
    { name: "Kommo CRM", purpose: "CRM comercial para pipeline B2B", costMonth: 15, complexity: "Baja", notes: "Solo si >30 clientes B2B" },
    { name: "Zapier (free)", purpose: "Conexiones simples (Calendly, Mailchimp, Slack)", costMonth: 0, complexity: "Baja", notes: "100 tasks/mes gratis" },
    { name: "BSCscan API", purpose: "Verificación automática de pagos USDT", costMonth: 0, complexity: "Media", notes: "Free tier 5 req/s" },
    { name: "WhatsApp Business API", purpose: "Plantillas + broadcasts + auto-respuestas", costMonth: 25, complexity: "Alta (requiere BSP)", notes: "Vía 360dialog o Twilio" },
  ],
}

// ---------------------------------------------------------------------------
// WEEKLY OPERATIONAL COSTS BREAKDOWN — coherent with financial model
// ---------------------------------------------------------------------------
export interface CostWeek {
  week: number
  personnel: number
  tools: number
  cloud: number
  ai: number
  integrations: number
  ads: number
  total: number
  cumulative: number
}

export const COSTS_BY_WEEK: CostWeek[] = (() => {
  let cumulative = 0
  return Array.from({ length: 12 }, (_, i) => {
    const week = i + 1
    const personnel = HEADCOUNT_BY_WEEK[i].monthlyCost / 4 // weekly = monthly/4
    const tools = TOOLS.filter((t) => t.startWeek <= week).reduce((s, t) => {
      const users = t.perUser ? HEADCOUNT_BY_WEEK[i].activeRoles : 1
      return s + (t.costUsdMonth * users) / 4
    }, 0)
    const cloud = INFRASTRUCTURE.cloud.filter((c) => true).reduce((s, c) => s + c.costMonth / 4, 0)
    const ai = INFRASTRUCTURE.ai.reduce((s, a) => s + a.costMonth / 4, 0)
    const integrations = INFRASTRUCTURE.integrations.reduce((s, n) => s + (n.costMonth || 0) / 4, 0)
    const ads = week >= 2 ? 150 / 4 : 0 // Meta Ads starts week 2
    const total = +(personnel + tools + cloud + ai + integrations + ads).toFixed(2)
    cumulative = +(cumulative + total).toFixed(2)
    return { week, personnel: +personnel.toFixed(2), tools: +tools.toFixed(2), cloud: +cloud.toFixed(2), ai: +ai.toFixed(2), integrations: +integrations.toFixed(2), ads: +ads.toFixed(2), total, cumulative }
  })
})()

// ---------------------------------------------------------------------------
// INVESTMENT TIMELINE — one-time + monthly recurring
// ---------------------------------------------------------------------------
export const INVESTMENT_TIMELINE = [
  { week: 0, item: "Seed inicial (founder)", type: "One-time", amount: 3000, purpose: "Constitución Panamá + logo + setup inicial" },
  { week: 0, item: "MacBook + iPhone", type: "One-time", amount: 0, purpose: "Ya en propiedad del founder" },
  { week: 1, item: "Herramientas SaaS (mes 1)", type: "Recurring", amount: 80, purpose: "Slack, Google, Notion, Vercel, Railway, etc." },
  { week: 1, item: "Founder + Content creator", type: "Recurring", amount: 750, purpose: "Salarios semana 1" },
  { week: 2, item: "Hire Sales + Community + Growth", type: "Recurring", amount: 1300, purpose: "Salarios semana 2-3" },
  { week: 3, item: "Hire Full-stack Dev", type: "Recurring", amount: 1200, purpose: "Salario dev (clave para iterar producto)" },
  { week: 5, item: "Hire Customer Success", type: "Recurring", amount: 500, purpose: "SLA soporte <2h" },
  { week: 6, item: "Hire Designer", type: "Recurring", amount: 250, purpose: "Iterar UI + manual de marca" },
  { week: 7, item: "Hire Ops/Automation Lead", type: "Recurring", amount: 450, purpose: "Automatizar y escalar procesos" },
  { week: 9, item: "Hire Data Analyst", type: "Recurring", amount: 300, purpose: "Cohortes y predicción de churn" },
]

// ---------------------------------------------------------------------------
// AUTOMATION MATURITY — % of work automated by week
// ---------------------------------------------------------------------------
export const AUTOMATION_MATURITY = CALENDAR.map((_, i) => {
  const week = i + 1
  // Starts low, grows as automations are added
  const automationsActive = AUTOMATIONS.filter((a, idx) => {
    if (week >= 1 && idx < 2) return true // lead capture, demo booking from week 1
    if (week >= 2 && idx < 4) return true // follow-up, post-demo
    if (week >= 4 && idx < 6) return true // NPS, churn alert
    if (week >= 7 && idx < 8) return true // reporte semanal
    if (week >= 8) return true // all
    return false
  }).length
  const pct = Math.min(85, 20 + automationsActive * 8) // cap at 85%
  return { week: `S${week}`, automation: pct, manual: 100 - pct }
})

// import CALENDAR from marketing-data
import { CALENDAR } from '@/lib/marketing-data'
