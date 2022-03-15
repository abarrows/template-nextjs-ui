import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>AmuProduct Template</title>
      </Head>

      <main>
        <h1 className="title">
          Learn{' '}
          <a data-testid="onboarding" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className="grid">
          <a className="card" href="https://nextjs.org/docs">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a className="card" href="https://nextjs.org/learn">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            className="card"
            href="https://github.com/vercel/next.js/tree/master/examples"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a className="card" href="https://vercel.com/import">
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="Vercel Logo" className="logo" src="/vercel.svg" />
        </a>
      </footer>
    </div>
  );
}
