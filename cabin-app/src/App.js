import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom"
import { BodyBackground, Logo } from "./styles/BaseStyle"
import LoginPage from "./pages/LoginPage";
import NavigationModule from "./components/NavigationModule";
import { SearchPage } from './pages/SearchPage';
import { SidebarModule } from './components/SidebarModule';

function App() {

  return (
    <BodyBackground>
      <NavigationModule />
      <SidebarModule />
    </BodyBackground>
  );
}

export default App;