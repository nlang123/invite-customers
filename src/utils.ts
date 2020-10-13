import { CustomerRecord, GPSCoordinates } from './types';

export const degreesToRadians = (degrees: number): number =>
  degrees * (Math.PI / 180);

export const isCustomerRecord = (customer: any): customer is CustomerRecord =>
  'user_id' in customer &&
  typeof customer.user_id === 'number' &&
  'name' in customer &&
  typeof customer.name === 'string' &&
  'latitude' in customer &&
  typeof customer.latitude === 'string' &&
  'longitude' in customer &&
  typeof customer.longitude === 'string';

export const normaliseCustomers = (customers: any[]): CustomerRecord[] => {
  if (!customers.every((c) => isCustomerRecord(c))) {
    throw new Error('Customer data not formatted correctly');
  } else {
    return customers.map((c) => ({
      user_id: c.user_id,
      name: c.name,
      point: {
        lat: c.latitude && degreesToRadians(c.latitude),
        long: c.longitude && degreesToRadians(c.longitude),
      },
    }));
  }
};

const CUSTOMER_RECORDS_PATH = 'src/data/customers.txt';
const INTERCOM_DUBLIN_OFFICE: GPSCoordinates = {
  lat: degreesToRadians(53.339428),
  long: degreesToRadians(-6.257664),
};

export const constants = {
  CUSTOMER_RECORDS_PATH,
  INTERCOM_DUBLIN_OFFICE,
};
