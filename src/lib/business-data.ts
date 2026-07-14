// ============================================================================
// FichoX — Business Model, Financials & Marketing Data
// Derived from actual source-code analysis of github.com/yosietserga/fichox
// All pricing comes from /api/subscription/route.ts and LEGAL.md;
// cost estimates are modeled.
// ============================================================================

export const BRAND = {
  name: "FichoX",
  platform: "Fichox",
  tagline: "Inventario inteligente para comerciantes venezolanos / LATAM",
  promise:
    "Convierte una foto de tu producto en una ficha técnica vendible en ~30 segundos — sin escribir.",
  founded: "2025",
  jurisdiction: "Panamá (crypto-friendly, sin licencia VASP)",
  logo: "/fichox-logo.png",
};

export const PALETTE = [
  { name: "Azul Primario", hex: "#1d4ed8", role: "Confianza, dinero, crecimiento, tecnología", text: "light" },
  { name: "Azul Profundo", hex: "#1e3a8a", role: "Texto, headers, CTA fuerte", text: "light" },
  { name: "Azul Brillante", hex: "#3b82f6", role: "Acentos, hovers, gráficos", text: "light" },
  { name: "Amber Acento", hex: "#f59e0b", role: "Energía, valor, destacados", text: "dark" },
  { name: "Amber Suave", hex: "#fbbf24", role: "Badges, highlights, descuentos", text: "dark" },
  { name: "Tinta Noche", hex: "#0b1220", role: "Tipografía principal, fondo oscuro", text: "light" },
  { name: "Arena Cálida", hex: "#f7f5f0", role: "Fondo neutro cálido, secciones", text: "dark" },
  { name: "Blanco Crisp", hex: "#ffffff", role: "Tarjetas, contraste", text: "dark" },
];

// ---------------------------------------------------------------------------
// PRICING  (current tiers)
// ---------------------------------------------------------------------------
export const PRICING = {
  monthly: { price: 55, currency: "USDT", network: "BSC (BEP-20)", days: 30 },
  annual: { price: 399, currency: "USDT", network: "BSC (BEP-20)", days: 365, savings: 261 },
  lifetime: { price: 499, currency: "USDT", network: "BSC (BEP-20)", days: 1825, savings: 0 }, // 5 años máx
};

// ---------------------------------------------------------------------------
// FINANCIAL MODEL
// ---------------------------------------------------------------------------
export const FINANCE = {
  // Fixed monthly operating costs (USD)
  fixedCosts: {
    hosting: 20, // Railway / Render (Node persistente para jobs de IA)
    database: 10, // Turso / Neon Postgres
    domain: 1, // fichox.app
    email: 5, // Resend transaccional
    monitoring: 10, // Sentry + uptime
    operator: 400, // Founder/operator LATAM (part-time)
    content: 100, // Diseño, video, copy
    ads: 150, // Meta Ads VE baseline
    misc: 54,
  },
  // Per-customer monthly variable cost
  variableCostPerCustomer: 8.5, // z-ai SDK (VLM+ASR+LLM+image-edit) + storage + reward verification VLM
  // Blended ARPU — 45% mensual @ $55, 50% anual ($399/12 = $33.25), 5% lifetime ($499/60 = $8.32)
  monthlyShare: 0.45,
  annualShare: 0.50,
  lifetimeShare: 0.05,
  get arpu() {
    return this.monthlyShare * 55 + this.annualShare * (399 / 12) + this.lifetimeShare * (499 / 60);
  },
  // Customer acquisition cost (blended) — higher due to less viral in base case
  cac: 38,
  // Churn — slightly higher due to $55/mo friction
  monthlyChurn: 0.10,
  // Initial seed investment
  seed: 5000, // Logo + constitución Panamá (~$3k) + bootstrap dev + runway buffer
};

export const TOTAL_FIXED =
  FINANCE.fixedCosts.hosting +
  FINANCE.fixedCosts.database +
  FINANCE.fixedCosts.domain +
  FINANCE.fixedCosts.email +
  FINANCE.fixedCosts.monitoring +
  FINANCE.fixedCosts.operator +
  FINANCE.fixedCosts.content +
  FINANCE.fixedCosts.ads +
  FINANCE.fixedCosts.misc;

export const CONTRIBUTION_MARGIN = FINANCE.arpu - FINANCE.variableCostPerCustomer; // ~33.29
export const BREAKEVEN_CUSTOMERS = Math.ceil(TOTAL_FIXED / CONTRIBUTION_MARGIN); // ~23
export const SAFE_BUFFER_CUSTOMERS = Math.ceil(BREAKEVEN_CUSTOMERS * 1.5); // ~35
export const PAYBACK_MONTHS = FINANCE.cac / CONTRIBUTION_MARGIN; // ~1.14
export const AVG_LIFETIME_MONTHS = 1 / FINANCE.monthlyChurn; // 10
export const LTV = CONTRIBUTION_MARGIN * AVG_LIFETIME_MONTHS; // ~333
export const LTV_CAC = LTV / FINANCE.cac; // ~8.8
export const GROSS_MARGIN = CONTRIBUTION_MARGIN / FINANCE.arpu; // ~80%

