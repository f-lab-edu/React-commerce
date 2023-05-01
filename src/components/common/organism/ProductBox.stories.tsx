import type { StoryObj } from '@storybook/react';
import ProductBox from './ProductBox';

export default {
  title: 'productBox',
  component: ProductBox,
};

type Story = StoryObj<typeof ProductBox>;

export const Default: Story = {
  args: {
    imageUrl:
      'https://st.kakaocdn.net/thumb/C375x375.fjpg/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fshoppingstore%2Fproduct%2F20230424165059_4e004def37fd4557a016d9f8ffba34ea.jpg',
    groupDiscountDisplayable: true,
    discountedPrice: 30000,
    originalPrice: 50000,
    freeDelivery: true,
    label: '톡딜특가',
    productName: '요를레이히 감귤',
    profiles: [
      'https://st.kakaocdn.net/shoppingstore/random/profile_420.png',
      'https://st.kakaocdn.net/shoppingstore/random/profile_115.png',
      'https://st.kakaocdn.net/shoppingstore/random/profile_379.png',
    ],
    groupDiscountUserCount: 1803,
  },
};
