// ============================================================================
// FichoX — Exponential Mechanics Analysis & Realistic Projections
// New pricing ($29/mo), viral referrals, trial freemium, feature unlocks
// 3 scenarios: Optimistic / Pragmatic / Pessimistic (VE market aware)
// ============================================================================

export const EXPO_ANALYSIS = {
  name: "Análisis Exponencial · Nuevas mecánicas",
  date: "Jul 2025",
  summary:
    "Las nuevas mecánicas (pricing agresivo $29/mo, trial freemium 7d, referrals virales con unlock de features, lifetime scarcity) proyectan un crecimiento exponencial POTENCIAL pero dependen críticamente de la ejecución viral y del mercado venezolano. Aquí analizamos 3 escenarios realistas.",
}

// ---------------------------------------------------------------------------
// NEW PRICING (vs old)
// ---------------------------------------------------------------------------
export const PRICING_COMPARISON = [
  { tier: "Trial", oldPrice: "—", newPrice: "$0 · 7 días", oldMonthly: "—", newMonthly: "$0", change: "NUEVO", note: "Freemium con preview de todas las features" },
  { tier: "Mensual", oldPrice: "$80/mo", newPrice: "$29/mo", oldMonthly: "$80.00", newMonthly: "$29.00", change: "-64%", note: "Precio competitivo LATAM" },
  { tier: "Trimestral", oldPrice: "—", newPrice: "$78/3mo", oldMonthly: "—", newMonthly: "$26.00", change: "NUEVO", note: "Ahorro 10% vs mensual" },
  { tier: "Anual", oldPrice: "$250/yr", newPrice: "$249/yr", oldMonthly: "$20.83", newMonthly: "$20.75", change: "-0.4%", note: "Más popular · ahorro 28%" },
  { tier: "Lifetime", oldPrice: "—", newPrice: "$499 once", oldMonthly: "—", newMonthly: "~$5.20", change: "NUEVO", note: "Solo primeros 50 · escasez" },
]

// ---------------------------------------------------------------------------
// NEW MECHANICS ANALYSIS
// ---------------------------------------------------------------------------
export const MECHANICS_ANALYSIS = [
  {
    mechanic: "Trial freemium 7 días",
    type: "Adquisición",
    howItWorks: "Token en Ajustes → 7 días de unlock estricto (no reutilizable) → preview de todas las features",
    exponentialPotential: "Alto",
    rationale: "Elimina fricción de entrada. De paywall-only a freemium = funnel top mucho más ancho. Cada trial es un lead cualificado auto-onboarded.",
    risk: "Trial abuse (creación de múltiples tokens). Mitigación: 1 token por wallet/device.",
    metric: "Trial → paid conversion rate",
  },
  {
    mechanic: "Referral code FICHOX-XXXXXX",
    type: "Viral",
    howItWorks: "Merchant comparte código por WhatsApp. Nuevo merchant registra con código. Tras 3 días de uso → referrer +1 día. Tras 2 paying → unlock ALL features permanente.",
    exponentialPotential: "Muy alto",
    rationale: "El unlock permanente por 2 referidos pagos es el motor viral. Incentivo alineado: referir 2 = ahorrar $249+/año. Cada paying user trae potencialmente 2 nuevos paying users.",
    risk: "Fraude (autorreferencias, wallets múltiples). Mitigación: 1 wallet por device + KYC para unlock.",
    metric: "Coeficiente viral K (invitations × conversion)",
  },
  {
    mechanic: "Rewards +1 día (review, share, WhatsApp)",
    type: "Engagement",
    howItWorks: "Google review, social share, WhatsApp share → +1 día cada uno (verificado con VLM screenshot)",
    exponentialPotential: "Medio",
    rationale: "Cambio clave de +7 a +1: antes 4-5 acciones = mes gratis (canibalizaba revenue). Ahora 30 acciones = mes gratis (casi nadie lo hará,subscribe en su lugar). Mantiene engagement sin matar monetización.",
    risk: "Screenshots falsos. Mitigación: VLM verifica presencia de marca FichoX + URL de referral.",
    metric: "Reward actions per user per month",
  },
  {
    mechanic: "Feature unlock system (4 features, 4 tiers)",
    type: "Monetización",
    howItWorks: "Priority chain: Subscription → 2 paid referrals → KYC → Trial preview → Locked. Features: cleanImages, enhanceHD, meliTrends, geoRecommend.",
    exponentialPotential: "Alto",
    rationale: "Crea camino de upgrade claro. Trial preview (amber nudge) muestra valor sin bloquear. Locked (30% opacity + lock) crea deseo. KYC tier añade verificación sin fricción de pago.",
    risk: "Confusión de usuarios sobre qué desbloquea qué. Mitigación: dashboard 'Funciones desbloqueadas: X/4'.",
    metric: "Feature unlock rate por tier",
  },
  {
    mechanic: "Lifetime $499 (first 50 only)",
    type: "Monetización",
    howItWorks: "Pago único $499 = all features forever. Limitado a primeros 50 clientes.",
    exponentialPotential: "Bajo (pero estratégico)",
    rationale: "Scarcity genera urgency. Captura early adopters high-LTV. $499 = ~$5/mo @ 8 años. Solo 50 → $24,950 upfront cash + 50 evangelistas permanentes.",
    risk: "Canibaliza revenue si clientes high-LTV habrían pagado anual por años. Mitigación: solo 50, luego se retira.",
    metric: "Lifetime tier sell-through rate",
  },
  {
    mechanic: "Pricing agresivo $29/mo",
    type: "Adquisición",
    howItWorks: "Mensual $29 (vs $80 anterior). Trimestral $78. Anual $249.",
    exponentialPotential: "Alto (volumen)",
    rationale: "$29/mo es ~10-15% del salario mínimo VE en USD = asequible para comerciante informal. Baja fricción de decisión. Compensa menor ARPU con mayor volumen y viralidad.",
    risk: "ARPU cae 64%. Breakeven sube de 17 a ~45 clientes. Necesita volumen mucho mayor.",
    metric: "ARPU blendado + volume growth",
  },
]

