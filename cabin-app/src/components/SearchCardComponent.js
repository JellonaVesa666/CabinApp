import React, { useState } from "react";
import { SearchCardBody, CardHeader, AddButton, CardList, Container, CardBody, ListItem, PlusSign, MinusSign, DropDown } from "../styles/SearchCardStyle";
export default function SearchCardComponent() {

  const searchParameters = {
    koko: {
      isActive: false,
      dropdown: true,
      0: "> 22m",
      1: "> 30m",
      2: "> 30m",
      3: "> 30m",
      4: "> 50m",
    },
    hinta: {
      isActive: false,
      dropdown: true,
      0: "100",
      1: "200",
      2: "300",
    }
  };

  const [dropdown, setDropdown] = useState(false);
  const [searchFilters, setSearchFilters] = useState(searchParameters);

  function Card(props) {
    if (searchFilters[props.index].isActive)
      return (
        <CardBody marginTop={"10%"}>
          <MinusSign width={"15%"} onClick={() => toggleSearchFilter(props.index, "isActive", false)} />
          <CardHeader width={"70%"} alignCenter={true}>
            {props.index}
          </CardHeader>
          <DropDown width={"15%"} onClick={() => toggleSearchFilter(props.index, "dropdown", !searchFilters[props.index].dropdown)} />
          {searchFilters[props.index].dropdown &&
            <ul style={{ width: "100%" }}>
              {Object.values(searchFilters[props.index]).map(value => (
                <ListItem >{value}</ListItem >
              ))}
            </ul>
          }
        </CardBody>
      )
  }

  const toggleSearchFilter = (index, property, bool) => {
    setSearchFilters({
      ...searchFilters,
      [index]: { ...searchFilters[index], [property]: bool },
    });
  }

  console.log(searchFilters);

  function Filter(props) {
    return (
      <CardBody marginTop={"10%"}>
        <CardHeader width={"70%"} alignCenter={true} onClick={() => toggleSearchFilter(props.index, "isActive", true)}>
          {props.index}
        </CardHeader>
      </CardBody >
    )
  }

  return (
    <SearchCardBody >
      <Container>
        Admin
        <br />
        Keijo Kurpitsa
      </Container>
      <Container>
        <AddButton type="button" value="Add Filter" onClick={() => setDropdown(!dropdown)} marginTop={"20%"} />
        <PlusSign />
      </Container>
      {dropdown &&
        <Container>
          <div style={{ width: "80%", margin: "auto", height: "50%", backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
            {Object.keys(searchParameters).map(key => <Filter key={key} index={key} />)}
          </div>
        </Container>
      }
      <CardList>
        {Object.keys(searchFilters).map(key => <Card key={key} index={key} />)}
      </CardList>
    </SearchCardBody>
  )
}