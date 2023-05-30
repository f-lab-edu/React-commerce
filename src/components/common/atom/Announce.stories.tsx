import type { StoryObj } from '@storybook/react';
import Announce from './Announce';

export default {
  title: 'AnnounceModal',
  component: Announce,
};

type Story = StoryObj<typeof Announce>;

export const Default: Story = {
  args: {
    content: '장바구니에 상품이 담겼습니다',
    link: '/pay',
  },
};
