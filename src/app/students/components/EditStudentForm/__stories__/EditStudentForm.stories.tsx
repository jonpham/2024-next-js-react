import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { EditStudentForm } from '../EditStudentForm';

const meta = {
  title: 'components/EditStudentForm',
  component: EditStudentForm,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    students: [],
  },
} satisfies Meta<typeof EditStudentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Exists: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByRole('button', { name: 'Edit Student' });
    await expect(el).toBeVisible();
  },
};
