import {assert} from 'chai';
import {main} from "../src";

describe('Task Manager', () => {
  it('should not throw', () => {
    try {
      main();
    } catch (e) {
      assert(false);
    }
    console.assert(true);
  });
});
