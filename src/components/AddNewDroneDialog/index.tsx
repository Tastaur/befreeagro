import { FC } from 'react';
import { Button, Dialog, MenuItem, Stack } from '@mui/material';
import { Controller, FieldError, useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { AddNewDroneDialogProps, DroneForm } from './types';
import { CAMERA_TYPE } from '../../api/drones/types';
import { StyledForm } from './styles';
import { addToLocalStorage, uploadPhoto } from './utils';
import { CAMERA_FIELDS, createScheme, defaultValues, MAIN_FIELDS } from './constants';
import { StyledTextField } from '../StyledTextField';


export const AddNewDroneDialog: FC<AddNewDroneDialogProps> = ({ onClose, onAddNew, existedEntity }) => {
  const { control, handleSubmit, register, formState: { errors } } = useForm<DroneForm>({
    defaultValues,
    // @ts-ignore
    resolver: yupResolver(createScheme(existedEntity)),
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'cameras',
  });
  const onSubmit = (data: DroneForm) => {
    const { file: _file, ...drone } = data;
    uploadPhoto(data);
    const preparedDrone = {
      ...drone, release_date: new Date(drone.release_date).toISOString(),
    };
    addToLocalStorage(preparedDrone);
    onAddNew(preparedDrone);
    onClose();
  };
  return (
    <Dialog open onClose={onClose}>
      <Stack padding={4}>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledTextField
            type="file"
            helperText={errors.file?.message}
            {...register('file')}
          />
          {MAIN_FIELDS.map(i => <Controller
            key={`drone_${i.name}`}
            control={control}
            name={i.name}
            render={({ field }) => <StyledTextField
              {...field}
              helperText={errors[i.name]?.message}
              type={i.type}
              label={i.label} />}
          />)}
          {fields.map((item, index) => (
            <Stack key={item.id} gap={2}>
              {CAMERA_FIELDS.map(i => i.items ? <Controller
                key={`cameras.${index}.${i.name}`}
                name={`cameras.${index}.${i.name}`}
                control={control}
                render={({ field }) => <StyledTextField
                  select
                  helperText={(errors?.cameras?.[index]?.[i.name] as unknown as FieldError)?.message}
                  {...field}
                  label={i.label}>
                  {i.items?.map(menuItem => <MenuItem
                    value={menuItem}
                    key={menuItem}>{menuItem}</MenuItem>)}
                </StyledTextField>}

              /> : <Controller
                render={({ field }) => <StyledTextField
                  helperText={(errors?.cameras?.[index]?.[i.name] as unknown as FieldError)?.message}
                  {...field}
                  label={i.label}
                />}
                key={`cameras.${index}.${i.name}`}
                name={`cameras.${index}.${i.name}`}

                control={control}
              />)}
              {fields.length < 2 ? null : <Button onClick={() => remove(index)}>Delete camera</Button>}
            </Stack>
          ))}
          <Button
            type="button"
            onClick={() => append({ type: CAMERA_TYPE.color, name: '', megapixels: 0 })}
          >
            Add camera
          </Button>
          <Button type="submit">Submit</Button>
        </StyledForm>
      </Stack>
    </Dialog>
  );
};


