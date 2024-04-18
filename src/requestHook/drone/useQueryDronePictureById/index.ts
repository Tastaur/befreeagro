import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { QUERY_KEYS } from '../../../globalConstants';
import { requestGetDroneImageById } from '../../../api/drones';
import { getDroneImageFromLocalStorage } from '../../../pages/DroneListPage/utils';


export const useQueryDronePictureById = (id?: string) => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.drone, id, 'image'],
    queryFn: async () => requestGetDroneImageById(id ?? '').catch(() => {
      return getDroneImageFromLocalStorage(id ?? '');
    }),
  });

  const imageData = useMemo(() => {
    return data && typeof data !== 'string' && 'data' in data &&
    data?.data ? URL.createObjectURL(data.data) : data as string;
  }, [data]);
  return {
    data: imageData, isLoading,
  };
};