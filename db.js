import "dotenv/config";
import postgres from "postgres";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error("DATABASE_URL não definida no .env!");
  process.exit(1);
}

export const sql = postgres(DATABASE_URL, { ssl: "require" });
