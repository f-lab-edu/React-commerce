import type { StoryObj } from '@storybook/react';
import ProductBuyerNumber from './ProductBuyerNumber';

export default {
  title: 'productBuyerNumber',
  component: ProductBuyerNumber,
};

type Story = StoryObj<typeof ProductBuyerNumber>;

export const Default: Story = {
  args: {
    buyer: 1000,
  },
};
