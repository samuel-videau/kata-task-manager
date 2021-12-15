import {TaskManager} from "./TaskManager";

const taskManager = new TaskManager();
taskManager.parse('+ Unit Test');
console.log(taskManager.getTaskList())
