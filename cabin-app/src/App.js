import React from "react";
//import { Link, Route, Routes } from "react-router-dom"
import { BodyBackground } from "./styles/BaseStyle"
import NavigationModule from "./modules/NavigationModule";
import { SearchBarModule } from './modules/SearchBarModule';
import { ContentModule } from "./modules/ContentModule";

function App() {

  return (
    <BodyBackground>
      <NavigationModule />
      <SearchBarModule />
      <ContentModule />
    </BodyBackground>
  );
}

export default App;