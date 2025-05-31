export interface Task {
  id: string;
  title: string;
  description: string;
  status: "pending" | "in-progress" | "completed";
  dueDate: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
}

export interface TaskContextType {
  tasks: Task[];
  loading: boolean;
  error: string | null;
  addTask: (task: Omit<Task, "id">) => Promise<void>;
  editTask: (id: string, updates: Partial<Task>) => Promise<void>;
  removeTask: (id: string) => Promise<void>;
}

export interface User {
  email: string;
  password: string;
}

export interface Register extends User {
  name: string;
}
