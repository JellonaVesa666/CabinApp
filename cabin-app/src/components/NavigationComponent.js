import React, { useState } from "react";
import { NavigationContainer, NavigationExtend, NavigationLink, Navigation } from "../styles/NavigationStyle";

export default function NavigationComponent() {

  const [hideExtended, setHideExtend] = useState(true);

  console.log(hideExtended);

  return (
    <>
      <NavigationContainer>
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
          </Navigation>
        <NavigationExtend className={hideExtended ? "hide" : "show"} />
      </NavigationContainer>
    </>
  )
}