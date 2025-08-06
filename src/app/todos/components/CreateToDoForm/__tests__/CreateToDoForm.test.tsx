import { describe, expect, it } from 'vitest';
import { screen, render } from '@/testing/utility';

import { CreateToDoForm } from '../CreateToDoForm';

describe('CreateToDoForm', () => {
  it('should have btn to create todo', () => {
    // Arrange / Given a Setup
    render(<CreateToDoForm />);
    const btn = screen.queryByRole('button', { name: 'Add ToDo' });
    // Assert on Expectations
    expect(btn).not.toBeDisabled();
  });
});
