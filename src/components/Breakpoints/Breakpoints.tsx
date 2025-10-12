import * as React from 'react';

// import { Typography } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';

export default function CurrentBreakpoint() {
  // const theme = useTheme();

  // const xs = useMediaQuery(theme.breakpoints.only('xs'));
  // const sm = useMediaQuery(theme.breakpoints.only('sm'));
  // const md = useMediaQuery(theme.breakpoints.only('md'));
  // const lg = useMediaQuery(theme.breakpoints.only('lg'));
  // const xl = useMediaQuery(theme.breakpoints.only('xl'));

  let currentBreakpoint = '';
  if (process.env.NEXT_PUBLIC_DEPLOY_ENV?.toLowerCase() === 'prod') {
    return <></>;
  }
  if (xs) currentBreakpoint = 'xs';
  // else if (sm) currentBreakpoint = 'sm';
  // else if (md) currentBreakpoint = 'md';
  // else if (lg) currentBreakpoint = 'lg';
  // else if (xl) currentBreakpoint = 'xl';

  return <div>{currentBreakpoint}</div>;
}
