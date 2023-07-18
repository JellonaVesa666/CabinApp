import React, { useState } from "react";
import { Modal } from "./ModalComponent"
import { ChangeState, ValidateElement } from "../helpers/HelperFunctions";
import { RangeSlider, OptionSelect, MultiSelect, CheckBox, Counter } from "./InputComponents";
import { AddButton, CardBody, CardLabel, BodyTopContainer, Sidebar, SearchBar, SidebarFilters } from "../styles/SidebarStyle";
import { countByStatus, searchParameters } from "../mockup/searchFilterData";
import { colors } from "../styles/Colors";
import { useSelector } from "react-redux";

export const SidebarModule = ({ isActive }) => {
  const language = useSelector(state => state.session.language);

  const [modalActive, setModalActive] = useState(false);
  const [searchFilters, setSearchFilters] = useState(searchParameters);

  const listItems = Object.keys(searchFilters).map(item => {
    if (searchFilters[item].isActive)
      return (
        <CardBody
          key={Object.keys(searchFilters).indexOf(item)}
          className={searchFilters[item].dropdown ? "dropdownActive h-auto col-12 row m-0 p-0" : "h-auto col-12 row m-0 p-0"}
        >
          <div className="col-12 row mx-0 my-4 p-0">
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


  const persons = Object.keys(searchFilters).map(item => {
    return (
      <>
        {searchFilters[item].type === "counter" &&
          searchFilters[item].passive &&
          <Counter
            data={searchFilters}
            i={item}
            changeState={(value, index) => ChangeState(setSearchFilters, searchFilters, value, "value", item, index)}
          />
        }
      </>
    )
  })



  return (
    <>
      <Modal show={modalActive} options={searchFilters} handleClose={() => setModalActive(false)} setActive={(index) => ChangeState(setSearchFilters, searchFilters, !searchFilters[index].isActive, "isActive", index)}>
        <p>Modal</p>
      </Modal>
      {isActive &&
        <Sidebar>
          <div
            className="d-flex justify-content-start align-items-center flex-column w-100"
            style={{ height: "35%" }}
          >
            <div
              className="row h-100 w-100 d-flex justify-content-center align-items-center"
            >
              <input
                type="button"
                value={"hae"}
                className="d-flex justify-content-center align-items-center mt-5 rounded text-uppercase"
                style={{ backgroundColor: colors.black, color: colors.white, width: "30%", height: "40px" }}
              />
              <div
                className="m-5"
                style={{ height: "0.5%", width: "100%", backgroundColor: colors.whiteDark }}
              />
              <div
                className="col-10 row m-0 p-0"
                style={{ height: "35px" }}
              >
                <input
                  className="w-100 h-100 px-2"
                  style={{ borderRadius: "6px", border: "1px solid grey" }}
                  type="text"
                  name=""
                  value="Town, City, Cabin..."
                />
              </div>
              <div
                className="col-10 row m-4 p-0"
                style={{ height: "35px" }}
              >
                <input
                  className="h-100 px-2"
                  style={{ borderRadius: "6px", border: "1px solid grey", width: "45%", fontSize: "14px" }}
                  type="date"
                  name=""
                />
                <div
                  className="d-flex justify-content-center align-items-center h-100 px-2"
                  style={{ width: "10%" }}
                >
                  /
                </div>
                <input
                  className="h-100 px-2"
                  style={{ borderRadius: "6px", border: "1px solid grey", width: "45%", fontSize: "14px" }}
                  type="date"
                  name=""
                />
              </div>
              <div className="col-12 row m-0 p-0">
                {persons}
              </div>
            </div>
          </div>
          <div
            className="d-flex justify-content-center align-items-center flex-column w-100 mx-2"
            style={{ height: "7%" }}
          >
            <div className="d-flex justify-content-center align-items-center rounded" onClick={() => setModalActive(!modalActive)} style={{ height: "35px", width: "35px", backgroundColor: "black", color: "white", fontSize: "16px", marginRight: "auto" }}>
              &equiv;
            </div>
          </div>
          <div
            className="d-flex justify-content-start align-items-center flex-column w-100"
            style={{ height: "58%" }}
          >
            {listItems}
          </div>
        </Sidebar>
      }
    </>
  )
}