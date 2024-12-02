import { Student } from '@prisma/client';
import CreateStudentForm from '../components/CreateStudentForm';
import StudentList from '../components/StudentList';
import prisma from '@/app/lib/prisma';

export default async function Page() {
  // This is a server-only behavior
  const students: Student[] = await prisma?.student.findMany() || [];

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Student Catalog.</strong>
            {" Here you'll be able to add and view current students."}
          </p>
          <StudentList students={students} />
          <p
            className={`text-lg  text-gray-1000 md:text-3lg md:leading-normal`}
          >
            <strong>Create a Student</strong>
          </p>
          <CreateStudentForm />
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
        </div>
      </div>
    </main>
  );
}
