import type { StoryObj } from '@storybook/react';
import CarouselBtn from './CarouselBtn';

export default {
  title: 'carouselBtn',
  component: CarouselBtn,
};

type Story = StoryObj<typeof CarouselBtn>;

export const leftBtn: Story = {
  args: {
    direction: 'left',
    click: () => {
      alert('click');
    },
  },
};

export const rightBtn: Story = {
  args: {
    direction: 'right',
    click: () => {
      alert('click');
    },
  },
};
