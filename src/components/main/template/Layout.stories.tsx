import type { StoryObj } from '@storybook/react';
import Layout from './Layout';

export default {
  title: 'MainTemplate',
  component: Layout,
};

type Story = StoryObj<typeof Layout>;

export const Default: Story = {};
