import type { StoryObj } from '@storybook/react';
import ProductBoxLike from './ProductBoxLike';

export default {
  title: 'productBoxLike',
  component: ProductBoxLike,
};

type Story = StoryObj<typeof ProductBoxLike>;

export const Default: Story = {
  args: {},
};
