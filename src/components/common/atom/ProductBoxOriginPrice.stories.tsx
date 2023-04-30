import type { StoryObj } from '@storybook/react';
import ProductBoxOriginPrice from './ProductBoxOriginPrice';

export default {
  title: 'productOriginPrice',
  component: ProductBoxOriginPrice,
};

type Story = StoryObj<typeof ProductBoxOriginPrice>;

export const Default: Story = {
  args: {
    price: 30000,
  },
};
