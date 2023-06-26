import React, { useState } from "react";
import Modal from "./ModalComponent"
import { SearchCardBody, CardHeader, AddButton, CardList, Container, CardBody, ListItem, MinusSign, DropDown } from "../styles/SearchCardStyle";
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
      isActive: false,
      dropdown: true,
      0: {
        value: "> 10m",
        selected: false
      },
      1: {
        value: "> 20m",
        selected: false
      },
      2: {
        value: "> 30m",
        selected: false
      },
      3: {
        value: "> 40m",
        selected: false
      },
      4: {
        value: "> 50m",
        selected: false
      }
    },
    hinta: {
      isActive: false,
      dropdown: true,
      0: {
        value: "100 €",
        selected: false
      },
      1: {
        value: "200 €",
        selected: false
      },
      2: {
        value: "300 €",
        selected: false
      },
    }
  };

  const [dropdown, setDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [searchFilters, setSearchFilters] = useState(searchParameters);
  const [statusFilters, setStatusFilters] = useState(countByStatus);

  function Card(props) {
    if (searchFilters[props.filter].isActive)
      return (
        <CardBody
          className={searchFilters[props.filter].dropdown ? "dropdownActive" : ""}
          marginTop={"10%"}
        >
          <MinusSign width={"15%"} onClick={() => toggleSearchFilter(props.filter, "isActive", false)} />
          <CardHeader width={"70%"} paddingLeft={"5%"}>
            {props.filter}
          </CardHeader>
          <DropDown width={"15%"} onClick={() => toggleSearchFilter(props.filter, "dropdown", !searchFilters[props.filter].dropdown)} />
          {searchFilters[props.filter].dropdown &&
            <ul style={{ width: "100%", listStyleType: "none", margin: "0", padding: "0" }}>
              {Object.entries(searchFilters[props.filter]).map((entry, index) => {
                if (typeof entry[0] === "string" && !isNaN(entry[0])) {
                  return (
                    <ListItem
                      className={entry[1].selected === true ? "selected" : ""}
                      marginTop={"3%"}
                      marginBottom={"3%"}
                      paddingLeft={"5%"}
                      key={index}
                      onClick={() => toggleSearchFilter(props.filter, "selected", entry[1].selected, index)}
                    >
                      {entry[1].value}
                    </ListItem >
                  )
                }
              })}
            </ul>
          }
        </CardBody >
      )
  }

  // TODO: switch index2 and bool places from args
  const toggleSearchFilter = (index1, property, bool, index2) => {

    if (index2 === null || index2 === undefined)
      setSearchFilters({
        ...searchFilters,
        [index1]: { ...searchFilters[index1], [property]: bool },
      });
    else
      setSearchFilters({
        ...searchFilters,
        [index1]: {
          ...searchFilters[index1],
          [index2]: {
            ...searchFilters[index1][index2],
            [property]: !bool
          },
        },
      });
  }

  const Status = (props) => {
    console.log(props);
    return (
      <ul style={{ listStyleType: "none", margin: "0", padding: "0" }}>
        <li /* key={props.entry} */>
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
      <Modal show={showModal} options={searchFilters} handleClose={() => setShowModal(false)} setActive={(index) => toggleSearchFilter(index, "isActive", !searchFilters[index].isActive)}>
        <p>Modal</p>
      </Modal>
      <Container>
        Admin
        <br />
        Keijo Kurpitsa
      </Container>
      <Container marginTop="20%">
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
        <AddButton type="button" value="+" onClick={() => setShowModal(true)} marginTop={"20%"} />
      </Container>
      <CardList>
        {Object.keys(searchFilters).map((filter, index) => <Card key={index} filter={filter} />)}
      </CardList>
    </SearchCardBody>
  )
}

export default SearchCardComponent;