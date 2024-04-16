import { DroneCardEntity } from '../../api/drones/types';


export interface AddNewDroneDialogProps {
  onClose: () => void;
  onAddNew: (item: DroneCardEntity) => void;
}