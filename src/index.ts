import { constants, normaliseCustomers } from './utils';
import { readFile } from './read_file';
import { getCustomersWithinDistance } from './get_customers_within_distance';

const inviteCustomers = () => {
  try {
    const customers = readFile(constants.CUSTOMER_RECORDS_PATH);
    const normalised = normaliseCustomers(customers);
    const invited = getCustomersWithinDistance(normalised, 100);
    const sorted = invited
      .map((c) => ({ user_id: c.user_id, name: c.name }))
      .sort((a, b) => a.user_id - b.user_id);
    // eslint-disable-next-line no-console
    console.log(sorted);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error.message);
  }
};

inviteCustomers();
