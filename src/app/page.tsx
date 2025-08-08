import { usersTable } from '@/db/schema';
import { drizzle } from 'drizzle-orm/libsql';
import { eq } from 'drizzle-orm';

const db = drizzle(process.env.DB_FILE_NAME!);

export default async function Home() {
  return <p>Hello, world!</p>;
}
