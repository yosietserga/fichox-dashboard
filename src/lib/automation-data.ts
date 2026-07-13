// ============================================================================
// FichoX — Automation Plan: Parallel to Marketing & Operations
// Day-by-day, what to automate, with what tools, investment, ROI, risk scenarios
// ============================================================================

export const AUTO_QUARTER = {
  name: "Q3 2025 · Plan de Automatización",
  startDate: "14 Jul 2025",
  endDate: "5 Oct 2025",
  weeks: 12,
  mission: "Automatizar el trabajo repetitivo para que el equipo se enfoque en lo que la IA no puede hacer: cerrar ventas, crear contenido creativo y cuidar clientes",
  northStar: "40h/semana ahorradas · $3,200/mes en horas-hombre · payback Sem 7 · 85% trabajo automatizado",
  parallel: "Corre en paralelo al Plan de Marketing (suplanta tareas repetitivas) y al Plan Operativo (reduce horas-hombre necesarias)",
}

// ---------------------------------------------------------------------------
// REPLACEMENT MAP — which marketing/ops tasks get replaced by automations
// ---------------------------------------------------------------------------
export interface Replacement {
  id: string
  originalTask: string
  sourcePlan: "Marketing" | "Operativo"
  sourceWeek: number
  automation: string
  level: "Total" | "Parcial" | "Asistida"
  hoursBefore: number // hours/week manual
  hoursAfter: number // hours/week after automation
  saved: number
  tools: string[]
}

export const REPLACEMENTS: Replacement[] = [
  { id: "r1", originalTask: "Contactar comerciantes WhatsApp manualmente", sourcePlan: "Marketing", sourceWeek: 1, automation: "WhatsApp Business API + broadcast templates + AI first-reply", level: "Parcial", hoursBefore: 14, hoursAfter: 4, saved: 10, tools: ["WhatsApp API", "z-ai LLM", "make.com"] },
  { id: "r2", originalTask: "Agendar demos por WhatsApp/DM", sourcePlan: "Marketing", sourceWeek: 1, automation: "Calendly + auto Meet link + reminder sequence", level: "Total", hoursBefore: 6, hoursAfter: 0.5, saved: 5.5, tools: ["Calendly", "Zapier", "Google Meet"] },
  { id: "r3", originalTask: "Follow-up post-demo manual", sourcePlan: "Marketing", sourceWeek: 2, automation: "Email sequence 3 toques automáticos (día 0, 2, 5)", level: "Total", hoursBefore: 5, hoursAfter: 0.5, saved: 4.5, tools: ["Mailchimp", "Zapier"] },
  { id: "r4", originalTask: "Programar contenido IG/TikTok diario", sourcePlan: "Marketing", sourceWeek: 2, automation: "Buffer bulk-schedule + auto-publish", level: "Total", hoursBefore: 4, hoursAfter: 0.5, saved: 3.5, tools: ["Buffer"] },
  { id: "r5", originalTask: "Newsletter semanal redacción+envío", sourcePlan: "Marketing", sourceWeek: 6, automation: "Template + auto-pull métricas + auto-send viernes 9am", level: "Asistida", hoursBefore: 3, hoursAfter: 1, saved: 2, tools: ["Mailchimp", "Metabase", "make.com"] },
  { id: "r6", originalTask: "Análisis semanal de métricas", sourcePlan: "Marketing", sourceWeek: 1, automation: "Dashboard Metabase auto-refresh + reporte PDF Slack lunes 7am", level: "Total", hoursBefore: 4, hoursAfter: 0.5, saved: 3.5, tools: ["Metabase", "Zapier", "Slack"] },
  { id: "r7", originalTask: "Llamadas NPS a 30 días", sourcePlan: "Marketing", sourceWeek: 4, automation: "Email NPS automático + alerta Slack si detractor", level: "Total", hoursBefore: 3, hoursAfter: 0.5, saved: 2.5, tools: ["Mailchimp", "Zapier", "Slack"] },
  { id: "r8", originalTask: "Ingreso a grupos WhatsApp + aporte valor", sourcePlan: "Marketing", sourceWeek: 2, automation: "AI first-reply + plantillas de valor + rotación automatizada", level: "Parcial", hoursBefore: 8, hoursAfter: 3, saved: 5, tools: ["WhatsApp API", "z-ai LLM"] },
  { id: "r9", originalTask: "Respuesta DMs Instagram", sourcePlan: "Operativo", sourceWeek: 2, automation: "AI auto-respuesta con aprobación humana para oportunidades", level: "Asistida", hoursBefore: 6, hoursAfter: 2, saved: 4, tools: ["z-ai LLM", "make.com"] },
  { id: "r10", originalTask: "Onboarding nuevos clientes (emails manuales)", sourcePlan: "Operativo", sourceWeek: 1, automation: "5-email sequence automática (día 0, 1, 3, 7, 14)", level: "Total", hoursBefore: 4, hoursAfter: 0.5, saved: 3.5, tools: ["Mailchimp", "Zapier"] },
  { id: "r11", originalTask: "Soporte WhatsApp respuestas <2h", sourcePlan: "Operativo", sourceWeek: 5, automation: "AI first-line + escalate to human si complejo", level: "Asistida", hoursBefore: 12, hoursAfter: 4, saved: 8, tools: ["z-ai LLM", "WhatsApp API", "Crisp"] },
  { id: "r12", originalTask: "Detección de churn (llamada semanal)", sourcePlan: "Operativo", sourceWeek: 7, automation: "AI analiza patrones + alerta Slack si riesgo >70%", level: "Total", hoursBefore: 3, hoursAfter: 0.5, saved: 2.5, tools: ["z-ai LLM", "make.com", "Slack"] },
  { id: "r13", originalTask: "Reporte semanal de métricas al equipo", sourcePlan: "Operativo", sourceWeek: 1, automation: "Auto-generate PDF + post Slack lunes 8am", level: "Total", hoursBefore: 2, hoursAfter: 0, saved: 2, tools: ["Metabase", "Zapier", "Slack"] },
  { id: "r14", originalTask: "Verificación pago USDT manual", sourcePlan: "Operativo", sourceWeek: 1, automation: "BSCscan API auto-verify + activar suscripción", level: "Total", hoursBefore: 1.5, hoursAfter: 0, saved: 1.5, tools: ["BSCscan API", "webhook"] },
  { id: "r15", originalTask: "Backup DB manual", sourcePlan: "Operativo", sourceWeek: 1, automation: "Cron diario 3am + S3 + retención 30 días", level: "Total", hoursBefore: 1, hoursAfter: 0, saved: 1, tools: ["pg_dump", "cron", "AWS S3"] },
  { id: "r16", originalTask: "Recordatorios de renovación", sourcePlan: "Operativo", sourceWeek: 3, automation: "Email + WhatsApp 7/3/1 días antes del vencimiento", level: "Total", hoursBefore: 2, hoursAfter: 0, saved: 2, tools: ["Mailchimp", "WhatsApp API", "Zapier"] },
  { id: "r17", originalTask: "Generación de captions IG por producto", sourcePlan: "Marketing", sourceWeek: 1, automation: "LLM auto-generate en cada captura (ya en producto)", level: "Total", hoursBefore: 5, hoursAfter: 0, saved: 5, tools: ["z-ai LLM"] },
  { id: "r18", originalTask: "Scraping tasa BCV manual", sourcePlan: "Operativo", sourceWeek: 1, automation: "Cron diario 9am scrapea bcv.org.ve", level: "Total", hoursBefore: 0.5, hoursAfter: 0, saved: 0.5, tools: ["cheerio", "cron"] },
]

