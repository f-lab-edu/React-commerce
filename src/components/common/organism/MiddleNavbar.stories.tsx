import type { StoryObj } from '@storybook/react';
import { MiddleNavbar } from './MiddleNavbar';

export default {
  title: 'MiddleNavbar',
  component: MiddleNavbar,
};

type Story = StoryObj<typeof MiddleNavbar>;

export const Default: Story = {
  args: {},
};
