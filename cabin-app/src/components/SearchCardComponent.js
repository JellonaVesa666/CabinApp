import React, { useState } from "react";
import { Modal } from "./ModalComponent"
import { ChangeState } from "../helpers/HelperFunctions";
import { RangeSlider, DatePicker, OptionSelect, MultiSelect, CheckBox } from "./InputComponents";
import { SearchCardBody, CardHeader, AddButton, CardList, Container, CardBody, MinusSign, DropDown } from "../styles/SearchCardStyle";
const SearchCardComponent = () => {

  const countByStatus = {
    0: {
      name: "kaikki",
      count: "100",
      selected: false,
    },
    1: {
      name: "varattu",
      count: "30",
      selected: false,
    }
  };

  const searchParameters = {
    multiSelect: {
      type: "multiSelect",
      isActive: false,
      dropdown: true,
      0: {
        value: "> 10m",
        selected: false,
      },
      1: {
        value: "> 20m",
        selected: false,
      },
      2: {
        value: "> 30m",
        selected: false,
      },
      3: {
        value: "> 40m",
        selected: false,
      },
      4: {
        value: "> 50m",
        selected: false,
      }
    },
    option: {
      type: "option",
      isActive: false,
      dropdown: true,
      selected: "test",
      name: "numero",
      0: {
        value: "test 1",
      },
      1: {
        value: "test 2",
      },
      2: {
        value: "test 3",
      },
    },
    date: {
      type: "date",
      isActive: false,
      dropdown: true,
      arrivalDate: "",
      departureDate: "",
    },
    slider: {
      type: "slider",
      isActive: false,
      dropdown: true,
      maxDefault: 10,
      minDefault: 0,
      maxValue: 10,
      minValue: 0,
      step: 1,
    },
    checkboxMulti: {
      type: "checkboxMulti",
      isActive: false,
      dropdown: true,
      0: {
        value: "hirsi",
        selected: false,
      },
      1: {
        value: "hirsihuvila",
        selected: true,
      },
      2: {
        value: "huvila",
        selected: false,
      },
      3: {
        value: "mökki",
        selected: false,
      },
    },
    checkboxSingle: {
      type: "checkbox",
      isActive: false,
      dropdown: true,
      selected: false,
      0: {
        value: "hirsi",
      },
      1: {
        value: "hirsihuvila",
      },
      2: {
        value: "huvila",
      },
      3: {
        value: "mökki",
      },
    },
  };

  const [showModal, setShowModal] = useState(false);
  const [searchFilters, setSearchFilters] = useState(searchParameters);
  const [statusFilters, setStatusFilters] = useState(countByStatus);

  function Card(props) {
    if (searchFilters[props.filter].isActive)
      return (
        <CardBody
          className={searchFilters[props.filter].dropdown ? "dropdownActive" : ""}
          margintop={"10%"}
        >
          <div style={{ width: "100%", height: "100%", margin: "10px", padding: 0, display: "flex" }}>
            <MinusSign
              width={"15%"}
              onClick={() => ChangeState(setSearchFilters, searchFilters, false, "isActive", props.filter)}
            />
            <CardHeader
              width={"70%"}
              weight={500}
              size={0.95}
            >
              {props.filter}
            </CardHeader>
            <DropDown
              width={"15%"}
              onClick={() => ChangeState(setSearchFilters, searchFilters, !searchFilters[props.filter].dropdown, "dropdown", props.filter)}
            />
          </div>
          {searchFilters[props.filter].dropdown &&
            <>
              {searchFilters[props.filter].type === "multiSelect" &&
                <MultiSelect
                  filters={searchFilters}
                  i={props.filter}
                  changeState={(value, index) => ChangeState(setSearchFilters, searchFilters, value, "selected", props.filter, index)}
                />
              }
              {searchFilters[props.filter].type === "option" &&
                <OptionSelect
                  filters={searchFilters}
                  i={props.filter}
                  changeState={(event) => ChangeState(setSearchFilters, searchFilters, event.target.value, "selected", props.filter)}
                />
              }
              {searchFilters[props.filter].type === "date" &&
                <DatePicker />
              }
              {searchFilters[props.filter].type === "slider" &&
                <RangeSlider
                  minDefault={searchFilters[props.filter].minDefault}
                  maxDefault={searchFilters[props.filter].maxDefault}
                  maxValue={searchFilters[props.filter].maxValue}
                  minValue={searchFilters[props.filter].minValue}
                  step={searchFilters[props.filter].step}
                  changeState={(value, property) => ChangeState(setSearchFilters, searchFilters, value, property, props.filter)}
                />
              }

              {(() => {
                if (searchFilters[props.filter].type.split(/(?=[A-Z])/)[0] === "checkbox") {
                  if (searchFilters[props.filter].type.split(/(?=[A-Z])/)[1] === "Multi") {
                    return (
                      <CheckBox
                        filters={searchFilters}
                        i={props.filter}
                        multi={true}
                        changeState={(value, index) => ChangeState(setSearchFilters, searchFilters, value, "selected", props.filter, index)}
                      />
                    )
                  } else {
                    return (
                      <CheckBox
                        filters={searchFilters}
                        i={props.filter}
                        changeState={(index) => ChangeState(setSearchFilters, searchFilters, index, "selected", props.filter)}
                      />
                    )
                  }
                }
              })()}
            </>
          }
        </CardBody >
      )
  }

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
          {Object.keys(statusFilters).map((status, index) => (
            <Status status={status} key={index} />
          ))}
        </Container>
      </Container>
      <Container>
        <AddButton type="button" value="+" onClick={() => setShowModal(true)} margintop={"20%"} />
      </Container>
      <CardList>
        {Object.keys(searchFilters).map((filter, index) => <Card key={index} filter={filter} />)}
      </CardList>
    </SearchCardBody >
  )
}

export default SearchCardComponent;