import { createPool } from 'mysql2/promise';
import dbConfig from "../config";

export const pool = createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

