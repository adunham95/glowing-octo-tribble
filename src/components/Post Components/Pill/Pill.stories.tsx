import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Pill from './';

export default {
  title: 'Post Component/Pill',
  component: Pill,
  argTypes: {
    color: { control: 'color' },
  },
// eslint-disable-next-line prettier/prettier
} as ComponentMeta<typeof Pill>;

const Template: ComponentStory<typeof Pill> = (args) => <Pill {...args}/>

export const Default = Template.bind({});
Default.args = {
    text: "Test",
};