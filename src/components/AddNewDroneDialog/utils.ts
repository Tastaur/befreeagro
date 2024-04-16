import { DroneCardEntity } from '../../api/drones/types';
import { IMAGE_STORAGE_KEY, STORAGE_KEY } from '../../globalConstants';
import { DroneForm } from './types';


export const addToLocalStorage = (data: DroneCardEntity) => {
  const parsedData = localStorage.getItem(STORAGE_KEY);
  const prepared = parsedData ? JSON.parse(parsedData) : [];
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...prepared, data]));
};

export const addImageToLocalStorage = (id: string, file: string) => {
  const parsedData = localStorage.getItem(IMAGE_STORAGE_KEY);
  const prepared = parsedData ? JSON.parse(parsedData) : {};
  localStorage.setItem(IMAGE_STORAGE_KEY, JSON.stringify({ ...prepared, [id]: file }));
};

export function gotPhoto(data: DroneForm) {
  const file = data.file[0];
  const reader = new FileReader();
  reader.onload = function () {
    addImageToLocalStorage(data.drone_code, reader.result as string);
  };
  reader.readAsDataURL(file);
}