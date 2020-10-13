import { constants } from './utils';
import { calcGreatCircleDistance } from './calc_great_circle_distance';
import { CustomerRecord } from './types';

export const getCustomersWithinDistance = (
  customerRecords: CustomerRecord[],
  max_distance = 100,
) =>
  customerRecords.filter((customer) => {
    const distance = calcGreatCircleDistance(
      customer.point,
      constants.INTERCOM_DUBLIN_OFFICE,
    );
    return distance < max_distance;
  });
