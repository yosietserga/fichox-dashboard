// ============================================================================
// FichoX — Financial Plan: Alliances, Funding, Credit, Capital Markets
// ============================================================================

export const FIN_QUARTER = {
  name: "Q3 2025 · Plan Financiero & Alianzas",
  mission: "Asegurar el capital, los socios estratégicos y la infraestructura financiera para llevar a FichoX de 65 a 1,000 clientes en 18 meses sin diluir control innecesariamente",
  vision: "Construir un tesoro sano (USDC + T-bills + colateral cripto) que dé 18 meses de runway y opcione escalar a capitalización bursátil regional",
  northStar: "$250K capital raising Q3-Q4 · 12 alianzas estratégicas · 18 meses runway · 0% dilución hasta Serie A",
}

// ---------------------------------------------------------------------------
// ALLIANCES & PARTNERSHIPS
// ---------------------------------------------------------------------------
export interface Alliance {
  id: string
  partner: string
  category: "Tecnológica" | "Distribución" | "Co-marketing" | "Reseller" | "Canal" | "Gobierno" | "Financiera"
  status: "Existente" | "Target Q3" | "Target Q4" | "Target 2026"
  priority: "Crítica" | "Alta" | "Media" | "Baja"
  whatTheyBring: string
  whatWeGive: string
  stage: string
  contact: string
  expectedImpact: string
}

