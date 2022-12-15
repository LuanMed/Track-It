import { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HabitsPage from "./pages/HabitsPage";
import HistoricPage from "./pages/HistoricPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import TodayPage from "./pages/TodayPage";
import { UserInfoContext } from "./UserInfoContext";

export default function App() {
  // const userInfo = useContext(UserInfoContext);
  const [userInfo, setUserInfo] = useState({});

  return (
    <BrowserRouter>
      <UserInfoContext.Provider value={[userInfo, setUserInfo]}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<RegistrationPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/historico" element={<HistoricPage />} />
        </Routes>
      </UserInfoContext.Provider>
    </BrowserRouter>
  );
}