// ---------------------------------------------------------------------------
// 12-MONTH GROWTH PROJECTION
// Net customer growth blends new acquisition + 10% monthly churn (pragmatic scenario).
// ---------------------------------------------------------------------------
export interface MonthRow {
  month: number;
  label: string;
  customers: number;
  newCustomers: number;
  revenue: number;
  fixedCosts: number;
  variableCosts: number;
  acquisitionCost: number;
  totalCosts: number;
  netProfit: number;
  cumulativeNet: number; // incl. seed as -5000 at month 0
  roi: number; // cumulativeNet / seed invested-to-date
  margin: number; // netProfit / revenue
}

const CUSTOMER_TRAJECTORY = [5, 10, 18, 28, 40, 54, 70, 88, 105, 122, 140, 158];
const MONTH_LABELS = [
  "M1", "M2", "M3", "M4", "M5", "M6",
  "M7", "M8", "M9", "M10", "M11", "M12",
];

export const PROJECTION: MonthRow[] = (() => {
  let cumulative = -FINANCE.seed;
  const rows: MonthRow[] = [];
  let prevCustomers = 0;
  for (let i = 0; i < 12; i++) {
    const customers = CUSTOMER_TRAJECTORY[i];
    // new = customers - (prevCustomers * (1 - churn))
    const survived = Math.round(prevCustomers * (1 - FINANCE.monthlyChurn));
    const newCustomers = Math.max(0, customers - survived);
    const revenue = +(customers * FINANCE.arpu).toFixed(2);
    const fixedCosts = TOTAL_FIXED;
    const variableCosts = +(customers * FINANCE.variableCostPerCustomer).toFixed(2);
    const acquisitionCost = +(newCustomers * FINANCE.cac).toFixed(2);
    const totalCosts = +(fixedCosts + variableCosts + acquisitionCost).toFixed(2);
    const netProfit = +(revenue - totalCosts).toFixed(2);
    cumulative = +(cumulative + netProfit).toFixed(2);
    const investedToDate = FINANCE.seed + TOTAL_FIXED * (i + 1);
    const roi = +((cumulative / investedToDate) * 100).toFixed(1);
    const margin = revenue > 0 ? +((netProfit / revenue) * 100).toFixed(1) : 0;
    rows.push({
      month: i + 1,
      label: MONTH_LABELS[i],
      customers,
      newCustomers,
      revenue,
      fixedCosts,
      variableCosts,
      acquisitionCost,
      totalCosts,
      netProfit,
      cumulativeNet: cumulative,
      roi,
      margin,
    });
    prevCustomers = customers;
  }
  return rows;
})();

// First month where monthly netProfit >= 0 (operating breakeven)
export const OPERATING_BREAKEVEN_MONTH =
  PROJECTION.find((r) => r.netProfit >= 0)?.month ?? 0;
// First month where cumulativeNet >= 0 (full payback incl. seed)
export const CUMULATIVE_BREAKEVEN_MONTH =
  PROJECTION.find((r) => r.cumulativeNet >= 0)?.month ?? 0;

// ---------------------------------------------------------------------------
// BUSINESS MODEL CANVAS
// ---------------------------------------------------------------------------
export const CANVAS = {
  valueProps: [
    "Foto → ficha técnica vendible en 30s, sin escribir",
    "Foto limpia tipo catálogo (fondo blanco) + HD 4K",
    "Precio USD + Bolívares auto-convertido (tasa BCV)",
    "Caption Instagram + hashtags en español venezolano",
    "Publicación 1-clic a Instagram + MercadoLibre",
    "Video promocional de 5s generado por IA",
    "Inventario + dashboard + KPIs en el celular",
    "Chats/IM con detección de oportunidades y auto-respuesta",
  ],
  segments: [
    "Revendedores / emprendedores venezolanos",
    "Comerciantes de Instagram y MercadoLibre",
    "Tiendas de barrio con catálogo digital",
    "Importadores y 'venta por catálogo'",
    "Dropshippers LATAM que operan en USD",
    "Agencias y resellers white-label (B2B2C)",
  ],
  channels: [
    "Instagram (@fichox.app) — donde ya están los clientes",
    "TikTok — demos de 30s 'foto → ficha'",
    "Grupos de WhatsApp de revendedores",
    "MercadoLibre — comentarios y comunidad de vendedores",
    "Referral program (1 mes gratis)",
    "Meta Ads VE (CPM bajos, targeting por intereses)",
  ],
  relationships: [
    "Onboarding por WhatsApp + video tutoriales",
    "Soporte directo por WhatsApp (incluido en plan)",
    "Comunidad cerrada de comerciantes",
    "Newsletter semanal con tips de venta",
    "Paywall con período de gracia de 5 días",
  ],
  revenue: [
    "Trial freemium — $0 / 7 días (preview de todas las features)",
    "Suscripción mensual — $55 USDT / 30 días",
    "Suscripción anual — $399 USDT / 365 días (ahorra $261)",
    "Lifetime — $499 USDT / 5 años máx (primeros 50, escasez)",
    "White-label — resellers re-marcan la app (mismo pricing)",
    "Sin auto-cargo · sin tarjetas · sin comisiones",
  ],
  resources: [
    "Plataforma Next.js 16 + z-ai-web-dev-sdk (GLM-4.6v)",
    "Integraciones IG Graph API + MercadoLibre API",
    "Base de código MIT reutilizable (template SaaS)",
    "Marca + comunidad de comerciantes",
    "Wallet BSC para cobros globales sin fronteras",
  ],
  activities: [
    "Mantenimiento del pipeline de IA (VLM/ASR/LLM/image-edit)",
    "Soporte y onboarding de comerciantes",
    "Contenido orgánico diario (IG/TikTok)",
    "Gestión de integraciones (IG/MELI/make.com)",
    "Optimización de prompts y costos de IA",
  ],
  partners: [
    "z-ai (proveedor de IA: VLM, ASR, LLM, video)",
    "Meta / Instagram Graph API",
    "MercadoLibre (API de publicación)",
    "make.com + Kommo CRM + Zapier",
    "Binance Smart Chain (pagos USDT)",
  ],
  costs: [
    "Hosting Node persistente (Railway/Render) — $20",
    "Base de datos (Turso/Neon) — $10",
    "Consumo de IA por cliente — ~$8/mes",
    "Operador + contenido + ads — $654",
    "Constitución Panamá (one-time) — ~$3,000",
  ],
};

