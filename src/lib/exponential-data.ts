// ============================================================================
// FichoX — Exponential Mechanics Analysis & Realistic Projections
// Pricing ($55/mo), viral referrals, trial freemium, feature unlocks
// 3 scenarios: Optimistic / Pragmatic / Pessimistic (VE market aware)
// ============================================================================

export const EXPO_ANALYSIS = {
  name: "Análisis Exponencial · Mecánicas",
  date: "Jul 2025",
  summary:
    "Las mecánicas (pricing $55/mo, trial freemium 7d, referrals virales con unlock de features, lifetime scarcity) proyectan un crecimiento exponencial POTENCIAL pero dependen críticamente de la ejecución viral y del mercado venezolano. Aquí analizamos 3 escenarios realistas.",
}

// ---------------------------------------------------------------------------
// PRICING TIERS
// ---------------------------------------------------------------------------
export const PRICING_COMPARISON = [
  { tier: "Trial", price: "$0 · 7 días", monthly: "$0", note: "Freemium con preview de todas las features" },
  { tier: "Mensual", price: "$55/mo", monthly: "$55.00", note: "Precio competitivo LATAM" },
  { tier: "Anual", price: "$399/yr", monthly: "$33.25", note: "Más popular · ahorro 40% vs mensual" },
  { tier: "Lifetime", price: "$499 once", monthly: "~$8.32", note: "Solo primeros 50 · máximo 5 años · escasez" },
]

// ---------------------------------------------------------------------------
// DISCLAIMER — applies to ALL plans and calculations
// ---------------------------------------------------------------------------
export const PRICING_DISCLAIMER = {
  title: "Aviso sobre precios y condiciones",
  text: "Todos los planes y cálculos aquí presentados han sido proyectados basándose en los costos actuales de infraestructura, herramientas SaaS y tecnologías de inteligencia artificial (incluyendo pero no limitado a z-ai-web-dev-sdk, modelos VLM/LLM, image-edit y video-gen). Los proveedores de estos servicios pueden modificar sus precios en cualquier momento y sin previo aviso. Si dichos costos aumentan significativamente, FichoX no podrá mantener las condiciones de precio y features aquí descritas, y se verá en la necesidad de ajustarlas. Al continuar con la suscripción, el comerciante acepta esta condición y reconoce que las proyecciones son orientativas y están sujetas a la estabilidad del ecosistema tecnológico subyacente.",
}

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
    mechanic: "Referral code FICHOX-XXXXXX + dual bonus",
    type: "Viral",
    howItWorks: "Merchant comparte código via 5 plantillas un-clic (WhatsApp, IG, Facebook, Twitter, copy). Nuevo merchant registra con código. Invitado recibe +3 días de bienvenida al confirmar referido. Tras 3 días de uso → referrer +1 día.",
    exponentialPotential: "Muy alto",
    rationale: "El dual-sided bonus (+3 días al invitado) es clave: reduce fricción de registro del invitee. Las 5 plantillas un-clic eliminan fricción de compartir. El incentivo está alineado: referir 3 pagos = unlock ALL features permanente (embajador silver).",
    risk: "Fraude (autorreferencias, wallets múltiples). Mitigación: 1 wallet por device + KYC para unlock + device fingerprinting.",
    metric: "Coeficiente viral K (target >0.9)",
  },
  {
    mechanic: "Rewards +1 día (review, share, WhatsApp)",
    type: "Engagement",
    howItWorks: "Google review, social share, WhatsApp share → +1 día cada uno (verificado con VLM screenshot)",
    exponentialPotential: "Medio",
    rationale: "55 acciones = mes gratis (casi nadie lo hará, subscribe en su lugar). Mantiene engagement sin canibalizar monetización.",
    risk: "Screenshots falsos. Mitigación: VLM verifica presencia de marca FichoX + URL de referral.",
    metric: "Reward actions per user per month",
  },
  {
    mechanic: "6 viral tiers escalados + feature unlocks",
    type: "Monetización",
    howItWorks: "Tiers: 1 activo → +1día, 2 activos → +2 días, 5 activos → +5 días + cleanImages, 10 activos → +10 días + all 30 días, 1 pago → +3 días + enhanceHD + bronze, 3 pagos → unlock ALL permanente + silver. Gold (5 pagos) y Platinum (10 pagos) son badges.",
    exponentialPotential: "Alto",
    rationale: "Escalado de recompensas mantiene motivación en cada etapa. Feature unlocks progresivos (cleanImages → enhanceHD → all) crean camino de upgrade claro sin paywall abrupto. Ambassador badges (bronze/silver/gold/platinum) añaden gamificación y status social.",
    risk: "Complejidad de UX. Mitigación: dashboard 'Funciones desbloqueadas: X/4' + visualización de progresión de niveles.",
    metric: "Tier upgrade rate + ambassador level distribution",
  },
  {
    mechanic: "7 milestones auto-recompensados",
    type: "Engagement",
    howItWorks: "Auto-detectados y auto-recompensados: 1ra captura (+1d), 10 productos (+1d), 50 productos (+3d), 100 productos (+7d), 1ra publicación (+1d), 10 publicaciones (+1d), 1er referido (+1d). Celebración visual al lograrlos.",
    exponentialPotential: "Medio-alto",
    rationale: "Los milestones de captura/publicación incentivan uso activo del producto (no solo registro). +7 días por 100 productos es el mayor reward, alineando engagement profundo con retención. Las celebraciones crean momentos de delight que aumentan NPS y probabilidad de compartir.",
    risk: "Auto-grant podría premiar uso superficial. Mitigación: thresholds altos (50, 100) + VLM ya verifica capturas reales.",
    metric: "Milestone achievement rate + reward days granted per user",
  },
  {
    mechanic: "Lifetime $499 (first 50 only · 5 años)",
    type: "Monetización",
    howItWorks: "Pago único $499 = all features por un máximo de 5 años. Limitado a primeros 50 clientes.",
    exponentialPotential: "Bajo (pero estratégico)",
    rationale: "Scarcity genera urgency. Captura early adopters high-LTV. $499 = ~$8.32/mo @ 5 años. Solo 50 → $24,950 upfront cash + 50 evangelistas por 5 años.",
    risk: "Canibaliza revenue si clientes high-LTV habrían pagado anual por años. Mitigación: solo 50, luego se retira. Limitado a 5 años para acotar compromiso.",
    metric: "Lifetime tier sell-through rate",
  },
  {
    mechanic: "Pricing $55/mo (equilibrado)",
    type: "Adquisición",
    howItWorks: "Mensual $55. Anual $399. Lifetime $499 (5 años).",
    exponentialPotential: "Alto (volumen + margen)",
    rationale: "$55/mo es ~18-20% del salario mínimo VE en USD = asequible para comerciante establecido. ARPU saludable ($34-46 blendado) mantiene márgenes del 75-80%. Compensa volumen con viralidad sin sacrificar rentabilidad.",
    risk: "Fricción de precio para comerciante informal. Breakeven en 23-34 clientes.",
    metric: "ARPU blendado + volume growth",
  },
]

