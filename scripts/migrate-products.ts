import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Productos del catálogo actual
const products = [
  // Ramos
  {
    id: "ramo-silvestre",
    name: "Ramo Silvestre",
    category: "ramos" as const,
    priceMin: 30,
    priceMax: 45,
    image: "cat-ramos.jpg",
    description: "Flor variada de temporada con aire campestre y mucho movimiento.",
  },
  {
    id: "ramo-felicidad",
    name: "Ramo Felicidad",
    category: "ramos" as const,
    priceMin: 35,
    priceMax: 50,
    image: "cat-ramos.jpg",
    description: "Tonos luminosos en rosa y blanco para celebrar buenas noticias.",
    badge: "Más vendido",
  },
  {
    id: "ramo-alegria",
    name: "Ramo Alegría",
    category: "ramos" as const,
    priceMin: 35,
    priceMax: 50,
    image: "cat-ramos.jpg",
    description: "Colores vivos y contrastados, un ramo que se ve desde lejos.",
  },
  {
    id: "ramo-girasoles",
    name: "Ramo de Girasoles",
    category: "ramos" as const,
    priceMin: 30,
    priceMax: 45,
    image: "girasoles.jpg",
    description: "Girasoles frescos combinados con verdes de temporada.",
  },
  {
    id: "ramo-belleza",
    name: "Ramo Belleza",
    category: "ramos" as const,
    priceMin: 30,
    priceMax: 45,
    image: "cat-ramos.jpg",
    description: "Composición romántica en gamas rosadas y blancas.",
  },
  {
    id: "ramo-novia",
    name: "Ramo de Novia y decoración de eventos",
    category: "ramos" as const,
    priceMin: 0,
    image: "bodas.jpg",
    description:
      "Diseño a medida para bodas y eventos: ramo de novia, prendidos, iglesia y espacios. Presupuesto personalizado.",
    badge: "A medida",
    quoteOnly: true,
  },
  // Plantas
  {
    id: "anthurium",
    name: "Anthurium",
    category: "plantas" as const,
    priceMin: 25,
    image: "cat-plantas.jpg",
    description: "Planta de interior de flor duradera y hoja brillante.",
  },
  {
    id: "taza-plantas",
    name: "Taza de Plantas",
    category: "plantas" as const,
    priceMin: 36,
    priceMax: 60,
    image: "cat-plantas.jpg",
    description: "Composición de plantas variadas en taza de cerámica.",
  },
  {
    id: "cesta-mimbre",
    name: "Cesta de Mimbre",
    category: "plantas" as const,
    priceMin: 60,
    image: "cat-plantas.jpg",
    description: "Cesta de mimbre natural con plantas de interior surtidas.",
  },
  {
    id: "cesta-blanca-mimbre",
    name: "Cesta Blanca de Mimbre",
    category: "plantas" as const,
    priceMin: 45,
    image: "cat-plantas.jpg",
    description: "Mimbre lacado en blanco con composición de plantas.",
  },
  {
    id: "banera-ceramica",
    name: "Bañera Cerámica",
    category: "plantas" as const,
    priceMin: 35,
    image: "cat-plantas.jpg",
    description: "Jardinera de cerámica con plantas de interior.",
  },
  {
    id: "orquidea-azul",
    name: "Orquídea Azul",
    category: "plantas" as const,
    priceMin: 30,
    image: "cat-plantas.jpg",
    description: "Phalaenopsis teñida en azul, muy decorativa.",
  },
  {
    id: "orquidea",
    name: "Orquídea",
    category: "plantas" as const,
    priceMin: 30,
    image: "cat-plantas.jpg",
    description: "Orquídea Phalaenopsis en maceta decorativa.",
  },
  {
    id: "denrobium",
    name: "Denrobium",
    category: "plantas" as const,
    priceMin: 28,
    image: "cat-plantas.jpg",
    description: "Orquídea Dendrobium de floración abundante.",
  },
  {
    id: "centro-orquideas-variadas",
    name: "Centro de Orquídeas Variadas",
    category: "plantas" as const,
    priceMin: 80,
    image: "cat-plantas.jpg",
    description: "Centro de gran formato con varias orquídeas y verdes.",
    badge: "Premium",
  },
  {
    id: "centro-orquidea-blanca",
    name: "Centro Orquídea Blanca",
    category: "plantas" as const,
    priceMin: 80,
    image: "cat-plantas.jpg",
    description: "Centro elegante de orquídea blanca sobre base natural.",
  },
  {
    id: "cesta-rosa",
    name: "Cesta Rosa",
    category: "plantas" as const,
    priceMin: 25,
    image: "cat-plantas.jpg",
    description: "Cesta en tonos rosados con planta de temporada.",
  },
  {
    id: "cofre-pirata-blanco",
    name: "Cofre Pirata Blanco",
    category: "plantas" as const,
    priceMin: 58,
    image: "cat-plantas.jpg",
    description: "Cofre de madera blanca con composición floral.",
  },
  {
    id: "cajon-floral",
    name: "Cajón Floral",
    category: "plantas" as const,
    priceMin: 30,
    priceMax: 50,
    image: "cat-plantas.jpg",
    description: "Cajón de madera con flor y planta combinadas.",
  },
  {
    id: "regadera-madera",
    name: "Regadera Madera",
    category: "plantas" as const,
    priceMin: 45,
    image: "cat-plantas.jpg",
    description: "Regadera decorativa con composición floral.",
  },
  {
    id: "cofre-floral",
    name: "Cofre Floral",
    category: "plantas" as const,
    priceMin: 48,
    priceMax: 58,
    image: "cat-plantas.jpg",
    description: "Cofre de madera con flor fresca de temporada.",
  },
  {
    id: "gondola",
    name: "Góndola",
    category: "plantas" as const,
    priceMin: 40,
    priceMax: 50,
    image: "cat-plantas.jpg",
    description: "Composición alargada ideal para mesas y recibidores.",
  },
  {
    id: "paraiso-floral",
    name: "Paraíso Floral",
    category: "plantas" as const,
    priceMin: 45,
    priceMax: 55,
    image: "cat-plantas.jpg",
    description: "Composición frondosa con flor y verdes variados.",
  },
  {
    id: "primavera-floral",
    name: "Primavera Floral",
    category: "plantas" as const,
    priceMin: 45,
    image: "cat-plantas.jpg",
    description: "Colores de primavera en composición sobre base natural.",
  },
  {
    id: "caja-mykonos",
    name: "Caja Mykonos",
    category: "plantas" as const,
    priceMin: 50,
    image: "cat-plantas.jpg",
    description: "Caja en blanco y azul con flor de temporada.",
  },
  {
    id: "caja-santorini",
    name: "Caja Santorini",
    category: "plantas" as const,
    priceMin: 55,
    image: "cat-plantas.jpg",
    description: "Inspiración mediterránea con flor fresca y verdes.",
  },
  {
    id: "bonsai-ficus-ginseng",
    name: "Bonsái Ficus Ginseng",
    category: "plantas" as const,
    priceMin: 25,
    image: "cat-plantas.jpg",
    description: "Bonsái de interior resistente y de fácil cuidado.",
  },
  {
    id: "calathea",
    name: "Calathea",
    category: "plantas" as const,
    priceMin: 35,
    image: "cat-plantas.jpg",
    description: "Planta de hoja decorativa para interiores luminosos.",
  },
  // Rosas eternas
  {
    id: "caja-rosas-eternas",
    name: "Caja de Rosas Eternas",
    category: "rosas-eternas" as const,
    priceMin: 40,
    priceMax: 85,
    image: "cat-rosas-eternas.jpg",
    description: "Rosa natural preservada en caja de regalo. Disponible en varios tamaños.",
    badge: "7-10 años",
  },
  {
    id: "caja-romantica",
    name: "Caja Romántica",
    category: "rosas-eternas" as const,
    priceMin: 45,
    priceMax: 75,
    image: "cat-rosas-eternas.jpg",
    description: "Rosas preservadas con acabado romántico y lazo de satén.",
  },
  {
    id: "cupido",
    name: "Cupido",
    category: "rosas-eternas" as const,
    priceMin: 55,
    priceMax: 85,
    image: "cat-rosas-eternas.jpg",
    description: "Corazón de rosas eternas, nuestro diseño más regalado.",
  },
  {
    id: "pecera-rosa-eterna",
    name: "Pecera Rosa Eterna",
    category: "rosas-eternas" as const,
    priceMin: 22,
    image: "cat-rosas-eternas.jpg",
    description: "Rosa preservada bajo cúpula de cristal, un detalle perfecto.",
  },
  // Complementos
  {
    id: "jarron-cristal-1",
    name: "Jarrón de Cristal Nº 1",
    category: "complementos" as const,
    priceMin: 1.5,
    image: "cat-complementos.jpg",
    description: "Jarrón de cristal pequeño para tu ramo.",
  },
  {
    id: "jarron-cristal-2",
    name: "Jarrón de Cristal Nº 2",
    category: "complementos" as const,
    priceMin: 5,
    image: "cat-complementos.jpg",
    description: "Jarrón de cristal de mayor tamaño.",
  },
  {
    id: "chocolate-belga-pequena",
    name: "Chocolate Belga Caja Pequeña",
    category: "complementos" as const,
    priceMin: 12.5,
    image: "cat-complementos.jpg",
    description: "Bombones belgas surtidos en caja pequeña.",
  },
  {
    id: "chocolate-belga-grande",
    name: "Chocolate Belga Caja Grande",
    category: "complementos" as const,
    priceMin: 15,
    image: "cat-complementos.jpg",
    description: "Bombones belgas surtidos en caja grande.",
  },
  {
    id: "oso-peluche",
    name: "Oso de Peluche",
    category: "complementos" as const,
    priceMin: 12.5,
    image: "cat-complementos.jpg",
    description: "Osito de peluche suave para acompañar el regalo.",
  },
  {
    id: "oso-peluche-corazon",
    name: "Oso de Peluche Corazón",
    category: "complementos" as const,
    priceMin: 12,
    image: "cat-complementos.jpg",
    description: "Osito de peluche con corazón bordado.",
  },
  {
    id: "macetero-violeta-orquidea",
    name: "Macetero Violeta Orquídea",
    category: "complementos" as const,
    priceMin: 4.5,
    image: "cat-complementos.jpg",
    description: "Macetero decorativo en tono violeta para orquídea.",
  },
  {
    id: "macetero-blanco-orquidea",
    name: "Macetero Blanco Orquídea",
    category: "complementos" as const,
    priceMin: 4.5,
    image: "cat-complementos.jpg",
    description: "Macetero decorativo blanco para orquídea.",
  },
  {
    id: "piruletas",
    name: "Piruletas",
    category: "complementos" as const,
    priceMin: 3,
    image: "cat-complementos.jpg",
    description: "Piruletas artesanales de colores.",
  },
];

async function migrate() {
  console.log("Starting migration of 40 products...");

  const transformedProducts = products.map((p) => ({
    id: p.id,
    name: p.name,
    category: p.category,
    description: p.description,
    price_min: p.priceMin,
    price_max: p.priceMax || null,
    image_url: `/images/products/${p.image}`,
    badge: p.badge || null,
    quote_only: p.quoteOnly || false,
    available: true,
  }));

  try {
    const { error, count } = await supabase.from("products").insert(transformedProducts);

    if (error) {
      console.error("Migration error:", error);
      process.exit(1);
    }

    console.log(`✅ Successfully migrated ${transformedProducts.length} products`);
    process.exit(0);
  } catch (err) {
    console.error("Unexpected error:", err);
    process.exit(1);
  }
}

migrate();
