import React from 'react';
import Input from './Input';

export default {
  title: 'FORM/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const MainInput = Template.bind({});
MainInput.args = {
  placeholder: 'Enter text here',
};
export const DarkInput = Template.bind({});
DarkInput.args = {
  ...MainInput.args,
  color: 'dark',
};
export const TextArea = Template.bind({});
TextArea.args = {
  ...MainInput.args,
  color: 'dark',
};
