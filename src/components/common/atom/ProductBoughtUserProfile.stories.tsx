import type { StoryObj } from '@storybook/react';
import ProductBoughtUserProfile from './ProductBoughtUserProfile';

export default {
  title: 'productBoughtUserProfile',
  component: ProductBoughtUserProfile,
};

type Story = StoryObj<typeof ProductBoughtUserProfile>;

export const Default: Story = {
  args: {
    profileUrl: 'https://st.kakaocdn.net/shoppingstore/random/profile_420.png',
    index: 0,
  },
};
