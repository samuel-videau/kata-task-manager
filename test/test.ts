import {assert} from 'chai';
import {getOperator, getDescription} from "../src/utils/parsing";

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

  it('should parse description', () => {
    assert(getDescription('+ Unit Test') === 'Unit Test');
  });
});
