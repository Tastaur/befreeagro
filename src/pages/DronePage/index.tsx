import { Stack, Typography } from '@mui/material';
import { ChevronLeft } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

import { useDronePageData } from './hooks';
import { TIME_FORMAT } from '../../globalConstants';
import { BackButton, DroneDataWrapper, StyledPicture } from './styles';
import noImage from '../../assets/noImage.jpg';


export const DronePage = () => {
  const { drone, dronePicture, isLoading } = useDronePageData();
  const navigate = useNavigate();

  if (!drone && !isLoading) {
    navigate('/');
  }
  return (
    <Stack
      overflow="hidden"
      position="relative"
      flexDirection="row"
      height="100%"
    >
      <StyledPicture src={dronePicture ? dronePicture : noImage} alt="dronePicture" />
      <DroneDataWrapper gap={2} padding={3}>
        <Stack gap={2}>
          <Typography>Name: {drone?.name}</Typography>
          <Typography>Drone code: {drone?.drone_code}</Typography>
          <Typography>Range: {drone?.range}</Typography>
          <Typography>Data release: {
            format(new Date(drone?.release_date ?? new Date()), TIME_FORMAT.DAY_MONTH_YEAR)
          }</Typography>
        </Stack>
        <Stack gap={2}>
          <Typography>Cameras:</Typography>
          {drone?.cameras.map(c => <Stack gap={1}>
            <Typography>Name: {c.name}</Typography>
            <Typography>Megapixels: {c.megapixels}</Typography>
            <Typography>Camera Type: {c.type}</Typography>
          </Stack>)}
        </Stack>
      </DroneDataWrapper>
      <Link to="/">
        <BackButton>
          <ChevronLeft />
        </BackButton>
      </Link>
    </Stack>
  );
};

