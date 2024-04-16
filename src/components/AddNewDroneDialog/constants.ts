import { format } from 'date-fns';
import * as yup from 'yup';

import { DroneCardEntity, DroneItem } from '../../api/drones/types';
import { TIME_FORMAT } from '../../globalConstants';


export const defaultValues: DroneCardEntity = {
  drone_code: '',
  release_date: format(new Date(), TIME_FORMAT.DASHED_YEAR),
  range: 0,
  name: '',
  cameras: [],
};
export const  createScheme = (existedItem: DroneItem[]) =>  yup
  .object<yup.AnyObjectSchema>({
  drone_code: yup.string().required().test('Unique name', value => {
    return !existedItem.some(i => i.drone_code === value);
  }),
  file: yup.mixed().required(),
  name: yup.string().required(),
  range: yup.number().required(),
  release_date: yup.string().required(),
  cameras: yup.array(),
})
  .required();