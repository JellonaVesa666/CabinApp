import React, { useState } from "react";
import { NavigationBody, NavigationContainer, NavigationLink, Navigation } from "../styles/NavigationStyle";

export default function NavigationComponent() {

  const [hideExtended, setHideExtend] = useState(true);

  console.log(hideExtended);

  return (
    <>
      <NavigationBody>
        <NavigationContainer className={hideExtended ? "shadow-lg hide" : "shadow-lg show"}>
          <Navigation className={hideExtended ? "hide" : "show"}>
            <div style={{ height: "10%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <NavigationLink className="user" />
            </div>
            <div style={{ height: "80%", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <NavigationLink className="reservations" onClick={() => setHideExtend(!hideExtended)} />
              <NavigationLink className="users" />
              <NavigationLink className="cabins" />
              <NavigationLink className="map" />
              <NavigationLink className="settings" />
            </div>
            <div style={{ height: "10%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <NavigationLink className="logout" />
            </div>
            <div style={{ position: "absolute", bottom: 0, left: "25%", backgroundColor: "rgba(25, 25, 25, 0.4)", height: "100%", width: "75%" }}></div>
          </Navigation>
        </NavigationContainer>
      </NavigationBody>
    </>
  )
}