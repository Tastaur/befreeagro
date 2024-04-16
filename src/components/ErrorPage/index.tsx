import  { FC } from 'react';
import { Stack, Typography } from '@mui/material';

import { ErrorPageProps } from './types';


export const ErrorPage:FC<ErrorPageProps> = ({ stack, message }) =>{
  return (
    <Stack gap={5} direction="column">
      <Typography variant='h4'>Ooops...Something went wrong</Typography>
      <Typography variant='h5'>{message}</Typography>
      <Typography variant='h5'>{stack}</Typography>
    </Stack>
  );
};