import './EditStudentForm.css';

import Link from 'next/link';
import Button from '../Button';
import { Student } from '@prisma/client';
import StudentList from '../StudentList';

function EditStudentForm({ student }: { student: Student }) {
  return (
    <form>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Details */}
        <StudentList students={[student]} />
        {/* Form */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Update Student
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="string"
                placeholder="Enter New Student Name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/students/create"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Update Student</Button>
        <Button type="submit">Delete Student</Button>
      </div>
    </form>
  );
}

export { EditStudentForm };
