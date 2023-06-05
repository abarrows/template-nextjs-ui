import { NextResponse } from 'next/server';

// eslint-disable-next-line import/prefer-default-export
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'Healthy',
    links: {
      info: '/api/info',
    },
  });
}
