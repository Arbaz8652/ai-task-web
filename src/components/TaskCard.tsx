
import type { Task } from '../types/types';
import './TaskCard.css';

export function TaskCard({
  task,
  onComplete,
  onDelete,
}: {
  task: Task;
  onComplete: () => void;
  onDelete: () => void;
}) {
  return (
    <div className="task-card">
      <div className="task-main">
        <h4>{task.title}</h4>
        <p className="meta">
          {task.topic} • {task.priority}
        </p>
        {task.dueDate && <p className="due">Due {task.dueDate}</p>}
      </div>

      <div className="task-actions">
        {task.status !== 'DONE' && (
          <button className="btn success" onClick={onComplete}>
            Done
          </button>
        )}
        <button className="btn danger" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
