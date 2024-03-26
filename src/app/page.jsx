import React from 'react';

import consola from 'consola';

import WelcomeUser from 'src/components/sections/WelcomeUser';

// const consola = require('consola');

export const dynamic = 'force-dynamic';
export const revalidate = 0;
function HomePage() {
  consola.info('Using consola 3.0.0');
  consola.start('Building project...');
  consola.warn('A new version of consola is available: 3.0.1');
  consola.success('Project built!');
  consola.error(new Error('This is an example error. Everything is fine!'));
  consola.box('I am a simple box');
  consola.error('new error');
  consola.debug('I am a simple box');
  consola.log('testing this out.');
  consola.log('This is a plain {consola} with an object.');
  return (
    <main>
      <WelcomeUser />
    </main>
  );
}

export default HomePage;