export const ALLIANCES: Alliance[] = [
  { id: "a1", partner: "Z.ai (z-ai-web-dev-sdk)", category: "Tecnológica", status: "Existente", priority: "Crítica", whatTheyBring: "IA core: VLM, LLM, ASR, image-edit, video-gen, web-search", whatWeGive: "Caso de uso showcase LATAM, volumen de API, feedback de producto", stage: "Activa — agreement de uso + showcase", contact: "API partnership team", expectedImpact: "Sin esto no hay producto. Renegociar pricing por volumen en Sem 6" },
  { id: "a2", partner: "Meta / Instagram Graph API", category: "Tecnológica", status: "Existente", priority: "Crítica", whatTheyBring: "Publicación directa IG sin make.com, reach a 1B+ usuarios", whatWeGive: "App review pasada, caso de uso B2B commerce", stage: "Activa — App en revisión Meta", contact: "Meta for Developers", expectedImpact: "Publicación 1-clic, diferencial vs competencia" },
  { id: "a3", partner: "MercadoLibre API", category: "Tecnológica", status: "Existente", priority: "Alta", whatTheyBring: "Publicación automática en MELI VE/CO/EC, 100M+ compradores LATAM", whatWeGive: "Apps de vendedor en marketplace", stage: "Activa — OAuth por país", contact: "MELI Developers", expectedImpact: "Diferencial de producto, captura vendedores MELI" },
  { id: "a4", partner: "make.com", category: "Tecnológica", status: "Existente", priority: "Media", whatTheyBring: "Orquestación de webhooks → CRM + IG + Kommo", whatWeGive: "Caso de uso showcase", stage: "Activa — plan Core $29/mes", contact: "Partnership team", expectedImpact: "Automatización sin código, escalable" },
  { id: "a5", partner: "Binance Smart Chain (BSC)", category: "Financiera", status: "Existente", priority: "Alta", whatTheyBring: "Pagos USDT sin fronteras, BSCscan API gratis, ecosystem grants", whatWeGive: "Caso de uso SaaS cripto-real, volumen transacciones", stage: "Activa — aplicando a BSC Grants Q4", contact: "BSC Grants program", expectedImpact: "Grants $10-50K + credibilidad cripto" },
  { id: "a6", partner: "Kommo CRM", category: "Tecnológica", status: "Target Q3", priority: "Media", whatTheyBring: "CRM comercial para pipeline B2B", whatWeGive: "Integración nativa, co-marketing", stage: "Conversación inicial Sem 6", contact: "Partnerships Kommo", expectedImpact: "CRM sin construir, cross-sell a clientes Kommo" },
  { id: "a7", partner: "Asociación Comerciantes Caracas", category: "Distribución", status: "Target Q3", priority: "Alta", whatTheyBring: "Acceso a 500+ comerciantes físicos de Caracas", whatWeGive: "1 taller gratuito de IA para inventario + 20% descuento a miembros", stage: "Outreach Sem 4", contact: "Presidente Asociación", expectedImpact: "30-50 leads cualificados B2C en 1 evento" },
  { id: "a8", partner: "Cámara Comercio Maracaibo", category: "Distribución", status: "Target Q3", priority: "Alta", whatTheyBring: "Comerciantes del Zulia, ferias comerciales", whatWeGive: "Sponsor feria anual + demo en stand", stage: "Outreach Sem 5", contact: "Director Cámara", expectedImpact: "20-30 leads Zulia (región subatendida)" },
  { id: "a9", partner: "FEVEC (Fed. Empr. VE)", category: "Gobierno", status: "Target Q4", priority: "Media", whatTheyBring: "Reach a comerciantes formales VE, legitimidad", whatWeGive: "Tech partner oficial + descuento a afiliados", stage: "Outreach Sem 8", contact: "Director FEVEC", expectedImpact: "Legitimidad + 100 leads formales" },
  { id: "a10", partner: "Confecámaras Colombia", category: "Gobierno", status: "Target Q4", priority: "Media", whatTheyBring: "Comerciantes CO formales, cámara Bogotá/Medellín", whatWeGive: "Webinar serie mensual + descuento", stage: "Outreach Sem 9", contact: "Director internacional", expectedImpact: "Entrada formal al mercado CO" },
  { id: "a11", partner: "Agencias marketing LATAM (3)", category: "Reseller", status: "Target Q3", priority: "Alta", whatTheyBring: "Distribución white-label a sus clientes comerciantes", whatWeGive: "30% revenue share + branding custom", stage: "1 firmada Sem 6, 2 más Q4", contact: "Founders agencias", expectedImpact: "2 resellers = ~20 clientes sin CAC directo" },
  { id: "a12", partner: "Influencers commerce LATAM (5)", category: "Co-marketing", status: "Target Q3", priority: "Media", whatTheyBring: "Reach 50K-500K comerciantes cada uno", whatWeGive: "Revenue share 15% por cliente referido 6 meses", stage: "2 contactados Sem 9", contact: "Managers influencers", expectedImpact: "Viralidad + 50-100 leads por collab" },
  { id: "a13", partner: "Banco de Venezuela / Banesco", category: "Financiera", status: "Target 2026", priority: "Baja", whatTheyBring: "Cuenta business local VE, integración pago Bs", whatWeGive: "Caso de uso fintech para comerciantes", stage: "No iniciado — requiere más tracción", contact: "Banca PYME", expectedImpact: "Reducir fricción pago VE, entrar a programa fintech banco" },
  { id: "a14", partner: "Resend (email)", category: "Tecnológica", status: "Target Q4", priority: "Baja", whatTheyBring: "Email transaccional barato y developer-friendly", whatWeGive: "Caso de uso", stage: "Activa como cliente, partnership Q4", contact: "Founders Resend", expectedImpact: "Costo email -50%, co-marketing developer" },
  { id: "a15", partner: "360dialog (WhatsApp BSP)", category: "Tecnológica", status: "Existente", priority: "Alta", whatTheyBring: "WhatsApp Business API access, templates approval", whatWeGive: "Volumen de mensajes", stage: "Activa", contact: "Partnership team", expectedImpact: "Sin esto no hay WhatsApp automation" },
]

