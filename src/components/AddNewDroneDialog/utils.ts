import { DroneCardEntity } from '../../api/drones/types';
import { STORAGE_KEY } from '../../globalConstants';


export const addToLocalStorage = (data: DroneCardEntity) => {
  const parsedData = localStorage.getItem(STORAGE_KEY);
  const prepared = parsedData ? JSON.parse(parsedData) : [];
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...prepared, data]));
};