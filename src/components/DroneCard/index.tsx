import { FC } from 'react';
import { Typography } from '@mui/material';
import { format } from 'date-fns';

import { DroneItem } from '../../api/drones/types';
import { StyledLink, StyledPaper } from './styles';
import { TIME_FORMAT } from '../../globalConstants';


export const DroneCard: FC<DroneItem> = ({ drone_code, name, range, release_date }) => {
  return (
    <StyledLink to={`/${drone_code}`}>
      <StyledPaper elevation={2}>
        <Typography variant="caption">{drone_code}</Typography>
        <Typography>{name}</Typography>
        <Typography variant="caption">Range: {range}</Typography>
        <Typography variant="caption">Release date: {
          format(new Date(release_date ?? new Date()), TIME_FORMAT.DAY_MONTH_YEAR)
        }</Typography>
      </StyledPaper>
    </StyledLink>
  );
};


