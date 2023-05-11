import ProductBoxTag from '@components/common/atom/ProductBoxTag';
import type { StoryObj } from '@storybook/react';

export default {
  title: 'productTag',
  component: ProductBoxTag,
};

type Story = StoryObj<typeof ProductBoxTag>;

export const Default: Story = {
  args: {
    content: '톡딜특가',
  },
};
