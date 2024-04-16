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