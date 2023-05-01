import type { StoryObj } from '@storybook/react';
import SubCategorySet from './SubCategorySet';

export default {
  title: 'SubCategorySet',
  component: SubCategorySet,
};

type Story = StoryObj<typeof SubCategorySet>;

export const Default: Story = {
  args: {},
};