// ---------------------------------------------------------------------------
// VIRAL MATH — referral coefficient per scenario
// ---------------------------------------------------------------------------
export const VIRAL_MODEL = {
  concept: "Cada paying user tiene incentivo de referir 3 paying users para unlock permanente (embajador silver). K = i × c (invitations × conversion rate). Target backend: K > 0.9.",
  scenarios: [
    {
      name: "Optimista",
      invitationsPerUser: 5,
      conversionRate: 0.18,
      k: 0.90,
      interpretation: "Adopción completa del frontend: plantillas un-clic + dual bonus + milestones + celebraciones. K>0.9 alcanzado. Crecimiento exponencial real.",
      assumptions: ["5 plantillas un-clic funcionan", "Dual bonus (+3 días invitee) activo", "Milestones + celebraciones implementados", "Mercado CO/EC adopta rápido"],
    },
    {
      name: "Pragmática",
      invitationsPerUser: 4,
      conversionRate: 0.10,
      k: 0.40,
      interpretation: "Mecánicas activas pero UX parcial. Plantillas un-clic + dual bonus sí, milestones/celebraciones no completos. Crecimiento acelerado.",
      assumptions: ["Plantillas un-clic funcionan", "Dual bonus activo", "Celebraciones faltan o parciales", "VE responde con fricción de precio"],
    },
    {
      name: "Pesimista",
      invitationsPerUser: 2,
      conversionRate: 0.06,
      k: 0.12,
      interpretation: "Solo baseline sin mecánicas. Crecimiento mayormente paid acquisition. K cerca de 0.10-0.12.",
      assumptions: ["UX incompleto (sin plantillas un-clic)", "Fraude autorreferencias reduce efectividad", "Mercado VE resistente a $55/mo", "WhatsApp API bloqueos intermitentes"],
    },
  ],
}

