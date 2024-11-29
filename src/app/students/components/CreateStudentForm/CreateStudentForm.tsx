import './CreateStudentForm.css';

import Link from 'next/link';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import Button from './Button';

function CreateStudentForm({
  students,
}: {
  students: { id: string; name: string }[];
}) {
  return (
    <form>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* student Name */}
        <div className="mb-4">
          <label htmlFor="student" className="mb-2 block text-sm font-medium">
            Choose student
          </label>
          <div className="relative">
            <select
              id="student"
              name="studentId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select a student
              </option>
              {students.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Adding a new student?
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
        <Button type="submit">Create Student</Button>
      </div>
    </form>
  );
}

export { CreateStudentForm };