// ---------------------------------------------------------------------------
// MARKETING PLAN — channels with tactic + monthly growth contribution
// ---------------------------------------------------------------------------
export const MARKETING_CHANNELS = [
  {
    channel: "Instagram Orgánico",
    icon: "Instagram",
    tactic:
      "Cuenta @fichox.app publica 1 demo diaria 'antes/después': foto cruda vs. ficha + caption lista. Reels de 15s mostrando el flujo en celular.",
    budget: 0,
    cpl: 0, // cost per lead
    share: 0.3,
    cadence: "1 post + 1 reel diario",
    kpi: "10K reach semanal · 3% engagement",
  },
  {
    channel: "TikTok",
    icon: "Video",
    tactic:
      "Demos verticales '#ComercianteVsIA': un comerciante real describe un producto en 10s, la IA entrega la ficha. Trending audio + CTA al link.",
    budget: 0,
    cpl: 0,
    share: 0.2,
    cadence: "3 videos/semana",
    kpi: "50K views/mes · 2% CTR al perfil",
  },
  {
    channel: "Grupos WhatsApp",
    icon: "MessageCircle",
    tactic:
      "Ingreso a 40 grupos de revendedores VE/CO. Aporte de valor (plantillas de caption gratis) + mención sutil de FichoX. Sin spam.",
    budget: 0,
    cpl: 0,
    share: 0.2,
    cadence: "Diario, rotando grupos",
    kpi: "5 referidos/mes por grupo activo",
  },
  {
    channel: "Meta Ads VE",
    icon: "Megaphone",
    tactic:
      "Anuncios de conversión en IG Stories targeting 'vendedores', 'emprendedores', intereses MercadoLibre. CPM VE muy bajo (~$1.5). Landing → demo gratis.",
    budget: 150,
    cpl: 4,
    share: 0.15,
    cadence: "Continuo, optimización semanal",
    kpi: "CPL < $5 · CAC blended < $35",
  },
  {
    channel: "Programa de Referidos",
    icon: "Gift",
    tactic:
      "Por cada amigo que pague, 1 mes gratis para ambos. Incentivo de doble lado maximiza viralidad. Tracking por wallet BSC.",
    budget: 0,
    cpl: 0,
    share: 0.1,
    cadence: "Siempre activo",
    kpi: "Coeficiente viral K > 0.3",
  },
  {
    channel: "MercadoLibre Comunidad",
    icon: "ShoppingCart",
    tactic:
      "Respuestas útiles en foro de vendedores MELI. Casos de éxito 'cómo pasé de 20 a 80 publicaciones con IA'. Link en bio.",
    budget: 0,
    cpl: 0,
    share: 0.05,
    cadence: "Semanal",
    kpi: "20 leads/mes cualificados",
  },
];

// Monthly growth targets (net new paying customers)
export const GROWTH_TARGETS = [
  { phase: "Mes 1–2 · Validación", target: "6 → 12 clientes", focus: "Founder-led sales, feedback cercano, 5 casos de éxito documentados" },
  { phase: "Mes 3–4 · Tracción", target: "22 → 34 clientes", focus: "Contenido orgánico diario + activación de referidos + primera campaña paga" },
  { phase: "Mes 5–6 · Crecimiento", target: "48 → 65 clientes", focus: "Escala de Meta Ads, 2 resellers white-label, comunidad WhatsApp activa" },
  { phase: "Mes 7–9 · Expansión", target: "84 → 125 clientes", focus: "Expansión a Colombia/Ecuador, partnerships con agencias, contenido en TikTok" },
  { phase: "Mes 10–12 · Consolidación", target: "146 → 190 clientes", focus: "Optimización de churn, plan anual dominante, breakeven acumulado cruzado" },
];
