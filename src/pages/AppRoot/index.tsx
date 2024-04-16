import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { ErrorBoundary } from '../../components/ErrorBoundary';
import { Preloader } from '../../components/Preloader';
import { Header } from '../../components/Header';


export const AppRoot = () => {
  return (
    <ErrorBoundary>
      <Stack
        width="100vw"
        height="100vh"
        bgcolor="lightgrey"
        overflow="hidden"
      >
        <Header />
        <Suspense fallback={<Preloader />}>
          <Outlet />
        </Suspense>
      </Stack>
    </ErrorBoundary>
  );
};