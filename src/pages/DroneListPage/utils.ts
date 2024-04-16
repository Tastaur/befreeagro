import { AxiosResponse } from 'axios';

import { IMAGE_STORAGE_KEY, STORAGE_KEY } from '../../globalConstants';
import { DroneCardEntity } from '../../api/drones/types';


export const getDronesFromLocalStorage = () => {
  const userData = localStorage.getItem(STORAGE_KEY);
  return (userData ? JSON.parse(userData) : []) as DroneCardEntity[];
};

export const getDroneImageFromLocalStorage = (id: string) => {
  const userData = localStorage.getItem(IMAGE_STORAGE_KEY);
  return ((userData ? JSON.parse(userData) : {}) as Record<string, string>)[id];
};

export const convertDataToAxiosResponse = <T extends any>(data: T): AxiosResponse<T> => {
  return  {
    data,
    headers: {},
    status: 200,
    request: null,
    statusText: '',
  } as AxiosResponse<T>;
};