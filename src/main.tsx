import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/layout";
import Root from "./screens/root";
import Docs from "./screens/docs";
import Schedule from "./screens/schedule";
import UserInfo from "./screens/user-info";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Root />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/user_info" element={<UserInfo />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
