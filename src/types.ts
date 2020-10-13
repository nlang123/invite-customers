export interface GPSCoordinates {
  lat: number;
  long: number;
}

export interface CustomerRecord {
  user_id: number;
  name: string;
  point: GPSCoordinates;
}
