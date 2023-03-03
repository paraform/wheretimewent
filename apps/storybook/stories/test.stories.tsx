import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

const Test = () => <p>Test</p>

export default {
    title: 'Test',
    component: Test,
    argTypes: {},
  } as ComponentMeta<typeof Test>;
  
  const Template: ComponentStory<typeof Test> = (args) => <Test {...args} />;
  
  export const Component = Template.bind({});
  
  Component.args = {};
  