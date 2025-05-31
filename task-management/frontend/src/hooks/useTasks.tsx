import { useState, useEffect, createContext, useContext } from 'react';
import { TaskContextType, Task } from '../types/type.ts';
import { fetchTasks, createTask, updateTask, deleteTask } from '../services/api.ts';

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await fetchTasks();
        setTasks(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch tasks');
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, []);

  const addTask = async (task: Omit<Task, 'id'>) => {
    try {
      const newTask = await createTask(task);
      setTasks([...tasks, newTask]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add task');
    }
  };

  const editTask = async (id: string, updates: Partial<Task>) => {
    try {
      const updatedTask = await updateTask(id, updates);
      setTasks(tasks.map(task => task.id === id ? updatedTask : task));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update task');
    }
  };

  const removeTask = async (id: string) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete task');
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, loading, error, addTask, editTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};