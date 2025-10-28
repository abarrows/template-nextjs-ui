import React from 'react';
import Heading from './Heading';

export default {
  component: Heading,
  tags: ['autodocs'],
};

function Template(args) {
  return (
    <>
      <style>
        {`
          .heading {
            font-family: sans-serif;
            font-weight: bold;
            color: rgb(220 68 5);
          }
        `}
      </style>
      <Heading {...args} />
    </>
  );
}

export const Default = Template.bind({});
Default.args = {
  Element: 'h1',
  children: 'Lorem ipsum dolor',
  href: '#',
  ariaLabel: 'Lorem ipsum dolor',
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  children: 'Heading with styling',
  className: 'heading',
  ariaLabel: 'Lorem ipsum dolor',
};

export const WithElement = Template.bind({});
WithElement.args = {
  Element: 'h4',
  children: 'Featuring: H4',
  ariaLabel: 'Lorem ipsum dolor',
};
