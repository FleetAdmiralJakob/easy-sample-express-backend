import express from "express";
import authService from "../services/auth.service";
import * as z from "zod";

const router = express.Router();

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(72),
});

router.post("/register", async (req, res) => {
  try {
    const { email, password } = registerSchema.parse(req.body);
    const userData = await authService.register({ email, password });
    res.status(201).json(userData);
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ message: error.message });
      console.error(error);
    } else {
      res.status(500).json({ message: error.message });
      console.error(error);
    }
  }
});

export default router;
