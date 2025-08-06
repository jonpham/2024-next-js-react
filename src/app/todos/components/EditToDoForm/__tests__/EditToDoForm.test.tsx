import { render, screen } from '@/testing/utility';
import { describe, expect, it } from 'vitest';

import { Todo } from '@prisma/client';
import { EditToDoForm } from '../EditToDoForm';

describe('EditToDoForm', () => {
  const janeDoe: Todo = {
    id: 'id1',
    task: 'Jane',
    created: new Date(2024, 10, 1, 12),
    completed: false,
    end: null,
  };

  it('should have btn to submit updates to todo', () => {
    // Arrange / Given a Setup
    render(<EditToDoForm todo={janeDoe} />);
    const btn = screen.queryByRole('button', { name: 'Update ToDo' });
    // Assert on Expectations
    expect(btn).not.toBeDisabled();
  });

  it('should have btn to delete todo', () => {
    // Arrange / Given a Setup
    render(<EditToDoForm todo={janeDoe} />);
    const btn = screen.queryByRole('button', { name: 'Delete ToDo' });
    // Assert on Expectations
    expect(btn).not.toBeDisabled();
  });
});