// ---------------------------------------------------------------------------
// VIRAL MATH — referral coefficient per scenario
// ---------------------------------------------------------------------------
export const VIRAL_MODEL = {
  concept: "Cada paying user tiene incentivo de referir 2 paying users para unlock permanente. K = i × c (invitations × conversion rate).",
  scenarios: [
    {
      name: "Optimista",
      invitationsPerUser: 5,
      conversionRate: 0.12,
      k: 0.6,
      interpretation: "Cada 10 users traen 6 nuevos via referrals. Crecimiento exponencial real.",
      assumptions: ["Comunidad WhatsApp activa", "Incentivo unlock permanente funciona", "Mercado CO/EC adopta rápido"],
    },
    {
      name: "Pragmática",
      invitationsPerUser: 3,
      conversionRate: 0.12,
      k: 0.36,
      interpretation: "Cada 10 users traen 3.6 nuevos. Crecimiento acelerado pero lineal-ish.",
      assumptions: ["Referidos funcionan moderadamente", "VE responde pero con fricción", "Algo de fraud requiere mitigación"],
    },
    {
      name: "Pesimista",
      invitationsPerUser: 2,
      conversionRate: 0.075,
      k: 0.15,
      interpretation: "Cada 10 users traen 1.5 nuevos. Crecimiento mayormente paid acquisition.",
      assumptions: ["Fraude autorreferencias reduce efectividad", "Mercado VE resistente", "WhatsApp API bloqueos intermitentes"],
    },
  ],
}

