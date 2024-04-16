import { GlobalStyles } from '@mui/material';
import { alpha } from '@mui/material/styles';


export const SCROLLBAR_SIZE = 8;

export const GlobalOverride = () => {

  return (
    <GlobalStyles
      styles={{
        html: {
          '& > * div': {
            caretColor: 'transparent',
            '& > input': {
              caretColor: 'black',
            },
            '& > textarea': {
              caretColor: 'black',
            },
          },
          '*::-webkit-scrollbar': {
            width: SCROLLBAR_SIZE,
            height: SCROLLBAR_SIZE,
            '&-track': {
              backgroundColor: 'transparent',
            },
            '&-thumb': {
              borderRadius: 8,
              backgroundColor: alpha('#B0AFB2', 0.65),
              '&:hover': {
                backgroundColor: '#B0AFB2',
              },
            },
          },
        },
      }}
    />
  );
};
