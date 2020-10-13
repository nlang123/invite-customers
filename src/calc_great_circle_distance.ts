import { GPSCoordinates } from './types';

const MEAN_EARTH_RADIUS = 6371;

export const calcGreatCircleDistance = (
  pointA: GPSCoordinates,
  pointB: GPSCoordinates,
): number =>
  MEAN_EARTH_RADIUS *
  Math.acos(
    Math.sin(pointA.lat) * Math.sin(pointB.lat) +
      Math.cos(pointA.lat) *
        Math.cos(pointB.lat) *
        Math.cos(Math.abs(pointA.long - pointB.long)),
  );
