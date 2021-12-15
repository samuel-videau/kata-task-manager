import {assert} from 'chai';

describe('Parsing operator +', () => {

  beforeEach(() => {
    parse('+ Unit Test');
  });

  it('should have increased task list', () => {
    assert(getTaskList.length > 0);
  });

  it('should parse correctly the description', () => {
    assert(getTaskList[0].description === 'Unit Test');
  });

  it('should have done status to false', () => {
    assert(getTaskList[0].description === 'Unit Test');
  });
});
