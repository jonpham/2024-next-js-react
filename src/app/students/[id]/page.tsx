import { Student } from '@prisma/client';
import prisma from '@/app/lib/prisma';
import EditStudentForm from '../components/EditStudentForm';

export default async function Page(props: { params: Promise<{ id: string }> }) {
  // This is a server-only behavior
  const params = await props.params;
  const { id } = params;

  const student: Student | null | undefined = await prisma?.student.findUnique({
    where: { id },
  });

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Student Detailed View</strong>
            {" Here you'll be able to view and edit a current student."}
          </p>
          {!!student ? (
            <EditStudentForm student={student} />
          ) : (
            <p>Unable to Find Student</p>
          )}
        </div>
      </div>
    </main>
  );
}
