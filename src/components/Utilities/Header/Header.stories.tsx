import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from './Header';

export default {
  title: 'Layout/Header',
  component: Header,
// eslint-disable-next-line prettier/prettier
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args}/>

export const Primary = Template.bind({});
Primary.args = {
    pageName: "Adrian's Blog",
    navLinks: [
        { name: 'Dashboard', href: '#', current: true },
    ],
};