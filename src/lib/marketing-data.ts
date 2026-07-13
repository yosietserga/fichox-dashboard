// ============================================================================
// FichoX — Marketing Plan: 12-Week Calendar, Projections, Segmentation
// ============================================================================

export const MKT_QUARTER = {
  name: "Q3 2025 · Trimestre de Lanzamiento",
  startDate: "14 Jul 2025",
  endDate: "5 Oct 2025",
  weeks: 12,
  goal: "Llevar FichoX de 0 a 65 clientes pagos en 12 semanas",
  northStar: "65 clientes activos · $4,900 MRR · 8,000 seguidores IG",
}

// ---------------------------------------------------------------------------
// CHANNEL IMPACT RANKING — ordered by projected ROI for this audience
// ---------------------------------------------------------------------------
export const CHANNEL_IMPACT = [
  {
    rank: 1,
    channel: "Instagram Orgánico",
    icon: "Instagram",
    impact: 0.32,
    effort: "Medio",
    cost: 0,
    cpl: 0,
    why:
      "El 90% de los comerciantes objetivo ya está en IG. Reels de demos de 15s tienen el alcance orgánico más alto. Donde ya están los clientes.",
    bestFor: "Awareness, demos, prueba social",
    cadence: "1 post + 1 reel + 3 stories diario",
    kpi: "Reach 50K/sem · 3% engagement · 5% → perfil → DM",
  },
  {
    rank: 2,
    channel: "Grupos WhatsApp de Revendedores",
    icon: "MessageCircle",
    impact: 0.24,
    effort: "Alto",
    cost: 0,
    cpl: 0,
    why:
      "Conversión directa: el lead llega caliente. CAC $0 si se hace bien. Los grupos de VE/CO son comunidades activas de compra-venta.",
    bestFor: "Conversión, referidos, feedback crudo",
    cadence: "Diario rotando 40 grupos",
    kpi: "8 leads/día · 2 clientes/sem · CAC $0",
  },
  {
    rank: 3,
    channel: "Meta Ads (IG Stories + Feed)",
    icon: "Megaphone",
    impact: 0.18,
    effort: "Bajo",
    cost: 150,
    cpl: 4,
    why:
      "CPM VE muy bajo (~$1.5). Targeting por intereses 'vender por Instagram', 'MercadoLibre'. Escalable y medible.",
    bestFor: "Escalado, retargeting, top of funnel",
    cadence: "Continuo, optimización semanal",
    kpi: "CPL < $5 · CAC blended < $35 · ROAS 3:1",
  },
  {
    rank: 4,
    channel: "TikTok Orgánico",
    icon: "Video",
    impact: 0.1,
    effort: "Medio",
    cost: 0,
    cpl: 0,
    why:
      "Alcance viral potencial. Formato #ComercianteVsIA conecta con audiencia joven que empieza a vender.",
    bestFor: "Awareness masivo, marca",
    cadence: "3 videos/semana",
    kpi: "50K views/mes · 2% CTR al perfil",
  },
  {
    rank: 5,
    channel: "Programa de Referidos",
    icon: "Gift",
    impact: 0.09,
    effort: "Bajo",
    cost: 0,
    cpl: 0,
    why:
      "El comerciante recomienda a otro comerciante. Confianza transferida. Incentivo doble lado (1 mes gratis a ambos).",
    bestFor: "Crecimiento viral, retención",
    cadence: "Siempre activo desde Sem 3",
    kpi: "Coeficiente viral K > 0.3 · 30% adquisición",
  },
  {
    rank: 6,
    channel: "MercadoLibre Comunidad",
    icon: "ShoppingCart",
    impact: 0.05,
    effort: "Medio",
    cost: 0,
    cpl: 0,
    why:
      "Foro de vendedores MELI = leads súper cualificados. Casos de éxito posicionan autoridad.",
    bestFor: "Leads B2B cualificados",
    cadence: "2 respuestas/semana",
    kpi: "20 leads/mes · 35% conversión",
  },
  {
    rank: 7,
    channel: "LinkedIn (B2B resellers)",
    icon: "Briefcase",
    impact: 0.02,
    effort: "Bajo",
    cost: 0,
    cpl: 8,
    why:
      "Solo relevante para conseguir resellers white-label (agencias). Volumen bajo pero ticket alto.",
    bestFor: "White-label B2B",
    cadence: "3 posts/semana",
    kpi: "2 resellers firmados en Q3",
  },
]

// ---------------------------------------------------------------------------
// 12-WEEK CALENDAR — day by day with tasks and expected results
// ---------------------------------------------------------------------------
export interface DayTask {
  day: string
  date: string
  task: string
  result: string
  owner: string
  channel: string
}

export interface WeekPlan {
  week: number
  phase: string
  dates: string
  theme: string
  segmentation: {
    persona: string
    geo: string
    icp: string
    channelFocus: string
  }
  daily: DayTask[]
  projections: {
    newLeads: number
    newCustomers: number
    newIgFollowers: number
    newTikTokFollowers: number
    cumulativeCustomers: number
    cac: number
    conversionRate: number
  }
  keyDate?: { date: string; name: string; type: string; action: string }
  feedback: string
  reinforcement: string
}

