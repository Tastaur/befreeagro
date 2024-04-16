import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';
import  { lazy } from 'react';

import { AppRoot } from '../pages/AppRoot';


const DroneListPage = lazy(() => import('../pages/DroneListPage/lazy'));
const DronePage = lazy(() => import('../pages/DronePage/lazy'));


export const routes: RouteObject[] = [
  {
    path: '',
    element: <DroneListPage />,
  },
  {
    path: '/:id',
    element: <DronePage />,
  },
  {
    path: '*',
    element: <Navigate to='' replace />,
  },
];

export const router = createBrowserRouter([
  {
    path: '',
    element: <AppRoot />,
    children: routes,
  },
]);