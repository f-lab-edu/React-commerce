import type { StoryObj } from '@storybook/react';
import ProductBoxAboutBoughtUser from './ProductBoxAboutBoughtUser';

export default {
  title: 'ProdcutBoxAboutBoughtUser',
  component: ProductBoxAboutBoughtUser,
};

type Story = StoryObj<typeof ProductBoxAboutBoughtUser>;

export const Default: Story = {
  args: {
    profiles: [
      'https://st.kakaocdn.net/shoppingstore/random/profile_420.png',
      'https://st.kakaocdn.net/shoppingstore/random/profile_115.png',
      'https://st.kakaocdn.net/shoppingstore/random/profile_379.png',
      'https://st.kakaocdn.net/shoppingstore/random/profile_55.png',
      'https://st.kakaocdn.net/shoppingstore/random/profile_472.png',
    ],
    groupDiscountUserCount: 1830,
  },
};
