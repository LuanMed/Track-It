import { BrowserRouter, Routes, Route } from "react-router-dom";
import HabitsPage from "./pages/HabitsPage";
import HistoricPage from "./pages/HistoricPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import TodayPage from "./pages/TodayPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/cadastro" element={<RegistrationPage />}/>
        <Route path="/habitos" element={<HabitsPage />}/>
        <Route path="/hoje" element={<TodayPage />}/>
        <Route path="/historico" element={<HistoricPage />}/>
      </Routes>
    </BrowserRouter>
  );
}
