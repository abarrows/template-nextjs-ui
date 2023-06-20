import React from 'react';

import SiteLink from './SiteLink';

export default {
  component: SiteLink,
  tags: ['autodocs'],
};

function Template(args) {
  return (
    <>
      <style>
        {`
          .link {
            display: inline-block;
            padding: 12px;
            font-family: sans-serif;
            font-weight: bold;
            color: rgb(220 68 5);
            border: 1px solid rgb(220 68 5);
            border-radius: 5px;
            transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
          }
        `}
      </style>
      <SiteLink {...args} />
    </>
  );
}

export const Default = Template.bind({});
Default.args = {
  children: 'Link',
  href: '#',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled link',
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  children: 'Link with styling',
  href: '#',
  className: 'link',
};

export const WithEvent = Template.bind({});
WithEvent.args = {
  children: 'Link with a click function',
  href: '#',
  // eslint-disable-next-line no-alert
  onClick: () => alert('Clicky clicky'),
};

export const WithExternalUrl = Template.bind({});
WithExternalUrl.args = {
  children: 'Link offsite',
  href: 'https://www.andrewsmcmeel.com/',
  openInNewTab: true,
};
