import React, { useState } from "react";
import { Modal } from "./ModalComponent"
import { ChangeState } from "../helpers/HelperFunctions";
import { RangeSlider, DatePicker, OptionSelect, MultiSelect, CheckBox } from "./InputComponents";
import { SearchCardBody, CardHeader, AddButton, CardList, Container, CardBody, MinusSign, DropDown } from "../styles/SearchCardStyle";
import { countByStatus, searchParameters } from "../mockup/searchFilterData";
import { colors } from "../styles/Colors";
import { useSelector } from "react-redux";

const SearchCardComponent = () => {
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
          <div className="row h-100 w-100 px-3 justify-content-center">
            <div className="d-flex col-5 py-3" style={{ fontWeight: "500", fontSize: "12px" }}>
              {searchFilters[item]?.name?.[language]?.name !== undefined ? searchFilters[item].name[language].name.toUpperCase() : "ERROR"}
            </div>
            <div className="d-flex col-5 py-3 justify-content-end">
              &#x25BC;
            </div>
          </div>
          {searchFilters[item].dropdown &&
            <>
              {searchFilters[item].type === "multiSelect" &&
                <MultiSelect
                  data={searchFilters}
                  i={item}
                  changeState={(value, index) => ChangeState(setSearchFilters, searchFilters, value, "value", item, index)}
                />
              }
              {searchFilters[item].type === "option" &&
                <>
                  <CardHeader
                    width={"90%"}
                    margintop={"5%"}
                    marginbottom={"1%"}
                  >
                    {searchFilters[item].name ? searchFilters[item].name : item}
                  </CardHeader>
                  <OptionSelect
                    width={"90%"}
                    radius={"10px"}
                    data={searchFilters}
                    i={item}
                    changeState={(event) => ChangeState(setSearchFilters, searchFilters, event.target.value, "value", item)}
                  />
                </>
              }
              {searchFilters[item].type === "date" &&
                <DatePicker />
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
                        m={"my-1"}
                        changeState={(value, index) => ChangeState(setSearchFilters, searchFilters, value, "value", item, index)}
                      />
                    )
                  } else if (searchFilters[item].type.split(/(?=[A-Z])/)[1] === "Single") {
                    return (
                      <CheckBox
                        data={searchFilters}
                        i={item}
                        single={true}
                        color={colors.green}
                        m={"my-1"}
                        changeState={(index) => ChangeState(setSearchFilters, searchFilters, index, "value", item)}
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
        <Container style={{ padding: 0, margin: 0 }}>
          {Object.keys(statusFilters).map(item => (
            <Status item={item} key={Object.keys(statusFilters).indexOf(item)} />
          ))}
        </Container>
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