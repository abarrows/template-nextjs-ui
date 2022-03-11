import React from 'react';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

// Helpers

// Components

export default function Home() {
  return (
    <h1>
      Welcome to <a href="/" id="onboarding">AmuProduct!</a>
    </h1>
  )
}
