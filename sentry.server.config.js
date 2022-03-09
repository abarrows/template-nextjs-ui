import * as Sentry from '@sentry/nextjs';
import { RewriteFrames as RewriteFramesIntegration } from '@sentry/integrations';

const sentryConfig = () => {
  if (process.env.NODE_ENV === 'production' && process.env.SENTRY_AUTH_TOKEN) {
    Sentry.init({
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
      environment: process.env.NEXT_PUBLIC_DEPLOY_ENV,
      integrations: [
        new RewriteFramesIntegration({
          iteratee: (frame) => {
            const newFrame = frame;
            newFrame.filename = frame.filename.replace('./', 'app:///');
            newFrame.filename = frame.filename.replace('.next', '_next');
            return newFrame;
          },
        }),
      ],

      // Adjust this value in production, or use tracesSampler for greater control
      tracesSampleRate: 0.002,
    });
  }
};

module.exports = sentryConfig();
