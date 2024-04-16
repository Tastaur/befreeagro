import { HTMLInputTypeAttribute } from 'react';

import { DroneCameraItem, DroneCardEntity, DroneItem } from '../../api/drones/types';


export interface AddNewDroneDialogProps {
  onClose: () => void;
  onAddNew: (item: DroneCardEntity) => void;
  existedEntity: DroneItem[]
}

export interface DroneForm extends DroneCardEntity {
  file?: FileList
}

export interface FormField {
  name: keyof DroneForm;
  label: string;
  type: HTMLInputTypeAttribute
}

export interface CameraFields extends Omit<FormField, 'name'> {
  name: keyof DroneCameraItem,
  items?: string[]
}