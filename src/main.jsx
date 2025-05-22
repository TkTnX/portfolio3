import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { AppLayout, AdminLayout } from "./components/layouts";
import {
  About,
  Contacts,
  Reviews,
  Homepage,
  Portfolio,
  Admin,
  ProjectsPage,
  TechnologiesPage,
} from "./routes";
import { ToastContainer } from "react-toastify";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="contact" element={<Contacts />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="technologies" element={<TechnologiesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </StrictMode>
);
