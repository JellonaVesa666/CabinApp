import React, { useState } from "react";
import { SearchCardBody, CardHeader, AddButton, CardList, Container, CardBody, ListItem, AddSign, RemoveSearchCard, DropDown } from "../styles/SearchCardStyle";
export default function SearchCardComponent() {

  const searchParameter = {
    koko: {
      0: "> 22m",
      1: "> 30m",
      2: "> 30m",
      3: "> 30m",
      4: "> 50m",
    },
    hinta: {
      0: "100",
      1: "200",
      2: "300",
    }
  };

  function Card(props) {
    return (
      <CardBody marginTop={"10%"}>
        <RemoveSearchCard width={"15%"} />
        <CardHeader width={"70%"} alignCenter={true}>
          {props.index}
        </CardHeader>
        <DropDown width={"15%"} />
        <ul style={{ width: "100%" }}>
          {Object.values(searchParameter[props.index]).map(value => (
            <ListItem >{value}</ListItem >
          ))}
        </ul>
      </CardBody>
    )
  }

  return (
    <SearchCardBody >
      <Container paddingLeft={"8%"}>
        Admin
        <br />
        Keijo Kurpitsa
      </Container>
      <Container>
        <AddButton type="button" value="ADD FILTER" marginTop={"20%"}/>
        <AddSign/>
      </Container>
      <CardList>
        {Object.keys(searchParameter).map(key => <Card key={key} index={key} />)}
      </CardList>
    </SearchCardBody>
  )
}