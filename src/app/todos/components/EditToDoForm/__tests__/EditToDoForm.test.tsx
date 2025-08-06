import { render, screen } from '@/testing/utility';
import { describe, expect, it } from 'vitest';

import { ToDo } from '@prisma/client';
import { EditToDoForm } from '../EditToDoForm';

describe('EditToDoForm', () => {
  const janeDoe: ToDo = {
    id: 'id1',
    first_name: 'Jane',
    last_name: 'Doe',
    check_in_time: new Date(2024, 10, 1, 12),
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