export const TOTAL_HOURS_SAVED_WEEKLY = REPLACEMENTS.reduce((s, r) => s + r.saved, 0) // ~66h → stabilized
export const BLEND_HOURLY = 20 // USD/hour blended team cost

// ---------------------------------------------------------------------------
// 12-WEEK AUTOMATION BUILD CALENDAR — day by day
// ---------------------------------------------------------------------------
export interface AutoDay {
  day: string
  date: string
  task: string
  tool: string
  replaces: string
  hoursSaved: number
  investment: number // dev hours cost that day
  phase: "build" | "deploy" | "test" | "monitor"
}

export interface AutoWeek {
  week: number
  phase: string
  dates: string
  theme: string
  daily: AutoDay[]
  weeklyHoursSaved: number // cumulative hours saved this week
  weeklyInvestment: number // dev cost this week
  cumulativeNet: number // savings - investment cumulative
}

export const AUTO_CALENDAR: AutoWeek[] = [
  {
    week: 1, phase: "Fundación", dates: "14–20 Jul", theme: "Setup + automatizaciones críticas día 1",
    daily: [
      { day: "Lun", date: "14", task: "Setup make.com + conectar Slack/Notion/Calendly", tool: "make.com", replaces: "—", hoursSaved: 0, investment: 100, phase: "build" },
      { day: "Mar", date: "15", task: "Build: Lead capture web → Notion CRM + alerta Slack", tool: "make.com + Zapier", replaces: "Ops: entrada manual leads CRM", hoursSaved: 0, investment: 80, phase: "build" },
      { day: "Mié", date: "16", task: "Build: Calendly → Meet link + recordatorio WhatsApp", tool: "Calendly + Zapier + WhatsApp API", replaces: "Marketing: agendar demos manual", hoursSaved: 0, investment: 80, phase: "build" },
      { day: "Jue", date: "17", task: "Deploy + test: lead capture + demo booking live", tool: "—", replaces: "—", hoursSaved: 2, investment: 40, phase: "deploy" },
      { day: "Vie", date: "18", task: "Build: cron BCV rate + cron backup DB S3", tool: "cron + pg_dump + S3", replaces: "Ops: BCV y backup manuales", hoursSaved: 1.5, investment: 60, phase: "build" },
      { day: "Sáb", date: "19", task: "Build: BSCscan payment verification enhanced", tool: "BSCscan API + webhook", replaces: "Ops: verificación USDT manual", hoursSaved: 1.5, investment: 40, phase: "build" },
      { day: "Dom", date: "20", task: "Monitor Sem 1: verificar 4 automatizaciones live", tool: "Sentry + Slack", replaces: "—", hoursSaved: 5, investment: 20, phase: "monitor" },
    ],
    weeklyHoursSaved: 5, weeklyInvestment: 420, cumulativeNet: -320,
  },
  {
    week: 2, phase: "Fundación", dates: "21–27 Jul", theme: "Sales follow-up + content scheduling",
    daily: [
      { day: "Lun", date: "21", task: "Build: post-demo email sequence (3 toques auto)", tool: "Mailchimp + Zapier", replaces: "Marketing: follow-up manual", hoursSaved: 0, investment: 80, phase: "build" },
      { day: "Mar", date: "22", task: "Setup Buffer + bulk-schedule 10 piezas IG/TikTok", tool: "Buffer", replaces: "Marketing: programar contenido diario", hoursSaved: 0, investment: 40, phase: "build" },
      { day: "Mié", date: "23", task: "Build: WhatsApp Business API templates + broadcasts", tool: "WhatsApp API (360dialog)", replaces: "Marketing: contactar WhatsApp uno a uno", hoursSaved: 0, investment: 100, phase: "build" },
      { day: "Jue", date: "24", task: "Deploy + test: email sequence + Buffer + WhatsApp", tool: "—", replaces: "—", hoursSaved: 5, investment: 40, phase: "deploy" },
      { day: "Vie", date: "25", task: "Build: IG DM auto-respuesta con LLM (con aprobación)", tool: "z-ai LLM + make.com", replaces: "Ops: respuesta DMs manual", hoursSaved: 0, investment: 100, phase: "build" },
      { day: "Sáb", date: "26", task: "Test: LLM auto-reply con 20 DMs de prueba", tool: "—", replaces: "—", hoursSaved: 2, investment: 20, phase: "test" },
      { day: "Dom", date: "27", task: "Monitor Sem 2 + ajustar prompts LLM", tool: "—", replaces: "—", hoursSaved: 10, investment: 20, phase: "monitor" },
    ],
    weeklyHoursSaved: 15, weeklyInvestment: 400, cumulativeNet: -620,
  },
  {
    week: 3, phase: "Lanzamiento", dates: "28 Jul–3 Ago", theme: "Onboarding + renewal + referidos",
    daily: [
      { day: "Lun", date: "28", task: "Build: onboarding email sequence (5 emails día 0,1,3,7,14)", tool: "Mailchimp + Zapier", replaces: "Ops: onboarding emails manuales", hoursSaved: 0, investment: 80, phase: "build" },
      { day: "Mar", date: "29", task: "Build: recordatorios renovación (7/3/1 días antes)", tool: "Mailchimp + WhatsApp API", replaces: "Ops: recordatorios manuales", hoursSaved: 0, investment: 60, phase: "build" },
      { day: "Mié", date: "30", task: "Build: referral tracking automático (wallet BSC)", tool: "BSCscan API + Notion", replaces: "Marketing: tracking referidos manual", hoursSaved: 0, investment: 60, phase: "build" },
      { day: "Jue", date: "31", task: "Deploy + test: onboarding + renewals + referrals live", tool: "—", replaces: "—", hoursSaved: 6, investment: 40, phase: "deploy" },
      { day: "Vie", date: "1", task: "Build: dashboard Metabase básico (10 métricas)", tool: "Metabase", replaces: "—", hoursSaved: 0, investment: 80, phase: "build" },
      { day: "Sáb", date: "2", task: "Build: weekly report auto-generate PDF + Slack lunes 7am", tool: "Metabase + Zapier + Slack", replaces: "Ops: reporte semanal manual", hoursSaved: 2, investment: 40, phase: "build" },
      { day: "Dom", date: "3", task: "Monitor Sem 3 + documentar 7 automatizaciones live", tool: "Notion", replaces: "—", hoursSaved: 12, investment: 20, phase: "monitor" },
    ],
    weeklyHoursSaved: 27, weeklyInvestment: 380, cumulativeNet: -770,
  },
  {
    week: 4, phase: "Lanzamiento", dates: "4–10 Ago", theme: "NPS + analytics + PostHog",
    daily: [
      { day: "Lun", date: "4", task: "Build: NPS auto-trigger a 30 días post-pago", tool: "Mailchimp + Zapier", replaces: "Marketing: llamadas NPS manuales", hoursSaved: 0, investment: 60, phase: "build" },
      { day: "Mar", date: "5", task: "Build: alerta Slack si NPS detractor (<7)", tool: "Zapier + Slack", replaces: "—", hoursSaved: 0, investment: 40, phase: "build" },
      { day: "Mié", date: "6", task: "Setup PostHog + funnels (lead→demo→pago)", tool: "PostHog", replaces: "—", hoursSaved: 0, investment: 60, phase: "build" },
      { day: "Jue", date: "7", task: "Build: cohort retention dashboard auto-refresh", tool: "PostHog + Metabase", replaces: "—", hoursSaved: 0, investment: 60, phase: "build" },
      { day: "Vie", date: "8", task: "Deploy + test: NPS + funnels + cohort live", tool: "—", replaces: "—", hoursSaved: 3, investment: 40, phase: "deploy" },
      { day: "Sáb", date: "9", task: "Build: newsletter template auto-pull métricas", tool: "Mailchimp + Metabase", replaces: "Marketing: newsletter redacción manual", hoursSaved: 1, investment: 40, phase: "build" },
      { day: "Dom", date: "10", task: "Monitor Sem 4 + NPS review", tool: "—", replaces: "—", hoursSaved: 15, investment: 20, phase: "monitor" },
    ],
    weeklyHoursSaved: 42, weeklyInvestment: 320, cumulativeNet: -770,
  },
  {
    week: 5, phase: "Tracción", dates: "11–17 Ago", theme: "Support automation + AI first-line",
    daily: [
      { day: "Lun", date: "11", task: "Build: AI first-line support WhatsApp (FAQ auto-respuesta)", tool: "z-ai LLM + WhatsApp API + Crisp", replaces: "Ops: soporte WhatsApp manual", hoursSaved: 0, investment: 100, phase: "build" },
      { day: "Mar", date: "12", task: "Build: knowledge base auto-generate from resolved tickets", tool: "z-ai LLM + Notion", replaces: "—", hoursSaved: 0, investment: 60, phase: "build" },
      { day: "Mié", date: "13", task: "Build: escalate to human si LLM confianza <0.7", tool: "z-ai LLM + Slack", replaces: "—", hoursSaved: 0, investment: 40, phase: "build" },
      { day: "Jue", date: "14", task: "Test: AI support con 50 tickets de prueba", tool: "—", replaces: "—", hoursSaved: 4, investment: 20, phase: "test" },
      { day: "Vie", date: "15", task: "Deploy: AI support live con monitoring", tool: "Sentry + Slack", replaces: "—", hoursSaved: 4, investment: 20, phase: "deploy" },
      { day: "Sáb", date: "16", task: "Ajustar prompts + edge cases detectados", tool: "—", replaces: "—", hoursSaved: 6, investment: 20, phase: "monitor" },
      { day: "Dom", date: "17", task: "Monitor Sem 5: AI support coverage 60%", tool: "—", replaces: "—", hoursSaved: 18, investment: 20, phase: "monitor" },
    ],
    weeklyHoursSaved: 60, weeklyInvestment: 280, cumulativeNet: -540,
  },
  {
    week: 6, phase: "Tracción", dates: "18–24 Ago", theme: "Churn prevention + reactivación",
    daily: [
      { day: "Lun", date: "18", task: "Build: churn detection (no captura en 7 días)", tool: "z-ai LLM + make.com", replaces: "Ops: detección churn manual", hoursSaved: 0, investment: 80, phase: "build" },
      { day: "Mar", date: "19", task: "Build: alerta Slack si riesgo churn >70%", tool: "make.com + Slack", replaces: "—", hoursSaved: 0, investment: 40, phase: "build" },
      { day: "Mié", date: "20", task: "Build: reactivation email sequence (3 toques)", tool: "Mailchimp", replaces: "—", hoursSaved: 0, investment: 60, phase: "build" },
      { day: "Jue", date: "21", task: "Build: WhatsApp reactivation message personalizado", tool: "WhatsApp API + z-ai LLM", replaces: "—", hoursSaved: 0, investment: 60, phase: "build" },
      { day: "Vie", date: "22", task: "Deploy + test: churn alert + reactivation live", tool: "—", replaces: "—", hoursSaved: 2, investment: 40, phase: "deploy" },
      { day: "Sáb", date: "23", task: "Build: opportunity detection en DMs IG (AI)", tool: "z-ai LLM + make.com", replaces: "Marketing: triage DMs manual", hoursSaved: 1, investment: 40, phase: "build" },
      { day: "Dom", date: "24", task: "Monitor Sem 6 + churn review", tool: "—", replaces: "—", hoursSaved: 22, investment: 20, phase: "monitor" },
    ],
    weeklyHoursSaved: 82, weeklyInvestment: 340, cumulativeNet: -320,
  },
  {
    week: 7, phase: "Optimización", dates: "25–31 Ago", theme: "Payback + smart lead scoring",
    daily: [
      { day: "Lun", date: "25", task: "Build: lead scoring con IA (source + behavior + firma)", tool: "z-ai LLM + Notion", replaces: "Sales: priorización manual leads", hoursSaved: 0, investment: 80, phase: "build" },
      { day: "Mar", date: "26", task: "Build: auto-assign lead to sales rep (round-robin)", tool: "Notion + Slack", replaces: "—", hoursSaved: 0, investment: 40, phase: "build" },
      { day: "Mié", date: "27", task: "Build: smart follow-up timing (IA predice mejor momento)", tool: "z-ai LLM + Mailchimp", replaces: "—", hoursSaved: 0, investment: 60, phase: "build" },
      { day: "Jue", date: "28", task: "Deploy + test: lead scoring + smart timing live", tool: "—", replaces: "—", hoursSaved: 3, investment: 40, phase: "deploy" },
      { day: "Vie", date: "29", task: "Build: A/B test framework para email subject lines", tool: "Mailchimp", replaces: "—", hoursSaved: 0, investment: 40, phase: "build" },
      { day: "Sáb", date: "30", task: "Monitor Sem 7: PAYBACK — ahorro acumulado supera inversión", tool: "—", replaces: "—", hoursSaved: 25, investment: 20, phase: "monitor" },
      { day: "Dom", date: "31", task: "Review payback + planificar optimizaciones Sem 8-12", tool: "Notion", replaces: "—", hoursSaved: 28, investment: 0, phase: "monitor" },
    ],
    weeklyHoursSaved: 110, weeklyInvestment: 280, cumulativeNet: 90,
  },
  {
    week: 8, phase: "Optimización", dates: "1–7 Sep", theme: "Content automation + carousel auto-gen",
    daily: [
      { day: "Lun", date: "1", task: "Build: auto-generate IG carousel from product ficha", tool: "z-ai LLM + Figma API", replaces: "Marketing: diseño carousel manual", hoursSaved: 0, investment: 100, phase: "build" },
      { day: "Mar", date: "2", task: "Build: auto-generate TikTok script from ficha", tool: "z-ai LLM", replaces: "—", hoursSaved: 0, investment: 60, phase: "build" },
      { day: "Mié", date: "3", task: "Build: content performance tracking + auto-pause low CTR", tool: "Buffer + PostHog", replaces: "—", hoursSaved: 0, investment: 60, phase: "build" },
      { day: "Jue", date: "4", task: "Deploy + test: carousel + TikTok script live", tool: "—", replaces: "—", hoursSaved: 3, investment: 40, phase: "deploy" },
      { day: "Vie", date: "5", task: "Build: hashtag suggestions IA por producto", tool: "z-ai LLM", replaces: "—", hoursSaved: 1, investment: 40, phase: "build" },
      { day: "Sáb", date: "6", task: "Monitor Sem 8: content automation live", tool: "—", replaces: "—", hoursSaved: 30, investment: 20, phase: "monitor" },
      { day: "Dom", date: "7", task: "Review + ajustar plantillas carousel", tool: "—", replaces: "—", hoursSaved: 32, investment: 0, phase: "monitor" },
    ],
    weeklyHoursSaved: 135, weeklyInvestment: 320, cumulativeNet: 480,
  },
  {
    week: 9, phase: "Expansión", dates: "8–14 Sep", theme: "B2B automation + reseller onboarding",
    daily: [
      { day: "Lun", date: "8", task: "Build: reseller self-onboarding flow (white-label auto-setup)", tool: "Notion + z-ai LLM", replaces: "Founder: onboarding B2B manual", hoursSaved: 0, investment: 100, phase: "build" },
      { day: "Mar", date: "9", task: "Build: B2B pipeline automation (LOI → contract → setup)", tool: "make.com + DocuSign", replaces: "—", hoursSaved: 0, investment: 60, phase: "build" },
      { day: "Mié", date: "10", task: "Build: reseller dashboard auto-provision", tool: "Metabase + make.com", replaces: "—", hoursSaved: 0, investment: 60, phase: "build" },
      { day: "Jue", date: "11", task: "Deploy + test: B2B automation live", tool: "—", replaces: "—", hoursSaved: 2, investment: 40, phase: "deploy" },
      { day: "Vie", date: "12", task: "Build: auto-generate partner invoice monthly", tool: "make.com + Notion", replaces: "—", hoursSaved: 1, investment: 40, phase: "build" },
      { day: "Sáb", date: "13", task: "Monitor Sem 9: B2B flow live", tool: "—", replaces: "—", hoursSaved: 33, investment: 20, phase: "monitor" },
      { day: "Dom", date: "14", task: "Review + ROI análisis Sem 1-9", tool: "—", replaces: "—", hoursSaved: 35, investment: 0, phase: "monitor" },
    ],
    weeklyHoursSaved: 170, weeklyInvestment: 320, cumulativeNet: 1010,
  },
  {
    week: 10, phase: "Expansión", dates: "15–21 Sep", theme: "Meta Ads automation + creative optimization",
    daily: [
      { day: "Lun", date: "15", task: "Build: A/B test automation Meta Ads (auto-pause perdedoras)", tool: "Meta API + make.com", replaces: "Growth: optimización manual ads", hoursSaved: 0, investment: 100, phase: "build" },
      { day: "Mar", date: "16", task: "Build: creative performance prediction con IA", tool: "z-ai LLM + Meta API", replaces: "—", hoursSaved: 0, investment: 60, phase: "build" },
      { day: "Mié", date: "17", task: "Build: budget auto-allocation (escalar ganadoras)", tool: "Meta API + make.com", replaces: "—", hoursSaved: 0, investment: 60, phase: "build" },
      { day: "Jue", date: "18", task: "Deploy + test: Meta Ads automation live", tool: "—", replaces: "—", hoursSaved: 2, investment: 40, phase: "deploy" },
      { day: "Vie", date: "19", task: "Build: auto-generate ad creative variations from ficha", tool: "z-ai LLM + image-gen", replaces: "—", hoursSaved: 1, investment: 60, phase: "build" },
      { day: "Sáb", date: "20", task: "Monitor Sem 10: ads automation live", tool: "—", replaces: "—", hoursSaved: 36, investment: 20, phase: "monitor" },
      { day: "Dom", date: "21", task: "Review + CPL optimization", tool: "—", replaces: "—", hoursSaved: 38, investment: 0, phase: "monitor" },
    ],
    weeklyHoursSaved: 205, weeklyInvestment: 340, cumulativeNet: 1620,
  },
  {
    week: 11, phase: "Consolidación", dates: "22–28 Sep", theme: "Master dashboard + anomaly alerts",
    daily: [
      { day: "Lun", date: "22", task: "Build: master dashboard (todas las métricas en 1 pantalla)", tool: "Metabase + PostHog", replaces: "—", hoursSaved: 0, investment: 80, phase: "build" },
      { day: "Mar", date: "23", task: "Build: anomaly detection (IA detecta métricas anómalas)", tool: "z-ai LLM + Slack", replaces: "Ops: monitoreo manual", hoursSaved: 0, investment: 60, phase: "build" },
      { day: "Mié", date: "24", task: "Build: alert Slack si métrica >2σ de la media", tool: "make.com + Slack", replaces: "—", hoursSaved: 0, investment: 40, phase: "build" },
      { day: "Jue", date: "25", task: "Deploy + test: master dashboard + alerts live", tool: "—", replaces: "—", hoursSaved: 2, investment: 40, phase: "deploy" },
      { day: "Vie", date: "26", task: "Build: quarterly report auto-generation", tool: "Metabase + Zapier", replaces: "Founder: reporte Q manual", hoursSaved: 1, investment: 40, phase: "build" },
      { day: "Sáb", date: "27", task: "Monitor Sem 11: all systems green", tool: "—", replaces: "—", hoursSaved: 40, investment: 20, phase: "monitor" },
      { day: "Dom", date: "28", task: "Review + preparar documentación handoff", tool: "Notion", replaces: "—", hoursSaved: 42, investment: 0, phase: "monitor" },
    ],
    weeklyHoursSaved: 247, weeklyInvestment: 280, cumulativeNet: 2410,
  },
  {
    week: 12, phase: "Consolidación", dates: "29 Sep–5 Oct", theme: "Handoff + documentación + mantenimiento",
    daily: [
      { day: "Lun", date: "29", task: "Documentar 25 automatizaciones (Notion playbook)", tool: "Notion", replaces: "—", hoursSaved: 0, investment: 60, phase: "build" },
      { day: "Mar", date: "30", task: "Build: auto-monitoring de todas las automatizaciones", tool: "Sentry + Slack + make.com", replaces: "—", hoursSaved: 0, investment: 60, phase: "build" },
      { day: "Mié", date: "1", task: "Build: auto-recovery básico (retry + fallback manual)", tool: "make.com + Slack", replaces: "—", hoursSaved: 0, investment: 60, phase: "build" },
      { day: "Jue", date: "2", task: "Train: handoff al Ops Lead (2h sesión)", tool: "—", replaces: "—", hoursSaved: 2, investment: 40, phase: "deploy" },
      { day: "Vie", date: "3", task: "All-hands: demo de las 25 automatizaciones al equipo", tool: "—", replaces: "—", hoursSaved: 2, investment: 20, phase: "monitor" },
      { day: "Sáb", date: "4", task: "Monitor Sem 12: steady state, 85% automatizado", tool: "—", replaces: "—", hoursSaved: 44, investment: 0, phase: "monitor" },
      { day: "Dom", date: "5", task: "Review Q3 + plan automatizaciones Q4", tool: "Notion", replaces: "—", hoursSaved: 46, investment: 0, phase: "monitor" },
    ],
    weeklyHoursSaved: 293, weeklyInvestment: 240, cumulativeNet: 3400,
  },
]

