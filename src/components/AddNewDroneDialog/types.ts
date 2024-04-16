import { DroneCardEntity, DroneItem } from '../../api/drones/types';


export interface AddNewDroneDialogProps {
  onClose: () => void;
  onAddNew: (item: DroneCardEntity) => void;
  existedEntity: DroneItem[]
}

export interface DroneForm extends DroneCardEntity {
  file: FileList
}