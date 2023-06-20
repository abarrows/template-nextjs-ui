import React from 'react';

import { render, screen } from '@testing-library/react';

import Heading from './Heading';

describe('Heading', () => {
  test('renders Heading with the supplied text', () => {
    render(<Heading>Lorem Ipsum</Heading>);

    const text = screen.getByText(/lorem ipsum/i);

    expect(text).toBeVisible();
    expect(text).toHaveClass('heading');
  });

  test('renders Heading with the supplied element', () => {
    render(<Heading Element="h4">Lorem Ipsum</Heading>);

    const text = screen.getByRole('heading', { name: /lorem ipsum/i });

    expect(text).toBeVisible();
    expect(text.tagName).toEqual('H4');
  });
});
