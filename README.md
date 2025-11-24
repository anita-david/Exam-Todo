# React Todo App

A fully featured todo application built by Anita David using React 19, TanStack Router, TanStack Query, and TailwindCSS. This project was originally created for the AltSchool Frontend Engineering Tinyuka 2024 Second Semester Examination but has been refined to meet international frontend engineering standards.

Live Demo: https://anita-todo.pipeops.net/ or https://anita-david-todo-exam.vercel.app/

---

## Overview
This application allows users to create, update, delete, and manage todos efficiently. It includes pagination, nested routing, search and filter capabilities, local todo persistence, authentication, and detailed accessibility considerations. The structure and architecture follow modern React best practices.

---

## Features

- Fetch, create, update, and delete todos
- Pagination (10 todos per page)
- Todo detail page via nested routing
- Search and filter (by title & completion status)
- Responsive UI with keyboard navigation
- Local todo support (via localStorage)
- Error handling (error boundary + 404)
- Loading states & visual feedback
- Newly implemented User Authentication

---

## Accessibility Considerations

-Keyboard navigation for all major actions
-Visible focus outlines for all interactive components
-ARIA labels used for modals and key UI elements
-Semantic HTML structure for better screen reader support

---

## Demo

**Live URL**: https://anita-todo.pipeops.net/ OR https://anita-david-todo-exam.vercel.app/

---

## Tech Stack

| Tool                 | Purpose                              |
| -------------------- | ------------------------------------ |
| **React 19+**        | Functional component architecture    |
| **TanStack Router**  | Nested and dynamic routing           |
| **TanStack Query**   | Data fetching, caching, and mutation |
| **TailwindCSS**      | Fast, utility-first styling          |
| **Lucide React**     | Icon set                             |
| **localStorage API** | Data persistence when offline        |

---

## Screenshots

| Fetched Todos | Loading State | Pagination | Edit Todo | Todo Detail |
|---------------|---------------|------------|-----------|-------------|
| ![Fetched Todos](/public/IMG_9393.PNG) | ![Loading State](/public/IMG_9394.PNG) | ![Pagination](/public/IMG_9395.PNG) | ![Edit Todo](/public/IMG_9396.PNG) | ![Todo Detail](/public/IMG_9397.PNG) |

| 404 Page | Error Boundary | Completed Todos | Incomplete Todos | Add Todo |
|----------|----------------|------------------|-------------------|----------|
| ![404 Page](/public/IMG_9398.PNG) | ![Error Boundary](/public/IMG_9399.PNG) | ![Completed](/public/IMG_9400.PNG) | ![Incomplete](/public/IMG_9401.PNG) | ![Add Todo](/public/IMG_9402.PNG) |


---

## Installation
# Prerequisites
-Node.js 18 or higher
-npm, pnpm, or yarn
-macOS, Linux, or Windows

---

## How to Run Locally

```bash

git clone https://github.com/anita-david/Exam-Todo.git
cd Exam-Todo


pnpm install


pnpm run dev
```

---

## How to Use
-Start the development server.
-Open the application in your browser.
-Sign up or Login
-Add a new todo using the "Add Todo" button.
-Click any todo to view details.
-Filter tasks by completed or pending status.
-Search tasks by title.
-Navigate pages using pagination controls.
-Edit or delete todos using modal actions.

---

## Architectural Decisions

TanStack Router was chosen for its modern nested routing capabilities and tight React integration.

TanStack Query simplifies data fetching and syncing with the server.

Tailwind speeds up responsive design and helps maintain consistency.

localStorage was used to persist user-created todos that don't exist on the mock API.

---

## Testing
# Running Tests

Use the following commands:
This project uses Vitest along with React Testing Library for unit testing components.

```bash

pnpm run test      # Run all tests in the terminal
pnpm run test:ui   # Open Vitest UI in browser

```
# Example Test: AddTodoModal

A sample test is implemented for the AddTodoModal component, covering:

Rendering the modal heading

Updating input field values

Clicking the Add button calls onAdd and onClose

Clicking the Cancel button calls onClose

Validation prevents adding empty todos

# Notes

All tests are written in TypeScript (TSX) and fully compatible with pnpm and Vite.

Future tests can expand coverage to other components like Todo List, Pagination, and Detail pages.

Vitest ensures fast test execution and easy browser-based UI debugging.

---

## Limitations

---

Update and delete logic for local only todos requires additional refinement.

No IndexedDB support yet.

Authentication is basic and can be extended.


---

## Available Scripts

```bash

pnpm run build


pnpm run preview


pnpm install


pnpm run dev
```

---

## Future Improvements

Replace JSONPlaceholder with a real backend

Expand authentication to include roles and protected routes

Implement IndexedDB for full offline capability

Add full unit and integration test coverage

Improve loading states and empty state design

Add dark mode

---

# Author

Built by Anita David