export const CALENDAR: WeekPlan[] = [
  {
    week: 1,
    phase: "Fundación",
    dates: "14–20 Jul",
    theme: "Setup y alineación interna",
    segmentation: {
      persona: "El Comerciante Pioneer",
      geo: "Red personal del founder (Caracas, Maracaibo, Valencia)",
      icp: "Revendedor IG con 500-3K seguidores, ya vende en USD, pierde tiempo escribiendo fichas",
      channelFocus: "Founder-led + WhatsApp directo",
    },
    daily: [
      { day: "Lun", date: "14", task: "Kickoff interno: presentar misión, visión y OKRs del trimestre", result: "Equipo alineado, 3 OKRs claros", owner: "Founder", channel: "Interno" },
      { day: "Mar", date: "15", task: "Banco de contenido: grabar 10 demos 'foto → ficha' en celular real", result: "10 reels listos para programar", owner: "Content", channel: "Content" },
      { day: "Mié", date: "16", task: "Publicar 1er reel IG + 3 stories (demo + detrás de cámara)", result: "Primer post de marca publicado", owner: "Content", channel: "IG" },
      { day: "Jue", date: "17", task: "Contactar 20 comerciantes de la red personal por WhatsApp", result: "8 responden, 3 agendan demo", owner: "Sales", channel: "WhatsApp" },
      { day: "Vie", date: "18", task: "Hacer 3 demos 1:1 (15 min c/u, celular en mano)", result: "2 pruebas gratis activadas", owner: "Founder", channel: "Sales" },
      { day: "Sáb", date: "19", task: "Publicar 2do reel (caso: antes/después de una ficha)", result: "+40 alcance orgánico", owner: "Content", channel: "IG" },
      { day: "Dom", date: "20", task: "Retrospectiva semanal: métricas, qué funcionó, qué iterar", result: "Documento de learnings Sem 1", owner: "Founder", channel: "Analytics" },
    ],
    projections: { newLeads: 18, newCustomers: 2, newIgFollowers: 75, newTikTokFollowers: 0, cumulativeCustomers: 2, cac: 0, conversionRate: 0.11 },
    feedback: "Retrospectiva Vié 18h: ¿la demo convirtió? ¿objeciones?",
    reinforcement: "Shoutout al equipo en kickoff: 'estamos construyendo el futuro del comercio LATAM'",
  },
  {
    week: 2,
    phase: "Fundación",
    dates: "21–27 Jul",
    theme: "Contenido diario + primeras ventas",
    segmentation: {
      persona: "Comerciante Pioneer + Reseller IG activo",
      geo: "Caracas, Maracaibo, Valencia, Barquisimeto",
      icp: "Revendedor IG 1K-5K seguidores, vende electrónicos/moda/accesorios",
      channelFocus: "IG orgánico + WhatsApp + 1ra campaña Meta Ads",
    },
    daily: [
      { day: "Lun", date: "21", task: "Setup Meta Ads Manager + píxel + audiencia VE 'vender por IG'", result: "Cuenta lista, 1ra campaña activa", owner: "Growth", channel: "Paid" },
      { day: "Mar", date: "22", task: "Reel IG #3 + Stories con encuesta '¿cuánto tiempo pierdes escribiendo?'", result: "+120 engagement", owner: "Content", channel: "IG" },
      { day: "Mié", date: "23", task: "Ingreso a 10 grupos WhatsApp de revendedores VE (aporte valor primero)", result: "10 grupos activos, 0 spam", owner: "Community", channel: "WhatsApp" },
      { day: "Jue", date: "24", task: "Día del Comerciante LATAM: post especial + descuento 20% 1er mes", result: "+5 leads del post festivo", owner: "Content", channel: "IG" },
      { day: "Vie", date: "25", task: "5 demos 1:1 + follow-up de leads de Meta Ads", result: "3 conversiones a prueba gratis", owner: "Sales", channel: "Sales" },
      { day: "Sáb", date: "26", task: "Publicar 1er video TikTok #ComercianteVsIA", result: "+500 views, +20 seguidores TT", owner: "Content", channel: "TikTok" },
      { day: "Dom", date: "27", task: "Analítica Sem 2 + ajustar creatividades de Meta Ads", result: "CPL medido, 2 creatividades ganadoras", owner: "Growth", channel: "Analytics" },
    ],
    projections: { newLeads: 32, newCustomers: 4, newIgFollowers: 180, newTikTokFollowers: 60, cumulativeCustomers: 6, cac: 28, conversionRate: 0.125 },
    keyDate: { date: "24 Jul", name: "Día del Comerciante (LATAM)", type: "Comercial", action: "Post especial + promo 20%" },
    feedback: "Review de Meta Ads Vie 25h: ¿qué creative convierte más?",
    reinforcement: "Compartir 1er caso de éxito en el grupo interno de WhatsApp",
  },
  {
    week: 3,
    phase: "Lanzamiento",
    dates: "28 Jul–3 Ago",
    theme: "Activar referidos + escalar contenido",
    segmentation: {
      persona: "Reseller IG activo + vendedor MercadoLibre",
      geo: "Caracas, Maracaibo, Valencia, Margarita",
      icp: "Vende en IG + MELI, 3+ publicaciones/semana, necesita fichas rápidas",
      channelFocus: "IG + WhatsApp + Meta Ads + lanzamiento referidos",
    },
    daily: [
      { day: "Lun", date: "28", task: "Lanzar programa de referidos (1 mes gratis a ambos)", result: "Programa activo, landing live", owner: "Growth", channel: "Referral" },
      { day: "Mar", date: "29", task: "Reel IG #4 (testimonio del 1er cliente pagador)", result: "+250 alcance, 3 DMs", owner: "Content", channel: "IG" },
      { day: "Mié", date: "30", task: "A/B test de creatividades Meta Ads (3 variantes)", result: "1 creative ganadora identificada", owner: "Growth", channel: "Paid" },
      { day: "Jue", date: "31", task: "Ingreso a 10 grupos WhatsApp nuevos + 5 demos agendadas", result: "10 grupos más, 5 demos en agenda", owner: "Community", channel: "WhatsApp" },
      { day: "Vie", date: "1", task: "6 demos 1:1 + cierre de 4 pruebas gratis a pago", result: "4 nuevos clientes pagos", owner: "Sales", channel: "Sales" },
      { day: "Sáb", date: "2", task: "TikTok #2 + carrusel IG '5 errores al publicar en MELI'", result: "+800 views TT, +90 reach carrusel", owner: "Content", channel: "Content" },
      { day: "Dom", date: "3", task: "Análisis de cohorte Sem 1-3 + ajuste de ICP", result: "ICP refinado, mensaje ajustado", owner: "Founder", channel: "Analytics" },
    ],
    projections: { newLeads: 45, newCustomers: 6, newIgFollowers: 320, newTikTokFollowers: 140, cumulativeCustomers: 12, cac: 30, conversionRate: 0.13 },
    feedback: "Cohorte Sem 1-3 Dom: ¿qué clientes se quedaron? ¿por qué?",
    reinforcement: "'Comerciante del mes' — destacar al 1er cliente con resultado real",
  },
  {
    week: 4,
    phase: "Lanzamiento",
    dates: "4–10 Ago",
    theme: "Back to school + primer review mensual",
    segmentation: {
      persona: "Vendedor MELI + importador de productos escolares",
      geo: "Todo VE + 1ra prueba Colombia (Cúcuta frontera)",
      icp: "Importa productos escolares útiles, vende en IG + MELI, alta rotación",
      channelFocus: "Meta Ads + MELI comunidad + content estacional",
    },
    daily: [
      { day: "Lun", date: "4", task: "Campaña 'Back to School': 5 fichas de productos escolares con IA", result: "Serie estacional publicada", owner: "Content", channel: "IG" },
      { day: "Mar", date: "5", task: "2 respuestas en foro MELI (aporte valor + mención sutil)", result: "2 leads B2B cualificados", owner: "Community", channel: "MELI" },
      { day: "Mié", date: "6", task: "Webinar 'Cómo vender más este back to school con IA' (30 min)", result: "15 inscritos, 4 demos agendadas", owner: "Founder", channel: "Webinar" },
      { day: "Jue", date: "7", task: "Reel IG #5 + Stories tras bambalinas del webinar", result: "+400 reach", owner: "Content", channel: "IG" },
      { day: "Vie", date: "8", task: "All-hands mensual: compartir historia de cliente + misión", result: "Equipo motivado, misión viva", owner: "Founder", channel: "Interno" },
      { day: "Sáb", date: "9", task: "7 demos 1:1 + 5 cierres a pago", result: "5 nuevos clientes", owner: "Sales", channel: "Sales" },
      { day: "Dom", date: "10", task: "Análisis mensual Mes 1: MRR, churn, CAC, LTV", result: "Dashboard Mes 1 completo", owner: "Growth", channel: "Analytics" },
    ],
    projections: { newLeads: 58, newCustomers: 8, newIgFollowers: 480, newTikTokFollowers: 220, cumulativeCustomers: 20, cac: 32, conversionRate: 0.14 },
    keyDate: { date: "Todo Ago", name: "Back to School VE", type: "Estacional", action: "Serie contenido + promo paquete escolar" },
    feedback: "All-hands mensual Vie 8: ¿alineados con misión? ¿bloqueos?",
    reinforcement: "Historia de cliente en all-hands: 'María ahorró 6h/semana con FichoX'",
  },
  {
    week: 5,
    phase: "Tracción",
    dates: "11–17 Ago",
    theme: "Escalar Meta Ads + caso de éxito",
    segmentation: {
      persona: "Reseller IG consolidado + dropshipper principiante",
      geo: "VE principales ciudades + Cúcuta/Bogotá CO",
      icp: "Dropshipper que opera en USD, publica 5+ productos/día",
      channelFocus: "Meta Ads escalado + caso de éxito + retargeting",
    },
    daily: [
      { day: "Lun", date: "11", task: "Escalar Meta Ads 3x presupuesto (creative ganadora)", result: "CPL estable < $5", owner: "Growth", channel: "Paid" },
      { day: "Mar", date: "12", task: "Publicar caso de éxito video (cliente real, resultado real)", result: "+600 reach, 8 DMs", owner: "Content", channel: "IG" },
      { day: "Mié", date: "13", task: "Setup retargeting Meta Ads (visitantes web sin compra)", result: "Campaña de retargeting activa", owner: "Growth", channel: "Paid" },
      { day: "Jue", date: "14", task: "15 demos agendadas vía Meta Ads + WhatsApp", result: "15 demos en agenda", owner: "Sales", channel: "Sales" },
      { day: "Vie", date: "15", task: "8 demos 1:1 + 6 cierres", result: "6 nuevos clientes", owner: "Sales", channel: "Sales" },
      { day: "Sáb", date: "16", task: "TikTok #3 (trend audio + demo rápida)", result: "+2K views, +80 seguidores", owner: "Content", channel: "TikTok" },
      { day: "Dom", date: "17", task: "Review Sem 5: CPA, funnel, ajustes", result: "Funnel optimizado", owner: "Growth", channel: "Analytics" },
    ],
    projections: { newLeads: 72, newCustomers: 10, newIgFollowers: 650, newTikTokFollowers: 320, cumulativeCustomers: 30, cac: 33, conversionRate: 0.14 },
    feedback: "Funnel review Dom 17h: ¿dónde se caen los leads?",
    reinforcement: "Bonus por meta: si superamos 30 clientes, tarde libre viernes",
  },
  {
    week: 6,
    phase: "Tracción",
    dates: "18–24 Ago",
    theme: "Comunidad + 1er reseller white-label",
    segmentation: {
      persona: "Agencia de marketing pequeño comercio + reseller B2B",
      geo: "VE + CO + EC",
      icp: "Agencia con 5-20 clientes comerciantes, quiere remarcar FichoX",
      channelFocus: "LinkedIn + DM directo + demo B2B",
    },
    daily: [
      { day: "Lun", date: "18", task: "Campaña LinkedIn B2B: 'Conviértete en reseller FichoX'", result: "5 leads B2B agencias", owner: "Growth", channel: "LinkedIn" },
      { day: "Mar", date: "19", task: "Reel IG #6 + comunidad cerrada de comerciantes (Discord/WA)", result: "20 comerciantes en comunidad", owner: "Community", channel: "IG" },
      { day: "Mié", date: "20", task: "3 demos B2B con agencias + propuesta white-label", result: "1 LOI firmada", owner: "Founder", channel: "Sales" },
      { day: "Jue", date: "21", task: "10 demos 1:1 B2C + 6 cierres", result: "6 nuevos clientes", owner: "Sales", channel: "Sales" },
      { day: "Vie", date: "22", task: "Newsletter semanal #6: tips de venta + novedades producto", result: "30% open rate", owner: "Content", channel: "Email" },
      { day: "Sáb", date: "23", task: "TikTok #4 + carrusel 'antes/después ficha con IA'", result: "+1.5K views TT", owner: "Content", channel: "Content" },
      { day: "Dom", date: "24", task: "Análisis Sem 6: balance B2B vs B2C, ajuste", result: "Estrategia Sem 7 definida", owner: "Founder", channel: "Analytics" },
    ],
    projections: { newLeads: 85, newCustomers: 12, newIgFollowers: 820, newTikTokFollowers: 420, cumulativeCustomers: 42, cac: 34, conversionRate: 0.14 },
    feedback: "Review B2B vs B2C Dom: ¿dónde está el mejor LTV?",
    reinforcement: "Anunciar 1er reseller firmado en all-hands siguiente",
  },
  {
    week: 7,
    phase: "Optimización",
    dates: "25–31 Ago",
    theme: "Reducir churn + mejorar onboarding",
    segmentation: {
      persona: "Clientes Sem 1-6 en riesgo + nuevos con fricción",
      geo: "VE + CO",
      icp: "Cliente activo con <3 capturas/semana = riesgo de churn",
      channelFocus: "Email + WhatsApp + mejoras producto",
    },
    daily: [
      { day: "Lun", date: "25", task: "Auditoría de churn: llamar a 10 clientes inactivos", result: "5 reactivados, 3 razones de churn", owner: "Founder", channel: "Sales" },
      { day: "Mar", date: "26", task: "Mejorar onboarding: video 90s + checklist interactivo", result: "Onboarding v2 publicado", owner: "Product", channel: "Product" },
      { day: "Mié", date: "27", task: "Email a 30 clientes: encuesta NPS + oferta anual con descuento", result: "15 respuestas, 4 upgrades anuales", owner: "Content", channel: "Email" },
      { day: "Jue", date: "28", task: "Reel IG #7 (demo del nuevo onboarding)", result: "+700 reach", owner: "Content", channel: "IG" },
      { day: "Vie", date: "29", task: "8 demos + 5 cierres + reactivación de 3 churners", result: "8 clientes netos", owner: "Sales", channel: "Sales" },
      { day: "Sáb", date: "30", task: "TikTok #5 (trend + tip de venta rápido)", result: "+2K views", owner: "Content", channel: "TikTok" },
      { day: "Dom", date: "31", task: "NPS analysis + plan de acción churn", result: "Top 3 acciones definidas", owner: "Founder", channel: "Analytics" },
    ],
    projections: { newLeads: 78, newCustomers: 11, newIgFollowers: 950, newTikTokFollowers: 540, cumulativeCustomers: 50, cac: 32, conversionRate: 0.14 },
    feedback: "NPS Dom 31: ¿promotores vs detractores? ¿acción?",
    reinforcement: "Reconocer al miembro del equipo que más reactivó clientes",
  },
  {
    week: 8,
    phase: "Optimización",
    dates: "1–7 Sep",
    theme: "All-hands mensual + expansión CO",
    segmentation: {
      persona: "Comerciante Colombia + agencia B2B CO",
      geo: "Bogotá, Medellín, Cali",
      icp: "Reseller CO con facturación electrónica, vende en MELI CO",
      channelFocus: "Meta Ads CO + contenido localizado",
    },
    daily: [
      { day: "Lun", date: "1", task: "All-hands mensual: misión, visión, métricas Mes 2, historia cliente", result: "Equipo alineado para Mes 3", owner: "Founder", channel: "Interno" },
      { day: "Mar", date: "2", task: "Lanzar Meta Ads CO (audiencia Bogotá/Medellín)", result: "1ra campaña CO activa", owner: "Growth", channel: "Paid" },
      { day: "Mié", date: "3", task: "Localizar 5 reels a español neutro CO (sin 'vende pues')", result: "5 piezas CO listas", owner: "Content", channel: "Content" },
      { day: "Jue", date: "4", task: "10 demos (5 VE + 5 CO) + 7 cierres", result: "7 nuevos clientes (2 CO)", owner: "Sales", channel: "Sales" },
      { day: "Vie", date: "5", task: "Ingreso a 15 grupos WhatsApp CO de comerciantes", result: "15 grupos CO activos", owner: "Community", channel: "WhatsApp" },
      { day: "Sáb", date: "6", task: "TikTok #6 + Reel IG #8 (caso CO)", result: "+3K views TT, +1K reach IG", owner: "Content", channel: "Content" },
      { day: "Dom", date: "7", task: "Análisis Mes 2 + cohorte CO vs VE", result: "Insights CO, ajuste plan", owner: "Growth", channel: "Analytics" },
    ],
    projections: { newLeads: 92, newCustomers: 13, newIgFollowers: 1100, newTikTokFollowers: 680, cumulativeCustomers: 56, cac: 31, conversionRate: 0.14 },
    feedback: "All-hands Lun 1: ¿misión se siente viva? ¿qué falta?",
    reinforcement: "Historia cliente CO: 'Carlos en Medellín triplicó sus publicaciones'",
  },
  {
    week: 9,
    phase: "Expansión",
    dates: "8–14 Sep",
    theme: "Partnerships + contenido viral",
    segmentation: {
      persona: "Influencer comercio LATAM + agencia mediana",
      geo: "VE + CO + EC + AR",
      icp: "Influencer B2B commerce con 50K+ seguidores, agencia 20-50 clientes",
      channelFocus: "Partnerships + co-creación contenido",
    },
    daily: [
      { day: "Lun", date: "8", task: "Outreach a 5 influencers de comercio LATAM (co-creación)", result: "2 respuestas positivas", owner: "Growth", channel: "Partnership" },
      { day: "Mar", date: "9", task: "Reel IG #9 co-creado con influencer (cross-promo)", result: "+5K reach, 15 DMs", owner: "Content", channel: "IG" },
      { day: "Mié", date: "10", task: "3 demos B2B agencias + 1 reseller firmado", result: "1 reseller nuevo (CO)", owner: "Founder", channel: "Sales" },
      { day: "Jue", date: "11", task: "Día del Comerciante CO: post + promo", result: "+8 leads CO", owner: "Content", channel: "IG" },
      { day: "Vie", date: "12", task: "10 demos + 7 cierres (mix VE/CO)", result: "7 nuevos clientes", owner: "Sales", channel: "Sales" },
      { day: "Sáb", date: "13", task: "TikTok #7 (collab con influencer)", result: "+8K views, viral potencial", owner: "Content", channel: "TikTok" },
      { day: "Dom", date: "14", task: "Análisis Sem 9: ROI partnerships vs canales", result: "Decisión escalar partnerships", owner: "Growth", channel: "Analytics" },
    ],
    projections: { newLeads: 105, newCustomers: 14, newIgFollowers: 1400, newTikTokFollowers: 850, cumulativeCustomers: 65, cac: 30, conversionRate: 0.13 },
    keyDate: { date: "11 Sep", name: "Día del Comerciante (CO)", type: "Comercial", action: "Post + promo regional" },
    feedback: "ROI partnerships Dom: ¿escalar o pivotar?",
    reinforcement: "Anunciar 2do reseller firmado + bonus equipo",
  },
  {
    week: 10,
    phase: "Expansión",
    dates: "15–21 Sep",
    theme: "Optimizar funnel + preparar Black Friday",
    segmentation: {
      persona: "Todos los ICPs + prep estacional Black Friday",
      geo: "VE + CO + EC",
      icp: "Comerciante con inventario grande preparando temporada navideña",
      channelFocus: "Email + retargeting + contenido preparatorio",
    },
    daily: [
      { day: "Lun", date: "15", task: "Auditoría funnel completo: lead → demo → pago", result: "3 cuellos de botella identificados", owner: "Growth", channel: "Analytics" },
      { day: "Mar", date: "16", task: "Reel IG #10 + serie 'prepárate para Black Friday con IA'", result: "+1.2K reach", owner: "Content", channel: "IG" },
      { day: "Mié", date: "17", task: "Email a 50 clientes: upgrade anual con descuento BF", result: "8 upgrades anuales", owner: "Content", channel: "Email" },
      { day: "Jue", date: "18", task: "10 demos + 7 cierres", result: "7 nuevos clientes", owner: "Sales", channel: "Sales" },
      { day: "Vie", date: "19", task: "Mejoras producto: 2 features pedidas por top 10 clientes", result: "Features shipped", owner: "Product", channel: "Product" },
      { day: "Sáb", date: "20", task: "TikTok #8 + carrusel '5 fichas que venden en BF'", result: "+4K views", owner: "Content", channel: "Content" },
      { day: "Dom", date: "21", task: "Plan Black Friday Sem 12-14: promos, contenido, ads", result: "Calendario BF completo", owner: "Founder", channel: "Planning" },
    ],
    projections: { newLeads: 88, newCustomers: 12, newIgFollowers: 1250, newTikTokFollowers: 720, cumulativeCustomers: 73, cac: 28, conversionRate: 0.14 },
    feedback: "Funnel audit Lun: ¿dónde perdermos más?",
    reinforcement: "Reconocer al dev que shippeó features pedidas por clientes",
  },
  {
    week: 11,
    phase: "Consolidación",
    dates: "22–28 Sep",
    theme: "Casos de éxito + escalado final",
    segmentation: {
      persona: "Todos + foco en upgrade a plan anual",
      geo: "VE + CO + EC",
      icp: "Cliente mensual activo 60+ días = candidato upgrade anual",
      channelFocus: "Email + casos éxito + Meta Ads escalado",
    },
    daily: [
      { day: "Lun", date: "22", task: "Publicar 3 casos de éxito video (VE, CO, EC)", result: "+3K reach, 12 DMs", owner: "Content", channel: "IG" },
      { day: "Mar", date: "23", task: "Campaña email: upgrade anual con 2 meses gratis", result: "15 upgrades anuales", owner: "Content", channel: "Email" },
      { day: "Mié", date: "24", task: "Escalar Meta Ads 2x (creative ganador reutilizado)", result: "CPL < $4", owner: "Growth", channel: "Paid" },
      { day: "Jue", date: "25", task: "12 demos + 8 cierres", result: "8 nuevos clientes", owner: "Sales", channel: "Sales" },
      { day: "Vie", date: "26", task: "Webinar 'Crecí 3x con FichoX' — panel de clientes", result: "25 inscritos, 6 demos agendadas", owner: "Founder", channel: "Webinar" },
      { day: "Sáb", date: "27", task: "TikTok #9 (mejores momentos del webinar)", result: "+5K views", owner: "Content", channel: "TikTok" },
      { day: "Dom", date: "28", task: "Review Sem 11: upgrades vs nuevos, ajuste BF", result: "Plan BF final", owner: "Founder", channel: "Analytics" },
    ],
    projections: { newLeads: 95, newCustomers: 10, newIgFollowers: 1500, newTikTokFollowers: 900, cumulativeCustomers: 80, cac: 30, conversionRate: 0.13 },
    feedback: "Webinar review Vie 26: ¿qué preguntaron? ¿objeciones?",
    reinforcement: "Premiar a los 3 clientes del panel con 1 mes extra gratis",
  },
  {
    week: 12,
    phase: "Consolidación",
    dates: "29 Sep–5 Oct",
    theme: "Cierre de trimestre + planning Q4",
    segmentation: {
      persona: "Todos los activos + planning expansión Q4",
      geo: "VE + CO + EC + AR + MX (planning)",
      icp: "Todos los ICPs + definir nuevos para Q4",
      channelFocus: "Cierre + retrospective + planning",
    },
    daily: [
      { day: "Lun", date: "29", task: "Quarterly OKR review: ¿logramos 65 clientes? ¿$4.9K MRR?", result: "Scorecard Q3 completo", owner: "Founder", channel: "Analytics" },
      { day: "Mar", date: "30", task: "Lanzar promo Black Friday early (2 semanas antes)", result: "+12 upgrades anuales", owner: "Content", channel: "Email" },
      { day: "Mié", date: "1", task: "Retrospectiva trimestral equipo: qué funcionó, qué no, qué cambiar", result: "3 acciones Q4", owner: "Founder", channel: "Interno" },
      { day: "Jue", date: "2", task: "10 demos + 7 cierres + 5 upgrades", result: "12 clientes netos", owner: "Sales", channel: "Sales" },
      { day: "Vie", date: "3", task: "All-hands cierre Q3: misión, logros, agradecimiento equipo", result: "Equipo motivado para Q4", owner: "Founder", channel: "Interno" },
      { day: "Sáb", date: "4", task: "Reel IG #12 'Un trimestre con FichoX' (highlights)", result: "+5K reach, viral potencial", owner: "Content", channel: "IG" },
      { day: "Dom", date: "5", task: "Planning Q4: OKRs, presupuesto, contrataciones", result: "Plan Q4 aprobado", owner: "Founder", channel: "Planning" },
    ],
    projections: { newLeads: 82, newCustomers: 9, newIgFollowers: 1300, newTikTokFollowers: 800, cumulativeCustomers: 85, cac: 31, conversionRate: 0.13 },
    feedback: "Quarterly retro Mié 1: ¿qué repetimos en Q4? ¿qué nunca más?",
    reinforcement: "All-hands Vie 3: agradecimiento + bonus por meta Q3",
  },
]