// ---------------------------------------------------------------------------
// FUNDING SOURCES — staged capital raising strategy
// ---------------------------------------------------------------------------
export interface FundingSource {
  id: string
  name: string
  type: "Bootstrap" | "Friends & Family" | "Grant" | "Accelerator" | "Angel" | "Pre-seed VC" | "Revenue-based" | "Crowdfunding" | "Credit" | "Crypto-treasury"
  stage: "Ya hecho" | "Q3 2025" | "Q4 2025" | "Q1 2026" | "Q2-Q3 2026" | "2027+"
  amountRange: string
  amountNum: number // lower bound in USD for charting
  cost: string
  dilution: number // % equity given (0 if debt)
  useOfFunds: string
  requirements: string[]
  timeline: string
  pros: string[]
  cons: string[]
  status: string
}

export const FUNDING_SOURCES: FundingSource[] = [
  {
    id: "f1", name: "Bootstrap del founder", type: "Bootstrap", stage: "Ya hecho", amountRange: "$3,000", amountNum: 3000,
    cost: "0% equity · 0% interés", dilution: 0,
    useOfFunds: "Constitución Panamá SA + logo + setup inicial + runway personal Sem 1-4",
    requirements: ["Capital personal del founder", "Compromiso full-time"],
    timeline: "Hecho Jul 2025",
    pros: ["0 dilución", "Control total", "Decisión rápida"],
    cons: ["Capital limitado", "Riesgo personal", "Crece más lento"],
    status: "Completado",
  },
  {
    id: "f2", name: "Friends & Family round", type: "Friends & Family", stage: "Q3 2025", amountRange: "$15,000 - $25,000", amountNum: 20000,
    cost: "5-10% equity · SAFE note", dilution: 7,
    useOfFunds: "Working capital Sem 5-12, contratar Sales + Dev full-time, ads escalado",
    requirements: ["5-10 inversores cercanos", "Pitch deck (ya existe)", "SAFE template YC", "Comunicación clara de riesgo"],
    timeline: "Cerrar Sep 2025 (Sem 10-12)",
    pros: ["Cierre rápido (4-6 sem)", "Inversores pacientes", "Términos amigables"],
    cons: ["Dilución 5-10%", "Riesgo relational si fracasa", "Capital pequeño"],
    status: "En preparación — pitch deck listo, lista de 12 contactos",
  },
  {
    id: "f3", name: "BSC Grants Program", type: "Grant", stage: "Q4 2025", amountRange: "$10,000 - $50,000", amountNum: 30000,
    cost: "0% equity · 0% interés", dilution: 0,
    useOfFunds: "Marketing adicional, contratar Ops Lead full-time, infraestructura cloud escalada",
    requirements: ["App live con volumen en BSC", "Pitch grants BSC", "Roadmap técnico", "Comunidad activa"],
    timeline: "Aplicar Oct 2025, decisión Ene 2026",
    pros: ["0 dilución", "Credibilidad cripto", "Networking BSC ecosystem"],
    cons: ["Proceso lento (3-4 meses)", "Competitivo", "Requisito de volumen"],
    status: "Recolectando caso de uso + métricas",
  },
  {
    id: "f4", name: "Accelerator: 500 Startups LatAm", type: "Accelerator", stage: "Q4 2025", amountRange: "$150,000", amountNum: 150000,
    cost: "6-8% equity", dilution: 7,
    useOfFunds: "18 meses runway + mentoría + networking LATAM",
    requirements: ["Tracción: 50+ clientes pagos", "Equipo fundador full-time", "Demo día pitch", "Programa 16 sem"],
    timeline: "Aplicar Sep 2025, batch Q1 2026",
    pros: ["Mentoría top LATAM", "Networking investors", "Branding accelerator"],
    cons: ["Dilución 6-8%", "Programa intensivo 4 meses", "Equity caro por monto"],
    status: "Investigando batch 43 LATAM",
  },
  {
    id: "f5", name: "Angel LATAM (sindicato)", type: "Angel", stage: "Q1 2026", amountRange: "$100,000 - $200,000", amountNum: 150000,
    cost: "10-15% equity · SAFE valuation $1-1.5M", dilution: 12,
    useOfFunds: "Escalar a 300 clientes, contratar equipo core (5 FTEs), abrir CO/EC oficialmente",
    requirements: ["100+ clientes pagos", "$5K+ MRR", "Métricas claras (CAC, LTV, churn)", "Pitch + data room"],
    timeline: "Abrir ronda Ene 2026, cerrar Mar 2026",
    pros: ["Angels aportan red + consejo", "Términos razonables", "Cierre 2-3 meses"],
    cons: ["Dilución 10-15%", "Cap table complejo", "Reporting a múltiples angels"],
    status: "Lista de 15 angels LATAM mapeados",
  },
  {
    id: "f6", name: "Revenue-based financing (Pipe / Capchase)", type: "Revenue-based", stage: "Q2-Q3 2026", amountRange: "$50,000 - $200,000", amountNum: 125000,
    cost: "0% equity · 6-12% costo anual efectivo", dilution: 0,
    useOfFunds: "Working capital no dilutivo — escalar ads, inventario de leads, contratación",
    requirements: ["$10K+ MRR recurring", "6+ meses de historia de revenue", "Cobranza predecible (suscripción anual)"],
    timeline: "Aplicar May 2026, desembolso 2 sem",
    pros: ["0 dilución", "Rápido (2 sem)", "Escalable con MRR"],
    cons: ["Costo 6-12% anual", "Requiere MRR estable", "Pagos mensuales fijos"],
    status: "Requiere $10K MRR — alcanzar Mar 2026",
  },
  {
    id: "f7", name: "Pre-seed VC LATAM (NXTP, Kaszek, Monashees)", type: "Pre-seed VC", stage: "Q2-Q3 2026", amountRange: "$500,000 - $1M", amountNum: 750000,
    cost: "15-20% equity · valuation $3-5M post", dilution: 18,
    useOfFunds: "Escalar a 1,000+ clientes, expandir MX/AR/BR, construir equipo senior",
    requirements: ["300+ clientes", "$15K+ MRR", "LTV:CAC > 5", "Equipo fundador + 5 FTEs", "Memorándum detallado"],
    timeline: "Pitch May 2026, term sheet Jul 2026, cierre Sep 2026",
    pros: ["Capital grande", "VC aporta governance + red", "Signal de calidad a futuras rondas"],
    cons: ["Dilución grande 15-20%", "Board seat", "Crecimiento forzado (hiper-growth)"],
    status: "Relaciones abiertas con NXTP y Kaszek scouts",
  },
  {
    id: "f8", name: "Crowdfunding equity (Republic LatAm)", type: "Crowdfunding", stage: "Q2-Q3 2026", amountRange: "$50,000 - $150,000", amountNum: 100000,
    cost: "5-10% equity · plataforma fee 7%", dilution: 7,
    useOfFunds: "Marketing masivo + comunidad de inversores evangelistas",
    requirements: ["Tracción demostrable", "Pitch deck público", "Comunidad activa", "Cumplimiento SEC LatAm"],
    timeline: "Campaña 60 días Q2 2026",
    pros: ["Comunidad de inversores evangelistas", "Marketing + capital", "Términos flexibles"],
    cons: ["Público (info sensible)", "Fee plataforma 7%", "Cap table largo"],
    status: "Evaluar paralelo a angel round",
  },
  {
    id: "f9", name: "Línea de crédito fintech (Konfío / Kobs)", type: "Credit", stage: "Q2-Q3 2026", amountRange: "$25,000 - $75,000", amountNum: 50000,
    cost: "0% equity · 18-30% tasa anual", dilution: 0,
    useOfFunds: "Working capital puntuales — campaña Black Friday, contratación Q4",
    requirements: ["6+ meses operación", "Estados financieros", "Flujo de caja positivo", "Garantía personal founder"],
    timeline: "Aplicar cuando MRR >$8K, desembolso 1-2 sem",
    pros: ["0 dilución", "Rápido", "Flexible uso de fondos"],
    cons: ["Tasa alta 18-30%", "Garantía personal", "Presión de pago mensual"],
    status: "No apto todavía — requerir MRR $8K",
  },
  {
    id: "f10", name: "Crypto-backed loan (Aave / MakerDAO)", type: "Credit", stage: "Q1 2026", amountRange: "$10,000 - $50,000", amountNum: 30000,
    cost: "0% equity · 5-8% tasa anual (variable)", dilution: 0,
    useOfFunds: "Working capital — colateralizar USDT/ETH del tesoro para no vender",
    requirements: ["Colateral cripto 1.5x del préstamo", "Wallet BSC/Ethereum", "Monitoreo de health factor"],
    timeline: "Disponible cuando tesoro cripto >$20K",
    pros: ["0 dilución", "Sin trámite (DeFi)", "Tasa baja 5-8%"],
    cons: ["Riesgo de liquidación si cae colateral", "Variable rate", "Requiere colateral 1.5x"],
    status: "Disponible cuando tesoro cripto >$20K",
  },
]

