import { Greeter } from '../index';

describe('My Greeter Tests', () => {
  test('My Greeter', () => {
    expect(Greeter('Carl')).toBe('Hello Carl Welcome to Node!!');
  });
});
