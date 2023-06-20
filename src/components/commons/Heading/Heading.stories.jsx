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
  children: 'Lorem ipsum dolor',
  href: '#',
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  children: 'Heading with styling',
  className: 'heading',
};

export const WithElement = Template.bind({});
WithElement.args = {
  Element: 'h4',
  children: 'Featuring: H4',
};
