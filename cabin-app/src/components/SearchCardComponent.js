import React, { useState } from "react";
import Modal from "./ModalComponent"
import { SearchCardBody, CardHeader, AddButton, CardList, Container, CardBody, SelectList, Option, ListItem, MinusSign, DropDown } from "../styles/SearchCardStyle";
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
    koko: {
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
    hinta: {
      type: "multiSelect",
      isActive: false,
      dropdown: true,
      0: {
        value: "100 €",
        selected: false,
      },
      1: {
        value: "200 €",
        selected: false,
      },
      2: {
        value: "300 €",
        selected: false,
      },
    },
    test: {
      type: "option",
      isActive: false,
      dropdown: true,
      selected: "test",
      0: {
        value: "test 1",
      },
      1: {
        value: "test 2",
      },
      2: {
        value: "test 3",
      },
    }
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
          <MinusSign width={"15%"} onClick={() => setFilters(false, "isActive", props.filter)} />
          <CardHeader width={"70%"} paddingleft={"5%"}>
            {props.filter}
          </CardHeader>
          <DropDown width={"15%"} onClick={() => setFilters(!searchFilters[props.filter].dropdown, "dropdown", props.filter)} />
          {searchFilters[props.filter].dropdown &&
            <>
              {searchFilters[props.filter].type === "option" &&
                <SelectList
                  value={searchFilters[props.filter].selected}
                  onChange={(event) => setFilters(event.target.value, "selected", props.filter)}
                >
                  {
                    Object.keys(searchFilters[props.filter]).map(index => {
                      if (typeof index === "string" && !isNaN(index))
                        return (
                          <option
                            key={index}
                            value={searchFilters[props.filter][index].value}
                          >
                            {searchFilters[props.filter][index].value}
                          </option>
                        )
                    })
                  }
                </SelectList>
              }
              {searchFilters[props.filter].type === "multiSelect" &&
                <ul style={{ width: "100%", listStyleType: "none", margin: "0", padding: "0" }}>
                  {
                    Object.entries(searchFilters[props.filter]).map((entry, index) => {
                      if (typeof entry[0] === "string" && !isNaN(entry[0])) {
                        return (
                          <ListItem
                            key={index}
                            className={entry[1].selected === true ? "selected" : ""}
                            margintop={"3%"}
                            marginbottom={"3%"}
                            paddingleft={"5%"}
                            onClick={() => setFilters(entry[1].selected, "selected", props.filter, index)}
                          >
                            {entry[1].value}
                          </ListItem >
                        )
                      }
                    })}
                </ul>
              }
            </>
          }
        </CardBody >
      )
  }

  const setFilters = (newValue, property, index1, index2) => {

    if (index2 === null || index2 === undefined)
      setSearchFilters({
        ...searchFilters,
        [index1]: { ...searchFilters[index1], [property]: newValue },
      });
    else
      setSearchFilters({
        ...searchFilters,
        [index1]: {
          ...searchFilters[index1],
          [index2]: {
            ...searchFilters[index1][index2],
            [property]: !newValue
          },
        },
      });
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
      <Modal show={showModal} options={searchFilters} handleClose={() => setShowModal(false)} setActive={(index) => setFilters(!searchFilters[index].isActive, "isActive", index)}>
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
    </SearchCardBody>
  )
}

export default SearchCardComponent;