import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export type TaskStatus = "To Do" | "In Progress" | "Done";

export interface Task {
  id: string;
  projectId: string;
  title: string;
  status: TaskStatus;
}

const initialState: Task[] = [
  {
    id: "task-1",
    projectId: "proj-1",
    title: "Setup Figma Design",
    status: "To Do",
  },
  {
    id: "task-2",
    projectId: "proj-1",
    title: "Setup Repo",
    status: "In Progress",
  },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<string>) =>
      state.filter((t) => t.id !== action.payload),
    updateTask: (state, action: PayloadAction<Task>) => {
      const idx = state.findIndex((t) => t.id === action.payload.id);
      if (idx !== -1) state[idx] = action.payload;
    },
    moveTask: (
      state,
      action: PayloadAction<{ id: string; status: TaskStatus }>
    ) => {
      const task = state.find((t) => t.id === action.payload.id);
      if (task) task.status = action.payload.status;
    },
  },
});

export const { addTask, removeTask, updateTask, moveTask } = tasksSlice.actions;
export default tasksSlice.reducer;
