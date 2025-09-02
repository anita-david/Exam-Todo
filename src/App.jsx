import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TodoDetail from "./pages/TodoDetail";
import NotFound from "./pages/NotFound";
import CrashTest from "./pages/CrashTest";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todos/:id" element={<TodoDetail />} />
      <Route path="/crash-test" element={<CrashTest />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
