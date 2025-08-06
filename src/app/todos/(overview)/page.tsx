import { Todo } from '@prisma/client';
import CreateToDoForm from '../components/CreateToDoForm';
import ToDoList from '../components/ToDoList';
import todoservice from '@/app/services/todo';

export default async function Page() {
  /** NOTE:
   * This exemplifies a direct server component fetch using PRISMA client
   */
  const todos: Todo[] | undefined | null = await todoservice.getAll();

  return (
    <>
      <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
        <strong>Welcome to ToDo Catalog.</strong>
        {" Here you'll be able to add and view current todos."}
      </p>
      {!todos ? 'No ToDos Have Checked In Yet.' : <ToDoList todos={todos} />}
      <p className={`text-lg  text-gray-1000 md:text-3lg md:leading-normal`}>
        <strong>Add a ToDo</strong>
      </p>
      <CreateToDoForm />
    </>
  );
}
