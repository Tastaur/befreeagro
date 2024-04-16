import { Button, Stack } from '@mui/material';
import { useState } from 'react';

import { useDroneListData } from './hooks';
import { Preloader } from '../../components/Preloader';
import { DroneListWrapper } from './styles';
import { DroneCard } from '../../components/DroneCard';
import { AddNewDroneDialog } from '../../components/AddNewDroneDialog';


export const DroneListPage = () => {
  const { isLoading, data, addNewItem } = useDroneListData();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  return (
    <Stack
      padding={4}
      height="100%"
      overflow="hidden"
    >
      <DroneListWrapper
      >
        {isLoading ? <Preloader /> : data.map(i => <DroneCard
          {...i}
          key={i.drone_code} />)}
      </DroneListWrapper>
      <Stack height={20}>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          Add new
        </Button>
      </Stack>
      {isAddDialogOpen ? <AddNewDroneDialog
        onClose={() => setIsAddDialogOpen(false)}
        onAddNew={addNewItem} /> : null}
    </Stack>
  );
};

