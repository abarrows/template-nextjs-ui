// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

const sentryConfig = () => {
  if (process.env.NODE_ENV === 'production' && process.env.SENTRY_AUTH_TOKEN) {
    Sentry.init({
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
      environment: process.env.NEXT_PUBLIC_DEPLOY_ENV,
      // Adjust this value in production, or use tracesSampler for greater control
      tracesSampleRate: 0.002,
      ignoreErrors: [
        // Random plugins/extensions
        'top.GLOBALS',
        // See: http://blog.errorception.com/2012/03/tale-of-unfindable-js-error.html
        'originalCreateNotification',
        'canvas.contentDocument',
        'MyApp_RemoveAllHighlights',
        'http://tt.epicplay.com',
        "Can't find variable: ZiteReader",
        'jigsaw is not defined',
        'ComboSearch is not defined',
        'http://loading.retry.widdit.com/',
        'atomicFindClose',
        // Facebook borked
        'fb_xd_fragment',
        // ISP "optimizing" proxy - `Cache-Control: no-transform` seems to
        // reduce this. (thanks @acdha)
        // See http://stackoverflow.com/questions/4113268
        'bmi_SafeAddOnload',
        'EBCallBackMessageReceived',
        // See http://toolbar.conduit.com/Developer/HtmlAndGadget/Methods/JSInjection.aspx
        'conduitPage',
      ],
      denyUrls: [
        // Facebook flakiness
        /graph\.facebook\.com/i,
        // Facebook blocked
        /connect\.facebook\.net\/en_US\/all\.js/i,
        // Woopra flakiness
        /eatdifferent\.com\.woopra-ns\.com/i,
        /static\.woopra\.com\/js\/woopra\.js/i,
        // Chrome extensions
        /extensions\//i,
        /^chrome:\/\//i,
        // Other plugins
        /127\.0\.0\.1:4001\/isrunning/i, // Cacaoweb
        /webappstoolbarba\.texthelp\.com\//i,
        /metrics\.itunes\.apple\.com\.edgesuite\.net\//i,
        // Filter common ad/marketing URLs
        /doubleclick\.net\//i,
        /amazon-adsystem\.com\//i,
        /pubmatic\.com\//i,
        /exelator\.com\//i,
        /casalmedia\.com\//i,
        /rubiconproject\.com\//i,
        /openx\.net\//i,
        /adnxs\.com\//i,
        /rxthdr\.com/i,
        /kxcdn\.com/i,
        /padsquad\.com/i,
        /flashtalking\.com/i,
        /yandex\.ru/i,
        /ads\/richmedia/i,
        /prebid/i,
        /ampproject/i,
      ],
    });
  }
};

module.exports = sentryConfig();
