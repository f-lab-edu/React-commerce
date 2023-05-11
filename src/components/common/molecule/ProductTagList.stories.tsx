import type { StoryObj } from '@storybook/react';
import ProductTagList from './ProductTagList';

export default {
  title: 'ProductTagList',
  component: ProductTagList,
};

type Story = StoryObj<typeof ProductTagList>;

export const Default: Story = {
  args: {
    freeDelivery: true,
    label: '15% 할인쿠폰',
  },
};
