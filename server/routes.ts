import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendWaitlistEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/email/check", async (req, res) => {
    try {
      const hasApiKey = !!process.env.RESEND_API_KEY;
      
      res.json({ 
        success: true, 
        configured: hasApiKey,
        service: "Resend",
        message: hasApiKey ? "Email service is configured" : "Resend API key not found" 
      });
    } catch (error: any) {
      console.error("Email check error:", error);
      res.status(500).json({ 
        success: false, 
        configured: false,
        error: error.message,
        message: "Email check failed" 
      });
    }
  });

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
