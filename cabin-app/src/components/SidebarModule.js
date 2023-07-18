import React, { useState } from "react";
import { Modal } from "./ModalComponent"
import { ChangeState, ValidateElement } from "../helpers/HelperFunctions";
import { RangeSlider, OptionSelect, MultiSelect, CheckBox, Counter } from "./InputComponents";
import { AddButton, CardBody, CardLabel, BodyTopContainer, Sidebar, SearchBar } from "../styles/SidebarStyle";
import { countByStatus, searchParameters } from "../mockup/searchFilterData";
import { colors } from "../styles/Colors";
import { useSelector } from "react-redux";

export const SidebarModule = ({ isActive }) => {
  const language = useSelector(state => state.session.language);

  const [showModal, setShowModal] = useState(false);
  const [searchFilters, setSearchFilters] = useState(searchParameters);

  const listItems = Object.keys(searchFilters).map(item => {
    if (searchFilters[item].isActive)
      return (
        <CardBody
          key={Object.keys(searchFilters).indexOf(item)}
          className={searchFilters[item].dropdown ? "dropdownActive h-auto col-12 row m-0 p-0 " : "h-auto col-12 row m-0 p-0"}
        >
          <div className="col-12 row m-0 p-0">
            <div className="col-1 py-2 " onClick={() => ChangeState(setSearchFilters, searchFilters, false, "isActive", item)}>
              -
            </div>
            <CardLabel className=" py-2 col-6">
              {ValidateElement(searchFilters[item]?.info?.[language]?.name, "label")}
            </CardLabel>
            <div
              className="d-flex col-5 py-2 justify-content-end"
              onClick={() => ChangeState(setSearchFilters, searchFilters, !searchFilters[item].dropdown, "dropdown", item)}
            >
              {searchFilters[item].dropdown ? <>&#9650;</> : <>&#x25BC;</>}
            </div>
            {
              searchFilters[item].dropdown &&
              <>
                {searchFilters[item].type === "multiSelect" &&
                  <MultiSelect
                    width={"75%"}
                    radius={"6px"}
                    data={searchFilters}
                    i={item}
                    changeState={(value, index) => ChangeState(setSearchFilters, searchFilters, !value, "value", item, index)}
                  />
                }
                {searchFilters[item].type === "option" &&
                  <>
                    <OptionSelect
                      width={"75%"}
                      radius={"6px"}
                      data={searchFilters}
                      i={item}
                      changeState={(event) => ChangeState(setSearchFilters, searchFilters, event.target.value, "value", item)}
                    />
                  </>
                }
                {searchFilters[item].type === "counter" &&
                  <Counter
                    data={searchFilters}
                    i={item}
                    changeState={(value, index) => ChangeState(setSearchFilters, searchFilters, value, "value", item, index)}
                  />
                }
                {searchFilters[item].type === "slider" &&
                  <RangeSlider
                    minDefault={searchFilters[item].minDefault}
                    maxDefault={searchFilters[item].maxDefault}
                    maxValue={searchFilters[item].maxValue}
                    minValue={searchFilters[item].minValue}
                    step={searchFilters[item].step}
                    changeState={(value, property) => ChangeState(setSearchFilters, searchFilters, value, property, item)}
                  />
                }
                {(() => {
                  if (searchFilters[item].type.split(/(?=[A-Z])/)[0] === "checkbox") {
                    if (searchFilters[item].type.split(/(?=[A-Z])/)[1] === "Multi") {
                      return (
                        <CheckBox
                          data={searchFilters}
                          i={item}
                          multi={true}
                          color={colors.green}
                          changeState={(value, index) => ChangeState(setSearchFilters, searchFilters, !value, "value", item, index)}
                        />
                      )
                    } else if (searchFilters[item].type.split(/(?=[A-Z])/)[1] === "Single") {
                      return (
                        <CheckBox
                          data={searchFilters}
                          i={item}
                          single={true}
                          color={colors.green}
                          changeState={(index) => ChangeState(setSearchFilters, searchFilters, index, "value", item)}
                        />
                      )
                    }
                  }
                })()}
              </>
            }
          </div>
        </CardBody >
      )
  })

  return (
    <>
      {isActive &&
        <Sidebar id="sidebarMenu" className="bg-success-subtle overflow-y-scroll">
          <div className="">
            <div className="px-3 d-flex justify-content-start align-items-center" style={{ height: "60px" }}>
              <div className="d-flex justify-content-center align-items-center rounded-circle m-0 p-0" onClick={() => setShowModal(!showModal)} style={{ height: "35px", width: "35px", backgroundColor: "rgba(0, 0, 0, 1)", color: "white" }}>
                +
              </div>
            </div>
            {listItems}
          </div>
        </Sidebar>
      }
    </>
  )
}

{/* <header>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Carousel</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</header> */}