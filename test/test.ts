import {assert} from 'chai';

describe('Parsing', () => {

  it('should parse + operator', () => {
    assert(getOperator('+ Unit Test'));
  });

  it('should parse - operator', () => {
    assert(getOperator('- Unit Test'));
  });

  it('should parse x operator', () => {
    assert(getOperator('x Unit Test'));
  });

  it('should parse o operator', () => {
    assert(getOperator('o Unit Test'));
  });
});
