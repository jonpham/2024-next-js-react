import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { CreateToDoForm } from '../CreateToDoForm';

const meta = {
  title: 'components/CreateToDoForm',
  component: CreateToDoForm,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    todos: [],
  },
} satisfies Meta<typeof CreateToDoForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Exists: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByRole('button', { name: 'Add ToDo' });
    await expect(el).toBeVisible();
  },
};
