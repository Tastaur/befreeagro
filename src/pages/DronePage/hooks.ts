import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { useMemo } from 'react';

import { QUERY_KEYS } from '../../globalConstants';
import { requestGetDroneById, requestGetDroneImageById } from '../../api/drones';
import { getDroneImageFromLocalStorage, getDronesFromLocalStorage } from '../DroneListPage/utils';


export const useDronePageData = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: drone, isLoading: isDataLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.drone, id],
    queryFn: async () => requestGetDroneById(id ?? '').catch(() => {
      const parsedData = getDronesFromLocalStorage();
      const currentDrone = parsedData.find(d => d.drone_code === id);
      if (currentDrone) {
        return currentDrone;
      }
      navigate('/');
    }),
  });
  const { data: dronePicture } = useQuery({
    queryKey: [QUERY_KEYS.drone, id, 'image'],
    queryFn: async () => requestGetDroneImageById(id ?? '').catch(() => {
      return getDroneImageFromLocalStorage(id ?? '');
    }),
  });

  const droneData = useMemo(() => {
    return drone && 'data' in drone ? drone?.data : drone;
  }, [drone]);

  const imageData = useMemo(() => {
    return dronePicture && typeof dronePicture !== 'string' && 'data' in dronePicture &&
        dronePicture?.data ? URL.createObjectURL(dronePicture.data) : dronePicture;
  }, [dronePicture]);

  return {
    error,
    drone: droneData,
    isDataLoading,
    dronePicture: imageData, 
  };

};