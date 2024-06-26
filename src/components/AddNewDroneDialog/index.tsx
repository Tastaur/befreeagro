import { FC } from 'react';
import { Button, Dialog, MenuItem, Stack, TextField, Typography } from '@mui/material';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { AddNewDroneDialogProps } from './types';
import { CAMERA_TYPE, DroneCardEntity } from '../../api/drones/types';
import { StyledForm } from './styles';
import { addToLocalStorage } from './utils';
import { defaultValues, schema } from './constants';


export const AddNewDroneDialog: FC<AddNewDroneDialogProps> = ({ onClose, onAddNew }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<DroneCardEntity>({
    defaultValues,
    // @ts-ignore
    resolver: yupResolver(schema),
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'cameras',
  });
  const onSubmit = (data: DroneCardEntity) => {
    addToLocalStorage(data);
    onAddNew(data);
    onClose();
  };
  return (
    <Dialog open onClose={onClose}>
      <Stack padding={4}>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name='drone_code'
            render={({ field }) => <TextField {...field} label="Drone code" />}
          />
          <Controller
            control={control}
            name='name'
            render={({ field }) => <TextField {...field} label="Name" />}
          />
          <Controller
            control={control}
            name='range'
            render={({ field }) => <TextField
              {...field}
              type="number"
              label="Range" />}
          />
          <Controller
            control={control}
            name='release_date'
            render={({ field }) => <TextField
              {...field}
              type="date"
              label="Date release" />}
          />
          {fields.map((item, index) => (
            <Stack key={item.id} gap={2}>
              <Controller
                render={({ field }) => <TextField {...field} label="Name" />}
                name={`cameras.${index}.name`}
                control={control}
              />
              <Controller
                render={({ field }) => <TextField
                  {...field}
                  type="number"
                  label="Megapixels" />}
                name={`cameras.${index}.megapixels`}
                control={control}
              />
              <Controller
                name={`cameras.${index}.type`}
                control={control}
                render={({ field }) => <TextField
                  select
                  {...field}
                  label="Types">
                  {Object.values(CAMERA_TYPE).map(i => <MenuItem value={i} key={i}>{i}</MenuItem>)}
                </TextField>}

              />
              <Button type="button" onClick={() => remove(index)}>Delete camera</Button>
            </Stack>
          ))}
          <Button
            type="button"
            onClick={() => append({ type: CAMERA_TYPE.color, name: '', megapixels: 0 })}
          >
            Add camera
          </Button>
          {Object.keys(errors).length ? <Typography color="error">Form is not valid</Typography> : null}
          <Button type="submit">Submit</Button>
        </StyledForm>
      </Stack>
    </Dialog>
  );
};


