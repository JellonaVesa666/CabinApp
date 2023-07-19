import React, { useState } from "react";
import { Modal } from "./ModalComponent"
import { ChangeState, ValidateElement } from "../helpers/HelperFunctions";
import { RangeSlider, OptionSelect, MultiSelect, CheckBox, Counter, InputField } from "./InputModules";
import { FilterList, FilterCard, CardLabel, Sidebar, SidebarCollapsed } from "../styles/SidebarStyle";
import { searchParameters } from "../mockup/searchFilterData";
import { colors } from "../styles/Colors";
import { useSelector } from "react-redux";

export const SidebarModule = ({ isActive }) => {
  const language = useSelector(state => state.session.language);

  const [modalActive, setModalActive] = useState(false);
  const [searchFilters, setSearchFilters] = useState(searchParameters);

  const dynamicFilters = Object.keys(searchFilters).map(item => {
    if (searchFilters[item].isActive)
      return (

        <FilterList
          key={Object.keys(searchFilters).indexOf(item)}
          className={searchFilters[item].dropdown ? "dropdownActive h-auto col-12 row m-0 p-0" : "h-auto col-12 row m-0 p-0"}
        >
          <FilterCard className="col-12 row mx-0 p-0">
            <div className="col-1 py-2 " onClick={() => ChangeState(setSearchFilters, searchFilters, false, "isActive", item)}>
              -
            </div>
            <CardLabel className=" py-2 col-6">
              {ValidateElement(searchFilters[item]?.info?.[language]?.translation, "label")}
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
          </FilterCard>
        </FilterList>
      )
  })

  // Static filter items
  const staticFilters = Object.keys(searchFilters).map(item => {
    if (searchFilters[item].static) {
      return (
        <>
          {searchFilters[item].type === "text" &&
            <InputField
              type={searchFilters[item].type}
              width={"80%"}
              height={"40px"}
              radius={"6px"}
              margintop={"3rem"}
              marginbottom={"0.5rem"}
              i={item}
              data={searchFilters}
              placeholder={searchFilters[item].info[language].translation}
              value={searchFilters[item].info[language].value}
              changeState={(value) => ChangeState(setSearchFilters, searchFilters, value, "value", item)}
            />
          }
          {searchFilters[item].type === "date" &&
            <>
              <InputField
                type={searchFilters[item].type}
                width={"35%"}
                height={"40px"}
                radius={"6px"}
                margintop={"1rem"}
                marginbottom={"1rem"}
                i={item}
                data={searchFilters}
                placeholder={searchFilters[item].info[language].translation}
                value={searchFilters[item].info[language].value}
                changeState={(value) => ChangeState(setSearchFilters, searchFilters, value, "value", item)}
              />
              {searchFilters[item].spacer === "doubleArrow" &&
                <div className="d-flex justify-content-center align-items-center mb-0" style={{ width: "10%", height: "100%", fontSize: "30px" }}>
                  ⬌
                </div>
              }
            </>
          }
          {searchFilters[item].type === "counter" &&
            <Counter
              data={searchFilters}
              i={item}
              changeState={(value, index) => ChangeState(setSearchFilters, searchFilters, value, "value", item, index)}
            />
          }
        </>
      )
    }
  })



  return (
    <>
      <Modal show={modalActive} options={searchFilters} handleClose={() => setModalActive(false)} setActive={(index) => ChangeState(setSearchFilters, searchFilters, !searchFilters[index].isActive, "isActive", index)}>
        <p>Modal</p>
      </Modal>
      {isActive &&
        <Sidebar>
          <SidebarCollapsed>
            <div className="justify-content-center align-items-center row m-0 p-0">
              {staticFilters}
            </div>
            {dynamicFilters}
            <div
              className="mb-4 mt-5 justify-content-center align-items-center row w-100"
              style={{ height: "40px" }}
            >
              <input
                type="button"
                value={"hae"}
                className="text-uppercase"
                style={{ color: colors.black, width: "180px", height: "40px", marginLeft: "45px", borderRadius: " 10px 0px 0px 10px" }}
              />
              <div className="d-flex justify-content-center align-items-center" onClick={() => setModalActive(!modalActive)} style={{ height: "40px", width: "40px", backgroundColor: "black", color: "white", fontSize: "12px", borderRadius: " 0px 10px 10px 0px" }}>
                &equiv;
              </div>
            </div>
          </SidebarCollapsed>
        </Sidebar >
      }
    </>
  )
}