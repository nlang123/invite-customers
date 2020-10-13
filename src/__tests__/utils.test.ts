import {
  degreesToRadians,
  isCustomerRecord,
  normaliseCustomers,
} from '../utils';

describe('utils/degreesToRadians', () => {
  it('converts from degrees to radians', () => {
    const oneRadian = Math.PI / 180;

    expect(degreesToRadians(1)).toEqual(oneRadian);
    expect(degreesToRadians(90)).toEqual(Math.PI / 2);
    expect(degreesToRadians(180)).toEqual(Math.PI);
  });
});

describe('utils/isCustomerRecord', () => {
  it('returns true if object implements CustomerRecord interface', () => {
    const obj = { user_id: 1, name: 'Test', latitude: '1', longitude: '2' };
    expect(isCustomerRecord(obj)).toEqual(true);
  });

  it('returns false if object is missing a property', () => {
    const obj = { user_id: 1, name: 'Test', latitude: '1' };
    expect(isCustomerRecord(obj)).toEqual(false);
  });

  it('returns false if object is value is of the wrong type', () => {
    const obj = { user_id: '1', name: 'Test', latitude: '1', longitude: '2' };
    expect(isCustomerRecord(obj)).toEqual(false);
  });
});

describe('utils/normaliseCustomers', () => {
  it('normalises customer data to be in the right format', () => {
    const customers = [
      { user_id: 1, name: 'Test', latitude: '1', longitude: '2' },
    ];
    const expected = [
      {
        user_id: 1,
        name: 'Test',
        point: { lat: 0.017453292519943295, long: 0.03490658503988659 },
      },
    ];

    expect(normaliseCustomers(customers)).toEqual(expected);
  });

  it('throws error if customer data is not formatted correctly', () => {
    const customers = [
      { user_id: 1, name: 'Test1', longitude: '1' },
      { user_id: 2, name: 'Test2', latitude: '2', longitude: '3' },
    ];
    expect(() => normaliseCustomers(customers)).toThrowError(
      'Customer data not formatted correctly',
    );
  });
});
