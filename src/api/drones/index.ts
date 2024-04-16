import axios from 'axios';

import { BASE_ENDPOINT } from '../../globalConstants';
import { DroneCardEntity, DroneItem } from './types';


export const dronesEndpoint = axios.create({
  baseURL: `${BASE_ENDPOINT}/drones`,
});


export const requestGetDrones = async () => {
  return dronesEndpoint.get<DroneItem[]>('');
};

export const requestGetDroneById = async (id: string) => {
  return dronesEndpoint.get<DroneCardEntity>(`/${id}`);
};

export const requestGetDroneImageById = async (id: string) => {
  return dronesEndpoint.get<Blob>(`/${id}/image`, { responseType: 'blob' });
};
