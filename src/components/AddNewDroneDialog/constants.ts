import { format } from 'date-fns';
import * as yup from 'yup';

import { DroneCardEntity } from '../../api/drones/types';
import { TIME_FORMAT } from '../../globalConstants';


export const defaultValues: DroneCardEntity = {
  drone_code: '',
  release_date: format(new Date(), TIME_FORMAT.DASHED_YEAR),
  range: 0,
  name: '',
  cameras: [],
};
export const schema = yup
  .object<yup.AnyObjectSchema>({
  drone_code: yup.string().required(),
  name: yup.string().required(),
  range: yup.number().required(),
  release_date: yup.string().required(),
  cameras: yup.array(),
})
  .required();