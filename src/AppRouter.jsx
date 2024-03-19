import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PaginaBase } from "./pages/PaginaBase";
import { Home } from "./pages/Home";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";
import { Admin } from "./pages/Admin";
import { Ofertas } from "./pages/Ofertas";
import ModalState from "./shared/contexts/ModalState";

function AppRouter() {
  return (
    <AppThemeProvider>
      <ModalState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PaginaBase />}>
              <Route index element={<Home />} />
              <Route path="admin" element={<Admin />} />
              <Route path="ofertas" element={<Ofertas />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ModalState>
    </AppThemeProvider>
  );
}

export default AppRouter;