// ---------------------------------------------------------------------------
// TOOLS STACK & INVESTMENT
// ---------------------------------------------------------------------------
export const AUTO_TOOLS = [
  { name: "make.com (Core)", category: "Orquestación", purpose: "Workflow automation, webhooks, 1000+ apps", costMonth: 29, setupHours: 8, maintenanceWeek: 1, critical: true },
  { name: "Zapier (free tier)", category: "Orquestación", purpose: "Conexiones simples (Calendly, Mailchimp, Slack)", costMonth: 0, setupHours: 4, maintenanceWeek: 0.5, critical: false },
  { name: "Mailchimp (Essentials)", category: "Email", purpose: "Email sequences, NPS, newsletter", costMonth: 13, setupHours: 6, maintenanceWeek: 0.5, critical: true },
  { name: "WhatsApp Business API (360dialog)", category: "Mensajería", purpose: "Broadcasts, templates, auto-reply", costMonth: 25, setupHours: 10, maintenanceWeek: 1, critical: true },
  { name: "Calendly (Standard)", category: "Sales", purpose: "Demo booking + Meet auto-link", costMonth: 10, setupHours: 2, maintenanceWeek: 0, critical: false },
  { name: "Buffer (Team)", category: "Content", purpose: "IG/TikTok scheduling + auto-publish", costMonth: 12, setupHours: 3, maintenanceWeek: 0.5, critical: false },
  { name: "Metabase (self-hosted)", category: "Analytics", purpose: "Dashboards, cohortes, reportes PDF", costMonth: 0, setupHours: 12, maintenanceWeek: 1, critical: true },
  { name: "PostHog (free tier)", category: "Analytics", purpose: "Product analytics, funnels, retention", costMonth: 0, setupHours: 6, maintenanceWeek: 0.5, critical: false },
  { name: "z-ai-web-dev-sdk", category: "IA", purpose: "LLM para auto-respuestas, scoring, churn, creatives", costMonth: 80, setupHours: 20, maintenanceWeek: 2, critical: true },
  { name: "BSCscan API", category: "Pagos", purpose: "Verificación USDT automática", costMonth: 0, setupHours: 4, maintenanceWeek: 0, critical: true },
  { name: "Crisp (Lite)", category: "Support", purpose: "Chat web + knowledge base + escalation", costMonth: 25, setupHours: 4, maintenanceWeek: 0.5, critical: false },
  { name: "AWS S3", category: "Storage", purpose: "Backups + uploads", costMonth: 8, setupHours: 2, maintenanceWeek: 0, critical: true },
  { name: "Slack (free webhooks)", category: "Comunicación", purpose: "Alertas, notificaciones, reportes", costMonth: 0, setupHours: 2, maintenanceWeek: 0, critical: true },
  { name: "Sentry (Team)", category: "Monitoring", purpose: "Error tracking + perf + alertas", costMonth: 26, setupHours: 4, maintenanceWeek: 0.5, critical: true },
  { name: "DocuSign (Standard)", category: "Legal", purpose: "Contratos resellers B2B", costMonth: 15, setupHours: 2, maintenanceWeek: 0, critical: false },
]

