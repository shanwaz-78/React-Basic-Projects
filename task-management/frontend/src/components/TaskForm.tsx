import { useState } from "react";
import {
  DialogContent,
  TextField,
  Stack,
  MenuItem,
  Button,
  Box,
} from "@mui/material";
import { Task } from "../types/type";

interface TaskFormProps {
  initialValues: Partial<Task>;
  onSubmit: (values: Partial<Task>) => Promise<void>;
  onCancel: () => void;
}

const TaskForm = ({ initialValues, onSubmit, onCancel }: TaskFormProps) => {
  const [values, setValues] = useState<Partial<Task>>({
    title: "",
    description: "",
    status: "pending",
    dueDate: new Date().toISOString().split("T")[0],
    ...initialValues,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <DialogContent>
        <Stack spacing={2}>
          <TextField
            name="title"
            label="Title"
            value={values.title}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            name="description"
            label="Description"
            value={values.description}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
          />
          <TextField
            name="status"
            label="Status"
            value={values.status}
            onChange={handleChange}
            select
            fullWidth
          >
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="in-progress">In Progress</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
          </TextField>
          <TextField
            name="dueDate"
            label="Due Date"
            type="date"
            value={values.dueDate}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Stack>
      </DialogContent>
      <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end", gap: 2 }}>
        <Button onClick={onCancel}>Cancel</Button>
        <Button type="submit" variant="contained">
          Save
        </Button>
      </Box>
    </form>
  );
};

export default TaskForm;