// ---------------------------------------------------------------------------
// K PROJECTION BY STAGE — from backend cold run analysis
// Target K>0.9 achievable with full frontend adoption
// ---------------------------------------------------------------------------
export const K_PROJECTION_BY_STAGE = [
  {
    stage: "Baseline (sin mecánicas)",
    kRange: "0.10 - 0.12",
    kMid: 0.11,
    mechanic: "Sin referral program activo",
    status: "Punto de partida",
    color: "#6b7280",
  },
  {
    stage: "+ Incentivo dual (+3 días al invitado)",
    kRange: "0.15 - 0.18",
    kMid: 0.165,
    mechanic: "Invitee recibe +3 días al confirmar referido",
    status: "Backend completo ✓",
    color: "#f59e0b",
  },
  {
    stage: "+ WhatsApp un clic (plantillas)",
    kRange: "0.45 - 0.54",
    kMid: 0.495,
    mechanic: "5 plantillas: WhatsApp, IG, Facebook, Twitter, copy",
    status: "Backend completo ✓",
    color: "#1d4ed8",
  },
  {
    stage: "+ Recompensas escaladas",
    kRange: "0.68 - 0.81",
    kMid: 0.745,
    mechanic: "6 viral tiers: +1d → +2d → +5d+cleanImages → +10d+all30d → +3d+enhanceHD+bronze → unlock permanent+silver",
    status: "Backend completo ✓",
    color: "#8b5cf6",
  },
  {
    stage: "+ Hitos + celebraciones",
    kRange: "0.82 - 0.97",
    kMid: 0.895,
    mechanic: "7 milestones auto-recompensados + celebraciones visuales + ambassador badges (bronze/silver/gold/platinum)",
    status: "Backend completo ✓ · UX frontend = palanca restante",
    color: "#059669",
  },
]

// ---------------------------------------------------------------------------
// VIRAL TIERS — from backend (src/lib/referral.ts VIRAL_TIERS)
// ---------------------------------------------------------------------------
export const VIRAL_TIERS_DETAIL = [
  { id: "tier_active_1", threshold: "1 activo", reward: "+1 día", unlock: "—", ambassador: "—", label: "Primer referido activo" },
  { id: "tier_active_2", threshold: "2 activos", reward: "+2 días", unlock: "—", ambassador: "—", label: "2 referidos activos" },
  { id: "tier_active_5", threshold: "5 activos", reward: "+5 días", unlock: "cleanImages", ambassador: "—", label: "5 referidos activos" },
  { id: "tier_active_10", threshold: "10 activos", reward: "+10 días", unlock: "all features 30 días", ambassador: "—", label: "10 referidos activos" },
  { id: "tier_paid_1", threshold: "1 pago", reward: "+3 días", unlock: "enhanceHD", ambassador: "🥉 Bronze", label: "Primer referido que pagó" },
  { id: "tier_paid_3", threshold: "3 pagos", reward: "0 días", unlock: "ALL permanente", ambassador: "🥈 Silver", label: "Embajador Fichox" },
  { id: "ambassador_gold", threshold: "5 pagos", reward: "—", unlock: "ALL (ya permanente)", ambassador: "🥇 Gold", label: "Badge gold" },
  { id: "ambassador_platinum", threshold: "10 pagos", reward: "—", unlock: "ALL (ya permanente)", ambassador: "💎 Platinum", label: "Badge platinum" },
]

// ---------------------------------------------------------------------------
// MILESTONES — from backend (7 auto-detected, auto-rewarded)
// ---------------------------------------------------------------------------
export const MILESTONES_DETAIL = [
  { id: "first_capture", trigger: "Primera captura (1 producto)", reward: "+1 día", autoGrant: true },
  { id: "ten_products", trigger: "10 productos capturados", reward: "+1 día", autoGrant: true },
  { id: "fifty_products", trigger: "50 productos capturados", reward: "+3 días", autoGrant: true },
  { id: "hundred_products", trigger: "100 productos capturados", reward: "+7 días", autoGrant: true },
  { id: "first_publish", trigger: "Primera publicación", reward: "+1 día", autoGrant: true },
  { id: "ten_publishes", trigger: "10 publicaciones", reward: "+1 día", autoGrant: true },
  { id: "first_referral", trigger: "Primer referido confirmado", reward: "+1 día", autoGrant: true },
]

