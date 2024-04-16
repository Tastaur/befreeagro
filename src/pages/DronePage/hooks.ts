import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';

import { QUERY_KEYS } from '../../globalConstants';
import { requestGetDroneById, requestGetDroneImageById } from '../../api/drones';
import { getDronesFromLocalStorage } from '../DroneListPage/utils';


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
    queryFn: async () => requestGetDroneImageById(id ?? ''),
  });


  return {
    error,
    drone: drone && 'data' in drone ? drone?.data : drone,
    isDataLoading,
    dronePicture: dronePicture?.data ? URL.createObjectURL(dronePicture.data) : '',
  };

};