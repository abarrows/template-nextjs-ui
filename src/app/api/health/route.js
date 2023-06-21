import { NextResponse } from 'next/server';

export async function GET() {
  // Verify that the basics are working by checking important URLs and logging any failures
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const checkUrls = [baseUrl, `${baseUrl}/api/info`];
  const failedChecks = [];
  const results = checkUrls.map(async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      failedChecks.push({
        url,
        status: response.status,
        message: response.statusText,
      });
    }
    return response.ok;
  });
  const allChecks = await Promise.all(results);
  const passed = allChecks.every((result) => result);

  return NextResponse.json({
    status: passed ? 'ok' : 'fail',
    message: passed ? 'Healthy' : failedChecks,
    links: {
      info: '/api/info',
    },
  });
}

// Do not precompile this route
export const dynamic = 'force-dynamic';

// Do not cache fetch responses
export const fetchCache = 'force-no-store';
