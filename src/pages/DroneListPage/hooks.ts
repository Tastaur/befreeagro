import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';

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
  const preparedData = useMemo(() => {
    return [...(data?.data ?? []), ...list];
  }, [data?.data, list]);
  return {
    addNewItem,
    data: preparedData,
    isLoading,
  };
};