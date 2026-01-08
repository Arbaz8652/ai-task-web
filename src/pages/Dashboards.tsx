import { useEffect, useState } from 'react';
import { fetchTasks, markComplete, deleteTask } from '../api/tasks.api';
import { TaskList } from '../components/TaskList';
import { ChatInput } from '../components/ChatInput';
import './Dashboard.css';
import type { Task } from '../types/types';
import { ThemeToggle } from '../components/ThemeToggle';

export function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);

  async function loadTasks() {
    const data = await fetchTasks();
    setTasks(data);
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="dashboard">
      <header className="header">
        <h1>AI Task Manager</h1>
        <ThemeToggle />
      </header>

      <div className="content">

        <div className="ai-panel">
          <ChatInput onResult={loadTasks} />
        </div>
        <div className="tasks-panel">
          <h2>Your Tasks</h2>
          <TaskList
            tasks={tasks}
            onComplete={async id => {
              await markComplete(id);
              loadTasks();
            }}
            onDelete={async id => {
              await deleteTask(id);
              loadTasks();
            }}
          />
        </div>
      </div>
    </div>
  );
}
