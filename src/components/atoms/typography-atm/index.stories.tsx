// @packages
import { ComponentMeta, ComponentStory } from '@storybook/react';

// @scripts
import TypographyAtm from './index';

// Story placement in the story list
export default {
  title: 'Components/Atoms/TypographyAtm',
  component: TypographyAtm,
} as ComponentMeta<typeof TypographyAtm>;

const Template: ComponentStory<typeof TypographyAtm> = (args) => (
  <TypographyAtm {...args} />
);

// Story #1
export const WithVariantH2AndSemibold = Template.bind({});
WithVariantH2AndSemibold.args = {
  children: 'Layout headings - semibold',
  variant: 'h2',
  fontWeight: 600,
};

// Story #2
export const WithVariantH2AndRegular = Template.bind({});
WithVariantH2AndRegular.args = {
  children: 'Layout headings - regular',
  variant: 'h2',
  fontWeight: 400,
};

// Story #3
export const WithVariantH2AndLight = Template.bind({});
WithVariantH2AndLight.args = {
  children: 'Layout headings - light',
  variant: 'h2',
  fontWeight: 300,
};

// Story #4
export const WithVariantH3AndSemibold = Template.bind({});
WithVariantH3AndSemibold.args = {
  children: 'Section headings - semibold',
  variant: 'h3',
  fontWeight: 600,
};

// Story #5
export const WithVariantH3AndRegular = Template.bind({});
WithVariantH3AndRegular.args = {
  children: 'Section headings - regular',
  variant: 'h3',
  fontWeight: 400,
};

// Story #6
export const WithVariantH4AndSemibold = Template.bind({});
WithVariantH4AndSemibold.args = {
  children: 'Section headings - semibold',
  variant: 'h4',
  fontWeight: 600,
};

// Story #7
export const WithVariantH4AndRegular = Template.bind({});
WithVariantH4AndRegular.args = {
  children: 'Section headings - regular',
  variant: 'h4',
  fontWeight: 400,
};

// Story #8
export const WithVariantH5AndSemibold = Template.bind({});
WithVariantH5AndSemibold.args = {
  children: 'Section headings - semibold',
  variant: 'h5',
  fontWeight: 600,
};

// Story #9
export const WithVariantH5AndRegular = Template.bind({});
WithVariantH5AndRegular.args = {
  children: 'Section headings - regular',
  variant: 'h5',
  fontWeight: 400,
};

// Story #10
export const WithVariantH6AndRegular = Template.bind({});
WithVariantH6AndRegular.args = {
  children: 'Section headings - regular',
  variant: 'h6',
  fontWeight: 400,
};

// Story #11
export const WithVariantBody2AndLight = Template.bind({});
WithVariantBody2AndLight.args = {
  children: 'Body text - light',
  variant: 'body2',
  fontWeight: 300,
};
