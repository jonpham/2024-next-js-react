import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { StudentFields } from '../StudentFields';

const meta = {
  title: 'components/StudentFields',
  component: StudentFields,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    students: [],
  },
} satisfies Meta<typeof StudentFields>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Exists: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByRole('button', { name: 'Create Student' });
    await expect(el).toBeVisible();
  },
};
