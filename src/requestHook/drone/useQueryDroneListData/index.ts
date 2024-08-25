import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '../../../globalConstants';
import { requestGetDrones } from '../../../api/drones';


export const useQueryDroneListData = () => {
  const { data, isLoading } = useQuery({ queryKey: [QUERY_KEYS], queryFn: requestGetDrones });
  return { data, isLoading };
};