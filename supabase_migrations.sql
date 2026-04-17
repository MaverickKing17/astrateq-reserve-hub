-- 1. Products table
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sku TEXT UNIQUE NOT NULL,
  price_cents INTEGER NOT NULL,
  deposit_cents INTEGER NOT NULL,
  name_en TEXT NOT NULL,
  name_fr TEXT NOT NULL,
  features_en TEXT[] NOT NULL,
  features_fr TEXT[] NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Reservations table
CREATE TABLE reservations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reservation_number TEXT UNIQUE NOT NULL,
  product_sku TEXT REFERENCES products(sku),
  customer_first_name TEXT NOT NULL,
  customer_last_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  vehicle_year TEXT NOT NULL,
  vehicle_make TEXT NOT NULL,
  vehicle_model TEXT NOT NULL,
  province_code TEXT NOT NULL,
  deposit_amount_cents INTEGER NOT NULL,
  tax_amount_cents INTEGER NOT NULL,
  total_amount_cents INTEGER NOT NULL,
  stripe_payment_intent_id TEXT,
  status TEXT DEFAULT 'pending', -- pending, confirmed, cancelled
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Reservation Counter
CREATE TABLE reservation_counter (
  id INTEGER PRIMARY KEY DEFAULT 1,
  total_slots INTEGER DEFAULT 250,
  reserved_count INTEGER DEFAULT 0,
  CONSTRAINT single_row CHECK (id = 1)
);

-- Seed data
INSERT INTO products (sku, price_cents, deposit_cents, name_en, name_fr, features_en, features_fr)
VALUES 
('ASTRA-BASIC', 32900, 4900, 'Guardian Bundle', 'Ensemble Gardien', ARRAY['AI Smart Dashcam', '12 Months Premium Subscription'], ARRAY['Caméra de tableau de bord intelligente', '12 mois d''abonnement Premium']),
('ASTRA-PRO', 42900, 4900, 'Guardian Professional', 'Gardien Professionnel', ARRAY['AI Smart Dashcam', 'Lifetime Premium Subscription'], ARRAY['Caméra de tableau de bord intelligente', 'Abonnement Premium à vie']),
('ASTRA-ELITE', 52900, 4900, 'Guardian Elite', 'Gardien Élite', ARRAY['AI Smart Dashcam (Upgraded Lens)', '18 Months Premium Subscription'], ARRAY['Caméra de tableau de bord intelligente (Lentille améliorée)', '18 mois d''abonnement Premium']);

INSERT INTO reservation_counter (id, total_slots, reserved_count) VALUES (1, 250, 3);

-- RLS Policies
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read products" ON products FOR SELECT USING (true);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public insert reservations" ON reservations FOR INSERT WITH CHECK (true);
CREATE POLICY "No public read/update/delete reservations" ON reservations FOR ALL USING (false);

ALTER TABLE reservation_counter ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public select counter" ON reservation_counter FOR SELECT USING (true);
