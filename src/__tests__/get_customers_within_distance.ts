import { getCustomersWithinDistance } from '../get_customers_within_distance';

describe('getCustomersWithinDistance', () => {
  it('returns customers that are within given distance from the Intercom office', () => {
    const customers = [
      {
        user_id: 2,
        name: 'More than 100km',
        point: {
          lat: 0.8988697673314785,
          long: -0.002469536171816857,
        },
      },
      {
        user_id: 1,
        name: 'Less than 100km',
        point: {
          lat: 0.9309265613154163,
          long: -0.10924146687926409,
        },
      },
    ];
    const expected = [
      {
        user_id: 1,
        name: 'Less than 100km',
        point: {
          lat: 0.9309265613154163,
          long: -0.10924146687926409,
        },
      },
    ];

    expect(getCustomersWithinDistance(customers, 100)).toEqual(expected);
  });

  it('returns an empty array if no customers are within given distance', () => {
    const customers = [
      {
        user_id: 2,
        name: 'More than 100km',
        point: {
          lat: 0.8988697673314785,
          long: -0.002469536171816857,
        },
      },
    ];

    expect(getCustomersWithinDistance(customers)).toEqual([]);
  });
});
