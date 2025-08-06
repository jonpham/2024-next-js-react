import { apiClient } from '@/app/services/todo';
import { Todo } from '@prisma/client';
import Link from 'next/link';
import EditToDoForm from '../components/EditToDoForm';

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const { id } = params;

  /** NOTE:
   * This exemplifies a API Path fetch from server component fetch using PRISMA client
   */
  const todo: Todo | string = await apiClient.getById(id);

  return (
    <>
      <Link
        href="/todos"
        className="text-blue-600 text-2xl underline hover:text-blue-1000"
      >
        Back to ToDo List
      </Link>
      <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
        <strong>ToDo Detailed View</strong>
        {" Here you'll be able to view and edit a current todo."}
      </p>
      {typeof todo === 'string' ? todo : <EditToDoForm todo={todo} />}
    </>
  );
}
