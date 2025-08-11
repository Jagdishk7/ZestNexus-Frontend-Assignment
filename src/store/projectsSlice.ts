import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export type ProjectStatus = "Active" | "Completed" | "Delayed";

export interface Project {
  id: string;
  name: string;
  owner: string;
  startDate: string;
  dueDate: string;
  status: ProjectStatus;
}

const initialState: Project[] = [
  {
    id: "proj-1",
    name: "Website Redesign",
    owner: "Alice Johnson",
    startDate: "2025-06-01",
    dueDate: "2025-09-01",
    status: "Active",
  },
  {
    id: "proj-2",
    name: "Mobile App Launch",
    owner: "Bob Smith",
    startDate: "2025-02-10",
    dueDate: "2025-05-30",
    status: "Completed",
  },
  {
    id: "proj-3",
    name: "Marketing Campaign Q3",
    owner: "Clara Martinez",
    startDate: "2025-07-01",
    dueDate: "2025-08-31",
    status: "Active",
  },
  {
    id: "proj-4",
    name: "Internal HR Portal",
    owner: "David Lee",
    startDate: "2025-01-15",
    dueDate: "2025-04-15",
    status: "Delayed",
  },
  {
    id: "proj-5",
    name: "E‑commerce Platform Upgrade",
    owner: "Eva Green",
    startDate: "2025-03-01",
    dueDate: "2025-07-30",
    status: "Active",
  },
  {
    id: "proj-6",
    name: "Data Warehouse Migration",
    owner: "Frank Howard",
    startDate: "2025-04-01",
    dueDate: "2025-10-01",
    status: "Active",
  },
  {
    id: "proj-7",
    name: "Customer Support Chatbot",
    owner: "Grace Kim",
    startDate: "2025-02-15",
    dueDate: "2025-06-15",
    status: "Completed",
  },
  {
    id: "proj-8",
    name: "SEO Optimization",
    owner: "Henry Adams",
    startDate: "2025-05-10",
    dueDate: "2025-06-30",
    status: "Active",
  },
  {
    id: "proj-9",
    name: "Product Launch Event",
    owner: "Ivy Green",
    startDate: "2025-07-05",
    dueDate: "2025-08-10",
    status: "Active",
  },
  {
    id: "proj-10",
    name: "Cloud Infrastructure Upgrade",
    owner: "Jack White",
    startDate: "2025-01-20",
    dueDate: "2025-03-20",
    status: "Delayed",
  },
  {
    id: "proj-11",
    name: "New Employee Onboarding Flow",
    owner: "Karen Black",
    startDate: "2025-02-01",
    dueDate: "2025-03-15",
    status: "Completed",
  },
  {
    id: "proj-12",
    name: "Content Management System Revamp",
    owner: "Luke Wayne",
    startDate: "2025-04-05",
    dueDate: "2025-08-15",
    status: "Active",
  },
  {
    id: "proj-13",
    name: "Vendor Contract Renewal",
    owner: "Mia Wong",
    startDate: "2025-03-03",
    dueDate: "2025-05-15",
    status: "Completed",
  },
  {
    id: "proj-14",
    name: "Warehouse Automation",
    owner: "Nick Brown",
    startDate: "2025-05-25",
    dueDate: "2025-09-01",
    status: "Active",
  },
  {
    id: "proj-15",
    name: "Security Audit",
    owner: "Olivia King",
    startDate: "2025-06-10",
    dueDate: "2025-07-01",
    status: "Delayed",
  },
  {
    id: "proj-16",
    name: "New Product Development",
    owner: "Peter Drake",
    startDate: "2025-01-05",
    dueDate: "2025-11-20",
    status: "Active",
  },
];


const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<Project>) => {
      state.push(action.payload);
    },
    editProject: (state, action: PayloadAction<Project>) => {
      const idx = state.findIndex((p) => p.id === action.payload.id);
      if (idx !== -1) state[idx] = action.payload;
    },
    deleteProject: (state, action: PayloadAction<string>) => {
      return state.filter((p) => p.id !== action.payload);
    },
  },
});

export const { addProject, editProject, deleteProject } = projectsSlice.actions;
export default projectsSlice.reducer;
