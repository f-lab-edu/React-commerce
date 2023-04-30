import type { StoryObj } from '@storybook/react';
import ProductBoxPrice from './ProductBoxPrice';

export default {
  title: 'productBoxPrice',
  component: ProductBoxPrice,
};

type Story = StoryObj<typeof ProductBoxPrice>;

export const Default: Story = {
  args: {
    price: 10900,
  },
};
