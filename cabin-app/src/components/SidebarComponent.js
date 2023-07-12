import React from "react";
import SearchCardComponent from "./SearchCardComponent";

export const SidebarComponent = () => {
  return (
    <div className="col-3 h-100 p-0 m-0" style={{ backgroundColor: "rgba(250,250,250,1)" }}>
      <SearchCardComponent/>
    </div>
  )
}