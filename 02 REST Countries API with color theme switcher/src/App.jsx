import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Country from "./pages/Country";
import MainLayout from "./layouts/MainLayout";
import { CountriesProvider } from "./contexts/CountriesContext";

export default function App() {
  return (
    <CountriesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path=":name" element={<Country />} />

            {/* 404 */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CountriesProvider>
  );
}