// ---------------------------------------------------------------------------
// SHARE TEMPLATES — from backend (5 one-click templates)
// ---------------------------------------------------------------------------
export const SHARE_TEMPLATES_DETAIL = [
  { platform: "WhatsApp", icon: "MessageCircle", how: "wa.me link con texto pre-llenado", friction: "Mínima (1 clic)" },
  { platform: "Instagram", icon: "Instagram", how: "Caption pre-llenado (copy-paste, IG no soporta URL pre-fill)", friction: "Baja (2 clics)" },
  { platform: "Facebook", icon: "Facebook", how: "Sharer URL con quote pre-llenado", friction: "Mínima (1 clic)" },
  { platform: "Twitter/X", icon: "Twitter", how: "Intent URL con texto pre-llenado", friction: "Mínima (1 clic)" },
  { platform: "Copiar enlace", icon: "Link", how: "Copia referral link al portapapeles", friction: "Mínima (1 clic)" },
]

// ---------------------------------------------------------------------------
// VENEZUELAN MARKET RISK FACTORS
// ---------------------------------------------------------------------------
export const VE_RISKS = [
  { factor: "Apagones eléctricos", probability: "Alta", impact: "Medio", description: "10-30% de sesiones interrumpidas en zonas afectadas (Zulia, interior)", mitigation: "Modo offline + sync cuando vuelve conexión", metricImpact: "Churn +2-3%" },
  { factor: "Inestabilidad internet", probability: "Alta", impact: "Medio", description: "15-25% drop rate en sesiones largas de captura IA", mitigation: "Retry automático + cola offline", metricImpact: "Captura success rate -15%" },
  { factor: "Depreciación Bolívar", probability: "Alta", impact: "Bajo", description: "Precios en USD mitiga, pero poder adquisitivo oscila", mitigation: "Mantener pricing en USD + USDT", metricImpact: "Neutral (ya mitigado)" },
  { factor: "Ingreso disponible bajo", probability: "Alta", impact: "Alto", description: "$55/mo = 18-20% salario mínimo VE. Comerciante establecido puede, informal no", mitigation: "Trial generoso + rewards + referrals para unlock", metricImpact: "Trial→paid conversion -8-12%" },
  { factor: "Adopción USDT limitada", probability: "Media", impact: "Medio", description: "~40% de comerciantes tienen wallet BSC. Resto usa P2P/bancario", mitigation: "Aceptar Binance Pay + Zelle + Pago Móvil como fallback", metricImpact: "Payment friction +10-15%" },
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
  arpu: number
  variableCostPerCustomer: number
  monthlyChurn: number
  cac: number
  k: number
  trialConversion: number
  fixedCostsMonthly: number
  months: ScenarioMonth[]
  totalCustomers: number
  totalRevenue: number
  breakevenCustomers: number
  breakevenMonth: number | null
  cumulativeBreakevenMonth: number | null
  q3NetProfit: number
  ltv: number
  ltvCac: number
}

const FIXED_COSTS = 850
const VAR_COST = 8.5

