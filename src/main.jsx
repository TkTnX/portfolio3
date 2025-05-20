import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { AppLayout } from "./components/layouts/AppLayout";
import { About, Contacts, Reviews, Homepage, Portfolio } from "./routes";
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
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
