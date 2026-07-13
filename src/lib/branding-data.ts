// ============================================================================
// FichoX — Corporate Branding Manual Data
// ============================================================================

export const BRAND_MANUAL = {
  brand: {
    name: "FichoX",
    tagline: "Inventario inteligente para comerciantes LATAM",
    mission:
      "Eliminar el trabajo manual de inventariar y publicar productos, para que cada comerciante latinoamericano pueda vender más en menos tiempo.",
    vision:
      "Ser la infraestructura de inventario y publicación por IA más usada por los 10 millones de comerciantes informales de LATAM.",
    values: [
      { title: "Productividad", desc: "Cada función debe ahorrar tiempo medible al comerciante." },
      { title: "Cercanía", desc: "Hablamos como el comerciante, no como una corporación." },
      { title: "Transparencia", desc: "Precios claros en USD + Bs, sin letra chica, sin auto-cargos." },
      { title: "Soberanía financiera", desc: "Pagos en USDT: sin fronteras, sin tarjetas, sin comisiones." },
    ],
    personality: ["Cercana", "Directa", "Optimista", "Práctica", "Techie pero no pretenciosa"],
    archetype: "El Creador + El Sabio",
  },

  logos: [
    {
      id: "A",
      name: "Geometría Simétrica",
      concept: "Simetrías y geometría",
      file: "/logo-concept-A-geometric.png",
      ratio: "1:1 (cuadrado)",
      rationale:
        "Isotipo puro construido sobre una rejilla hexagonal con simetría bilateral. La letra F se forma por triángulos isósceles intercalados, evocando precisión, balance y escalamiento. Funciona a 16px (favicon) sin perder legibilidad.",
      uses: ["App icon", "Favicon", "Avatar en redes", "Watermark en fichas", "Stamp / sello"],
      construction: {
        grid: "Hexágono regular, módulo base = 1/12 del lado",
        symmetry: "Bilateral vertical (eje Y)",
        weights: ["Trazo principal 12% del módulo", "Acento ámbar = 8% del módulo"],
        ratio: "1:1 cuadrado construible en círculo inscrito",
      },
    },
    {
      id: "B",
      name: "Tipográfico",
      concept: "Logo del mismo texto",
      file: "/logo-concept-B-typographic.png",
      ratio: "7:4 (horizontal)",
      rationale:
        "Wordmark puro donde la letra X se transforma en una cruz/aspa destacada en ámbar. Refuerza el nombre (recordación de marca) sin necesidad de un isotipo separado. Ideal para firmas de email, pies de página y cabeceras.",
      uses: ["Header de la app", "Email signature", "Pies de documento", "Membrete", "Tarjeta de presentación (frente)"],
      construction: {
        grid: "Baseline + altura X modular, 7 módulos de ancho",
        symmetry: "Vertical en cada glifo; horizontal en la palabra",
        weights: ["Ficho: peso Bold (700)", "X: peso Black (900) + color ámbar"],
        ratio: "7:4 horizontal, texto siempre legible hasta 80px de ancho",
      },
    },
    {
      id: "C",
      name: "Abstracto + Texto",
      concept: "Logo abstracto + texto",
      file: "/logo-concept-C-abstract.png",
      ratio: "7:4 (horizontal)",
      rationale:
        "Combina un símbolo abstracto (una ficha/card plegada tipo origami con chispa IA) con el wordmark. El símbolo funciona solo como isotipo en app icon, y junto al texto forma el lockup principal de marca. Es la opción más versátil.",
      uses: ["Lockup principal", "Membrete", "Letreros de tienda", "Vehicular", "Empaques"],
      construction: {
        grid: "Símbolo en cuadrado 4x4 módulos; texto alineado a baseline",
        symmetry: "Símbolo diagonal-dinámico; texto horizontal-estable",
        weights: ["Símbolo: 2 planos plegados", "Texto: Bold 700"],
        ratio: "7:4 horizontal con clear space de 1X (altura del símbolo)",
      },
    },
  ],

  // Color systems — primary chosen, with full specs for print + digital
  colors: {
    primary: [
      { name: "Azul FichoX", role: "Color principal de marca", hex: "#1d4ed8", rgb: "29, 78, 216", cmyk: "100, 85, 0, 0", pantone: "Pantone 2728 C", text: "light" },
      { name: "Azul Profundo", role: "Texto, headers, CTA fuerte", hex: "#1e3a8a", rgb: "30, 58, 138", cmyk: "100, 90, 10, 40", pantone: "Pantone 2748 C", text: "light" },
      { name: "Azul Brillante", role: "Hovers, acentos digitales, gráficos", hex: "#3b82f6", rgb: "59, 130, 246", cmyk: "90, 60, 0, 0", pantone: "Pantone 2727 C", text: "light" },
    ],
    accent: [
      { name: "Ámbar Energía", role: "Acento, CTAs, highlights, descuentos", hex: "#f59e0b", rgb: "245, 158, 11", cmyk: "0, 40, 95, 0", pantone: "Pantone 130 C", text: "dark" },
      { name: "Ámbar Suave", role: "Badges, fondos de highlight", hex: "#fbbf24", rgb: "251, 191, 36", cmyk: "0, 30, 85, 0", pantone: "Pantone 109 C", text: "dark" },
    ],
    neutral: [
      { name: "Tinta Noche", role: "Tipografía principal, fondo oscuro", hex: "#0b1220", rgb: "11, 18, 32", cmyk: "70, 60, 40, 90", pantone: "Pantone Black 6 C", text: "light" },
      { name: "Grafito", role: "Texto secundario, bordes", hex: "#475569", rgb: "71, 85, 105", cmyk: "60, 40, 30, 50", pantone: "Pantone Cool Gray 11 C", text: "light" },
      { name: "Arena Cálida", role: "Fondo neutro, secciones", hex: "#f7f5f0", rgb: "247, 245, 240", cmyk: "0, 2, 5, 3", pantone: "Pantone Warm Gray 1 C", text: "dark" },
      { name: "Blanco Crisp", role: "Tarjetas, contraste", hex: "#ffffff", rgb: "255, 255, 255", cmyk: "0, 0, 0, 0", pantone: "—", text: "dark" },
    ],
  },

  // Approved and forbidden color combinations
  colorCombos: {
    approved: [
      { bg: "#1d4ed8", fg: "#ffffff", label: "Azul FichoX + Blanco" },
      { bg: "#0b1220", fg: "#fbbf24", label: "Tinta Noche + Ámbar Suave" },
      { bg: "#f7f5f0", fg: "#1e3a8a", label: "Arena + Azul Profundo" },
      { bg: "#f59e0b", fg: "#0b1220", label: "Ámbar + Tinta Noche" },
      { bg: "#ffffff", fg: "#1d4ed8", label: "Blanco + Azul FichoX" },
    ],
    forbidden: [
      { bg: "#1d4ed8", fg: "#f59e0b", label: "Azul + Ámbar como texto (bajo contraste)" },
      { bg: "#3b82f6", fg: "#ffffff", label: "Azul Brillante + Blanco (solo digital, no print)" },
      { bg: "#fbbf24", fg: "#ffffff", label: "Ámbar Suave + Blanco (contraste insuficiente WCAG)" },
    ],
  },

  typography: {
    primary: {
      name: "Geist Sans",
      reason: "Geométrica, moderna, excelente legibilidad en móvil (donde vive el 90% del uso de FichoX)",
      weights: ["Regular 400", "Medium 500", "Semibold 600", "Bold 700", "Black 900"],
    },
    mono: {
      name: "Geist Mono",
      reason: "Para datos, precios USD/Bs, wallets, hashes de transacción y métricas",
      weights: ["Regular 400", "Medium 500", "Bold 700"],
    },
    hierarchy: [
      { level: "Display / Hero", sample: "FichoX", spec: "Geist Sans Bold 700 · 48–72px · tracking -0.02em", color: "#0b1220" },
      { level: "H1 / Título de sección", sample: "Inventario inteligente", spec: "Geist Sans Bold 700 · 32–40px · tracking -0.01em", color: "#0b1220" },
      { level: "H2 / Subtítulo", sample: "Plan de negocio", spec: "Geist Sans Semibold 600 · 22–28px", color: "#1e3a8a" },
      { level: "Cuerpo / Body", sample: "Convierte una foto en una ficha vendible.", spec: "Geist Sans Regular 400 · 14–16px · line-height 1.5", color: "#475569" },
      { level: "Caption / Meta", sample: "Hace 2 horas · 12 productos", spec: "Geist Sans Medium 500 · 11–12px · uppercase tracking 0.08em", color: "#475569" },
      { level: "Dato / Precio", sample: "$80.00 USDT", spec: "Geist Mono Bold 700 · 14–18px", color: "#1d4ed8" },
    ],
  },

  clearSpace: {
    unit: "X = altura del símbolo (isotipo) o altura de la letra 'F' (wordmark)",
    rule: "El clear space mínimo es 1X alrededor del logo. Ningún elemento gráfico, texto o borde puede entrar en esta zona.",
    minSize: {
      digital: "24px de alto (web/móvil)",
      print: "10mm de alto (impresos)",
      favicon: "16x16px solo isotipo, sin texto",
    },
  },

  dosAndDonts: {
    do: [
      "Usar el logo sobre fondos blancos o Arena Cálida",
      "Mantener el clear space mínimo de 1X",
      "Usar la versión monocromática sobre fondos complejos",
      "Escalar proporcionalmente (mantener aspect ratio)",
      "Usar el isotipo solo cuando el espacio sea < 40px",
    ],
    dont: [
      "No distorsionar, estirar o comprimir el logo",
      "No cambiar los colores oficiales por otros",
      "No rotar el logo",
      "No añadir sombras, brillos o efectos 3D",
      "No colocar el logo azul sobre fondo azul",
      "No reproducir el logo a menos de 24px con texto",
      "No añadir bordes o contornos al logo",
    ],
  },
}
