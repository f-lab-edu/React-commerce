import type { StoryObj } from '@storybook/react';
import Header from './Header';

export default {
  title: 'Header',
  component: Header,
};

type Story = StoryObj<typeof Header>;
export const Default = {
  args: {},
};
