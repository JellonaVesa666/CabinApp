import React, { useState } from "react";
import { NavigationBody, NavigationExtend, NavigationLink, Navigation } from "../styles/NavigationStyle";
import SearchCardComponent from "./SearchCardComponent";

export default function NavigationComponent() {

  const [isActive, setIsActive] = useState("");

  return (
    <>
      <NavigationBody>
        <Navigation className={isActive ? "hide" : "show"}>
          <div style={{ height: "10%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <NavigationLink className="user" onClick={() => setIsActive("")}/>
          </div>
          <div style={{ height: "80%", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <NavigationLink id="reservations" className={isActive === "reservations" ? "reservations selected" : "reservations"} onClick={(event) => setIsActive(event.target.id)} />
            <NavigationLink id="users" className={isActive === "users" ? "users selected" : "users"} onClick={(event) => setIsActive(event.target.id)} />
            <NavigationLink id="cabins" className={isActive === "cabins" ? "cabins selected" : "cabins"} onClick={(event) => setIsActive(event.target.id)} />
            <NavigationLink id="map" className={isActive === "map" ? "map selected" : "map"} onClick={(event) => setIsActive(event.target.id)} />
            <NavigationLink id="settings" className={isActive === "settings" ? "settings selected" : "settings"} onClick={(event) => setIsActive(event.target.id)} />
          </div>
          <div style={{ height: "10%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <NavigationLink className="logout" />
          </div>
        </Navigation>
        <NavigationExtend className={isActive === "" ? "hide" : "show"}>
          <SearchCardComponent/>
        </NavigationExtend>
      </NavigationBody>
    </>
  )
}