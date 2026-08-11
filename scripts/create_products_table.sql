-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('ramos', 'plantas', 'rosas-eternas', 'complementos')),
  description TEXT NOT NULL,
  price_min DECIMAL(10, 2) NOT NULL,
  price_max DECIMAL(10, 2),
  image_url TEXT NOT NULL,
  badge TEXT,
  quote_only BOOLEAN DEFAULT FALSE,
  available BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index on category for faster filtering
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);

-- Create index on available status
CREATE INDEX IF NOT EXISTS idx_products_available ON products(available);

-- Enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public read access to available products
CREATE POLICY "Allow public read access to available products"
  ON products FOR SELECT
  USING (available = true);

-- Policy: Disable public insert, update, delete
CREATE POLICY "Disable public insert"
  ON products FOR INSERT
  WITH CHECK (FALSE);

CREATE POLICY "Disable public update"
  ON products FOR UPDATE
  USING (FALSE);

CREATE POLICY "Disable public delete"
  ON products FOR DELETE
  USING (FALSE);
