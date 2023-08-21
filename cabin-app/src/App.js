import React, { useState } from "react";
import { BodyBackground } from "./styles/BaseStyle"
import NavigationModule from "./modules/NavigationModule";
import { SearchBarModule } from './modules/SearchBarModule';
import { ContentModule } from "./modules/ContentModule";
import { ModalModule } from "./modules/ModalModule";
import { defaultSearchFilters } from "./mockup/searchFilterData";

export default function App() {
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
      <div
        style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "26.75%", backgroundColor: "white" }}
      />
      <div
        className="m-auto"
        style={{ position: "absolute", top: "63.5%", left: 0, right: 0, width: "60%", height: "50%", backgroundColor: "white", borderRadius: "80%" }}
      />
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
      <NavigationModule
        SetModalState={setModalState}
      />
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