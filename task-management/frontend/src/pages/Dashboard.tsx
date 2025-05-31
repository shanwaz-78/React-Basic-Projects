import { Container, Box, Button, Dialog, DialogTitle, Typography } from "@mui/material";
import { useState } from "react";
import { Task } from "../types/type";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import { useTasks } from "../hooks/useTasks";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const { addTask } = useTasks();

  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Typography variant="h4">My Tasks</Typography>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Add Task
        </Button>
      </Box>

      <TaskList />

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle>Add New Task</DialogTitle>
        <TaskForm
          initialValues={{
            title: "",
            description: "",
            status: "pending",
            dueDate: new Date().toISOString().split("T")[0],
          }}
          onSubmit={async (values) => {
            await addTask(values as Omit<Task, "id">);
            setOpen(false);
          }}
          onCancel={() => setOpen(false)}
        />
      </Dialog>
    </Container>
  );
};

export default Dashboard;
