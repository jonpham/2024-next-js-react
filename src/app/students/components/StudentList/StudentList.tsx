import type { Student } from '@prisma/client';
import Link from 'next/link';

function StudentList(props: { students: Student[] }) {
  return (
    <table>
      <thead className={`text-left`}>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Check in time</th>
        </tr>
      </thead>
      <tbody className={`text-left`}>
        {props.students.map((student) => (
          <tr key={student.id}>
            <td>
              <Link href={`/students/${student.id}`}
                    className="text-blue-600 hover:underline"
              >
                {student.first_name}
              </Link>
            </td>
            <td>{student.last_name}</td>
            <td>{student.check_in_time.toUTCString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export { StudentList };
