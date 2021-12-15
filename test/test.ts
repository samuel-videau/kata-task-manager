import {assert} from 'chai';
import {getOperator, getContent} from "../src/utils/parsing";
import {TaskManager} from "../src/TaskManager";

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
    assert(getContent('+ Unit Test') === 'Unit Test');
  });
});

describe('Update the task list', () => {
  let taskManager: TaskManager;
  beforeEach(() => {
    taskManager = new TaskManager();
  });

  it('should be able to add an item', () => {
    taskManager.parse('+ Unit Test');
    assert(taskManager.getTaskList().length > 0);
  });

  it('should be able to remove an item', () => {
    taskManager.parse('+ Unit Test');
    taskManager.parse('- 0');
    assert(taskManager.getTaskList().length == 0);
  });

  it('should be able to set status to done', () => {
    taskManager.parse('+ Unit Test');
    taskManager.parse('x 0');
    assert(taskManager.getTaskList()[0].status === 'done');
  });

  it('should be able to set status to to do', () => {
    taskManager.parse('+ Unit Test');
    taskManager.parse('o 0');
    assert(taskManager.getTaskList()[0].status === 'to do');
  });
});
