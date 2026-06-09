import { neon } from '@neondatabase/serverless';

function getDb() {
  const sql = neon(process.env.DATABASE_URL!);
  return sql;
}

export { getDb };
