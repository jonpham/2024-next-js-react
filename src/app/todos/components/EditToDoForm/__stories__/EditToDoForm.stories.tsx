import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { Todo } from '@prisma/client';
import { EditToDoForm } from '../EditToDoForm';

const janeDoe: Todo = {
  id: 'id1',
  task: 'Jane',
  created: new Date(2024, 10, 1, 12),
  completed: false,
  end: null,
};

const meta = {
  title: 'components/EditToDoForm',
  component: EditToDoForm,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    todo: janeDoe,
  },
} satisfies Meta<typeof EditToDoForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Exists: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByRole('button', { name: 'Update ToDo' });
    await expect(el).toBeVisible();
  },
};
