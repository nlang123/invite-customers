import { calcGreatCircleDistance } from '../calc_great_circle_distance';

describe('calcGreatCircleDistance', () => {
  it('equals 0 if both points are the same', () => {
    const point = {
      lat: 1,
      long: 1,
    };

    expect(Math.round(calcGreatCircleDistance(point, point))).toEqual(0);
  });

  it('calculates great circle distance between 2 points', () => {
    const pointA = {
      lat: 0,
      long: 0,
    };
    const pointB = {
      lat: 1,
      long: -1,
    };

    expect(Math.round(calcGreatCircleDistance(pointA, pointB))).toEqual(8120);
  });
});
