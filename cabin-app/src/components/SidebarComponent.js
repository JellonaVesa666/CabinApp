import React, { useState } from "react";
import { Modal } from "./ModalComponent"
import { ChangeState, ValidateElement } from "../helpers/HelperFunctions";
import { RangeSlider, OptionSelect, MultiSelect, CheckBox, Counter } from "./InputComponents";
import { AddButton, CardList, CardBody, CardContent, CardDropdown, CardLabel, BodyTopContainer, Sidebar } from "../styles/SearchCardStyle";
import { countByStatus, searchParameters } from "../mockup/searchFilterData";
import { colors } from "../styles/Colors";
import { useSelector } from "react-redux";

const SidebarComponent = () => {
  const language = useSelector(state => state.session.language);

  const [showModal, setShowModal] = useState(false);
  const [searchFilters, setSearchFilters] = useState(searchParameters);
  const [sidebarActive, setSidebarActive] = useState(false);
  const [statusFilters, setStatusFilters] = useState(countByStatus);

  const listItems = Object.keys(searchFilters).map(item => {
    if (searchFilters[item].isActive)
      return (
        <CardBody
          key={Object.keys(searchFilters).indexOf(item)}
          className={searchFilters[item].dropdown ? "dropdownActive" : ""}
          margintop={"16%"}
        >
          <CardContent>
            <div className="row m-0 px-5 py-3">
              <CardLabel>
                {ValidateElement(searchFilters[item]?.info?.[language]?.name, "label")}
              </CardLabel>
              <CardDropdown
                onClick={() => ChangeState(setSearchFilters, searchFilters, !searchFilters[item].dropdown, "dropdown", item)}
              >
                {searchFilters[item].dropdown ? <>&#9650;</> : <>&#x25BC;</>}
              </CardDropdown>
            </div>
            {searchFilters[item].dropdown &&
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
          </CardContent>
          <div style={{ height: "2px", color: "grey", backgroundColor: "rgba(0, 0, 0, 0.1)" }} />
        </CardBody >
      )
  })

  const Status = (props) => {
    return (
      <ul style={{ listStyleType: "none", margin: "0", padding: "0" }}>
        <li>
          <span style={{ marginLeft: "10%" }}>
            {statusFilters[props.item].name}
          </span>
          <span style={{ float: "right" }}>
            {statusFilters[props.item].count}
          </span>
        </li>
      </ul >
    )
  }

  return (
    <>
      <Modal show={showModal} options={searchFilters} handleClose={() => setShowModal(false)} setActive={(index) => ChangeState(setSearchFilters, searchFilters, !searchFilters[index].isActive, "isActive", index)}>
        <p>Modal</p>
      </Modal>
      <BodyTopContainer>
        <div class="col-12">
          <div class="row justify-content-center" style={{ height: "100%" }}>
            <div class="col-12 d-flex justify-content-center align-items-center mt-5" >
              <input className="text-center p-2 shadow-sm" style={{ height: "50px", width: "280px", borderRadius: "4px 2px 2px 4px", border: "1px solid rgba(0, 0, 0, 0.2)", height: "60px" }} type="text" />
              <input className="text-center p-2 shadow-sm" style={{ height: "50px", width: "280px", borderRadius: "2px", border: "1px solid rgba(0, 0, 0, 0.2)", height: "60px" }} type="datetime-local" />
              <input className="text-center p-2 shadow-sm" style={{ height: "50px", width: "280px", borderRadius: "2px 4px 4px 2px", border: "1px solid rgba(0, 0, 0, 0.2)", height: "60px" }} type="datetime-local" />
              <div style={{ borderRadius: "0px 4px 4px 0px", textAlign: "center", color: "white", outline: "0", border: "2px solid grey", backgroundColor: "rgba(0, 0, 0, 0.6)", width: "200px", height: "60px", position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }} >
                <p style={{ margin: "auto", color: "white" }}>SEARCH</p>
              </div>
              <AddButton onClick={() => setSidebarActive(!sidebarActive)} /* onClick={() => setShowModal(true)}  */ style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "200px", height: "60px" }} >
                <p>FILTERS</p>
              </AddButton >
            </div>
          </div>
        </div>
      </BodyTopContainer>
      <Sidebar width={sidebarActive ? "16.66666667%" : "0%"}>
        <div style={{ height: "5%", width: "100%", backgroundColor: "rgba(0, 0, 0, 1)", position: "absolute", right: 0, top: 0 }} />
        <div style={{ height: "100%", width: "100%", position: "absolute", right: 0, top: 0, overflowY: "scroll" }} >
          <CardList>
            {listItems}
          </CardList>
          <div style={{ height: "2%", width: "100%", backgroundColor: "rgba(0, 0, 0, 1)" }} />
        </div>
      </Sidebar>
      <div className="row justify-content-center" style={{ height: "70%", backgroundColor: "rgba(255, 255, 255, 0.3)" }}>
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
    </>
  )
}

export default SidebarComponent;