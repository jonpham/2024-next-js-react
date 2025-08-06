import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { ToDoList } from '../ToDoList';
import { Todo } from '@prisma/client';

const meta = {
  title: 'components/ToDoList',
  component: ToDoList,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    todos: [],
  },
} satisfies Meta<typeof ToDoList>;

export default meta;
type Story = StoryObj<typeof meta>;

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

export const SingleToDo: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByText(janeDoe.task, { selector: 'td a' });
    await expect(el).toBeVisible();
  },
  args: {
    todos: [janeDoe],
  },
};

export const MultipleToDos: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByText(jimLee.task, { selector: 'td a' });
    await expect(el).toBeVisible();
  },
  args: {
    todos: [janeDoe, jimLee],
  },
};