export const TOTAL_TOOLS_MONTHLY = AUTO_TOOLS.reduce((s, t) => s + t.costMonth, 0)
export const TOTAL_SETUP_HOURS = AUTO_TOOLS.reduce((s, t) => s + t.setupHours, 0)
export const TOTAL_MAINTENANCE_WEEKLY = AUTO_TOOLS.reduce((s, t) => s + t.maintenanceWeek, 0)

// ---------------------------------------------------------------------------
// ROI PROJECTION — weekly savings vs investment, cumulative net
// ---------------------------------------------------------------------------
export const ROI_TIMESERIES = AUTO_CALENDAR.map((w, i) => {
  const hoursSaved = w.weeklyHoursSaved
  const moneySaved = hoursSaved * BLEND_HOURLY
  const weeklyInvestment = w.weeklyInvestment
  const maintenanceCost = TOTAL_MAINTENANCE_WEEKLY * BLEND_HOURLY
  const toolsCost = TOTAL_TOOLS_MONTHLY / 4 // weekly
  const totalCost = weeklyInvestment + maintenanceCost + toolsCost
  const net = moneySaved - totalCost
  return {
    week: `S${w.week}`,
    savings: Math.round(moneySaved),
    investment: Math.round(totalCost),
    net: Math.round(net),
    cumulative: Math.round(w.cumulativeNet),
    hoursSaved,
  }
})

