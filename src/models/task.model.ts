export type TaskStatus = '' | 'to do' | 'done';

export interface Task {
  id: number;
  description: string;
  status: TaskStatus;
}
