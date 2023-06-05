import { NextResponse } from 'next/server';

// eslint-disable-next-line import/prefer-default-export
export async function GET() {
  // Verify that the basics are working by checking important URLs and logging any failures
  const checkUrls = [process.env.BASE_URL, `${process.env.BASE_URL}/api/info`];
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