// ---------------------------------------------------------------------------
// PROJECTION TOTALS (for charts)
// ---------------------------------------------------------------------------
export const PROJECTION_TIMESERIES = CALENDAR.map((w) => ({
  week: `S${w.week}`,
  leads: w.projections.newLeads,
  customers: w.projections.newCustomers,
  cumulative: w.projections.cumulativeCustomers,
  igFollowers: w.projections.newIgFollowers,
  tiktokFollowers: w.projections.newTikTokFollowers,
  cac: w.projections.cac,
  conv: Math.round(w.projections.conversionRate * 100),
}))

export const PROJECTION_TOTALS = {
  totalLeads: CALENDAR.reduce((s, w) => s + w.projections.newLeads, 0),
  totalCustomers: CALENDAR[CALENDAR.length - 1].projections.cumulativeCustomers,
  totalIgFollowers: CALENDAR.reduce((s, w) => s + w.projections.newIgFollowers, 0),
  totalTikTokFollowers: CALENDAR.reduce((s, w) => s + w.projections.newTikTokFollowers, 0),
  avgCac: Math.round(CALENDAR.reduce((s, w) => s + w.projections.cac, 0) / CALENDAR.length),
  avgConv: Math.round((CALENDAR.reduce((s, w) => s + w.projections.conversionRate, 0) / CALENDAR.length) * 1000) / 10,
}

