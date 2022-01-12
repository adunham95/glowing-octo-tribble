import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Pill, { EPillType } from './';

export default {
  title: 'Post Component/Pill',
  component: Pill,
// eslint-disable-next-line prettier/prettier
} as ComponentMeta<typeof Pill>;

const Template: ComponentStory<typeof Pill> = (args) => <Pill {...args}/>

export const Default = Template.bind({});
Default.args = {
    text: "Test",
};

export const Info = Template.bind({});
Info.args = {
    text: "Test",
    pillType: EPillType.INFO,
};

export const Warn = Template.bind({});
Warn.args = {
    text: "Test",
    pillType: EPillType.WARN,
};

export const Error = Template.bind({});
Error.args = {
    text: "Test",
    pillType: EPillType.ERROR,
};

export const Success = Template.bind({});
Success.args = {
    text: "Test",
    pillType: EPillType.SUCCESS,
};

export const Custom = Template.bind({});
Custom.args = {
    text: "Test",
    pillType: EPillType.CUSTOM,
    style: {
      border: 'border-pink-500',
      text: 'text-pink-500',
    },
};