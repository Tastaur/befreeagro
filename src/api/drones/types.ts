export interface DroneItem {
  drone_code: string,
  name: string,
  range: number,
  release_date: string
}

export interface DroneCardEntity extends DroneItem {
  cameras: DroneCameraItem[]
}

export interface DroneCameraItem {
  name: string
  megapixels: number,
  type: CAMERA_TYPE
}

export enum CAMERA_TYPE {
  color = 'Color',
  thermal = 'Thermal',
  zoom = 'Zoom',
  multiSpectral = 'Multi-Spectral',
}