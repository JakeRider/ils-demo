import { residents as residentsTable } from '@/db/schema';
import { drizzle } from 'drizzle-orm/libsql';

const db = drizzle(process.env.DB_FILE_NAME!);

export default async function ResidentsPage() {
  const residents = await db.select().from(residentsTable);

  return (
    <main className="container">
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Title</th>
            <th scope="col">Hometown</th>
          </tr>
        </thead>
        <tbody>
          {residents.map((resident) => (
            <tr key={resident.id}>
              <th scope="row">{resident.name}</th>
              <td>{resident.age}</td>
              <td>{resident.title}</td>
              <td>{resident.hometown}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
