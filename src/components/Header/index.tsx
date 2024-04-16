import { Stack, Typography } from '@mui/material';


export const Header = () => {
  return (
    <Stack
      height="10vh"
      minHeight="80px"
      alignItems="center"
      justifyContent="center"
      bgcolor="orange"
    >
      <Typography variant="h4">Drone App</Typography>
    </Stack>
  );
};