// ---------------------------------------------------------------------------
// NATIONAL & COMMERCIAL DATES
// ---------------------------------------------------------------------------
export const KEY_DATES = [
  { date: "24 Jul", name: "Día del Comerciante (LATAM)", country: "VE/CO", type: "Comercial", action: "Post especial + promo 20% 1er mes", week: 2 },
  { date: "Ago", name: "Back to School VE", country: "VE", type: "Estacional", action: "Serie contenido + paquete escolar", week: 4 },
  { date: "11 Sep", name: "Día del Comerciante (CO)", country: "CO", type: "Comercial", action: "Post regional + demo CO", week: 9 },
  { date: "15 Sep", name: "Independencia CA (GT/HN/CR/SV/NI)", country: "CA", type: "Nacional", action: "Mención sutil (no foco)", week: 10 },
  { date: "Prep Oct", name: "Preparación Black Friday", country: "Global", type: "Comercial", action: "Plan contenido + ads BF", week: 10 },
  { date: "5 Oct", name: "Cierre Q3 + Planning Q4", country: "Interno", type: "Interno", action: "OKR review + planning", week: 12 },
]

// ---------------------------------------------------------------------------
// FEEDBACK & REINFORCEMENT CYCLES
// ---------------------------------------------------------------------------
export const FEEDBACK_CYCLES = [
  {
    cadence: "Diaria",
    ritual: "Stand-up 15 min (9:00 AM)",
    participants: "Todo el equipo",
    goal: "Alinear el día, bloqueos rápidos",
    questions: ["¿Qué hice ayer?", "¿Qué haré hoy?", "¿Qué me bloquea?"],
    output: "Notas en Notion + acciones del día",
  },
  {
    cadence: "Semanal",
    ritual: "Retrospectiva Vie 18h (45 min)",
    participants: "Todo el equipo",
    goal: "Iterar rápido: qué funcionó, qué no, qué cambiar",
    questions: ["¿Cuál fue el win de la semana?", "¿Qué métrica nos sorprendió?", "¿Qué iteramos la próxima sem?"],
    output: "Documento de learnings + 3 acciones",
  },
  {
    cadence: "Mensual",
    ritual: "All-hands 1er Vie del mes (60 min)",
    participants: "Equipo + clientes invitados",
    goal: "Mantener la misión viva + compartir historia de cliente",
    questions: ["¿Estamos más cerca de la visión?", "¿Qué historia de cliente nos marcó?", "¿Qué OKR avanzó más?"],
    output: "Grabación + notas + bonus reconocimientos",
  },
  {
    cadence: "Trimestral",
    ritual: "Quarterly review + planning (media jornada)",
    participants: "Equipo + advisor",
    goal: "Evaluación profunda OKRs + planning siguiente Q",
    questions: ["¿Logramos los OKRs del Q?", "¿Qué aprendimos del mercado?", "¿Qué OKRs para el próximo Q?"],
    output: "Scorecard Q + plan OKRs Q+1",
  },
  {
    cadence: "Por cliente",
    ritual: "Llamada NPS 30 días post-onboarding",
    participants: "Founder + cliente",
    goal: "Detectar churn temprano + recolectar testimonios",
    questions: ["¿Qué te hace quedar?", "¿Qué te haría irte?", "¿Recomendarías FichoX? (0-10)"],
    output: "Score NPS + acción de retención",
  },
]

