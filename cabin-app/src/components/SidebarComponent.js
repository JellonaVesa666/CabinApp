import React, { useState } from "react";
import { Modal } from "./ModalComponent"
import { ChangeState, ValidateElement } from "../helpers/HelperFunctions";
import { RangeSlider, OptionSelect, MultiSelect, CheckBox, Counter } from "./InputComponents";
import { AddButton, CardList, CardBody, CardContent, CardDropdown, CardLabel } from "../styles/SearchCardStyle";
import { countByStatus, searchParameters } from "../mockup/searchFilterData";
import { colors } from "../styles/Colors";
import { useSelector } from "react-redux";

const SidebarComponent = () => {
  const language = useSelector(state => state.session.language);

  const [showModal, setShowModal] = useState(false);
  const [searchFilters, setSearchFilters] = useState(searchParameters);
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
      <div class="row" style={{ height: "20%", borderTop: "2px solid rgba(0, 0, 0, 0.06)", borderBottom: "2px solid rgba(0, 0, 0, 0.06)", }}>
        <div class="col-12">
          <div class="row justify-content-center" style={{ height: "50%" }}>
            <div class="col-12 d-flex justify-content-center align-items-center mt-5" >
              <input className="text-center p-2" style={{ borderRadius: "6px 2px 2px 6px", border: "1px solid rgba(0, 0, 0, 0.5)", }} type="text" />
              <input className="text-center p-2" style={{ borderRadius: "2px", border: "1px solid rgba(0, 0, 0, 0.5)", }} type="datetime-local" />
              <input className="text-center p-2" style={{ borderRadius: "2px 6px 6px 2px", border: "1px solid rgba(0, 0, 0, 0.5)", }} type="datetime-local" />
            </div>
          </div>
          <div class="row justify-content-center" style={{ height: "50%", position: "relative" }}>
            <div class="col-12 d-flex justify-content-center align-items-center" >
              <input value="SEARCH" className="text-center p-2" style={{ borderRadius: "8px", color: "white", outline: "0", backgroundColor: "rgba(0, 0, 0, 0.7)", width: "10%" }} type="button" />
            </div>
            <AddButton type="button" value="FILTERS" onClick={() => setShowModal(true)} />
          </div>
        </div>
      </div>
      <div class="col-2 m-0 p-0" style={{ position: "absolute", height: "100%", right: 0, top: "0%", overflowY: "scroll", backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
{/*         <CardList>
          {listItems}
        </CardList> */}
      </div>
    </>
  )
}

export default SidebarComponent;