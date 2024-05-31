import { NextResponse } from 'next/server';

// TODO: it's generally considered bad practice for security to expose your
// package.json, figure out a safer way to get this value and make it easily
// accessible, see https://github.com/axelpale/genversion
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('package.json');

async function getNextPublicVariables() {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const regexMatches = Object.entries(process.env).filter(([key, value]) =>
    /NEXT_PUBLIC_/.test(key),
  );
  const data = await Object.fromEntries(regexMatches.sort());
  return () => data;
}

export async function GET() {
  const nextPublicVariables = await getNextPublicVariables();

  return NextResponse.json({
    version: packageJson.version,
    debug: {
      // Selected internal data that is useful for debugging
      // Do NOT reveal secrets here!
      nodeEnvironment: process.env.NODE_ENV,
      appEnvironment: process.env.NEXT_PUBLIC_DEPLOY_ENV,
      baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
      serviceUrl: process.env.SERVICE_ORCHESTRATOR_URL,
    },
    public: {
      // Print out all NEXT_PUBLIC_ variables that exist (does not catch
      // null/undefined variables)
      ...nextPublicVariables(),
    },
    links: {
      health: '/api/health',
    },
  });
}

// Do not precompile this route
export const dynamic = 'force-dynamic';
