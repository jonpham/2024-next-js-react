'use client';

import './CreateToDoForm.css';

import Button from '../Button';
import { apiClient } from '@/app/services/todo';
import { Todo } from '@prisma/client';
import { redirect } from 'next/navigation';
import { useState } from 'react';

function CreateToDoForm() {
  const [task, setTask] = useState('');

  /** NOTE:
   * This exemplifies a server component POST using API client
   */
  const createToDo = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const formToDo: Omit<Todo, 'id' | 'created'> = {
      task,
      completed: false,
      end: null,
    };

    try {
      await apiClient.create(formToDo);
    } catch (e) {
      console.error(e);
    }

    redirect('/todos');
  };

  return (
    <form onSubmit={createToDo}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Create ToDo */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            ToDo Name
          </label>
          <div className="relative mt-2 rounded-md" id="name">
            <div className="relative">
              <input
                id="task"
                name="task"
                type="string"
                placeholder="Task"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                onChange={(e) => setTask(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Button type="submit">Add ToDo</Button>
        <button
          type="reset"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export { CreateToDoForm };