export const REINFORCEMENT_ACTIONS = [
  { when: "Cada viernes", action: "'Comerciante del mes' en comunidad interna", target: "Cliente con resultado destacado", impact: "Prueba social + motivación equipo" },
  { when: "Cada cierre", action: "Campana + mensaje en grupo interno", target: "Sales", impact: "Momentum + celebración" },
  { when: "Cada 10 clientes", action: "Bonus tarde libre viernes para todo el equipo", target: "Equipo", impact: "Meta colectiva" },
  { when: "Cada mes", action: "Historia de cliente en all-hands", target: "Equipo", impact: "Misión viva" },
  { when: "Cada Q", action: "Bonus por OKR + día off team-building", target: "Equipo", impact: "Retención + cultura" },
  { when: "Cada feature ship", action: "Reconocimiento público al dev", target: "Product", impact: "Orgullo de producto" },
]

// ---------------------------------------------------------------------------
// INTERNAL COMMUNICATION: SELLING MISSION & VISION TO EMPLOYEES
// ---------------------------------------------------------------------------
export const MISSION_PLAN = {
  why: "Los empleados que entienden el 'por qué' trabajan 2x más comprometidos (Gallup). La misión no es un poster: es un sistema de recordatorios constantes.",
  mission: "Eliminar el trabajo manual de inventariar y publicar productos, para que cada comerciante latinoamericano pueda vender más en menos tiempo.",
  vision: "Ser la infraestructura de inventario y publicación por IA más usada por los 10 millones de comerciantes informales de LATAM.",
  rituals: [
    {
      name: "Onboarding de misión (Día 1)",
      when: "Cada nuevo hire",
      how: "Sesión 60 min con founder. Story del origen: por qué nació FichoX, qué comerciante concreto inspiró el producto. Video de 3 min de un cliente real contando su problema. Pregunta abierta: '¿qué parte de la misión te conecta más?'",
      artifact: "Deck onboarding + video cliente + welcome kit (taza + camiseta + manual de marca)",
    },
    {
      name: "Stand-up 'why' del lunes",
      when: "Cada lunes 9:00 AM (5 min del stand-up)",
      how: "Una persona comparte una historia breve de un cliente de la semana anterior: qué logró, cómo FichoX le ayudó. Rota semanalmente.",
      artifact: "Slack thread #why-we-do-this",
    },
    {
      name: "All-hands mensual con cliente invitado",
      when: "1er viernes del mes",
      how: "Cliente real cuenta su historia por 15 min (sin filtro, sin guion). Q&A abierto del equipo. El founder conecta explícitamente esa historia con la misión y visión.",
      artifact: "Grabación + transcripción + 3 aprendizajes compartidos",
    },
    {
      name: "Métrica del comerciante visible",
      when: "Siempre (dashboard en pared)",
      how: "Pantalla en la oficina (o widget en Slack) con: 'X comerciantes ahorraron Y horas esta semana con FichoX'. Actualiza cada lunes.",
      artifact: "Dashboard de impacto en tiempo real",
    },
    {
      name: "Quarterly 'mission check'",
      when: "Cada fin de trimestre",
      how: "Encuesta anónima: '¿sientes que tu trabajo acercó a FichoX a su misión? (1-10) ¿Por qué?'. Founder lee todas + responde en all-hands.",
      artifact: "Reporte anónimo + plan de acción",
    },
    {
      name: "Newsletter interno semanal",
      when: "Cada viernes",
      how: "Resumen de la semana: 1 win, 1 learning, 1 historia de cliente, 1 métrica de impacto. Tono cercano, no corporativo.",
      artifact: "Email #fichox-weekly",
    },
  ],
  artifacts: [
    { name: "Manual de marca (este documento)", where: "Notion + impreso en oficina", purpose: "Identidad visual compartida" },
    { name: "Wall of customers", where: "Pared oficina física", purpose: "Fotos + nombres de clientes reales" },
    { name: "Manifesto FichoX", where: "Página 1 del onboarding deck", purpose: "Frase corta: 'Construimos el futuro del comercio LATAM, una ficha a la vez.'" },
    { name: "Slack #why-we-do-this", where: "Canal Slack", purpose: "Historias de cliente compartidas semanalmente" },
    { name: "Welcome kit físico", where: "Día 1 de cada hire", purpose: "Taza + camiseta + carta manuscrita del founder" },
  ],
  kpis: {
    engagement: "eNPS (Employee NPS) > 40",
    retention: "Voluntaria > 90% anual",
    missionAlignment: "Mission check trimestral > 8/10",
    stories: "1 historia cliente compartida/semana",
  },
}
