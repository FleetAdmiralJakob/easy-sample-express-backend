import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { jwtSecret } from "../env.config";

const prisma = new PrismaClient();

interface RegisterData {
  email: string;
  password: string;
}

interface ExportRegisterData {
  email: string;
  password: string;
  accessToken: string;
}

class AuthService {
  public static async register(
    data: RegisterData
  ): Promise<ExportRegisterData> {
    const { email } = data;
    const salt = await bcrypt.genSalt(16);
    data.password = await bcrypt.hash(data.password, salt);
    let user = await prisma.user.create({
      data,
    });
    const plainUser = JSON.parse(JSON.stringify(user));
    const accessToken = jwt.sign(
      { id: plainUser.id, email: plainUser.email },
      jwtSecret as string,
      {
        expiresIn: "1h",
      }
    );
    return { ...data, accessToken };
  }
}

export default AuthService;
