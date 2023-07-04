import React, { useState } from "react";
import { Modal } from "./ModalComponent"
import { ChangeState } from "../helpers/HelperFunctions";
import { RangeSlider, DatePicker, OptionSelect, MultiSelect, CheckBox } from "./InputComponents";
import { SearchCardBody, CardHeader, AddButton, CardList, Container, CardBody, MinusSign, DropDown } from "../styles/SearchCardStyle";
import { countByStatus, searchParameters } from "../mockup/searchFilterData";

const SearchCardComponent = () => {

  const [showModal, setShowModal] = useState(false);
  const [searchFilters, setSearchFilters] = useState(searchParameters);
  const [statusFilters, setStatusFilters] = useState(countByStatus);

  const listItems = Object.keys(searchFilters).map((key, index) => {
    if (searchFilters[key].isActive)
      return (
        <CardBody
          key={key}
          className={searchFilters[key].dropdown ? "dropdownActive" : ""}
          margintop={"10%"}
        >
          <div style={{ width: "100%", height: "100%", margin: "10px", padding: 0, display: "flex" }}>
            <MinusSign
              width={"15%"}
              onClick={() => ChangeState(setSearchFilters, searchFilters, false, "isActive", key)}
            />
            <CardHeader
              width={"70%"}
              weight={500}
              size={0.95}
            >
              {key}
            </CardHeader>
            <DropDown
              width={"15%"}
              onClick={() => ChangeState(setSearchFilters, searchFilters, !searchFilters[key].dropdown, "dropdown", key)}
            />
          </div>
          {searchFilters[key].dropdown &&
            <>
              {searchFilters[key].type === "multiSelect" &&
                <MultiSelect
                  data={searchFilters}
                  i={key}
                  changeState={(value, index) => ChangeState(setSearchFilters, searchFilters, value, "value", key, index)}
                />
              }
              {searchFilters[key].type === "option" &&
                <>
                  <CardHeader
                    width={"90%"}
                    margintop={"5%"}
                    marginbottom={"1%"}
                  >
                    {searchFilters[key].name ? searchFilters[key].name : key}
                  </CardHeader>
                  <OptionSelect
                    width={"90%"}
                    radius={"10px"}
                    data={searchFilters}
                    i={key}
                    changeState={(event) => ChangeState(setSearchFilters, searchFilters, event.target.value, "value", key)}
                  />
                </>
              }
              {searchFilters[key].type === "date" &&
                <DatePicker />
              }
              {searchFilters[key].type === "slider" &&
                <RangeSlider
                  minDefault={searchFilters[key].minDefault}
                  maxDefault={searchFilters[key].maxDefault}
                  maxValue={searchFilters[key].maxValue}
                  minValue={searchFilters[key].minValue}
                  step={searchFilters[key].step}
                  changeState={(value, property) => ChangeState(setSearchFilters, searchFilters, value, property, key)}
                />
              }
              {(() => {
                if (searchFilters[key].type.split(/(?=[A-Z])/)[0] === "checkbox") {
                  if (searchFilters[key].type.split(/(?=[A-Z])/)[1] === "Multi") {
                    return (
                      <CheckBox
                        data={searchFilters}
                        i={key}
                        multi={true}
                        changeState={(value, index) => ChangeState(setSearchFilters, searchFilters, value, "value", key, index)}
                      />
                    )
                  } else if (searchFilters[key].type.split(/(?=[A-Z])/)[1] === "Single") {
                    return (
                      <CheckBox
                        data={searchFilters}
                        i={key}
                        single={true}
                        changeState={(index) => ChangeState(setSearchFilters, searchFilters, index, "value", key)}
                      />
                    )
                  }
                }
              })()}
            </>
          }
        </CardBody >
      )
  })


  /* 
  const Status = (props) => {
    return (
      <ul style={{ listStyleType: "none", margin: "0", padding: "0" }}>
        <li>
          <span style={{ marginLeft: "10%" }}>
            {statusFilters[props.status].name}
          </span>
          <span style={{ float: "right" }}>
            {statusFilters[props.status].count}
          </span>
        </li>
      </ul >
    )
  } */

  return (
    <SearchCardBody >
      <Modal show={showModal} options={searchFilters} handleClose={() => setShowModal(false)} setActive={(index) => ChangeState(setSearchFilters, searchFilters, !searchFilters[index].isActive, "isActive", index)}>
        <p>Modal</p>
      </Modal>
      <Container>
        Admin
        <br />
        Keijo Kurpitsa
      </Container>
      <Container margintop="20%">
        <CardHeader width="100%" style={{ margin: 0, padding: 0 }}>
          Varaukset
        </CardHeader>
        {/*         <Container style={{ padding: 0, margin: 0 }}>
          {Object.keys(statusFilters).map((status, index) => (
            <Status status={status} key={index} />
          ))}
        </Container> */}
      </Container>
      <Container>
        <AddButton type="button" value="+" onClick={() => setShowModal(true)} margintop={"20%"} />
      </Container>
      <CardList>
        {listItems}
      </CardList>
    </SearchCardBody >
  )
}

export default SearchCardComponent;