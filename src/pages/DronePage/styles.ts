import styled from '@emotion/styled';
import { IconButton, Stack } from '@mui/material';


export const StyledPicture = styled('img')({
  height: '100%',
});
export const DroneDataWrapper = styled(Stack)({
  overflowY: 'scroll',
});
export const BackButton = styled(IconButton)({
  height: 40,
  width: 40,
  borderRadius: '50%',
  border: '1px solid black',
  position: 'absolute',
  top: '10px',
  left: '10px',
});