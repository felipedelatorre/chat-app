'use strict';

const sum = require('../client/app')

describe('sum()', () => {
  
  it('should sum two numbers', () => {
    let result = sum(5,5);

    expect(result).toBe(10);
  });
});