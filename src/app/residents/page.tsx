import { residents as residentsTable } from '@/db/schema';
import { drizzle } from 'drizzle-orm/libsql';

const db = drizzle(process.env.DB_FILE_NAME!);

export default async function ResidentsPage() {
  const residents = await db.select().from(residentsTable);

  return <p>{JSON.stringify(residents)}</p>;
}
