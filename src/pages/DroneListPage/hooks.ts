import { useMemo, useState } from 'react';

import { getDronesFromLocalStorage } from './utils';
import { DroneCardEntity } from '../../api/drones/types';
import { useQueryDroneListData } from '../../requestHook/drone/useQueryDroneListData';


export const useDroneListData = () => {
  const { data, isLoading } = useQueryDroneListData();
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