function buildScenario(
  id: string, name: string, emoji: string, color: string, tagline: string,
  trajectory: number[], arpu: number, churn: number, cac: number, k: number,
  trialConv: number,
): Scenario {
  let cumulative = -5000
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
    const rewardVerificationCost = +(customers * 0.4).toFixed(2)
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

// ARPU calculations per scenario (blend of tiers with $55/mo, $399/yr, $499 lifetime)
// Optimistic: 10% mensual, 85% anual, 5% lifetime = $34.18
//   0.10×55 + 0.85×33.25 + 0.05×8.32 = 5.50 + 28.26 + 0.42 = 34.18
// Pragmatic: 45% mensual, 50% anual, 5% lifetime = $41.79
//   0.45×55 + 0.50×33.25 + 0.05×8.32 = 24.75 + 16.63 + 0.42 = 41.79
// Pessimistic: 60% mensual, 40% anual, 0% lifetime = $46.30
//   0.60×55 + 0.40×33.25 = 33.00 + 13.30 = 46.30

export const SCENARIOS: Scenario[] = [
  buildScenario(
    "optimistic", "Optimista", "🚀", "#059669",
    "Viral funciona + VE responde + expansión CO/EC rápida",
    [6, 14, 28, 48, 75, 110, 155, 205, 260, 320, 385, 450],
    34.18, 0.05, 25, 0.90, 0.18,
  ),
  buildScenario(
    "pragmatic", "Pragmática", "⚖️", "#1d4ed8",
    "Viral moderado + VE con fricción + CO lento",
    [5, 10, 18, 28, 40, 54, 70, 88, 105, 122, 140, 158],
    41.79, 0.10, 38, 0.40, 0.12,
  ),
  buildScenario(
    "pessimistic", "Pesimista", "⚠️", "#e11d48",
    "Viral débil + VE resistente + fraude referrals + apagones",
    [3, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
    46.30, 0.18, 60, 0.12, 0.06,
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
  { metric: "ARPU mensual blendado", optimista: "$34.18", pragmatica: "$41.79", pesimista: "$46.30", note: "Mayor precio mensual = ARPU más alto en escenarios de menor conversión anual" },
  { metric: "Churn mensual", optimista: "5%", pragmatica: "10%", pesimista: "18%", note: "VE churn alto por emigración + apagones" },
  { metric: "CAC blendado", optimista: "$25", pragmatica: "$38", pesimista: "$60", note: "Viral reduce CAC en optimista" },
  { metric: "Coeficiente viral K", optimista: "0.90", pragmatica: "0.40", pesimista: "0.12", note: "K>0.9 alcanzable con adopción completa del frontend. Backend completo ✓" },
  { metric: "Trial → paid conversión", optimista: "18%", pragmatica: "12%", pesimista: "6%", note: "VE ingreso limitado reduce conversión" },
  { metric: "Clientes mes 12", optimista: "450", pragmatica: "158", pesimista: "35", note: "Rango 13x entre extremos" },
  { metric: "Breakeven operativo (clientes)", optimista: "34", pragmatica: "26", pesimista: "23", note: "ARPU alto baja breakeven significativamente" },
  { metric: "Breakeven operativo (mes)", optimista: "M5", pragmatica: "M5", pesimista: "Nunca (12m)", note: "Pesimista no llega a breakeven" },
  { metric: "Breakeven acumulado (mes)", optimista: "M9", pragmatica: "M11", pesimista: "Nunca", note: "Recupera seed" },
  { metric: "LTV por cliente", optimista: "$514", pragmatica: "$333", pesimista: "$210", note: "ARPU alto compensa churn" },
  { metric: "LTV : CAC", optimista: "20.5:1", pragmatica: "8.8:1", pesimista: "3.5:1", note: "Todos los escenarios son sanos (>3:1)" },
  { metric: "Net profit acumulado Q3", optimista: "+$26K", pragmatica: "+$6.4K", pesimista: "-$11K", note: "Pesimista quema cash pero menos que con $29" },
]

// ---------------------------------------------------------------------------
// IMPACT ON THE 7 PLANS — what changes
// ---------------------------------------------------------------------------
export const PLAN_IMPACTS = [
  {
    plan: "1. Plan de Negocio",
    changes: [
      "ARPU blendado $34-46 según mix de tiers",
      "Breakeven en 23-34 clientes — muy alcanzable",
      "Nuevas fuentes de revenue: Lifetime ($499 × 50 = $24,950 upfront)",
      "Reward days reemplazan potencial churn (engagement sin canibalizar)",
      "Modelo financiero re-proyectado con 3 escenarios y pricing $55",
    ],
    action: "Re-calcular todos los números con pricing $55. Breakeven más sano. Preparar pitch con escenario pragmático como base.",
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
      "Meta Ads messaging cambia: 'prueba gratis 7 días' vs 'suscríbete $55'",
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
      "ARPU mayor ($35-47) = menos volumen necesario = menos capital para escalar",
      "Lifetime tier = $24,950 upfront cash (mejora runway mes 1-2)",
      "Breakeven más bajo (23-32) = shorter runway needed (18 meses suficiente)",
      "Nueva alianza crítica: KYC provider (para feature unlock tier)",
      "BSC Grant más importante que nunca (volumen BSC por referrals)",
    ],
    action: "Re-calcular capital raising: $300K suficientes para 18 meses runway. Priorizar KYC partner. Lifetime tier acelera runway.",
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
    rationale: "El pragmático (158 clientes M12, breakeven M5 operativo, +$6.4K net Q3) es el más realista para VE con pricing $55. Optimista es aspiracional, pesimista es contingency plan.",
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
    rationale: "Si K < 0.25 en Sem 4, aumentar incentivo referral (ej: +3 días en vez de +1). Si K > 0.4, mantener.",
    action: "Dashboard Sem con K métrica. A/B test de incentivos cada 4 sem.",
  },
  {
    priority: "Media",
    title: "Reservar $11K buffer para escenario pesimista",
    rationale: "Si pesimista se materializa (net -$11K Q3), necesitas cash para sobrevivir y pivotar. Menos buffer que con $29 (-$32K) gracias a ARPU superior.",
    action: "Mantener $11K en treasury líquido (Tier 1+2) como insurance. No invertir en escala hasta K > 0.25 confirmado.",
  },
]
