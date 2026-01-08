export type Topic =
  | 'BACKEND'
  | 'FRONTEND'
  | 'DATABASE'
  | 'DEVOPS'
  | 'PERSONAL';

export type Priority = 'LOW' | 'MEDIUM' | 'HIGH';
export type Status = 'TODO' | 'IN_PROGRESS' | 'DONE';

export interface Task {
  id: string;
  title: string;
  topic: Topic;
  priority: Priority;
  status: Status;
  dueDate?: string | null;
}
