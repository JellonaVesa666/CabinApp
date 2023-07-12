import React from "react";
import { SidebarComponent } from "./SidebarComponent";
import { ContentComponent } from "./ContentComponent";

export const BodyComponent = () => {
  return (
    <div class="container-fluid d-flex flex-grow-1 flex-column p-0 m-0">
      <div class="d-flex flex-grow-1 justify-content-center p-0 m-0">
        <SidebarComponent/>
        <ContentComponent/>
      </div>
    </div>
  )
}