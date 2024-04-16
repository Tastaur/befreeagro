import { DroneItem } from '../../api/drones/types';


export interface AddNewDroneDialogProps {
  onClose: () => void;
  onAddNew: (item: DroneItem) => void;
}