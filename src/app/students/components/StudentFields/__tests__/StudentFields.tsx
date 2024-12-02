import { describe, expect, it } from 'vitest';
import { screen, render } from '@/testing/utility';

import { StudentFields } from '../StudentFields';

describe('StudentFields', () => {
  it('should have btn to create student', () => {
    // Arrange / Given a Setup
    render(<StudentFields students={[]} />);
    const btn = screen.queryByRole('button', { name: 'Create Student' });
    // Assert on Expectations
    expect(btn).not.toBeDisabled();
  });
});
