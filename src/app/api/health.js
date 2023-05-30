import { NextResponse } from 'next/server';

// Health check route for k8s probes
// eslint-disable-next-line import/prefer-default-export
export async function GET() {
  NextResponse.status = 200;
  NextResponse.end('Healthy');
}
