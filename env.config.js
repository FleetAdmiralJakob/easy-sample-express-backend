const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  jwtSecret: process.env.JWT_SECRET,
  // ... add other environment variables as needed
};