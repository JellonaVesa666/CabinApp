import React from "react";
import { NavigationBody, NavExtendContainer, NavigationContainer, NavigationLink } from "../styles/NavigationStyle";


export default function NavigationComponent() {

  return (
    <NavigationBody className="row d-md-flex">
      <NavExtendContainer className="shadow-lg">
        <NavigationContainer>
          <NavigationLink className="user" />
          <NavigationLink className="reservations" />
          <NavigationLink className="users" />
          <NavigationLink className="cabins" />
          <NavigationLink className="map" />
          <NavigationLink className="settings" />
          <NavigationLink className="logout" />
        </NavigationContainer>
      </NavExtendContainer>
    </NavigationBody>
  )
}