import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;
// funcijos kopija
export const SecondaryButtonArgs = Template.bind({});
SecondaryButtonArgs.args = {
  variant: 'secondary',
  children: 'Click me args',
};

export const PrimaryButtonArgs = Template.bind({});
PrimaryButtonArgs.args = {
  variant: 'primary',
  children: 'Click me args',
};
