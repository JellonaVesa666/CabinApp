import React, { useState } from "react";
import { Modal } from "../components/ModalComponent"
import { ChangeState, ValidateElement } from "../helpers/HelperFunctions";
import { RangeSlider, OptionSelect, MultiSelect, CheckBox, Counter } from "../components/InputComponents";
import { AddButton, CardBody, CardLabel, BodyTopContainer, SearchBar } from "../styles/SidebarStyle";
import { searchParameters } from "../mockup/searchFilterData";
import { colors } from "../styles/Colors";
import { useSelector } from "react-redux";

export default function SearchPage() {
  const language = useSelector(state => state.session.language);

  const [showModal, setShowModal] = useState(false);
  const [searchFilters, setSearchFilters] = useState(searchParameters);
  const [sidebarActive, setSidebarActive] = useState(false);

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
    <div className="row h-100 m-0 p-0 position-relative">
      <Modal show={showModal} options={searchFilters} handleClose={() => setShowModal(false)} setActive={(index) => ChangeState(setSearchFilters, searchFilters, !searchFilters[index].isActive, "isActive", index)}>
        <p>Modal</p>
      </Modal>
      <BodyTopContainer>
        <div class="h-100 mt-5 d-flex justify-content-center">
          <SearchBar>
            <div className="input-group justify-content-center bg-dark" style={{ height: "18%" }}>
              <input className=" col-xs-4 col-sm-4 col-md-3 col-lg-3 text-center p-2 shadow-sm rounded" type="text" />
              <input className=" col-xs-4 col-sm-4 col-md-3 col-lg-3 text-center p-2 shadow-sm rounded" type="datetime-local" />
              <input className=" col-xs-4 col-sm-4 col-md-3 col-lg-3 text-center p-2 shadow-sm rounded" type="datetime-local" />
              <input className=" col-xs-4 col-sm-4 col-md-2 col-lg-2 text-center p-2 shadow-sm rounded" type="input" />
              <AddButton className="d-flex justify-content-center align-items-center col-xs-4 col-sm-4 col-md-1 col-lg-1 text-center p-2 shadow-sm rounded" onClick={() => setSidebarActive(!sidebarActive)}>
                <p>FILTERS</p>
              </AddButton >
            </div>
          </SearchBar>
        </div>
      </BodyTopContainer >
      <div className="row justify-content-center m-0 p-0" style={{ height: "70%", backgroundColor: "rgba(255, 255, 255, 0.3)" }}>
        <div class="col-8 d-flex flex-wrap" >
          <div class="col d-flex justify-content-end align-items-center col-lg-6 px-4" style={{ height: "50%" }}>
            <div class="d-flex justify-content-center align-items-center" style={{ height: "85%", width: "75%", border: "2px solid black" }}>
              dada
            </div>
          </div>
          <div class="col d-flex justify-content-start align-items-center col-lg-6 px-4" style={{ height: "50%" }}>
            <div class="d-flex justify-content-center align-items-center" style={{ height: "85%", width: "75%", border: "2px solid black" }}>
              dada
            </div>
          </div>
          <div class="col d-flex justify-content-end align-items-center col-lg-6 px-4" style={{ height: "50%" }}>
            <div class="d-flex justify-content-center align-items-center" style={{ height: "85%", width: "75%", border: "2px solid black" }}>
              dada
            </div>
          </div>
          <div class="col d-flex justify-content-start align-items-center col-lg-6 px-4" style={{ height: "50%" }}>
            <div class="d-flex justify-content-center align-items-center" style={{ height: "85%", width: "75%", border: "2px solid black" }}>
              dada
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}