import { Stack, Typography } from '@mui/material';
import { ChevronLeft } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

import { useDronePageData } from './hooks';
import { TIME_FORMAT } from '../../globalConstants';
import { BackButton, DroneDataWrapper, StyledPicture } from './styles';
import noImage from '../../assets/noImage.jpg';
import { Preloader } from '../../components/Preloader';
import { convertSnakeCaseToCapitalize } from './utils';


export const DronePage = () => {
  const {
    drone,
    dronePicture,
    isDataLoading,
    isPictureLoading,
    droneFields,
    cameraFields,
  } = useDronePageData();

  return isDataLoading || !drone ? <Preloader /> : (
    <Stack
      overflow="hidden"
      position="relative"
      flexDirection="row"
      height="100%"
    >
      <Stack width="50%">
        {isPictureLoading ? <Preloader /> : <StyledPicture src={dronePicture ? dronePicture : noImage} alt="dronePicture" /> }
      </Stack>
      <DroneDataWrapper gap={2} padding={3}>
        <Stack gap={2}>
          {droneFields.map(i => <Typography key={i}>
            {convertSnakeCaseToCapitalize(i)}: {'release_date' === i
              ? format(new Date(drone[i] ?? new Date()), TIME_FORMAT.DAY_MONTH_YEAR)
              : String(drone[i])}
          </Typography>,
          )}
        </Stack>
        {drone.cameras.length ? <Stack gap={2}>
          <Typography>Cameras:</Typography>
          {drone?.cameras.map(c => <Stack gap={1} key={c.name}>
            {cameraFields.map(i => <Typography key={`${i}_${c.name}`}>
              {convertSnakeCaseToCapitalize(i)}: {c[i]}
            </Typography>)}
          </Stack>)}
        </Stack> : null}
      </DroneDataWrapper>
      <Link to="/">
        <BackButton>
          <ChevronLeft />
        </BackButton>
      </Link>
    </Stack>
  );
};