// ---------------------------------------------------------------------------
// CAPITAL MARKETS PATHS — long-term (2027+)
// ---------------------------------------------------------------------------
export interface CapitalPath {
  path: string
  timeline: string
  marketCap: string
  dilution: string
  requirements: string[]
  realisticAssessment: string
  pros: string[]
  cons: string[]
  priority: "Optimistic" | "Realistic" | "Stretch"
}

export const CAPITAL_PATHS: CapitalPath[] = [
  {
    path: "Serie A regional (VC LATAM $3-5M)",
    timeline: "2027 (24 meses post-tracción)",
    marketCap: "$15-25M post-money",
    dilution: "20-25%",
    requirements: ["$50K+ MRR", "1,000+ clientes", "Expansión 3+ países", "Equipo senior", "Board governance"],
    realisticAssessment: "Realista si Q3 2025-Q2 2026 ejecutan bien. Es el siguiente paso natural después de pre-seed.",
    pros: ["Capital serio para escalar", "VC top LATAM aporta red", "Signal para Serie B", "Equipo profesionaliza"],
    cons: ["Dilución 20-25%", "Board seat VC", "Crecimiento forzado", "Reporting trimestral"],
    priority: "Realistic",
  },
  {
    path: "Tokenización (security token en BSC/Solana)",
    timeline: "2026-2027 (post-Serie A)",
    marketCap: "Variable según token",
    dilution: "10-20% (token supply)",
    requirements: ["Cumplimiento SEC/Finma", "Smart contracts auditados", "Legal opinion token classification", "Liquidez exchange"],
    realisticAssessment: "Stretch pero viable. Requiere asesoría legal fuerte. Atractivo por base cripto de FichoX (USDT/BSC).",
    pros: ["Acceso a capital global cripto", "Liquidez secundaria temprana", "Comunidad token holders evangelistas"],
    cons: ["Complejidad legal alta", "Volatilidad token", "Reputación cripto regulatoria"],
    priority: "Stretch",
  },
  {
    path: "SPAC LATAM (fusión con shell listada)",
    timeline: "2028+ (3+ años)",
    marketCap: "$50-100M+",
    dilution: "20-30% (SPAC sponsors + public float)",
    requirements: ["$5M+ ARR", "Profitable o camino claro", "Auditoría Big4", "Compliance SEC + LATAM exchange"],
    realisticAssessment: "Muy stretch. SPACs LATAM son raros y volátiles. Solo considerar si hay SPAC sponsor interesado post-Serie A.",
    pros: ["Acceso a mercado público sin IPO tradicional", "Liquidez inmediata", "Valuación premium"],
    cons: ["Dilución alta", "SPAC sponsors toman 20%", "Reputación post-SPAC mezcla", "Costo $2-5M solo en estructura"],
    priority: "Stretch",
  },
  {
    path: "IPO directo en B3 (Brasil) o BVC (Colombia)",
    timeline: "2029-2030 (4-5 años)",
    marketCap: "$100M+",
    dilution: "Variable (25% float mínimo)",
    requirements: ["$15M+ ARR", "3 años auditable profitable", "Compliance B3/BVC + CVM/Supersociedades", "Underwriter (Itaú, BTG)"],
    realisticAssessment: "Optimistic pero posible si FichoX domina LATAM. Camino natural para SaaS B2B regional escalado.",
    pros: ["Liquidez pública", "Moneda de adquisición (acciones)", "Marca pública", "Acceso a capital recurrente"],
    cons: ["Costo compliance $500K/año", "Reporting trimestral público", "Volatilidad mercado", "Presión quarterly"],
    priority: "Optimistic",
  },
  {
    path: "Adquisición estratégica (exit)",
    timeline: "2027-2028",
    marketCap: "$30-80M (5-10x revenue)",
    dilution: "N/A (compra 100%)",
    requirements: ["$5-10M ARR", "Posición líder en 2+ países", "Strategic fit con comprador"],
    realisticAssessment: "Realistic post-Serie A. Compradores potenciales: MercadoLibre, Mercado Pago, Stone, Kaszek portfolio companies.",
    pros: ["Liquidez total founder/investors", "Sin gestión pública", "Cierre 3-6 meses"],
    cons: ["Pérdida de control", "Integración post-compra", "Earnouts comunes (20-30%)"],
    priority: "Realistic",
  },
]

