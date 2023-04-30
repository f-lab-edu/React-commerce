import type { StoryObj } from '@storybook/react';
import ProductBoughtUserProfileList from './ProductBoughtUserProfileList';

export default {
  title: 'ProductBoughtUserProfileList',
  component: ProductBoughtUserProfileList,
};

type Story = StoryObj<typeof ProductBoughtUserProfileList>;

export const Default: Story = {
  args: {
    profileUrlList: [
      'https://st.kakaocdn.net/shoppingstore/random/profile_420.png',
      'https://st.kakaocdn.net/shoppingstore/random/profile_115.png',
      'https://st.kakaocdn.net/shoppingstore/random/profile_379.png',
    ],
  },
};
