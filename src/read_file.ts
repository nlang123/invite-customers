import * as fs from 'fs';

export const readFile = (path: string): any[] => {
  const customers: any[] = [];

  try {
    const file = fs.readFileSync(path, 'utf8').toString().split('\n');
    file.forEach((line) => customers.push(JSON.parse(line)));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error.message);
  }

  return customers;
};
