# Floristería Pétalos Alcalá — tienda online

Web e-commerce completa, minimalista y elegante, con catálogo real, carrito lateral, favoritos, buscador, cobertura de envíos y datos legales.

## Identidad visual

- Acento rosa/fucsia (#E05A87) para CTA, insignias e interacciones.
- Fondos blanco puro y off-white para realzar la fotografía floral; pie de página negro sólido con texto claro.
- Titulares y logotipo en tipografía script elegante (Cormorant/Playfair-style vía Google Fonts); cuerpo, menús y precios en sans-serif tipo Inter.
- Transiciones suaves en hover de tarjetas, apertura del carrito y cambio de filtros.

## Páginas

1. **Inicio** — hero con titular sobre arte floral y tradición familiar, CTAs "Ver Catálogo" y "Rosas Eternas", insignia flotante 4,8★ sobre 224 reseñas con sello Google y mención al trato de Rocío. Banners destacados de Navidad, San Valentín y Día de la Madre. Bloques resumen de catálogo, cobertura y contacto.
2. **Catálogo** — grid de tarjetas (imagen, nombre, horquilla de precios exacta, botón "Añadir al carrito") con filtros por categoría: Ramos, Plantas y Cestas, Rosas Eternas, Complementos. Buscador rápido y favoritos.
3. **Rosas Eternas** — explicación interactiva de la flor preservada (natural, 7–10 años, sin agua ni luz) y sus productos: Caja de Rosas, Caja Romántica, Cupido (40–85€), Pecera Rosa Eterna (22€).
4. **Envíos y Cobertura** — buscador con filtrado en vivo sobre las 55 poblaciones indicadas, agrupadas por provincia (Madrid / Guadalajara).
5. **Sobre Nosotros** — historia familiar de tres generaciones y cita de Oscar Wilde destacada tipográficamente.
6. **Contacto** — datos de la tienda, mapa/dirección y formulario dedicado para Ramos de Novia y decoración de bodas/eventos.

## Catálogo (datos exactos)

- Ramos: Silvestre 30–45€, Felicidad 35–50€, Alegría 35–50€, Girasoles 30–45€, Belleza 30–45€, más servicio a medida de Ramos de Novia (presupuesto por formulario).
- Plantas y Cestas: Anthurium 25€, Taza de Plantas 36–60€, Cesta de Mimbre 60€, Cesta Blanca de Mimbre 45€, Bañera Cerámica 35€, Orquídea Azul 30€, Orquídea 30€, Denrobium 28€, Centro de Orquídeas Variadas 80€, Centro Orquídea Blanca 80€, Cesta Rosa 25€, Cofre Pirata Blanco 58€, Cajón Floral 30–50€, Regadera Madera 45€, Cofre Floral 48–58€, Góndola 40–50€, Paraíso Floral 45–55€, Primavera Floral 45€, Caja Mykonos 50€, Caja Santorini 55€, Bonsái Ficus Ginseng 25€, Calathea 35€.
- Complementos: Jarrón Cristal Nº1 1,50€, Nº2 5,00€, Chocolate Belga pequeño 12,50€ / grande 15,00€, Oso de Peluche 12,50€, Oso Corazón 12,00€, Macetero Violeta Orquídea 4,50€, Macetero Blanco Orquídea 4,50€, Piruletas 3,00€. Se ofrecen también como add-ons dentro del carrito.

## Carrito y favoritos

- Cajón lateral deslizante con contador en la barra superior, cantidades editables, subtotal, nota de IVA incluido y sugerencias de complementos.
- Productos con horquilla de precio: selector de tamaño (Estándar / Especial / Premium según los tramos) antes de añadir.
- Favoritos con corazón en la tarjeta y contador en la barra.
- Estado guardado en el navegador (sin cuenta de usuario ni pasarela de pago real en esta fase).

## Pie de página y legal

- Calle Navarro y Ledesma 15, 28807 Alcalá de Henares (Madrid); titular Rocío Manjón Cabeza García; teléfono 91 882 68 37; info@floristeriapetalosalcala.com; www.floristeriapetalosalcala.com.
- Métodos de pago con iconos: Visa/Mastercard (pasarela segura SSL), PayPal, transferencia/ingreso bancario. IVA incluido.
- Modales informativos: garantía legal de 24 meses en productos aptos; 24 horas para notificar incidencias o daños visibles de transporte; exclusión del derecho de desistimiento en arreglos florales frescos o personalizados.

## Notas técnicas

- Rutas TanStack en `src/routes/` (`index`, `catalogo`, `rosas-eternas`, `envios`, `sobre-nosotros`, `contacto`), cada una con su propio `head()` (título, descripción, Open Graph).
- Tokens de color, radios y fuentes en `src/styles.css` (`@theme inline`, oklch); sin clases de color literales en los componentes.
- Componentes modulares en `src/components/` (Navbar, CartDrawer, ProductCard, CategoryFilters, HeroSection, CoverageSearch, LegalModals, Footer) y datos del catálogo en `src/data/`.
- Carrito/favoritos con un contexto React + persistencia en localStorage leída tras la hidratación.
- Imágenes: se generan fotografías florales para hero, categorías y productos destacados; el resto de tarjetas usa imágenes generadas reutilizables por categoría para mantener el peso razonable.
- Sin backend: el formulario de bodas y el checkout muestran confirmación y datos de contacto. Si más adelante quieres pedidos reales, pagos o envío de emails, se añade con Lovable Cloud.
