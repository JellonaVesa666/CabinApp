import React, { useState } from "react";
//import { Link, Route, Routes } from "react-router-dom"
import { BodyBackground } from "./styles/BaseStyle"
import NavigationModule from "./modules/NavigationModule";
import { SearchBarModule } from './modules/SearchBarModule';
import { ContentModule } from "./modules/ContentModule";
import { ModalModule } from "./modules/ModalModule";
import { searchParameters } from "./mockup/searchFilterData";

function App() {
  const [modalState, setModalState] = useState("");
  const [searchFilters, setSearchFilters] = useState(searchParameters);

  const ToggleModal = (item) => {
    if (item !== modalState) {
      setModalState(item);
    }
    else {
      setModalState("");
    }
  }

  return (
    <BodyBackground>
      {modalState !== "" &&
        <ModalModule
          searchParameters={searchParameters}
          searchFilters={searchFilters}
          SetSearchFilters={setSearchFilters}
          state={modalState}
          SetModalState={setModalState}
        />
      }
      <NavigationModule />
      <SearchBarModule
        toggleModal={(filter) => ToggleModal(filter)}
        SetSearchFilters={setSearchFilters}
        searchFilters={searchFilters}
      />
      <ContentModule
        SetModalState={setModalState}
      />
    </BodyBackground>
  );
}

export default App;