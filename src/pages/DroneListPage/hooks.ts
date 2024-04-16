import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS, STORAGE_KEY } from '../../globalConstants';
import { requestGetDrones } from '../../api/drones';
import { DroneItem } from '../../api/drones/types';


export const useDroneListData = () => {
  const { data, isLoading } = useQuery({ queryKey: [QUERY_KEYS], queryFn: requestGetDrones });
  const userData = localStorage.getItem(STORAGE_KEY);
  let parsedData = (userData ? JSON.parse(userData) : []) as DroneItem[];

  return {
    parsedData,
    data,
    isLoading,
  };
};