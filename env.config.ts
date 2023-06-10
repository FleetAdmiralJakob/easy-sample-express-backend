import dotenv from "dotenv";
dotenv.config();

export const jwtSecret: string | undefined = process.env.JWT_SECRET;
// ... add other environment variables as needed
