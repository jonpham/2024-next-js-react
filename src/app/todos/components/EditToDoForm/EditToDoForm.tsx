import './EditToDoForm.css';

import Link from 'next/link';
import Button from '../Button';
import { Todo } from '@prisma/client';
import ToDoList from '../ToDoList';
import { deleteToDo, upsertToDo } from './serverAction';

function EditToDoForm({ todo }: { todo: Todo }) {
  /** NOTE:
   * This exemplifies a direct server component UPDATE using PRISMA client
   */
  const upsertToDoWithProp = upsertToDo.bind(null, todo);
  const deleteToDoWithId = deleteToDo.bind(null, todo.id);

  return (
    <>
      <form action={upsertToDoWithProp}>
        <div className="rounded-md bg-gray-50 p-4 md:p-6">
          {/* Details */}
          <ToDoList todos={[todo]} />
          {/* Form */}
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              Update ToDo Name
            </label>
            <div className="relative mt-2 rounded-md" id="name">
              <div className="relative">
                <input
                  id="task"
                  name="task"
                  type="string"
                  defaultValue={todo.task}
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <Button type="submit">Update ToDo</Button>
          <Link
            href="/todos"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
        </div>
      </form>
      <Button onClick={deleteToDoWithId}>Delete ToDo</Button>
    </>
  );
}

export { EditToDoForm };
