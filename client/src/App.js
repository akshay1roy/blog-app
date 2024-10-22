import { useContext } from "react";
import TopBar from "./components/Topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/Register/Register";
import Setting from "./pages/settings/Setting";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
// import TopBar from "./Topbar/TopBar";
// import { createRoot } from "react-dom/client";
import {
  // createBrowserRouter,
  BrowserRouter,
  // RouterProvider,
  Routes,
  Route,
  // Link,
  Router,
} from "react-router-dom";
import { Context } from "./components/context/Context";

function App() {

  const {user}=useContext(Context);

  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/settings" element={user ? <Setting /> : <Register />} />
        <Route path="/post/:id" element={user ? <Single /> : <Register />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
