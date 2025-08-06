import type { Todo } from '@prisma/client';
import Link from 'next/link';

function ToDoList(props: { todos: Todo[] }) {
  return (
    <table>
      <thead className={`text-left`}>
        <tr>
          <th>Task</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody className={`text-left`}>
        {props.todos.map((todo) => (
          <tr key={todo.id}>
            <td>
              <Link
                href={`/todos/${todo.id}`}
                className="text-blue-600 hover:underline"
              >
                {todo.task}
              </Link>
            </td>
            <td>{new Date(todo.created).toUTCString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export { ToDoList };
