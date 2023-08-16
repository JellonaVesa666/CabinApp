import React, { useState } from "react";
//import { Link, Route, Routes } from "react-router-dom"
import { BodyBackground } from "./styles/BaseStyle"
import NavigationModule from "./modules/NavigationModule";
import { SearchBarModule } from './modules/SearchBarModule';
import { ContentModule } from "./modules/ContentModule";
import { ModalModule } from "./modules/ModalModule";
import { defaultSearchFilters } from "./mockup/searchFilterData";

function App() {
  const [modalState, setModalState] = useState("");
  const [searchFilters, setSearchFilters] = useState(defaultSearchFilters);
  const [reservationDetails, setReservationDetails] = useState();

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
          defaultSearchFilters={defaultSearchFilters}
          searchFilters={searchFilters}
          SetSearchFilters={setSearchFilters}
          state={modalState}
          SetModalState={setModalState}
          setReservationDetails={setReservationDetails}
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