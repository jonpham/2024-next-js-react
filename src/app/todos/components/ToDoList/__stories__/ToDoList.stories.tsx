import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { ToDoList } from '../ToDoList';
import { ToDo } from '@prisma/client';

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

const janeDoe: ToDo = {
  id: 'id1',
  first_name: 'Jane',
  last_name: 'Doe',
  check_in_time: new Date(2024, 10, 1, 12),
};

const jimLee: ToDo = {
  id: 'id2',
  first_name: 'Jim',
  last_name: 'Lee',
  check_in_time: new Date(2024, 10, 1, 13),
};

export const SingleToDo: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByText(janeDoe.last_name, { selector: 'td' });
    await expect(el).toBeVisible();
  },
  args: {
    todos: [janeDoe],
  },
};

export const MultipleToDos: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByText(jimLee.first_name, { selector: 'td' });
    await expect(el).toBeVisible();
  },
  args: {
    todos: [janeDoe, jimLee],
  },
};
