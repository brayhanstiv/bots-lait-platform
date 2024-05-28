// Pages
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import RequireAuth from "./components/Auth";
import Admin from "./layouts/Admin";
import Auth from "./layouts/Auth";
import Landing from "./layouts/Landing";
import DashboardPage from "./pages/Admin/Dashboard";
import MapsPage from "./pages/Admin/Maps";
import SettingsPage from "./pages/Admin/Settings";
import TablesPage from "./pages/Admin/Tables";
import MainPage from "./pages/Landing/Main";
import LoginPage from "./pages/Auth/Login";
import BotsInfoPage from "./pages/Admin/Bots";
import CreateTypePage from "./pages/Admin/CreateType";
import CreateBotPage from "./pages/Admin/CreateBot";
import CreateTemplatePage from "./pages/Admin/CreateTemplate";
import QuoteBotPage from "./pages/Landing/QuoteBot";
import MyProfilePage from "./pages/Admin/MyProfile";
import EditProfilePage from "./pages/Admin/EditProfile";

const App = () => {
  useEffect(() => {
    localStorage.setItem("locale", "es");
  }, []);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />}>
            <Route path='main' element={<MainPage />} />
            <Route path='quote-bot' element={<QuoteBotPage />} />
            <Route path='' element={<MainPage />} />
          </Route>
          <Route
            path='admin'
            element={
              <RequireAuth>
                <Admin />
              </RequireAuth>
            }
          >
            <Route path='dashboard' element={<DashboardPage />} />
            <Route path='create-type' element={<CreateTypePage />} />
            <Route path='create-template' element={<CreateTemplatePage />} />
            <Route path='create-bot' element={<CreateBotPage />} />
            <Route path='bots' element={<BotsInfoPage />} />
            <Route path='maps' element={<MapsPage />} />
            <Route path='my-profile' element={<MyProfilePage />} />
            <Route path='edit-profile' element={<EditProfilePage />} />
            <Route path='settings' element={<SettingsPage />} />
            <Route path='tables' element={<TablesPage />} />
            <Route path='' element={<DashboardPage />} />
          </Route>
          <Route path='auth' element={<Auth />}>
            <Route path='login' element={<LoginPage />} />
            <Route path='' element={<LoginPage />} />
          </Route>
          **
          <Route path='*' element={<h1>404</h1>} />
          **
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
