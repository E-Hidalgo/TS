import { Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header";
import TaskManager from "./pages/TaskManager";
import Hours from "./pages/Hours";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Profile from "./pages/Profile";

function App(): JSX.Element {


  return (
    <>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/hours" element={<Hours />} />
            <Route path="/taskManager" element={<TaskManager />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
    </>
  );
}

export default App;
