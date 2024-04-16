import { STORAGE_KEY } from '../../globalConstants';
import { DroneCardEntity } from '../../api/drones/types';


export const getDronesFromLocalStorage = () => {
  const userData = localStorage.getItem(STORAGE_KEY);
  return (userData ? JSON.parse(userData) : []) as DroneCardEntity[];
};