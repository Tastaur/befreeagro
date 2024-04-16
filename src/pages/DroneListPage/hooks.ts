import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { QUERY_KEYS } from '../../globalConstants';
import { requestGetDrones } from '../../api/drones';
import { getDronesFromLocalStorage } from './utils';
import { DroneCardEntity } from '../../api/drones/types';


export const useDroneListData = () => {
  const { data, isLoading } = useQuery({ queryKey: [QUERY_KEYS], queryFn: requestGetDrones });
  const [list, setList] = useState(getDronesFromLocalStorage());
  const addNewItem = (entity: DroneCardEntity) => {
    setList(prev => [...prev, entity]);
  };
  return {
    addNewItem,
    data: [...(data?.data ?? []), ...list],
    isLoading,
  };
};