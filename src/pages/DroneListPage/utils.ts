import { IMAGE_STORAGE_KEY, STORAGE_KEY } from '../../globalConstants';
import { DroneCardEntity } from '../../api/drones/types';


export const getDronesFromLocalStorage = () => {
  return getValueFromLocalStorage<DroneCardEntity[]>(STORAGE_KEY, []);
};

export const getDroneImageFromLocalStorage = (id: string) => {
  const userData = getValueFromLocalStorage<Record<string, string>>(IMAGE_STORAGE_KEY, {});
  return userData[id];
};

const getValueFromLocalStorage = <T extends any>(id: string, safetyData: T) => {
  const data = localStorage.getItem(id);
  return (data ? JSON.parse(data) : safetyData) as T;
};