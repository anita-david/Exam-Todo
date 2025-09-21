import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TodoDetail from "./pages/TodoDetail.tsx";
import NotFound from "./pages/NotFound.tsx";
import CrashTest from "./pages/CrashTest.tsx";
import FirebaseCheck from "../src/components/FirebaseCheck.tsx";
import Signup from "./pages/Signup.tsx";
import Login from "./pages/Login.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";

function App() {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />

      <Route path="/todos/:id" element={<TodoDetail />} />
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/crash-test" element={<CrashTest />} />
      <Route path="/firebase-check" element={<FirebaseCheck />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
