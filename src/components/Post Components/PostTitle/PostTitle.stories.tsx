import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PostTitle from './PostTitle';

export default {
  title: 'Post Component/PostTitle',
  component: PostTitle,
// eslint-disable-next-line prettier/prettier
} as ComponentMeta<typeof PostTitle>;

const Template: ComponentStory<typeof PostTitle> = (args) => <PostTitle {...args}/>

export const Primary = Template.bind({});
Primary.args = {
    title: "Hello World",
};