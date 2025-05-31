import { Box, Typography, CircularProgress, Alert } from "@mui/material";
import TaskItem from "./TaskItem";
import { useTasks } from "../hooks/useTasks";

const TaskList = () => {
  const { tasks, loading, error } = useTasks();

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box mt={2}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  if (tasks.length === 0) {
    return (
      <Box mt={2}>
        <Typography variant="body1">
          No tasks found. Create one to get started!
        </Typography>
      </Box>
    );
  }

  return (
    <Box mt={2}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </Box>
  );
};

export default TaskList;
