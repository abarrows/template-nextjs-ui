import React from 'react';

import { render, screen } from '@testing-library/react';

import SiteLink from './SiteLink';

describe('SiteLink', () => {
  test('renders SiteLink with an href', () => {
    render(<SiteLink href='/'>Hello World</SiteLink>);

    const siteLink = screen.getByRole('link', { name: /hello world/i });

    expect(siteLink).toBeVisible();
    expect(siteLink.href).toContain('/');
    expect(siteLink.rel).toBeFalsy();
    expect(siteLink.target).toBeFalsy();
    expect(siteLink).toHaveClass('link');
  });

  test('renders SiteLink with a div when no href is provided', () => {
    render(<SiteLink>Not a link</SiteLink>);

    const siteLink = screen.getByText(/not a link/i);

    expect(siteLink).toBeVisible();
    expect(siteLink.href).toBeFalsy();
    expect(siteLink).toHaveClass('link');
  });

  test('renders SiteLink with new tab attributes when an external href is provided', () => {
    render(
      <SiteLink href='https://puzzlesociety.com/' openInNewTab>
        Fun and Games
      </SiteLink>,
    );

    const siteLink = screen.getByRole('link', { name: /fun and games/i });

    expect(siteLink).toBeVisible();
    expect(siteLink.href).toContain('puzzlesociety.com');
    expect(siteLink.rel).toContain('noopener noreferrer');
    expect(siteLink.target).toContain('_blank');
    expect(siteLink).toHaveClass('link');
  });
});
