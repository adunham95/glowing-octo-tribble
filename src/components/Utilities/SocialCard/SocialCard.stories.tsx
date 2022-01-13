import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SocialCard from './';

export default {
  title: 'Utilities/SocialCard',
  component: SocialCard,
// eslint-disable-next-line prettier/prettier
} as ComponentMeta<typeof SocialCard>;

const Template: ComponentStory<typeof SocialCard> = (args) => <SocialCard {...args}/>

export const Primary = Template.bind({});
Primary.args = {pageContext: {
    title: 'Test Title',
    description: "Test Description",
}};