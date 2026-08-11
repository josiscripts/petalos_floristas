-- Insert 40 products into the products table
-- Copy and paste this entire script into Supabase SQL Editor and execute

INSERT INTO products (id, name, category, description, price_min, price_max, image_url, badge, quote_only, available) VALUES
-- Ramos (6 productos)
('ramo-silvestre', 'Ramo Silvestre', 'ramos', 'Flor variada de temporada con aire campestre y mucho movimiento.', 30, 45, '/images/products/cat-ramos.jpg', NULL, false, true),
('ramo-felicidad', 'Ramo Felicidad', 'ramos', 'Tonos luminosos en rosa y blanco para celebrar buenas noticias.', 35, 50, '/images/products/cat-ramos.jpg', 'Más vendido', false, true),
('ramo-alegria', 'Ramo Alegría', 'ramos', 'Colores vivos y contrastados, un ramo que se ve desde lejos.', 35, 50, '/images/products/cat-ramos.jpg', NULL, false, true),
('ramo-girasoles', 'Ramo de Girasoles', 'ramos', 'Girasoles frescos combinados con verdes de temporada.', 30, 45, '/images/products/girasoles.jpg', NULL, false, true),
('ramo-belleza', 'Ramo Belleza', 'ramos', 'Composición romántica en gamas rosadas y blancas.', 30, 45, '/images/products/cat-ramos.jpg', NULL, false, true),
('ramo-novia', 'Ramo de Novia y decoración de eventos', 'ramos', 'Diseño a medida para bodas y eventos: ramo de novia, prendidos, iglesia y espacios. Presupuesto personalizado.', 0, NULL, '/images/products/bodas.jpg', 'A medida', true, true),

-- Plantas (22 productos)
('anthurium', 'Anthurium', 'plantas', 'Planta de interior de flor duradera y hoja brillante.', 25, NULL, '/images/products/cat-plantas.jpg', NULL, false, true),
('taza-plantas', 'Taza de Plantas', 'plantas', 'Composición de plantas variadas en taza de cerámica.', 36, 60, '/images/products/cat-plantas.jpg', NULL, false, true),
('cesta-mimbre', 'Cesta de Mimbre', 'plantas', 'Cesta de mimbre natural con plantas de interior surtidas.', 60, NULL, '/images/products/cat-plantas.jpg', NULL, false, true),
('cesta-blanca-mimbre', 'Cesta Blanca de Mimbre', 'plantas', 'Mimbre lacado en blanco con composición de plantas.', 45, NULL, '/images/products/cat-plantas.jpg', NULL, false, true),
('banera-ceramica', 'Bañera Cerámica', 'plantas', 'Jardinera de cerámica con plantas de interior.', 35, NULL, '/images/products/cat-plantas.jpg', NULL, false, true),
('orquidea-azul', 'Orquídea Azul', 'plantas', 'Phalaenopsis teñida en azul, muy decorativa.', 30, NULL, '/images/products/cat-plantas.jpg', NULL, false, true),
('orquidea', 'Orquídea', 'plantas', 'Orquídea Phalaenopsis en maceta decorativa.', 30, NULL, '/images/products/cat-plantas.jpg', NULL, false, true),
('denrobium', 'Denrobium', 'plantas', 'Orquídea Dendrobium de floración abundante.', 28, NULL, '/images/products/cat-plantas.jpg', NULL, false, true),
('centro-orquideas-variadas', 'Centro de Orquídeas Variadas', 'plantas', 'Centro de gran formato con varias orquídeas y verdes.', 80, NULL, '/images/products/cat-plantas.jpg', 'Premium', false, true),
('centro-orquidea-blanca', 'Centro Orquídea Blanca', 'plantas', 'Centro elegante de orquídea blanca sobre base natural.', 80, NULL, '/images/products/cat-plantas.jpg', NULL, false, true),
('cesta-rosa', 'Cesta Rosa', 'plantas', 'Cesta en tonos rosados con planta de temporada.', 25, NULL, '/images/products/cat-plantas.jpg', NULL, false, true),
('cofre-pirata-blanco', 'Cofre Pirata Blanco', 'plantas', 'Cofre de madera blanca con composición floral.', 58, NULL, '/images/products/cat-plantas.jpg', NULL, false, true),
('cajon-floral', 'Cajón Floral', 'plantas', 'Cajón de madera con flor y planta combinadas.', 30, 50, '/images/products/cat-plantas.jpg', NULL, false, true),
('regadera-madera', 'Regadera Madera', 'plantas', 'Regadera decorativa con composición floral.', 45, NULL, '/images/products/cat-plantas.jpg', NULL, false, true),
('cofre-floral', 'Cofre Floral', 'plantas', 'Cofre de madera con flor fresca de temporada.', 48, 58, '/images/products/cat-plantas.jpg', NULL, false, true),
('gondola', 'Góndola', 'plantas', 'Composición alargada ideal para mesas y recibidores.', 40, 50, '/images/products/cat-plantas.jpg', NULL, false, true),
('paraiso-floral', 'Paraíso Floral', 'plantas', 'Composición frondosa con flor y verdes variados.', 45, 55, '/images/products/cat-plantas.jpg', NULL, false, true),
('primavera-floral', 'Primavera Floral', 'plantas', 'Colores de primavera en composición sobre base natural.', 45, NULL, '/images/products/cat-plantas.jpg', NULL, false, true),
('caja-mykonos', 'Caja Mykonos', 'plantas', 'Caja en blanco y azul con flor de temporada.', 50, NULL, '/images/products/cat-plantas.jpg', NULL, false, true),
('caja-santorini', 'Caja Santorini', 'plantas', 'Inspiración mediterránea con flor fresca y verdes.', 55, NULL, '/images/products/cat-plantas.jpg', NULL, false, true),
('bonsai-ficus-ginseng', 'Bonsái Ficus Ginseng', 'plantas', 'Bonsái de interior resistente y de fácil cuidado.', 25, NULL, '/images/products/cat-plantas.jpg', NULL, false, true),
('calathea', 'Calathea', 'plantas', 'Planta de hoja decorativa para interiores luminosos.', 35, NULL, '/images/products/cat-plantas.jpg', NULL, false, true),

