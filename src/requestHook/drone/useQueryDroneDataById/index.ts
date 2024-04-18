import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { QUERY_KEYS } from '../../../globalConstants';
import { requestGetDroneById } from '../../../api/drones';
import { getDronesFromLocalStorage } from '../../../pages/DroneListPage/utils';


export const useQueryDroneDataById = (id?: string, onError?: () => void) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.drone, id],
    queryFn: async () => requestGetDroneById(id ?? '').catch(() => {
      const parsedData = getDronesFromLocalStorage();
      const currentDrone = parsedData.find(d => d.drone_code === id);
      if (currentDrone) {
        return currentDrone;
      }
      onError && onError();
    }),
  });
  const droneData = useMemo(() => {
    return data && 'data' in data ? data?.data : data;
  }, [data]);
  return {
    data: droneData, isLoading, error,
  };
};