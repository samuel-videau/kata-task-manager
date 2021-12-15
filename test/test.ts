import {assert, expect} from 'chai';
import {getOperator, getContent} from "../src/utils/parsing";
import {TaskManager} from "../src/TaskManager";
import {Task} from "../src/models/task.model";

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

describe('Display the tasks', () => {
  let taskManager: TaskManager;
  beforeEach(() => {
    taskManager = new TaskManager();
    taskManager.parse('+ Unit Test');
    taskManager.parse('+ Unit Test2');
    taskManager.parse('+ Unit Test3');
  });

  it('should display the expected amount of lines', () => {
    const display = taskManager.displayTaskList().split('\n');
    expect(display.length).to.equal(taskManager.getTaskList().length);
  });

  it('should display the expected ids', () => {
    const display: string[] = taskManager.displayTaskList().split('\n');
    const tasks: Task[] = taskManager.getTaskList();
    for(let i = 0; i < display.length; i++ ) {
      expect(display[i]).to.contain(tasks[i].id + ' [');
    }
  });

  it('should display the expected descriptions', () => {
    const display: string[] = taskManager.displayTaskList().split('\n');
    const tasks: Task[] = taskManager.getTaskList();
    for(let i = 0; i < display.length; i++ ) {
      expect(display[i]).to.contain(tasks[i].description);
    }
  });

  it('should display the expected to do status', () => {
    const display: string[] = taskManager.displayTaskList().split('\n');
    for(let i = 0; i < display.length; i++ ) {
      expect(display[i]).to.contain('[ ]');
    }
  });

  it('should display the expected done status', () => {
    taskManager.parse('x 1');
    const display: string[] = taskManager.displayTaskList().split('\n');
    expect(display[0]).to.contain('[x]');
  });
});
