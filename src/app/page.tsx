import NewResidentForm from '@/app/_components/NewResidentForm';

export default async function HomePage() {
  return (
    <main className="container">
      <h1>New Resident</h1>
      <NewResidentForm />
    </main>
  );
}
