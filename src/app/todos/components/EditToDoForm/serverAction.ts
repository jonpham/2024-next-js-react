'use server';

import todoservice from '@/app/services/todo';
import { ToDo } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

async function upsertToDo(todo: ToDo, formData: FormData) {
  const formFirstName = formData.get('first-name')?.toString();
  const formLastName = formData.get('last-name')?.toString();

  const todoFromForm: Omit<ToDo, 'check_in_time'> = {
    ...todo,
    ...(formFirstName ? { first_name: formFirstName } : {}),
    ...(formLastName ? { last_name: formLastName } : {}),
  };

  await todoservice.update(todoFromForm);

  revalidatePath('/todos');
  redirect('/todos');
}

async function deleteToDo(todoId: string) {
  console.log('deleting todo', todoId);
  await todoservice.delete(todoId);

  revalidatePath('/todos');
  redirect('/todos');
}

export { deleteToDo, upsertToDo };
