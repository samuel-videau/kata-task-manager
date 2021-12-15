import {Task, TaskStatus} from "./models/task.model";
import {getContent, getOperator} from "./utils/parsing";

export class TaskManager {
  private taskList: Task[];

  constructor() {
    this.taskList = [];
  }

  public parse(expression: string): void {
    const content = getContent(expression);
    switch (getOperator(expression)) {
      case '+':
        this.addItem(content);
        break;
      case '-':
        this.removeItem(parseInt(content, 10));
        break;
      case 'x':
        this.setStatus(parseInt(content, 10), 'done');
        break;
      case 'o':
        this.setStatus(parseInt(content, 10), 'to do');
        break;
    }
  }

  public getTaskList(): Task[] {
    return this.taskList;
  }

  private addItem(description: string): void {
    const id = this.taskList.length;
    this.taskList.push({id, description, status: ''});
  }

  private removeItem(id: number): void {
    this.taskList.splice(this.indexOf(id), 1);
  }

  private setStatus(id: number, status: TaskStatus): void {
    this.taskList[this.indexOf(id)].status = status;
  }

  private indexOf(id: number): number {
    const element = this.taskList.filter(el => el.id === id)[0];
    return this.taskList.indexOf(element);
  }
}
