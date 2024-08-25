import { useNavigate, useParams } from 'react-router-dom';
import { useMemo } from 'react';

import { DroneCameraItem, DroneCardEntity } from '../../api/drones/types';
import { useQueryDroneDataById } from '../../requestHook/drone/useQueryDroneDataById';
import { useQueryDronePictureById } from '../../requestHook/drone/useQueryDronePictureById';


export const useDronePageData = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const onError = () => {
    navigate('/');
  };
  const { data: drone, isLoading: isDataLoading, error } = useQueryDroneDataById(id, onError);
  const { data: dronePicture, isLoading: isPictureLoading } = useQueryDronePictureById(id);


  if (error) {
    onError();
  }

  const droneFields = useMemo(() => {
    return (
      drone ? Object.keys(drone).filter(i => i !== 'cameras') : []
    ) as Array<keyof DroneCardEntity>;
  }, [drone]);

  const cameraFields = useMemo(() => {
    return (
      drone?.cameras && drone.cameras[0] ? Object.keys(drone.cameras[0]) : []
    ) as Array<keyof DroneCameraItem>;
  }, [drone?.cameras]);

  return {
    drone,
    droneFields,
    cameraFields,
    isDataLoading,
    dronePicture,
    isPictureLoading,
  };

};