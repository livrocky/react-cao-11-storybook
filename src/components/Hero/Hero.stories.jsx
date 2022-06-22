import React from 'react';
import Notification from './Hero';

export default {
  title: 'Notification',
  component: Notification,
};

const Template = (args) => <Notification {...args} />;

// funcijos kopija
export const DangerAlertArgs = Template.bind({});
DangerAlertArgs.args = {
  variant: 'danger',
  children: 'This is a danger alert',
};

export const WarningAlertArgs = Template.bind({});
DangerAlertArgs.args = {
  variant: 'warning',
  children: 'This is warning alert',
};
