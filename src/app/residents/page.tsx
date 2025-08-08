import { residents } from '@/db/schema';
import { drizzle } from 'drizzle-orm/libsql';
import ResidentsTable from '@/app/residents/_components/ResidentsTable';

const db = drizzle(process.env.DB_FILE_NAME!);

export default async function ResidentsPage() {
  const allResidents = await db.select().from(residents);

  return (
    <main className="container">
      <h1>All Residents</h1>
      <ResidentsTable residents={allResidents} />
    </main>
  );
}
