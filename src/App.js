import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HabitsPage from "./pages/HabitsPage";
import HistoricPage from "./pages/HistoricPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import TodayPage from "./pages/TodayPage";
import { UserInfoContext } from "./context/UserInfoContext";
import { PercentageContext } from "./context/PercentageContext";

export default function App() {
  const [userInfo, setUserInfo] = useState({});
  const [percentage, setPercentage] = useState(0);

  return (
    <BrowserRouter>
      <UserInfoContext.Provider value={[userInfo, setUserInfo]}>
        <PercentageContext.Provider value={[percentage, setPercentage]}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<RegistrationPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/historico" element={<HistoricPage />} />
        </Routes>
        </PercentageContext.Provider>
      </UserInfoContext.Provider>
    </BrowserRouter>
  );
}
