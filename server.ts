import express from "express";
import authRoutes from "./routes/auth";
import dotenv from "dotenv";

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
