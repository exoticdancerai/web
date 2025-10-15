import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendWaitlistEmail } from "./gmail";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/waitlist", async (req, res) => {
    try {
      const { name, email } = req.body;
      
      if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required" });
      }

      await sendWaitlistEmail(name, email);
      
      res.json({ success: true, message: "Waitlist signup received" });
    } catch (error) {
      console.error("Error sending waitlist email:", error);
      res.status(500).json({ error: "Failed to process waitlist signup" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
