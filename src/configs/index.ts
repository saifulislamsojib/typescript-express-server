import env from "dotenv";

// env config
env.config();

const configs = {
  port: process.env.PORT || 5000,
  origin: "*",
  uri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URL}/${process.env.DB_NAME}?authSource=admin`,
  jwt_secret: process.env.JWT_SECRET || "",
  jwt_expires: 182 * 24 * 60 * 60,
} as const;

export default configs;
