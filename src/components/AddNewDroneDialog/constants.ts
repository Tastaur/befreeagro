import { format } from 'date-fns';
import * as yup from 'yup';

import { CAMERA_TYPE, DroneItem } from '../../api/drones/types';
import { TIME_FORMAT } from '../../globalConstants';
import { CameraFields, DroneForm, FormField } from './types';


export const defaultValues: DroneForm = {
  drone_code: '',
  release_date: format(new Date(), TIME_FORMAT.DASHED_YEAR),
  range: 0,
  name: '',
  cameras: [{ type: CAMERA_TYPE.color, name: '', megapixels: 0 }],
};
export const  createScheme = (existedItem: DroneItem[]) =>  yup
  .object<yup.AnyObjectSchema>({
  drone_code: yup.string().required().test('Unique name', value => {
    return !existedItem.some(i => i.drone_code === value);
  }),
  file: yup.mixed()
    .test('required', 'You need to provide a file', (file) => {
      return Boolean((file as FileList).length);
    }),
  name: yup.string().required(),
  range: yup.number().required(),
  release_date: yup.string().required(),
  cameras: yup.array().required().min(1).of(yup.object().shape({
    name: yup.string().required(),
    megapixels: yup.number().min(0),
    type: yup.mixed<CAMERA_TYPE>().oneOf(Object.values(CAMERA_TYPE)),
  })),
})
  .required();


export const MAIN_FIELDS: FormField[] = [{
  name: 'drone_code',
  label: 'Drone Code',
  type: 'text',
}, {
  name: 'name',
  label: 'Name',
  type: 'text',
}, {
  name: 'range',
  label: 'Range',
  type: 'number',
}, {
  name: 'release_date',
  label: 'Release date',
  type: 'date',
}];
export const CAMERA_FIELDS: CameraFields[] = [{
  name: 'name',
  label: 'Camera name',
  type: 'text',
}, {
  name: 'megapixels',
  label: 'Megapixels',
  type: 'number',
}, {
  name: 'type',
  label: 'Type',
  type: 'select',
  items: Object.values(CAMERA_TYPE),
}];