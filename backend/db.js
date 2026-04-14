import dotenv from 'dotenv';
dotenv.config({ path: './backend/.env' });

import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});