// ---------------------------------------------------------------------------
// TREASURY MANAGEMENT — where to park cash + collateral strategy
// ---------------------------------------------------------------------------
export const TREASURY = {
  strategy: "Diversificación 4 buckets: operativo (USDC/BSC), reserva (T-bills via fintech), colateral cripto (ETH/BTC), efectivo USD (cuenta business)",
  targetAllocation: [
    { bucket: "Operativo (USDC BSC)", pct: 30, purpose: "Pagos clientes + gastos cripto inmediatos", yield: 8, risk: "Bajo", tools: "Aave USDC, Venus" },
    { bucket: "Reserva T-bills (fintech)", pct: 40, purpose: "Runway 6-12 meses, yield seguro", yield: 5, risk: "Muy bajo", tools: "Mountain Protocol, Fountain, Jiko" },
    { bucket: "Colateral cripto (ETH/BTC)", pct: 20, purpose: "Colateral para préstamos DeFi sin vender", yield: 0, risk: "Alto (volatilidad)", tools: "Aave, MakerDAO" },
    { bucket: "Efectivo USD (banco)", pct: 10, purpose: "Gastos fiat LATAM, nóminas", yield: 0, risk: "Muy bajo", tools: "Banco PYME Panamá" },
  ],
  collateralStrategy: {
    concept: "A medida que FichoX recibe pagos en USDT, en lugar de vender el colateral cripto (ETH/BTC) para liquidity, lo mantiene y lo usa como colateral en Aave/MakerDAO para préstamos en USDC a 5-8% anual.",
    benefits: [
      "0% dilución (no vende cripto)",
      "Tasa baja 5-8% vs 18-30% fintech tradicional",
      "Mantiene upside del cripto",
      "Liquidez inmediata (sin trámite)",
    ],
    risks: [
      "Liquidación si cripto cae >33% (health factor <1.0)",
      "Tasa variable (puede subir)",
      "Requiere monitoreo diario del health factor",
      "Smart contract risk (Aave auditado pero no 100% seguro)",
    ],
    mitigations: [
      "Health factor target: 1.8 (colateral 1.8x del préstamo)",
      "Alerta Slack si health factor <1.5",
      "Auto-repay si health factor <1.2",
      "Solo usar 50% del colateral disponible",
    ],
  },
  liquidityTiers: [
    { tier: "Tier 1 · Inmediato", amount: "$10K", source: "USDC en wallet BSC", useCase: "Gastos Sem 1-2, emergency", timeToAccess: "<5 min" },
    { tier: "Tier 2 · Corto plazo", amount: "$30K", source: "USDT stake Aave", useCase: "Working capital Sem 3-8", timeToAccess: "1 hora" },
    { tier: "Tier 3 · Medio plazo", amount: "$80K", source: "T-bills fintech (Mountain)", useCase: "Runway 6 meses", timeToAccess: "1-2 días" },
    { tier: "Tier 4 · Largo plazo", amount: "$100K+", source: "Colateral cripto + préstamo", useCase: "Inversión estratégica", timeToAccess: "1-2 horas" },
  ],
}

