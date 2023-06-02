import type { StoryObj } from '@storybook/react';
import Spinner from './Spinner';

export default {
  title: 'Spinner',
  component: Spinner,
};
type Story = StoryObj<typeof Spinner>;
export const Default: Story = {
  args: {
    width: '60px',
    height: '60px',
  },
};
