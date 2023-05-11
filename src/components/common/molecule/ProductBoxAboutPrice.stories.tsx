import type { StoryObj } from '@storybook/react';
import ProductBoxAboutPrice from './ProductBoxAboutPrice';

export default {
  title: 'ProductBoxAboutPrice',
  component: ProductBoxAboutPrice,
};

type Story = StoryObj<typeof ProductBoxAboutPrice>;

export const Default: Story = {
  args: {
    specialDeal: true,
    discountPrice: 46900,
    originPrice: 55500,
  },
};