// ---------------------------------------------------------------------------
// CREDIT APPLICATIONS — practical playbook
// ---------------------------------------------------------------------------
export interface CreditApp {
  id: string
  lender: string
  type: string
  amount: string
  rate: string
  term: string
  requirements: string[]
  timeline: string
  whenToApply: string
  status: string
}

export const CREDIT_APPLICATIONS: CreditApp[] = [
  {
    id: "c1", lender: "Konfío (México/LATAM)", type: "Línea de crédito PYME",
    amount: "$25K-100K", rate: "18-24% anual", term: "12-36 meses",
    requirements: ["6+ meses operación", "Estados financieros", "RFC/RUT/CI", "Garantía personal"],
    timeline: "Aplicar → desembolso 5-7 días",
    whenToApply: "Q2 2026 con MRR $10K+",
    status: "Mapeado, no apto todavía",
  },
  {
    id: "c2", lender: "Kobs (LATAM)", type: "Préstamo revenue-based",
    amount: "$10K-50K", rate: "6-12% costo total", term: "12-24 meses (% de revenue futuro)",
    requirements: ["MRR recurrente $5K+", "6+ meses histórico", "Cuenta bancaria business"],
    timeline: "Aplicar → desembolso 3-5 días",
    whenToApply: "Q1 2026 con MRR $8K+",
    status: "Mapeado, primer objetivo",
  },
  {
    id: "c3", lender: "Facturedo (VE/CO)", type: "Factoring de cuentas por cobrar",
    amount: "$5K-30K", rate: "2-4% mensual", term: "30-90 días",
    requirements: ["Facturas comerciales", "Cliente deudor solvente", "Histórico de cobro"],
    timeline: "Aplicar → desembolso 2-3 días",
    whenToApply: "Q4 2025 para Black Friday",
    status: "Mapeado, útil para estacionalidad",
  },
  {
    id: "c4", lender: "Aave (DeFi)", type: "Préstamo cripto-backed",
    amount: "$10K-100K", rate: "5-8% variable", term: "Flexible (pago cuando quieras)",
    requirements: ["Colateral cripto 1.5x", "Wallet BSC/Ethereum", "Monitoreo health factor"],
    timeline: "Instantáneo (smart contract)",
    whenToApply: "Q1 2026 con tesoro cripto $20K+",
    status: "Disponible en cuanto haya colateral",
  },
  {
    id: "c5", lender: "MakerDAO (DeFi)", type: "DAI loan (collateral ETH)",
    amount: "$10K-500K", rate: "5-7% stability fee", term: "Flexible",
    requirements: ["ETH colateral", "Vault MakerDAO", "Monitoreo liquidation price"],
    timeline: "Instantáneo",
    whenToApply: "Q1 2026 con ETH en tesoro",
    status: "Alternativa a Aave",
  },
  {
    id: "c6", lender: "Banco PYME Panamá", type: "Línea comercial tradicional",
    amount: "$25K-150K", rate: "9-14% anual", term: "12-60 meses",
    requirements: ["2+ años operación", "Estados auditados", "Cuenta business Panamá", "Garantía"],
    timeline: "Aplicar → desembolso 4-8 sem",
    whenToApply: "2027 con 2 años de operación",
    status: "Requiere más track record",
  },
]

