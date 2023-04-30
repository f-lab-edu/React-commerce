import type { StoryObj } from '@storybook/react';
import ProductBoxImage from './ProductBoxImage';

export default {
  title: 'productBoxImage',
  component: ProductBoxImage,
};

type Story = StoryObj<typeof ProductBoxImage>;

export const Default: Story = {
  args: {
    src: 'https://st.kakaocdn.net/thumb/C375x375.fjpg/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fshoppingstore%2Fproduct%2F20230424165059_4e004def37fd4557a016d9f8ffba34ea.jpg',
    alt: '이미지 설명입니다.',
  },
};
