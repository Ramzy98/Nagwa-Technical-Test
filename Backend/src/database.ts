import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

let database: Pool;

const { POSTGRES_HOST, POSTGRES_DB_NAME, POSTGRES_USER, POSTGRES_PASSWORD } = process.env;

database = new Pool({
  host: POSTGRES_HOST,
  database: POSTGRES_DB_NAME,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
}); // Create database connection

export default database;
