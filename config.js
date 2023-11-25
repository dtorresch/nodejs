import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const DB_HOST = process.env.DB_HOST || "db4free.net";
export const DB_USER = process.env.DB_USER || "prueba002";
export const DB_PASSWORD = process.env.DB_PASSWORD || "T76Ls%P-YnV";
export const DB_DATABASE = process.env.DB_DATABASE || "prueba002";
export const DB_PORT = process.env.DB_PORT || 3306;