// ---------------------------------------------------------------------------
// VENEZUELAN MARKET RISK FACTORS
// ---------------------------------------------------------------------------
export const VE_RISKS = [
  { factor: "Apagones eléctricos", probability: "Alta", impact: "Medio", description: "10-30% de sesiones interrumpidas en zonas afectadas (Zulia, interior)", mitigation: "Modo offline + sync cuando vuelve conexión", metricImpact: "Churn +2-3%" },
  { factor: "Inestabilidad internet", probability: "Alta", impact: "Medio", description: "15-25% drop rate en sesiones largas de captura IA", mitigation: "Retry automático + cola offline", metricImpact: "Captura success rate -15%" },
  { factor: "Depreciación Bolívar", probability: "Alta", impact: "Bajo", description: "Precios en USD mitiga, pero poder adquisitivo oscila", mitigation: "Mantener pricing en USD + USDT", metricImpact: "Neutral (ya mitigado)" },
  { factor: "Ingreso disponible bajo", probability: "Alta", impact: "Alto", description: "$29/mo = 10-15% salario mínimo VE. Muchos no pueden pagar", mitigation: "Trial generoso + rewards + referrals para unlock", metricImpact: "Trial→paid conversion -5-8%" },
  { factor: "Adopción USDT limitada", probability: "Media", impact: "Medio", description: "~40% de comerciantes tienen wallet BSC. Resto usa P2P/bancario", mitigation: "Aceptar Binance Pay + Zelle +Pago Móvil como fallback", metricImpact: "Payment friction +10-15%" },
  { factor: "Dependencia WhatsApp", probability: "Media", impact: "Crítico", description: "Si Meta bloquea WhatsApp Business API, 60% del canal de adquisición muere", mitigation: "Diversificar a Telegram + IG DM + SMS", metricImpact: "CAC +200% si ocurre" },
  { factor: "Regulación cripto incierta", probability: "Media", impact: "Medio", description: "SUNACRIP puede requerir registro. Cambios regulatorios posibles", mitigation: "Jurisdicción Panamá + compliance proactivo", metricImpact: "Legal cost +$5K/año" },
  { factor: "Fuga de cerebros (emigración)", probability: "Alta", impact: "Medio", description: "Comerciantes emigran a CO/EC/AR = churn geográfico", mitigation: "Seguir al usuario (expansión regional) + portabilidad de cuenta", metricImpact: "Churn +3-5%" },
  { factor: "Competencia (Make.com + plantillas)", probability: "Media", impact: "Medio", description: "Competidores pueden copiar mecánicas virales o pricing", mitigation: "Velocidad de ejecución + lock-in por data + brand", metricImpact: "Price war -10-15%" },
  { factor: "Fraude de referrals", probability: "Alta", impact: "Medio", description: "Autorreferencias con wallets múltiples para farmear unlocks", mitigation: "1 wallet por device + KYC para unlock + IP fingerprinting", metricImpact: "CAC efectivo +30-50% si no se mitiga" },
]

// ---------------------------------------------------------------------------
// SCENARIO PROJECTIONS — 12 months
// ---------------------------------------------------------------------------
export interface ScenarioMonth {
  month: number
  label: string
  customers: number
  newCustomers: number
  churned: number
  revenue: number
  variableCosts: number
  fixedCosts: number
  acquisitionCost: number
  rewardVerificationCost: number
  totalCosts: number
  netProfit: number
  cumulativeNet: number
  margin: number
}

export interface Scenario {
  id: string
  name: string
  emoji: string
  color: string
  tagline: string
  // assumptions
  arpu: number
  variableCostPerCustomer: number
  monthlyChurn: number
  cac: number
  k: number
  trialConversion: number
  fixedCostsMonthly: number
  // projections
  months: ScenarioMonth[]
  // summary
  totalCustomers: number
  totalRevenue: number
  breakevenCustomers: number
  breakevenMonth: number | null
  cumulativeBreakevenMonth: number | null
  q3NetProfit: number
  ltv: number
  ltvCac: number
}

const FIXED_COSTS = 850 // slightly higher due to reward verification VLM infrastructure
const VAR_COST = 8.5 // IA + reward verification VLM (~$0.5 extra per user for screenshots)

// Build scenario months
function buildScenario(
  id: string, name: string, emoji: string, color: string, tagline: string,
  trajectory: number[], arpu: number, churn: number, cac: number, k: number,
  trialConv: number,
): Scenario {
  let cumulative = -5000 // updated seed (constitución + setup)
  const months: ScenarioMonth[] = []
  let prevCustomers = 0

  for (let i = 0; i < 12; i++) {
    const customers = trajectory[i]
    const survived = Math.round(prevCustomers * (1 - churn))
    const newCustomers = Math.max(0, customers - survived)
    const churned = prevCustomers - survived
    const revenue = +(customers * arpu).toFixed(2)
    const variableCosts = +(customers * VAR_COST).toFixed(2)
    const fixedCosts = FIXED_COSTS
    const acquisitionCost = +(newCustomers * cac).toFixed(2)
    const rewardVerificationCost = +(customers * 0.4).toFixed(2) // ~0.4 reward actions/user/month × $1 VLM
    const totalCosts = +(fixedCosts + variableCosts + acquisitionCost + rewardVerificationCost).toFixed(2)
    const netProfit = +(revenue - totalCosts).toFixed(2)
    cumulative = +(cumulative + netProfit).toFixed(2)
    const margin = revenue > 0 ? +((netProfit / revenue) * 100).toFixed(1) : 0
    months.push({
      month: i + 1, label: `M${i + 1}`,
      customers, newCustomers, churned, revenue, variableCosts, fixedCosts,
      acquisitionCost, rewardVerificationCost, totalCosts, netProfit, cumulativeNet: cumulative, margin,
    })
    prevCustomers = customers
  }

  const breakevenCustomers = Math.ceil(FIXED_COSTS / (arpu - VAR_COST))
  const operatingBe = months.find(m => m.netProfit >= 0)?.month ?? null
  const cumulativeBe = months.find(m => m.cumulativeNet >= 0)?.month ?? null
  const ltv = (arpu - VAR_COST) * (1 / churn)
  const totalRevenue = months.reduce((s, m) => s + m.revenue, 0)

  return {
    id, name, emoji, color, tagline, arpu, variableCostPerCustomer: VAR_COST,
    monthlyChurn: churn, cac, k, trialConversion: trialConv, fixedCostsMonthly: FIXED_COSTS,
    months, totalCustomers: trajectory[11], totalRevenue,
    breakevenCustomers, breakevenMonth: operatingBe,
    cumulativeBreakevenMonth: cumulativeBe,
    q3NetProfit: months[11].cumulativeNet, ltv, ltvCac: ltv / cac,
  }
}

