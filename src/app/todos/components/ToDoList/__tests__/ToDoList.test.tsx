import { describe, expect, it } from 'vitest';
import { screen, render } from '@/testing/utility';

import { ToDoList } from '../ToDoList';
import { Todo } from '@prisma/client';

describe('ToDoList', () => {
  const janeDoe: Todo = {
    id: 'id1',
    task: 'Jane',
    created: new Date(2024, 10, 1, 12),
    completed: false,
    end: null,
  };

  const jimLee: Todo = {
    id: 'id2',
    task: 'Jim',
    created: new Date(2024, 10, 1, 13),
    completed: true,
    end: null,
  };

  const todos = [janeDoe, jimLee];

  it.each(['Task', 'Created'])(
    `should have %s data value in header row`,
    (val) => {
      // Arrange / Given a Setup
      render(<ToDoList todos={todos} />);
      const headerLabel = screen.getByText(val, { selector: 'th' });
      // Assert on Expectations
      expect(headerLabel).toBeVisible();
    }
  );

  it.each([
    [janeDoe.task, 'a'],
    [janeDoe.created.toUTCString(), 'td'],
  ])(`should have %s data value in row`, (val, selector) => {
    // Arrange / Given a Setup
    render(<ToDoList todos={todos} />);
    const dataPt = screen.getByText(val, { selector, exact: false });
    // Assert on Expectations
    expect(dataPt).toBeVisible();
  });
});
