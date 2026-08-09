# Configuración de Supabase - Pétalos Floristas

## Paso 1: Crear la tabla de productos

1. Ve a [https://app.supabase.com](https://app.supabase.com)
2. Selecciona tu proyecto: `ovtpgkdprxicktidleap`
3. Ve a la sección **SQL Editor**
4. Crea una nueva consulta
5. Copia y pega el contenido de `scripts/create_products_table.sql`
6. Ejecuta la consulta (haz clic en el botón "Run")

Deberías ver un mensaje de éxito indicando que la tabla `products` se ha creado.

## Paso 2: Verificar RLS (Row Level Security)

1. Ve a **Authentication** → **Policies**
2. Selecciona la tabla `products`
3. Verifica que existan las políticas:
   - `Allow public read access to available products` (SELECT)
   - `Disable public insert`
   - `Disable public update`
   - `Disable public delete`

Si no existen, ejecuta nuevamente el SQL de `create_products_table.sql`.

## Paso 3: Migrar los 40 productos

### Opción A: Migración manual (recomendado para primeros datos)

1. Ve a **Table Editor** → selecciona `products`
2. Haz clic en **Insert row**
3. Completa los campos con los datos del producto

**Campos requeridos:**
- `id`: Identificador único (ej: "ramo-silvestre")
- `name`: Nombre del producto (ej: "Ramo Silvestre")
- `category`: Una de: `ramos`, `plantas`, `rosas-eternas`, `complementos`
- `description`: Descripción del producto
- `price_min`: Precio mínimo en euros
- `price_max`: Precio máximo (opcional)
- `image_url`: URL de la imagen (ej: `/images/products/cat-ramos.jpg`)
- `badge`: Etiqueta especial como "Más vendido", "Premium", etc. (opcional)
- `quote_only`: `true` si el producto es solo a presupuesto
- `available`: `true` para disponible, `false` para no disponible

### Opción B: Migración con datos CSV

1. Prepara un archivo CSV con los 40 productos
2. Ve a **Table Editor** → `products`
3. Haz clic en **Upload data** → **CSV**
4. Selecciona el archivo

### Opción C: Migración con Script (desde Node.js)

```bash
VITE_SUPABASE_URL="https://ovtpgkdprxicktidleap.supabase.co" \
VITE_SUPABASE_ANON_KEY="sb_publishable_Vmmb3luzuzF80W3wHxmJ_w_V66U15pe" \
npx ts-node scripts/migrate-products.ts
```

Nota: El script espera que las imágenes estén en `/public/images/products/*.jpg`

## Paso 4: Verificar la conexión

1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

2. Abre la aplicación en [http://localhost:8081](http://localhost:8081)

3. Ve a la página de catálogo

4. Deberías ver los 40 productos cargados desde Supabase

## Solución de problemas

### "Error: Missing Supabase configuration"
- Verifica que `.env.local` exista con las credenciales correctas
- Reinicia el servidor de desarrollo

### "Error fetching products"
- Verifica que la tabla `products` existe en Supabase
- Verifica que tienes datos en la tabla
- Revisa la consola del navegador para más detalles

### Los productos no aparecen
- Verifica que los productos tienen `available = true`
- Verifica que `image_url` es accesible
- Abre DevTools → Network → verifica la solicitud a `products`

## Variables de entorno

El proyecto necesita estas variables en `.env.local`:

```
VITE_SUPABASE_URL=https://ovtpgkdprxicktidleap.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_Vmmb3luzuzF80W3wHxmJ_w_V66U15pe
```

No modificar ni exponer estas credenciales en el repositorio.

## Datos de los 40 productos

Los 40 productos originales se encuentran en `src/data/catalog.ts` y serán migrados a Supabase.

**Distribución:**
- Ramos: 6 productos
- Plantas: 22 productos
- Rosas eternas: 4 productos
- Complementos: 8 productos

Total: 40 productos

Una vez migrados a Supabase, el archivo `catalog.ts` puede servir como respaldo pero el frontend obtiene los datos desde Supabase.
