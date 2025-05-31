import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
} from "@mui/material";
import { Task } from "../types/type";
import { useTasks } from "../hooks/useTasks";
import TaskForm from "./TaskForm";

const TaskItem = ({ task }: { task: Task }) => {
  const [editMode, setEditMode] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const { editTask, removeTask } = useTasks();

  const handleStatusChange = async (newStatus: Task["status"]) => {
    await editTask(task.id, { status: newStatus });
  };

  const handleDelete = async () => {
    await removeTask(task.id);
    setDeleteConfirm(false);
  };

  return (
    <>
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">{task.title}</Typography>
            <Chip
              label={task.status}
              color={
                task.status === "completed"
                  ? "success"
                  : task.status === "in-progress"
                  ? "warning"
                  : "default"
              }
            />
          </Stack>
          <Typography variant="body2" color="text.secondary" mt={1}>
            {task.description}
          </Typography>
          <Typography variant="caption" display="block" mt={1}>
            Due: {new Date(task.dueDate).toLocaleDateString()}
          </Typography>
          <Stack direction="row" spacing={1} mt={2}>
            <Button size="small" onClick={() => setEditMode(true)}>
              Edit
            </Button>
            <Button
              size="small"
              color="error"
              onClick={() => setDeleteConfirm(true)}
            >
              Delete
            </Button>
            {task.status !== "completed" && (
              <Button
                size="small"
                onClick={() => handleStatusChange("completed")}
              >
                Mark Complete
              </Button>
            )}
          </Stack>
        </CardContent>
      </Card>

      <Dialog open={deleteConfirm} onClose={() => setDeleteConfirm(false)}>
        <DialogTitle>Are you sure you want to delete this task?</DialogTitle>
        <DialogActions>
          <Button onClick={() => setDeleteConfirm(false)}>Cancel</Button>
          <Button onClick={handleDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={editMode} onClose={() => setEditMode(false)} fullWidth>
        <DialogTitle>Edit Task</DialogTitle>
        <TaskForm
          initialValues={task}
          onSubmit={async (values) => {
            await editTask(task.id, values);
            setEditMode(false);
          }}
          onCancel={() => setEditMode(false)}
        />
      </Dialog>
    </>
  );
};

export default TaskItem;
