import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Mock API Routes for Edge Functions
  app.post("/api/create-payment-intent", async (req, res) => {
    const { productSku, provinceCode } = req.body;
    
    // In a real app, you'd fetch product price from DB
    const depositAmountCents = 4900;
    
    // Simulate complex tax logic
    const taxRates: Record<string, number> = { 'ON': 0.13, 'QC': 0.14975, 'AB': 0.05, 'BC': 0.12 };
    const rate = taxRates[provinceCode] || 0.05;
    const taxAmountCents = Math.round(depositAmountCents * rate);
    
    res.json({
      clientSecret: "mock_secret_" + Math.random().toString(36).substring(7),
      depositAmountCents,
      taxAmountCents,
      totalAmountCents: depositAmountCents + taxAmountCents,
      taxType: "HST/GST",
      currency: "cad"
    });
  });

  app.post("/api/confirm-reservation", async (req, res) => {
    // Mock successful reservation
    const reservationNumber = `ASTRA-2026-${Math.floor(Math.random() * 90000) + 10000}`;
    res.json({ reservationNumber });
  });

  app.post("/api/send-confirmation-email", async (req, res) => {
    res.json({ success: true });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
