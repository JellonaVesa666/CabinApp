import React, { useState } from "react";
import { NavigationBody, NavigationExtend, NavigationContainer, NavigationLink, Navigation } from "../styles/NavigationStyle";

export default function NavigationComponent() {

  const [hideExtended, setHideExtend] = useState(true);

  console.log(hideExtended);

  return (
    <>
      <NavigationBody className="row">
        <NavigationContainer>
          <NavigationExtend className={hideExtended ? "shadow-lg hide" : "shadow-lg show"}>
            <Navigation className={hideExtended ? "hide" : "show"}>
              <NavigationLink className="user" />
              <NavigationLink className="reservations" onClick={() => setHideExtend(!hideExtended)} />
              <NavigationLink className="users" />
              <NavigationLink className="cabins" />
              <NavigationLink className="map" />
              <NavigationLink className="settings" />
              <NavigationLink className="logout" />
            </Navigation>
          </NavigationExtend>
        </NavigationContainer>
      </NavigationBody>
      <NavigationBody className="row"></NavigationBody>
    </>
  )
}

/* className={data.fullName.errors.length > 0 ? "invalid" : ""} */