// ---------------------------------------------------------------------------
// INVESTMENT STRATEGY — what to do with capital raised
// ---------------------------------------------------------------------------
export const INVESTMENT_ALLOCATION = [
  { category: "Equipo (people)", pct: 45, items: "Salarios, contratación, beneficios", rationale: "El equipo es el #1 driver de crecimiento. Invertir en sales + dev senior" },
  { category: "Marketing & sales", pct: 25, items: "Meta Ads, content, eventos, partnerships", rationale: "CAC scalable, no caer en зависимости de ads pagos únicamente" },
  { category: "Producto & tech", pct: 15, items: "IA APIs, infra cloud, dev tools", rationale: "Mantener diferencial de IA, velocidad de producto" },
  { category: "Treasury yield", pct: 10, items: "T-bills, USDC staking", rationale: "Generar yield en runway, extender cash runway 6+ meses" },
  { category: "Reserva legal & compliance", pct: 5, items: "Abogado Panamá, contabilidad, audit", rationale: "Preparar para Serie A (audit Big4 requerido)" },
]

// ---------------------------------------------------------------------------
// 18-MONTH CAPITAL RAISING TIMELINE
// ---------------------------------------------------------------------------
export const CAPITAL_TIMELINE = [
  { month: "Jul 2025", event: "Bootstrap $3K + founder runway personal", amount: 3000, type: "Done", equity: 0 },
  { month: "Sep 2025", event: "Friends & Family round (12 inversores)", amount: 20000, type: "Planned Q3", equity: 7 },
  { month: "Oct 2025", event: "BSC Grant application", amount: 30000, type: "Planned Q4", equity: 0 },
  { month: "Dic 2025", event: "500 Startups LatAm batch 43 (decisión)", amount: 150000, type: "Planned Q4", equity: 7 },
  { month: "Mar 2026", event: "Angel LATAM sindicato cierra", amount: 150000, type: "Planned Q1", equity: 12 },
  { month: "May 2026", event: "Revenue-based financing (Kobs/Pipe)", amount: 125000, type: "Planned Q2", equity: 0 },
  { month: "Jul 2026", event: "Pre-seed VC (NXTP/Kaszek) cierra", amount: 750000, type: "Planned Q3", equity: 18 },
  { month: "Sep 2026", event: "Crypto-backed loan (Aave) para working capital", amount: 30000, type: "Planned Q3", equity: 0 },
  { month: "2027", event: "Serie A $3-5M regional VC", amount: 4000000, type: "Stretch", equity: 22 },
]