-- Rosas eternas (4 productos)
('caja-rosas-eternas', 'Caja de Rosas Eternas', 'rosas-eternas', 'Rosa natural preservada en caja de regalo. Disponible en varios tamaños.', 40, 85, '/images/products/cat-rosas-eternas.jpg', '7-10 años', false, true),
('caja-romantica', 'Caja Romántica', 'rosas-eternas', 'Rosas preservadas con acabado romántico y lazo de satén.', 45, 75, '/images/products/cat-rosas-eternas.jpg', NULL, false, true),
('cupido', 'Cupido', 'rosas-eternas', 'Corazón de rosas eternas, nuestro diseño más regalado.', 55, 85, '/images/products/cat-rosas-eternas.jpg', NULL, false, true),
('pecera-rosa-eterna', 'Pecera Rosa Eterna', 'rosas-eternas', 'Rosa preservada bajo cúpula de cristal, un detalle perfecto.', 22, NULL, '/images/products/cat-rosas-eternas.jpg', NULL, false, true),

-- Complementos (8 productos)
('jarron-cristal-1', 'Jarrón de Cristal Nº 1', 'complementos', 'Jarrón de cristal pequeño para tu ramo.', 1.5, NULL, '/images/products/cat-complementos.jpg', NULL, false, true),
('jarron-cristal-2', 'Jarrón de Cristal Nº 2', 'complementos', 'Jarrón de cristal de mayor tamaño.', 5, NULL, '/images/products/cat-complementos.jpg', NULL, false, true),
('chocolate-belga-pequena', 'Chocolate Belga Caja Pequeña', 'complementos', 'Bombones belgas surtidos en caja pequeña.', 12.5, NULL, '/images/products/cat-complementos.jpg', NULL, false, true),
('chocolate-belga-grande', 'Chocolate Belga Caja Grande', 'complementos', 'Bombones belgas surtidos en caja grande.', 15, NULL, '/images/products/cat-complementos.jpg', NULL, false, true),
('oso-peluche', 'Oso de Peluche', 'complementos', 'Osito de peluche suave para acompañar el regalo.', 12.5, NULL, '/images/products/cat-complementos.jpg', NULL, false, true),
('oso-peluche-corazon', 'Oso de Peluche Corazón', 'complementos', 'Osito de peluche con corazón bordado.', 12, NULL, '/images/products/cat-complementos.jpg', NULL, false, true),
('macetero-violeta-orquidea', 'Macetero Violeta Orquídea', 'complementos', 'Macetero decorativo en tono violeta para orquídea.', 4.5, NULL, '/images/products/cat-complementos.jpg', NULL, false, true),
('macetero-blanco-orquidea', 'Macetero Blanco Orquídea', 'complementos', 'Macetero decorativo blanco para orquídea.', 4.5, NULL, '/images/products/cat-complementos.jpg', NULL, false, true),
('piruletas', 'Piruletas', 'complementos', 'Piruletas artesanales de colores.', 3, NULL, '/images/products/cat-complementos.jpg', NULL, false, true);

-- Verify insertion
SELECT COUNT(*) as total_products FROM products;
SELECT category, COUNT(*) as count FROM products GROUP BY category;