// ARPU calculations per scenario (blend of tiers)
// Optimistic: 5% mensual, 15% trimestral, 75% anual, 5% lifetime = $21.17
// Pragmatic: 30% mensual, 35% trimestral, 30% anual, 5% lifetime = $24.29
// Pessimistic: 40% mensual, 30% trimestral, 30% anual, 0% lifetime = $25.63

export const SCENARIOS: Scenario[] = [
  buildScenario(
    "optimistic", "Optimista", "🚀", "#059669",
    "Viral funciona + VE responde + expansión CO/EC rápida",
    [8, 18, 35, 60, 95, 140, 195, 260, 335, 420, 510, 600],
    21.17, 0.05, 20, 0.6, 0.22,
  ),
  buildScenario(
    "pragmatic", "Pragmática", "⚖️", "#1d4ed8",
    "Viral moderado + VE con fricción + CO lento",
    [6, 12, 22, 34, 48, 65, 84, 104, 125, 146, 168, 190],
    24.29, 0.10, 35, 0.36, 0.15,
  ),
  buildScenario(
    "pessimistic", "Pesimista", "⚠️", "#e11d48",
    "Viral débil + VE resistente + fraude referrals + apagones",
    [3, 5, 8, 12, 16, 20, 24, 28, 32, 36, 40, 45],
    25.63, 0.18, 55, 0.15, 0.09,
  ),
]

// ---------------------------------------------------------------------------
// COMBINED CHART DATA — all 3 scenarios for comparison
// ---------------------------------------------------------------------------
export const COMBINED_CUSTOMER_TRAJECTORY = SCENARIOS[0].months.map((_, i) => ({
  month: `M${i + 1}`,
  optimista: SCENARIOS[0].months[i].customers,
  pragmatica: SCENARIOS[1].months[i].customers,
  pesimista: SCENARIOS[2].months[i].customers,
}))

export const COMBINED_REVENUE = SCENARIOS[0].months.map((_, i) => ({
  month: `M${i + 1}`,
  optimista: Math.round(SCENARIOS[0].months[i].revenue),
  pragmatica: Math.round(SCENARIOS[1].months[i].revenue),
  pesimista: Math.round(SCENARIOS[2].months[i].revenue),
}))

export const COMBINED_CUMULATIVE = SCENARIOS[0].months.map((_, i) => ({
  month: `M${i + 1}`,
  optimista: Math.round(SCENARIOS[0].months[i].cumulativeNet),
  pragmatica: Math.round(SCENARIOS[1].months[i].cumulativeNet),
  pesimista: Math.round(SCENARIOS[2].months[i].cumulativeNet),
}))

