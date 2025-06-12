# React Todo App – AltSchool Second Semester Exam Project

A fully-featured Todo App built with React 19, TanStack Router, TanStack Query, and TailwindCSS. This project is part of the AltSchool of Frontend Engineering Tinyuka 2024 Second Semester Examination.

---

## Features

- Fetch, create, update, and delete todos
- Pagination (10 todos per page)
- Todo detail page via nested routing
- Search and filter (by title & completion status)
- Responsive UI with keyboard navigation
- Offline/local todo support (via localStorage)
- Error handling (error boundary + 404)
- Loading states & visual feedback

---

## Demo

**Live URL**: https://anita-david-todo-exam.vercel.app/

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

| Fetched and Displayed Todos | Loading State |
Pagination
| Edit Todo | Todo Detail | 404 Page | Error Boundary Page| Completed Todos | Incomplete Todos | Add Todo | 
| ![Fetched and Displayed Todos](/public/IMG_9393.PNG) | ![Loading State](/public/IMG_9394.PNG) | ![Pagination](/public/IMG_9395.PNG) | ![Edit Todo](/public/IMG_9396.PNG) | ![Todo Detail](/public/IMG_9397.PNG) | ![404 Page](/public/IMG_9398.PNG) | ![Error Boundary Page](/public/IMG_9399.PNG) | ![Completed Todos](/public/IMG_9400.PNG) | ![Incomplete Todos](/public/IMG_9401.PNG) | ![Add Todo](/public/IMG_9402.PNG) |

---

## How to Run Locally

```bash
# Clone repo
git clone https://github.com/your-username/react-todo-alt.git
cd react-todo-alt

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## Architectural Decisions

TanStack Router was chosen for its modern nested routing capabilities and tight React integration.

TanStack Query simplifies data fetching and syncing with the server.

Tailwind speeds up responsive design and helps maintain consistency.

localStorage was used to persist user-created todos that don't exist on the mock API.

---

## Limitations

Handling update/delete logic for newly created todos not in the JSON API

---

## Available Scripts

```bash
# Create production build
npm run build

# preview production build locally
npm run preview

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## Future Improvements

Replace JSONPlaceholder with a real backend

Add user authentication

Use IndexedDB for full offline support

Add unit/integration tests

---

# Author

Anita David
Frontend Developer at AltSchool
