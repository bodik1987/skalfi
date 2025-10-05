import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/layout";
import Root from "./screens/root";
import Money from "./screens/money";
import Docs from "./screens/docs";
import Schedule from "./screens/schedule";
import Totals from "./screens/totals";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Root />} />
        <Route path="/money" element={<Money />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/totals" element={<Totals />} />

        {/* <Route path="folders">
          <Route element={<Folders />}>
            <Route index element={<div>Folders</div>} />
            <Route path=":id" element={<div>Folder Id</div>} />
          </Route>
        </Route> */}
      </Route>
    </Routes>
  </BrowserRouter>
);