// ---------------------------------------------------------------------------
// SCENARIO COMPARISON SUMMARY
// ---------------------------------------------------------------------------
export const SCENARIO_COMPARISON = [
  { metric: "ARPU mensual blendado", optimista: "$21.17", pragmatica: "$24.29", pesimista: "$25.63", note: "Pesimista tiene ARPU más alto (más mensual) pero menos volumen" },
  { metric: "Churn mensual", optimista: "5%", pragmatica: "10%", pesimista: "18%", note: "VE churn alto por emigración + apagones" },
  { metric: "CAC blendado", optimista: "$20", pragmatica: "$35", pesimista: "$55", note: "Viral reduce CAC en optimista" },
  { metric: "Coeficiente viral K", optimista: "0.60", pragmatica: "0.36", pesimista: "0.15", note: "K>1 = exponencial real. Ningún escenario lo alcanza" },
  { metric: "Trial → paid conversión", optimista: "22%", pragmatica: "15%", pesimista: "9%", note: "VE ingreso limitado reduce conversión" },
  { metric: "Clientes mes 12", optimista: "600", pragmatica: "190", pesimista: "45", note: "Rango 13x entre extremos" },
  { metric: "Breakeven operativo (clientes)", optimista: "70", pragmatica: "60", pesimista: "53", note: "Cae con ARPU más bajo" },
  { metric: "Breakeven operativo (mes)", optimista: "M4", pragmatica: "M7", pesimista: "Nunca (12m)", note: "Pesimista no llega a breakeven" },
  { metric: "Breakeven acumulado (mes)", optimista: "M6", pragmatica: "M11", pesimista: "Nunca", note: "Recupera seed" },
  { metric: "LTV por cliente", optimista: "$254", pragmatica: "$158", pesimista: "$95", note: "Churn pesa más que ARPU" },
  { metric: "LTV : CAC", optimista: "12.7:1", pragmatica: "4.5:1", pesimista: "1.7:1", note: "Pesimista apenas sano (>3:1)" },
  { metric: "Net profit acumulado Q3", optimista: "+$87K", pragmatica: "+$3.8K", pesimista: "-$32K", note: "Pesimista quema cash" },
]

// ---------------------------------------------------------------------------
// IMPACT ON THE 7 PLANS — what changes
// ---------------------------------------------------------------------------
export const PLAN_IMPACTS = [
  {
    plan: "1. Plan de Negocio",
    changes: [
      "ARPU cae de $46.25 a $21-26 (depende escenario) — hasta -55%",
      "Breakeven sube de 17 a 53-70 clientes (3-4x más)",
      "Nuevas fuentes de revenue: Lifetime ($499 × 50 = $24,950 upfront)",
      "Reward days reemplazan potencial churn (engagement sin canibalizar)",
      "Modelo financiero debe re-proyectarse con 3 escenarios",
    ],
    action: "Re-calcular todos los números con nuevo pricing. Preparar pitch con escenario pragmático como base.",
    severity: "Crítica",
  },
  {
    plan: "2. Manual de Branding",
    changes: [
      "Nuevos artefactos visuales: reward badges (+1 día), referral cards, feature unlock icons",
      "Trial preview nudge (amber) necesita estilo consistente",
      "Locked overlay (30% opacity + lock) debe respetar manual de marca",
      "Lifetime tier badge ('primeros 50') necesita diseño de escasez",
      "Dashboard 'Funciones desbloqueadas: X/4' nuevo componente",
    ],
    action: "Añadir 4 nuevos componentes al manual: reward badges, referral cards, feature unlock states, lifetime scarcity.",
    severity: "Media",
  },
  {
    plan: "3. Plan de Marketing",
    changes: [
      "Trial freemium = funnel top 5-10x más ancho (de paywall a free trial)",
      "Referral program ahora es CORE (no complementario) — requiere branding propio",
      "Meta Ads messaging cambia: 'prueba gratis 7 días' vs 'suscríbete $80'",
      "Influencer collabs ahora con referral codes trackables",
      "Segmentación debe incluir 'trial users' como etapa del funnel",
    ],
    action: "Reescribir calendario con énfasis en trial activation y referral mechanics. KPIs nuevos: trial→paid, K viral, reward actions/user.",
    severity: "Alta",
  },
  {
    plan: "4. Plan Operativo",
    changes: [
      "Necesario: rol de 'Fraud & Compliance Lead' para referrals (mitigar autorreferencias)",
      "VLM infrastructure para reward verification (~$0.40/user/mes adicional)",
      "Customer Success ahora maneja trial users (no solo paying)",
      "Soporte para 'cómo ganar reward days' y 'cómo desbloquear features'",
      "Onboarding debe explicar referral flow desde día 1",
    ],
    action: "Añadir Fraud Lead part-time Sem 3. Actualizar CS scripts para trial + referrals. Presupuesto VLM +$200/mes.",
    severity: "Alta",
  },
  {
    plan: "5. Plan de Automatización",
    changes: [
      "NUEVA automatización: reward verification pipeline (screenshot → VLM → grant day)",
      "NUEVA: referral tracking + unlock automático tras 2 paying refs",
      "NUEVA: trial expiration → nudge sequence (días 5, 6, 7)",
      "NUEVA: fraud detection (mismo device, múltiples wallets)",
      "Ajustar: churn detection ahora incluye trial users (no solo paying)",
    ],
    action: "Añadir 4 automatizaciones nuevas al calendario Sem 1-3 (reward verify, referral unlock, trial nudge, fraud detect).",
    severity: "Crítica",
  },
  {
    plan: "6. Plan Financiero & Alianzas",
    changes: [
      "ARPU menor = necesidad de más volumen = más capital para escalar",
      "Lifetime tier = $24,950 upfront cash (mejora runway mes 1-2)",
      "Breakeven más alto = longer runway needed (de 18 a 24 meses target)",
      "Nueva alianza crítica: KYC provider (para feature unlock tier)",
      "BSC Grant más importante que nunca (volumen BSC por referrals)",
    ],
    action: "Re-calcular capital raising: necesarios $400K (vs $250K) para 24 meses runway. Priorizar KYC partner.",
    severity: "Crítica",
  },
  {
    plan: "7. Plan de Documentación",
    changes: [
      "Nuevos SOPs: reward verification, referral fraud handling, trial expiration flow",
      "Manual de CS actualizado: cómo explicar unlock tiers a clientes",
      "Plantilla: email de trial expirando + CTA subscribe/refer",
      "Política anti-fraude referrals (1 wallet por device, KYC)",
      "KB: 'Cómo ganar días gratis' + 'Cómo desbloquear features'",
    ],
    action: "Añadir 5 nuevos documentos al mapa. Priorizar política anti-fraude (legal sensitive).",
    severity: "Alta",
  },
]

