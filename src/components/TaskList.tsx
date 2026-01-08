import type { Task } from "../types/types";
import { TaskCard } from "./TaskCard";

export function TaskList({
  tasks,
  onComplete,
  onDelete,
}: {
  tasks: Task[];
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <>
      {tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          onComplete={() => onComplete(task.id)}
          onDelete={() => onDelete(task.id)}
        />
      ))}
    </>
  );
}