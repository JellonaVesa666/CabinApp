import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom"
import { BodyBackground, Logo } from "./styles/BaseStyle"
import LoginPage from "./pages/LoginPage";
import NavigationModule from "./components/NavigationModule";
import { SearchPage } from './pages/SearchPage';
import { SidebarModule } from './components/SidebarModule';

function App() {

  const [sidebarActive, setSidebarActive] = useState(true);

  return (
    <BodyBackground>
      <NavigationModule />
      <SidebarModule isActive={sidebarActive} />
    </BodyBackground>
  );
}

export default App;