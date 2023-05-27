const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../env.config');

class AuthService {
  static async register(data) {
    const { email } = data;
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt);
    let user = await prisma.user.create({
      data
    });
    const plainUser = JSON.parse(JSON.stringify(user));
    data.accessToken = jwt.sign(plainUser, jwtSecret, { expiresIn: '1h' });
    return data;
  }
}

module.exports = AuthService;
