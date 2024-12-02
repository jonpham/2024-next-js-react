

import { describe, expect, it } from 'vitest';
import { screen, render } from '@/testing/utility';

import { EditStudentForm } from '../EditStudentForm';

describe('EditStudentForm', () => {
  it('should have btn to submit updates to student', () => {
    // Arrange / Given a Setup
    render(<EditStudentForm students={[]} />);
    const btn = screen.queryByRole('button', { name: 'Update Student' });
    // Assert on Expectations
    expect(btn).not.toBeDisabled();
  });

  it('should have btn to delete student', () => {
    // Arrange / Given a Setup
    render(<EditStudentForm students={[]} />);
    const btn = screen.queryByRole('button', { name: 'Delete Student' });
    // Assert on Expectations
    expect(btn).not.toBeDisabled();
  });
});