export const ROI_SUMMARY = {
  totalSetupInvestment: TOTAL_SETUP_HOURS * BLEND_HOURLY, // one-time
  totalToolsMonthly: TOTAL_TOOLS_MONTHLY,
  totalMaintenanceWeekly: TOTAL_MAINTENANCE_WEEKLY * BLEND_HOURLY,
  weeklySavingsSteady: 293 * BLEND_HOURLY, // week 12 hours saved × $20
  paybackWeek: AUTO_CALENDAR.find((w) => w.cumulativeNet >= 0)?.week ?? 7,
  q3NetSavings: AUTO_CALENDAR[AUTO_CALENDAR.length - 1].cumulativeNet,
  hoursSavedQ3: AUTO_CALENDAR.reduce((s, w) => s + w.weeklyHoursSaved, 0),
}

// ---------------------------------------------------------------------------
// RISK SCENARIOS — 4 scenarios per automation cluster
// ---------------------------------------------------------------------------
export interface RiskScenario {
  cluster: string
  automations: string
  ifNotDone: string
  ifDone: string
  ifDoneThenStopped: string
  ifFailsTechnically: string
  fallback: string
  severity: "Crítica" | "Alta" | "Media" | "Baja"
}

export const RISK_SCENARIOS: RiskScenario[] = [
  {
    cluster: "Captación de leads y agendamiento",
    automations: "Lead capture CRM, Calendly booking, WhatsApp broadcast",
    ifNotDone: "Cada lead se ingresa manualmente → errores de tipeo, leads perdidos, 30min/lead. A 65 clientes = 15h/semana solo en data entry. Sales no escala.",
    ifDone: "Lead entra al CRM en <1s, demo se agenda sola, recordatorios automáticos. Sales solo hace demos. Conversión +15% por respuesta inmediata.",
    ifDoneThenStopped: "Si se deja de mantener: formularios web dejan de mandar a CRM (API cambia), Calendly se desconecta. Leads se pierden silenciosamente por semanas antes de notarse.",
    ifFailsTechnically: "Si Zapier/make.com cae: leads quedan en limbo. MITIGACIÓN: form guarda en localStorage + email backup al founder. Alerta Sentry si 0 leads en 24h.",
    fallback: "Founder revisa email backup cada 12h + ingresa manualmente. Lead time de recuperación: 2h.",
    severity: "Crítica",
  },
  {
    cluster: "Onboarding y follow-up de clientes",
    automations: "5-email sequence, NPS auto-trigger, renewal reminders",
    ifNotDone: "Onboarding inconsistente: cada cliente recibe info distinta. 30% no activa producto en 1ra semana. Churn +20%. Renewals olvidadas = pérdida $80/cliente.",
    ifDone: "Onboarding estandarizado, 100% reciben misma secuencia. Activación +40%. Renewals 95% on-time. NPS capturado automáticamente a 30 días.",
    ifDoneThenStopped: "Emails se envían a destiempo o dejan de enviarse. Clientes nuevos no reciben onboarding → activación cae. Mailchimp desconectado = silencioso.",
    ifFailsTechnically: "Si Mailchimp cae: emails no se envían. MITIGACIÓN: webhook a Resend como backup. Alerta si 0 emails enviados en 24h con nuevos clientes activos.",
    fallback: "Ops Lead envía emails manualmente desde template. Capacidad: 20 clientes/día.",
    severity: "Crítica",
  },
  {
    cluster: "Soporte con IA (first-line)",
    automations: "AI WhatsApp auto-respuesta, knowledge base auto-gen, escalation",
    ifNotDone: "Cada cliente genera 4-8 tickets/semana. A 65 clientes = 260-520 tickets. 1 persona full-time no da abasto. SLA se rompe. NPS cae.",
    ifDone: "IA resuelve 60% de tickets sin humano. SLA <2h garantizado. Soporte escala a 200 clientes sin contratar. Ahorro: $500/mes (1 FTE).",
    ifDoneThenStopped: "IA se desactualiza: respuestas obsoletas o incorrectas. Clientes pierden confianza. Escalación masiva a humano satura al equipo. Peor que antes.",
    ifFailsTechnically: "Si z-ai API cae: IA no responde. MITIGACIÓN: fallback a auto-respuesta simple ('recibimos tu mensaje, te respondemos en 2h'). Alerta Slack inmediata.",
    fallback: "Customer Success responde manualmente. Capacidad: 50 tickets/día. SLA sube a 4h temporalmente.",
    severity: "Alta",
  },
  {
    cluster: "Detección de churn y reactivación",
    automations: "Churn alert IA, reactivation email sequence, WhatsApp reactivation",
    ifNotDone: "Churn se detecta cuando el cliente ya no paga = demasiado tarde. Perdemos $80-250 por cliente sin advertirlo. Churn mensual 8% sin mitigación.",
    ifDone: "IA detecta patrón de bajo uso 7 días antes. Reactivación automática + alerta a CS. Churn baja a 4-5%. Salva ~2-3 clientes/mes = $160-750/mes retenidos.",
    ifDoneThenStopped: "Alertas dejan de funcionar. Churn vuelve silenciosamente a 8%. No se nota hasta el reporte mensual. Para entonces, 3-5 clientes perdidos.",
    ifFailsTechnically: "Si IA no analiza (API down): sin alertas. MITIGACIÓN: regla simple paralela (no captura en 10 días → alerta). Menos inteligente pero funcional.",
    fallback: "CS revisa manualmente usage semanal de cada cliente. Capacidad: 30 clientes en 2h.",
    severity: "Alta",
  },
  {
    cluster: "Reportes y dashboards automáticos",
    automations: "Weekly report PDF, master dashboard, anomaly detection",
    ifNotDone: "Founder pasa 4h/semana generando reportes manuales. Decisiones se toman con data vieja. Anomalías pasan desapercichas por días.",
    ifDone: "Reporte lunes 7am automático. Dashboard en vivo. Anomalías detectadas en <1h. Founder recupera 4h/semana para estrategia.",
    ifDoneThenStopped: "Reportes dejan de generarse. Dashboard stale. Equipo opera a ciegas. Anomalías no detectadas = problemas escalan.",
    ifFailsTechnically: "Si Metabase cae: dashboard no carga. MITIGACIÓN: query SQL directa a Postgres como backup. Reporte manual desde Sheets.",
    fallback: "Ops Lead genera reporte manual desde Metabase cloud o SQL directo. Capacidad: 2h.",
    severity: "Media",
  },
  {
    cluster: "Automatización de Meta Ads",
    automations: "A/B test auto-pause, creative prediction, budget auto-allocation",
    ifNotDone: "Growth specialist pasa 5h/semana optimizando manualmente. CPL sube 30%. Se gastan $150/semana con ROAS subóptimo. 2x CAC.",
    ifDone: "IA pausa perdedoras en 24h. Escala ganadoras automáticamente. CPL -25%. ROAS 3:1 → 4:1. Ahorro $40/semana en ads + 5h growth.",
    ifDoneThenStopped: "Ads se quedan corriendo sin optimización. CPL sube gradualmente. En 2 semanas, CAC 2x. Budget se quema en creatives perdedoras.",
    ifFailsTechnically: "Si Meta API cae: no se puede pausar/escalar. MITIGACIÓN: regla manual (revisar diario 9am). Budget cap diario $30 para limitar daño.",
    fallback: "Growth revisa y ajusta manualmente cada 24h. Capacidad: 5 campañas en 30min.",
    severity: "Media",
  },
  {
    cluster: "Pagos USDT y verificación",
    automations: "BSCscan auto-verify, subscription activation, renewal flow",
    ifNotDone: "Founder verifica cada pago manualmente. 65 clientes × renovación mensual = 65 verificaciones/mes. Errores humanos. Clientes esperan 24-48h para activarse.",
    ifDone: "Pago verificado en <5min. Suscripción activada automáticamente. 0 errores. Clientes activos en minutos.",
    ifDoneThenStopped: "Verificación se detiene. Pagos se acumulan sin activar. Clientes frustrados. Pérdida de confianza en el proceso de pago cripto.",
    ifFailsTechnically: "Si BSCscan API cae: no se verifica. MITIGACIÓN: founder verifica manualmente en bscscan.com. Alerta si 3+ pagos pendientes >1h.",
    fallback: "Founder verifica manualmente via bscscan.com. Capacidad: 20 verificaciones/hora.",
    severity: "Crítica",
  },
  {
    cluster: "Backup DB y disaster recovery",
    automations: "Daily cron backup, S3 storage, 30-day retention",
    ifNotDone: "Si Postgres se corrompe: se pierden TODOS los datos de clientes. Negocio muere. Sin backup = irresponsabilidad operacional.",
    ifDone: "Backup diario automático. 30 días de retención. Recuperación <1h. Negocio resiliente.",
    ifDoneThenStopped: "Backups dejan de generarse. No se nota hasta que se necesita (demasiado tarde). Falsa sensación de seguridad.",
    ifFailsTechnically: "Si S3 cae: backup falla silenciosamente. MITIGACIÓN: backup secundario a Google Drive. Alerta si no hay backup en 36h.",
    fallback: "Ops Lead genera backup manual vía pg_dump. Capacidad: 1 backup en 30min.",
    severity: "Crítica",
  },
]

