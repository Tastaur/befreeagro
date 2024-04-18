import { Stack, TextField, TextFieldProps, Typography } from '@mui/material';
import { forwardRef } from 'react';


export const StyledTextField = forwardRef<HTMLInputElement, TextFieldProps>(({ helperText, ...props }, ref) => {
  return (
    <Stack gap={1}>
      <TextField {...props} ref={ref} />
      {helperText ? <Typography color="error" variant="caption">{helperText}</Typography> : null}
    </Stack>
  );
});