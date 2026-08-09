# 🌸 INSTRUCCIONES COMPLETAS: Configuración de Supabase

## RESUMEN EJECUTIVO

El proyecto está **100% listo** para conectarse a Supabase. Solo necesitas:

1. ✅ Crear la tabla `products` en Supabase
2. ✅ Insertar los 40 productos
3. ✅ Verificar la conexión

**No más pasos.** El frontend está conectado y la configuración de variables de entorno está lista.

---

## PASO 1: CREAR LA TABLA EN SUPABASE

### Opción A: Usando SQL Editor (Recomendado)

1. Ve a **[Supabase Dashboard](https://app.supabase.com)**
2. Selecciona tu proyecto: **`ovtpgkdprxicktidleap`**
3. Ve a **SQL Editor** (icono de la izquierda)
4. Haz clic en **New Query**
5. Copia TODO el contenido de `scripts/create_products_table.sql`
6. Pégalo en el editor SQL
7. Haz clic en **Run** (botón azul)

**Resultado esperado:**
```
✓ Table "products" created successfully
```

### Opción B: Usando Table Editor

1. Ve a **Table Editor**
2. Haz clic en **Create table**
3. Nombre: `products`
4. Configura estos campos:
   - `id` (TEXT, Primary Key)
   - `name` (TEXT, Required)
   - `category` (TEXT, Required)
   - `description` (TEXT, Required)
   - `price_min` (DECIMAL, Required)
   - `price_max` (DECIMAL)
   - `image_url` (TEXT, Required)
   - `badge` (TEXT)
   - `quote_only` (BOOLEAN, Default: false)
   - `available` (BOOLEAN, Default: true)
   - `created_at` (TIMESTAMP, Default: now())
   - `updated_at` (TIMESTAMP, Default: now())

---

## PASO 2: INSERTAR LOS 40 PRODUCTOS

### Opción A: SQL INSERT (Más rápido - Recomendado)

1. Ve a **SQL Editor**
2. Crea una nueva query
3. Copia TODO el contenido de `scripts/insert_products.sql`
4. Pégalo en el editor
5. Haz clic en **Run**

**Resultado esperado:**
```
INSERT 0 40
SELECT 1
total_products: 40

Distribuición:
categoria     | count
ramos         | 6
plantas       | 22
rosas-eternas | 4
complementos  | 8
```

### Opción B: Inserción manual (Más lento pero visual)

1. Ve a **Table Editor** → selecciona tabla `products`
2. Haz clic en **Insert row**
3. Completa cada campo para uno de los 40 productos
4. Repite 40 veces (o mejor usa la Opción A)

### Opción C: Importar desde CSV

1. Crea un archivo CSV con los datos de los productos
2. Ve a **Table Editor** → tabla `products`
3. Haz clic en **⋮** (menú) → **Upload data** → **CSV**
4. Selecciona el archivo

---

## PASO 3: VERIFICAR LA TABLA Y LOS DATOS

1. Ve a **Table Editor** → tabla `products`
2. Deberías ver exactamente **40 filas**
3. Verifica que todos los productos tengan valores en campos obligatorios

**Contenido esperado por categoría:**
- **Ramos** (6): Silvestre, Felicidad, Alegría, Girasoles, Belleza, Novia
- **Plantas** (22): Anthurium, Orquídeas, Cestas, Cajas Mykonos, Santorini, etc.
- **Rosas eternas** (4): Caja, Romántica, Cupido, Pecera
- **Complementos** (8): Jarrones, Chocolates, Ositos, Maceteros, Piruletas

---

## PASO 4: CONFIGURAR RLS (Row Level Security)

Las políticas se crean **automáticamente** al ejecutar `create_products_table.sql`.

Verifica que existan en **Authentication** → **Policies** → tabla `products`:

- ✓ `Allow public read access to available products` (SELECT)
- ✓ `Disable public insert`
- ✓ `Disable public update`
- ✓ `Disable public delete`

Si no existen, vuelve a ejecutar el SQL de `create_products_table.sql`.

---

## PASO 5: PROBAR LA CONEXIÓN DESDE EL FRONTEND

### Iniciar el servidor de desarrollo:

```bash
npm run dev
```

El servidor iniciará en: **http://localhost:8081**

### Verificar la conexión:

1. Abre **http://localhost:8081/catalogo** en tu navegador
2. Deberías ver los **40 productos** cargados desde Supabase

### Si no aparecen los productos:

1. Abre **DevTools** → **Console**
2. Busca errores como:
   - "Missing Supabase configuration" → Verifica `.env.local`
   - "Error fetching products" → Verifica que la tabla existe
   - "Network error" → Verifica credenciales de Supabase

### Si los productos aparecen:

✅ **¡Conexión exitosa!** El frontend obtiene datos desde Supabase.

---

## PASO 6: VERIFICAR TODO FUNCIONA

Prueba estas funcionalidades:

- [ ] Página inicial carga
- [ ] Catálogo muestra 40 productos
- [ ] Categorías filtran correctamente:
  - [ ] Ramos (6 productos)
  - [ ] Plantas (22 productos)
  - [ ] Rosas eternas (4 productos)
  - [ ] Complementos (8 productos)
- [ ] Búsqueda encuentra productos
- [ ] Favoritos funcionan
- [ ] Agregar al carrito funciona
- [ ] Precios se muestran correctamente
- [ ] Variantes (Estándar, Especial, Premium) funcionan
- [ ] Badge "Más vendido" y "Premium" aparecen
- [ ] Producto "Ramo de Novia" muestra botón "Pedir presupuesto"
- [ ] Footer muestra información correcta
- [ ] Página de contacto funciona

---

## DATOS DE CONFIGURACIÓN ACTUAL

Las credenciales están en `.env.local`:

```
VITE_SUPABASE_URL=https://ovtpgkdprxicktidleap.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_Vmmb3luzuzF80W3wHxmJ_w_V66U15pe
```

Estos archivos están **ignorados en git** por seguridad.

---

## ESTRUCTURA DE DATOS

### Tabla `products`:

| Campo | Tipo | Requerido | Notas |
|-------|------|-----------|-------|
| `id` | TEXT | ✓ | Identificador único (ej: "ramo-silvestre") |
| `name` | TEXT | ✓ | Nombre del producto |
| `category` | TEXT | ✓ | Una de: ramos, plantas, rosas-eternas, complementos |
| `description` | TEXT | ✓ | Descripción breve |
| `price_min` | DECIMAL | ✓ | Precio mínimo en euros |
| `price_max` | DECIMAL | | Precio máximo (opcional) |
| `image_url` | TEXT | ✓ | URL de la imagen |
| `badge` | TEXT | | Etiqueta especial (Más vendido, Premium, etc.) |
| `quote_only` | BOOLEAN | | true si el producto es solo a presupuesto |
| `available` | BOOLEAN | | true/false |
| `created_at` | TIMESTAMP | | Timestamp automático |
| `updated_at` | TIMESTAMP | | Timestamp automático |

---

## SOLUCIÓN DE PROBLEMAS

### Problema: "Error: Missing Supabase configuration"

**Causa:** Variables de entorno no configuradas.

**Solución:**
1. Verifica que `.env.local` existe
2. Contiene ambas variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
3. Reinicia el servidor: `npm run dev`

---

### Problema: "Error fetching products"

**Causa:** Tabla no existe o no tiene datos.

**Solución:**
1. Verifica en **Table Editor** que la tabla `products` existe
2. Verifica que tiene 40 filas
3. Ve a **SQL Editor** y ejecuta:
   ```sql
   SELECT COUNT(*) FROM products;
   ```
   Debe retornar: `40`

---

### Problema: Los productos no aparecen en la página

**Causa:** Probablemente una de:
- Tabla no existe
- Datos no están insertados
- RLS bloquea el acceso
- URL o key incorrecta

**Solución:**
1. Abre **DevTools** → **Console**
2. Busca errores específicos
3. Ve a **SQL Editor** en Supabase y ejecuta:
   ```sql
   SELECT COUNT(*) FROM products WHERE available = true;
   ```
4. Verifica que retorna: `40`

---

### Problema: Las imágenes no se cargan

**Causa:** URLs de imágenes no accesibles.

**Estado actual:** Las imágenes usan paths como `/images/products/cat-ramos.jpg`.

**Solución:**
- Opción A: Copia las imágenes de `public/images/` a tu servidor
- Opción B: Usa Supabase Storage para las imágenes (avanzado)
- Opción C: Usa URLs externas públicas

---

## SIGUIENTE: TESTING COMPLETO

Una vez todo funcione:

1. Ejecuta: `npm run build`
2. Ejecuta: `npm run lint` (si existe)
3. Prueba todas las rutas
4. Prueba el carrito completo
5. Verifica responsive design

---

## INFORMACIÓN DE CONTACTO (SIN CAMBIOS)

Los datos de contacto de la empresa se mantienen idénticos:

- **Nombre:** Pétalos Floristas
- **Dirección:** Calle Navarro y Ledesma 15, 28807 Alcalá de Henares, Madrid
- **Teléfono:** 91 882 68 37
- **Email:** info@floristeriapetalosalcala.com
- **Web:** www.floristeriapetalosalcala.com

Estos valores están en `src/data/company.ts` y se muestran en Footer y Contacto.

---

## ✅ CHECKLIST FINAL

Cuando termines, marca todo como hecho:

- [ ] Tabla `products` creada en Supabase
- [ ] RLS configurado
- [ ] 40 productos insertados
- [ ] Catálogo carga en http://localhost:8081/catalogo
- [ ] Todos los 40 productos visibles
- [ ] Categorías filtran correctamente
- [ ] Carrito funciona
- [ ] Precios muestran correctamente
- [ ] Imágenes aparecen
- [ ] Búsqueda funciona
- [ ] npm run build ejecuta sin errores
- [ ] Sin errores en consola del navegador

Una vez todo funcione, el proyecto está **listo para producción**.
