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
      <div className="container-fluid" style={{ height: "calc(100% - 60px)" }}>
        <div className="row h-100 d-flex flex-wrap">
          <SidebarModule isActive={sidebarActive} />

        </div>
      </div>
    </BodyBackground>
  );
}

export default App;