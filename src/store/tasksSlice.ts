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
  // Project 1 – Website Redesign
  {
    id: "task-1",
    projectId: "proj-1",
    title: "Gather design requirements",
    status: "To Do",
  },
  {
    id: "task-2",
    projectId: "proj-1",
    title: "Create wireframes",
    status: "In Progress",
  },
  {
    id: "task-3",
    projectId: "proj-1",
    title: "Implement responsive layout",
    status: "Done",
  },
  {
    id: "task-4",
    projectId: "proj-1",
    title: "Cross-browser testing",
    status: "To Do",
  },

  // Project 2 – Mobile App Launch
  {
    id: "task-5",
    projectId: "proj-2",
    title: "Finalize app UI",
    status: "Done",
  },
  {
    id: "task-6",
    projectId: "proj-2",
    title: "Integrate push notifications",
    status: "Done",
  },
  {
    id: "task-7",
    projectId: "proj-2",
    title: "App Store submission",
    status: "Done",
  },
  {
    id: "task-8",
    projectId: "proj-2",
    title: "Marketing assets creation",
    status: "Done",
  },

  // Project 3 – Marketing Campaign Q3
  {
    id: "task-9",
    projectId: "proj-3",
    title: "Plan ad creatives",
    status: "To Do",
  },
  {
    id: "task-10",
    projectId: "proj-3",
    title: "Book ad slots",
    status: "In Progress",
  },
  {
    id: "task-11",
    projectId: "proj-3",
    title: "Write ad copy",
    status: "Done",
  },
  {
    id: "task-12",
    projectId: "proj-3",
    title: "Social media scheduling",
    status: "To Do",
  },

  // Project 4 – Internal HR Portal
  {
    id: "task-13",
    projectId: "proj-4",
    title: "Database schema design",
    status: "In Progress",
  },
  {
    id: "task-14",
    projectId: "proj-4",
    title: "Login authentication",
    status: "To Do",
  },
  {
    id: "task-15",
    projectId: "proj-4",
    title: "Employee profile page",
    status: "To Do",
  },
  {
    id: "task-16",
    projectId: "proj-4",
    title: "Role-based access control",
    status: "In Progress",
  },

  // Project 5 – E‑commerce Platform Upgrade
  {
    id: "task-17",
    projectId: "proj-5",
    title: "Upgrade payment gateway",
    status: "In Progress",
  },
  {
    id: "task-18",
    projectId: "proj-5",
    title: "Optimize checkout flow",
    status: "To Do",
  },
  {
    id: "task-19",
    projectId: "proj-5",
    title: "Update product images",
    status: "Done",
  },
  { id: "task-20", projectId: "proj-5", title: "SEO audit", status: "Done" },

  // Project 6 – Data Warehouse Migration
  {
    id: "task-21",
    projectId: "proj-6",
    title: "Backup existing data",
    status: "To Do",
  },
  {
    id: "task-22",
    projectId: "proj-6",
    title: "Provision new warehouse",
    status: "In Progress",
  },
  {
    id: "task-23",
    projectId: "proj-6",
    title: "Data migration script",
    status: "To Do",
  },
  {
    id: "task-24",
    projectId: "proj-6",
    title: "Validation & testing",
    status: "To Do",
  },

  // Project 7 – Customer Support Chatbot
  {
    id: "task-25",
    projectId: "proj-7",
    title: "Define bot flows",
    status: "Done",
  },
  {
    id: "task-26",
    projectId: "proj-7",
    title: "Integrate NLP engine",
    status: "Done",
  },
  { id: "task-27", projectId: "proj-7", title: "User testing", status: "Done" },
  {
    id: "task-28",
    projectId: "proj-7",
    title: "Documentation",
    status: "Done",
  },

  // Project 8 – SEO Optimization
  {
    id: "task-29",
    projectId: "proj-8",
    title: "Keyword research",
    status: "In Progress",
  },
  {
    id: "task-30",
    projectId: "proj-8",
    title: "On-page optimization",
    status: "To Do",
  },
  {
    id: "task-31",
    projectId: "proj-8",
    title: "Link-building campaign",
    status: "To Do",
  },
  {
    id: "task-32",
    projectId: "proj-8",
    title: "Performance report",
    status: "To Do",
  },

  // Project 9 – Product Launch Event
  { id: "task-33", projectId: "proj-9", title: "Book venue", status: "To Do" },
  {
    id: "task-34",
    projectId: "proj-9",
    title: "Invite list",
    status: "In Progress",
  },
  {
    id: "task-35",
    projectId: "proj-9",
    title: "Event schedule",
    status: "To Do",
  },
  {
    id: "task-36",
    projectId: "proj-9",
    title: "Media coverage",
    status: "Done",
  },

  // Project 10 – Cloud Infrastructure Upgrade
  {
    id: "task-37",
    projectId: "proj-10",
    title: "Migrate to Kubernetes",
    status: "To Do",
  },
  {
    id: "task-38",
    projectId: "proj-10",
    title: "Upgrade CI/CD pipeline",
    status: "To Do",
  },
  {
    id: "task-39",
    projectId: "proj-10",
    title: "Load testing",
    status: "To Do",
  },
  {
    id: "task-40",
    projectId: "proj-10",
    title: "Security review",
    status: "To Do",
  },

  // Project 11 – Employee Onboarding Flow
  {
    id: "task-41",
    projectId: "proj-11",
    title: "Design forms",
    status: "Done",
  },
  {
    id: "task-42",
    projectId: "proj-11",
    title: "Set up training portal",
    status: "Done",
  },
  {
    id: "task-43",
    projectId: "proj-11",
    title: "HR checklist",
    status: "Done",
  },
  {
    id: "task-44",
    projectId: "proj-11",
    title: "Email automation",
    status: "Done",
  },

  // Project 12 – CMS Revamp
  {
    id: "task-45",
    projectId: "proj-12",
    title: "Migrate existing content",
    status: "In Progress",
  },
  {
    id: "task-46",
    projectId: "proj-12",
    title: "Redesign templates",
    status: "To Do",
  },
  {
    id: "task-47",
    projectId: "proj-12",
    title: "Improve search feature",
    status: "To Do",
  },
  {
    id: "task-48",
    projectId: "proj-12",
    title: "User permissions",
    status: "To Do",
  },

  // Project 13 – Vendor Contract Renewal
  {
    id: "task-49",
    projectId: "proj-13",
    title: "Review contracts",
    status: "Done",
  },
  {
    id: "task-50",
    projectId: "proj-13",
    title: "Negotiate terms",
    status: "Done",
  },
  {
    id: "task-51",
    projectId: "proj-13",
    title: "Legal review",
    status: "Done",
  },
  {
    id: "task-52",
    projectId: "proj-13",
    title: "Sign agreements",
    status: "Done",
  },

  // Project 14 – Warehouse Automation
  {
    id: "task-53",
    projectId: "proj-14",
    title: "Install robots",
    status: "In Progress",
  },
  {
    id: "task-54",
    projectId: "proj-14",
    title: "Set up sensors",
    status: "To Do",
  },
  {
    id: "task-55",
    projectId: "proj-14",
    title: "System integration",
    status: "To Do",
  },
  {
    id: "task-56",
    projectId: "proj-14",
    title: "Staff training",
    status: "To Do",
  },

  // Project 15 – Security Audit
  {
    id: "task-57",
    projectId: "proj-15",
    title: "Vulnerability scan",
    status: "To Do",
  },
  {
    id: "task-58",
    projectId: "proj-15",
    title: "Penetration testing",
    status: "In Progress",
  },
  {
    id: "task-59",
    projectId: "proj-15",
    title: "Review policies",
    status: "To Do",
  },
  {
    id: "task-60",
    projectId: "proj-15",
    title: "Implement fixes",
    status: "To Do",
  },

  // Project 16 – New Product Development
  {
    id: "task-61",
    projectId: "proj-16",
    title: "Market research",
    status: "To Do",
  },
  {
    id: "task-62",
    projectId: "proj-16",
    title: "Prototype design",
    status: "In Progress",
  },
  {
    id: "task-63",
    projectId: "proj-16",
    title: "Product testing",
    status: "To Do",
  },
  {
    id: "task-64",
    projectId: "proj-16",
    title: "Marketing strategy",
    status: "To Do",
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