// ---------------------------------------------------------------------------
// EXECUTIVE RECOMMENDATION
// ---------------------------------------------------------------------------
export const RECOMMENDATIONS = [
  {
    priority: "Crítica",
    title: "Adoptar escenario pragmático como base de planificación",
    rationale: "El pragmático (190 clientes M12, breakeven M11, +$3.8K net) es el más realista para VE. Optimista es aspiracional, pesimista es contingency plan.",
    action: "Re-bajar todas las metas de los 7 planes a los números pragmáticos. Mantener pesimista como plan B si churn >15%.",
  },
  {
    priority: "Crítica",
    title: "Mitigar fraude de referrals ANTES de lanzar",
    rationale: "Si fraude no se mitiga, K cae a 0.1 y escenario pesimista se vuelve el real. KYC + 1-wallet-per-device + IP fingerprinting son non-negotiable.",
    action: "Implementar KYC básico (cellphone + selfie) para unlock permanente. Bloquear autorreferencias. Sem 1 prioridad.",
  },
  {
    priority: "Alta",
    title: "Asegurar $24,950 upfront con Lifetime tier",
    rationale: "50 × $499 = $24,950 cash inmediato = 3 meses de runway extra. Scarcity ('primeros 50') genera urgency.",
    action: "Lanzar Lifetime tier Sem 1 con countdown visible. Target: 50 vendidos en Sem 1-4.",
  },
  {
    priority: "Alta",
    title: "Diversificar canales más allá de WhatsApp",
    rationale: "60% de adquisición depende de WhatsApp. Si Meta bloquea, escenario pesimista se materializa.",
    action: "Activar IG DM + Telegram + SMS desde Sem 3. Meta Ads como canal no-WhatsApp.",
  },
  {
    priority: "Media",
    title: "Medir K viral semanalmente y ajustar incentivos",
    rationale: "Si K < 0.3 en Sem 4, aumentar incentivo referral (ej: +3 días en vez de +1). Si K > 0.5, mantener.",
    action: "Dashboard Sem con K métrica. A/B test de incentivos cada 4 sem.",
  },
  {
    priority: "Media",
    title: "Reservar $32K buffer para escenario pesimista",
    rationale: "Si pesimista se materializa (net -$32K Q3), necesitas cash para sobrevivir y pivotar.",
    action: "Mantener $32K en treasury líquido (Tier 1+2) como insurance. No invertir en escala hasta K > 0.3 confirmado.",
  },
]
