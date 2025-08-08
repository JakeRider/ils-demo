import { residents } from '@/db/schema';
import { drizzle } from 'drizzle-orm/libsql';
import ResidentsTable from '@/app/residents/_components/ResidentsTable';
import { eq, ne } from 'drizzle-orm';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import styles from './page.module.css';

const db = drizzle(process.env.DB_FILE_NAME!);

type ResidentDetailsPageProps = {
  params: Promise<{
    residentId: string;
  }>;
};

export default async function ResidentDetailsPage({
  params,
}: ResidentDetailsPageProps) {
  const { residentId } = await params;

  const [resident] = await db
    .select()
    .from(residents)
    .where(eq(residents.id, Number(residentId)));

  if (!resident) notFound();

  const otherResidents = await db
    .select()
    .from(residents)
    .where(ne(residents.id, Number(residentId)));

  return (
    <main className="container">
      <header className={styles.header}>
        <Link href="/">Back</Link>
        <h1>Resident Details</h1>
      </header>
      <ul>
        <li>Name: {resident.name}</li>
        {resident.age ? <li>Age: {resident.age}</li> : null}
        <li>Title: {resident.title}</li>
        {resident.hometown ? <li>Hometown: {resident.hometown}</li> : null}
      </ul>
      <hr />
      <h2>Other Residents</h2>
      {otherResidents.length > 0 ? (
        <ResidentsTable residents={otherResidents} />
      ) : (
        <p>No other residents found.</p>
      )}
    </main>
  );
}