// ---------------------------------------------------------------------------
// DILUTION PROJECTION — founder ownership over time
// ---------------------------------------------------------------------------
export const DILUTION_PROJECTION = CAPITAL_TIMELINE.filter(c => c.equity > 0).map((c, i, arr) => {
  const cumulativeDilution = arr.slice(0, i + 1).reduce((s, x) => s + x.equity, 0)
  return {
    stage: c.event.substring(0, 20),
    month: c.month,
    raised: c.amount,
    founderOwnership: Math.round((1 - cumulativeDilution / 100) * 100),
    investorsOwnership: cumulativeDilution,
  }
})

// ---------------------------------------------------------------------------
// TARGETS & MILESTONES for each funding stage
// ---------------------------------------------------------------------------
export const FUNDING_MILESTONES = [
  { stage: "Bootstrap", mrr: "$0", customers: 0, team: 1, trigger: "Fundar FichoX" },
  { stage: "Friends & Family", mrr: "$2K", customers: 25, team: 3, trigger: "Validar producto + 1ra tracción" },
  { stage: "BSC Grant", mrr: "$4K", customers: 50, team: 5, trigger: "Volumen en BSC + caso de uso" },
  { stage: "Accelerator", mrr: "$5K", customers: 65, team: 6, trigger: "Tracción clara + pitch fuerte" },
  { stage: "Angel round", mrr: "$10K", customers: 150, team: 8, trigger: "Métricas de SaaS saludables" },
  { stage: "Revenue-based", mrr: "$15K", customers: 200, team: 10, trigger: "MRR estable 6+ meses" },
  { stage: "Pre-seed VC", mrr: "$20K", customers: 300, team: 12, trigger: "LTV:CAC > 5, expansión 3 países" },
  { stage: "Serie A", mrr: "$50K+", customers: 1000, team: 25, trigger: "Dominio LATAM, profitable path" },
]
