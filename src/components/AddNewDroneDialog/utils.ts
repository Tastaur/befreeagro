import { DroneCardEntity } from '../../api/drones/types';
import { IMAGE_STORAGE_KEY, STORAGE_KEY } from '../../globalConstants';
import { DroneForm } from './types';
import { getDronesFromLocalStorage, getValueFromLocalStorage } from '../../pages/DroneListPage/utils';


export const addDroneToLocalStorage = (data: DroneCardEntity) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...getDronesFromLocalStorage(), data]));
};

export const addImageToLocalStorage = (id: string, file: string) => {
  const currentData = getValueFromLocalStorage<Record<string, string>>(IMAGE_STORAGE_KEY, {});
  localStorage.setItem(IMAGE_STORAGE_KEY, JSON.stringify({ ...currentData, [id]: file }));
};

export const uploadPhoto = (data: DroneForm) => {
  if (data.file) {
    const file = data.file[0];
    const reader = new FileReader();
    reader.onload = function () {
      addImageToLocalStorage(data.drone_code, reader.result as string);
    };
    reader.readAsDataURL(file);
  }
};