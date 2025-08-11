# 🧰 ZestNexus – Mini Project Manager

A beautifully designed **Mini Project Management Dashboard** built with:

- React 19 + TypeScript  
- Redux Toolkit  
- Ant Design + TailwindCSS  
- React Router DOM  
- React Query  
- dnd-kit drag-and-drop  
- Vite

This app is responsive, fully functional, and preloaded with demo projects & tasks to showcase all features instantly.

---

## 🚀 Live Preview
**[▶ View Demo App](https://zestnexus.netrazo.com/)**

---

## 🔑 Demo Login Credentials
Use these to log in:

Email: admin@demo.com
Password: 1234


---

## ✨ Features

- **Authentication:**
  - Mock login validates credentials and redirects to the dashboard.
  - Protected routes for secured access.

- **Projects Dashboard:**
  - Ant Design `Table` with **pagination** (10 per page), **sorting**, **search**, and **status filtering**.
  - Preloaded with **16 demo projects** for easy review.
  - Add/Edit projects via modal form with field validations.

- **Kanban Board (Per Project):**
  - Powered by **dnd-kit** for smooth drag-and-drop.
  - Columns: **To Do**, **In Progress**, **Done**.
  - Add and remove tasks dynamically.
  - Preloaded with **4-5 tasks per project** so boards are already populated.

- **Responsive UI/UX:**
  - Ant Design for modern components.
  - TailwindCSS for custom styling and mobile-first layouts.

- **Clean State Management:**
  - Redux Toolkit slices for projects & tasks.
  - React Query ready for API integration.

---

## 🛠 Tech Stack

| Category          | Tools / Libraries |
|-------------------|-------------------|
| UI Framework      | React 19 + TypeScript |
| Build Tool        | Vite |
| State Management  | Redux Toolkit |
| Styling           | Ant Design, TailwindCSS |
| Routing           | React Router DOM |
| Data Fetching     | @tanstack/react-query |
| Drag and Drop     | dnd-kit/core, dnd-kit/sortable |
| Icons             | Ant Design Icons |

---

## 📂 Folder Structure

```text
src/
├── components/
│   ├── board/          # Kanban Board
│   └── table/          # Project Table
├── layout/             # Dashboard layout wrapper
├── pages/
│   ├── auth/           # Login page
│   └── projects/       # Dashboard, details, and form
├── store/              # Redux slices and store setup
└── main.tsx, App.tsx   # Entry & routing


---

## ⚙️ Installation & Local Development

**Clone the repository:**
git clone https://github.com/Jagdishk7/ZestNexus-Frontend-Assignment.git
cd ZestNexus-Frontend-Assignment


**Install dependencies:**
npm install


**Run in development mode:**
npm run dev

Then open the URL shown in your terminal (e.g., http://localhost:5173).

**Build for production:**
npm run build


**Preview production build locally:**
npm run preview


---

## 📏 ESLint & TypeScript Setup

This project uses **ESLint with TypeScript type-aware rules** for clean, consistent code:

- `tseslint.configs.recommendedTypeChecked` (or `strictTypeChecked`)
- Optional stylistic rules via `stylisticTypeChecked`
- `eslint-plugin-react-x` & `eslint-plugin-react-dom` for React-specific linting
- Type-aware parser options pointing to `tsconfig` files

---

## 📸 Screenshots

### Dashboard
Displays projects with sorting, search, filter, and pagination.

![Dashboard Screenshot](docs/screens/dashboard.png)

### Project Details with Kanban Board
Drag-and-drop tasks, add/remove tasks.

![Kanban Screenshot](docs/screens/kanban.png)

---

## 🧠 Evaluation Criteria

- ✅ Code Quality & Structure
- ✅ Understanding of React Ecosystem (Hooks, State, Side Effects)
- ✅ TypeScript usage with strong typing
- ✅ UI/UX polish (Ant Design + TailwindCSS)
- ✅ Drag-and-drop with dnd-kit
- ✅ Clean git history & README documentation
- ⚠ Bonus: Can add Jest + RTL tests for extra points

---

## 📜 License
This project is for demonstration purposes as part of the **ZestNexus Frontend Assignment**.

---

💡 **Note:** The app is **preloaded** with demo projects and tasks so reviewers can instantly explore the dashboard and Kanban boards without adding data manually.