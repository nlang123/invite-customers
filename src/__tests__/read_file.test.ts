import { readFile } from '../read_file';

describe('readFile', () => {
  it('reads the file into an object', () => {
    const expected = [
      {
        user_id: 2,
        name: 'More than 100km',
        latitude: '51.501444',
        longitude: '-0.141494',
      },
      {
        user_id: 1,
        name: 'Less than 100km',
        latitude: '53.338163',
        longitude: '-6.259075',
      },
    ];
    expect(readFile('src/data/mock_customers.txt')).toEqual(expected);
  });

  it('logs error to console if file cannot be found', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation();

    readFile('/file/does/not/exist');
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toBeCalledWith(
      "ENOENT: no such file or directory, open '/file/does/not/exist'",
    );

    spy.mockRestore();
  });
});