// ---------------------------------------------------------------------------
// PARALLEL EXECUTION MAP — how automation runs alongside marketing & ops
// ---------------------------------------------------------------------------
export const PARALLEL_MAP = [
  {
    week: "Sem 1-2",
    marketing: "Founder-led sales, 1er contenido",
    ops: "Setup equipo + herramientas básicas",
    automation: "Setup make.com + lead capture + demo booking + BCV + backup + payment verify",
    impact: "Sales no pierde tiempo en data entry. Founder enfoca en cerrar.",
  },
  {
    week: "Sem 3-4",
    marketing: "WhatsApp grupos + Meta Ads + back to school",
    ops: "Onboarding manual + 1er soporte",
    automation: "Onboarding emails + renewals + referrals + NPS + dashboards",
    impact: "Onboarding estandarizado. Ops no pierde tiempo en emails repetitivos.",
  },
  {
    week: "Sem 5-6",
    marketing: "Escalar Meta Ads + caso éxito + comunidad",
    ops: "Hire CS + churn audit",
    automation: "AI support + churn detection + reactivation + opportunity detection",
    impact: "CS soporta 2x tickets. Churn se detecta antes de que pase. CS contratado es suficiente.",
  },
  {
    week: "Sem 7-8",
    marketing: "B2B resellers + expansión CO",
    ops: "All-hands + producto features",
    automation: "Lead scoring + smart timing + carousel auto-gen + content tracking",
    impact: "Sales prioriza mejor. Content creator produce 2x con IA. Payback alcanzado Sem 7.",
  },
  {
    week: "Sem 9-10",
    marketing: "Partnerships + prep Black Friday",
    ops: "Funnel audit + features ship",
    automation: "B2B self-onboarding + Meta Ads automation + creative auto-gen",
    impact: "Founder no pierde tiempo en onboarding B2B. Growth escala ads sin más horas.",
  },
  {
    week: "Sem 11-12",
    marketing: "Casos éxito + cierre Q3",
    ops: "Quarterly review + planning Q4",
    automation: "Master dashboard + anomaly alerts + handoff al Ops Lead",
    impact: "Equipo opera con data en vivo. 85% automatizado. Founder libera 40h/semana para Q4.",
  },
]
