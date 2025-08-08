import { Resident } from '@/app/_lib/definitions';

type ResidentsTableProps = {
  residents: Resident[];
};

export default function ResidentsTable({ residents }: ResidentsTableProps) {
  return (
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
  );
}
