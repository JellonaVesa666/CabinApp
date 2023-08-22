/* React */
import React, { useState } from "react";
/* Router */
import { useLocation } from 'react-router-dom';
/* Modules */
import { NavigationModule } from "./modules/NavigationModule";
import { BodyBackground } from "./styles/BaseStyle"
import { SearchBarModule } from './modules/SearchBarModule';
import { ContentModule } from "./modules/ContentModule";
import { ModalModule } from "./modules/ModalModule";
/* Data */
import { defaultSearchFilters } from "./mockup/searchFilterData";


export default function App() {
  const [modalState, setModalState] = useState("register");
  const [searchFilters, setSearchFilters] = useState(defaultSearchFilters);
  const [reservationDetails, setReservationDetails] = useState();
  const routePath = useLocation().pathname;

  const ToggleModal = (item) => {
    if (item !== modalState) {
      setModalState(item);
    }
    else {
      setModalState("");
    }
  }

  return (
    <>
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
      {routePath === "/" &&
        <BodyBackground>
          <div
            style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "26.75%", backgroundColor: "white" }}
          />
          <div
            className="m-auto"
            style={{ position: "absolute", top: "63.5%", left: 0, right: 0, width: "60%", height: "50%", backgroundColor: "white", borderRadius: "80%" }}
          />
          <NavigationModule
            SetModalState={setModalState}
          />
          {
            <SearchBarModule
              toggleModal={(filter) => ToggleModal(filter)}
              SetSearchFilters={setSearchFilters}
              searchFilters={searchFilters}
            />
          }
          <ContentModule
            SetModalState={setModalState}
          />
        </BodyBackground>
      }
      {routePath === "/login" &&
        <BodyBackground>
          <NavigationModule
            SetModalState={setModalState}
          />
        </BodyBackground>
      }
    </>
  );
}