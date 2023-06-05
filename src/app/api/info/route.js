import { NextResponse } from 'next/server';

// eslint-disable-next-line import/prefer-default-export
export async function GET() {
  const nextPublicVariables = () => {
    // eslint-disable-next-line no-unused-vars
    const regexMatches = Object.entries(process.env).filter(([key, value]) =>
      /NEXT_PUBLIC/.test(key)
    );
    return Object.fromEntries(regexMatches);
  };

  return NextResponse.json({
    version: process.env.APP_VERSION,
    debug: {
      // Selected internal data that is useful for debugging
      // Do NOT reveal secrets here!
      nodeEnvironment: process.env.NODE_ENV,
      appEnvironment: process.env.DEPLOY_ENV,
      baseUrl: process.env.BASE_URL,
      serviceUrl: process.env.API_SERVICE_URL,
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
