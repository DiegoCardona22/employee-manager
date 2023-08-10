// @packages
import { ComponentMeta, ComponentStory } from '@storybook/react';

// @scripts
import PopupAtm from './index';

// Story placement in the story list
export default {
  title: 'Components/Atoms/PopupAtm',
  component: PopupAtm,
} as ComponentMeta<typeof PopupAtm>;

const Template: ComponentStory<typeof PopupAtm> = (args) => (
  <PopupAtm
    {...args}
    onCancel={() => {}}
    onConfirm={() => {}}
    open
  />
);

// Story #1
export const Default = Template.bind({});
Default.args = {
  text: 'this is a test text',
};
