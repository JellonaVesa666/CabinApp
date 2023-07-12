import React from "react";
import SearchCardComponent from "./SearchCardComponent";
import { colors } from "../styles/Colors";

export const SidebarComponent = () => {
  return (
    <div className="col-3 h-100 p-0 m-0" style={{ backgroundColor: `${colors.white}` }}>
      <SearchCardComponent />
    </div>
  )
}