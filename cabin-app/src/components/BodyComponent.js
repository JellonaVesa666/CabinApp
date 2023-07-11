import React from "react";
import { SidebarComponent } from "./SidebarComponent";
import { ContentComponent } from "./ContentComponent";

export const BodyComponent = () => {
  return (
    <div class="container-fluid d-flex flex-grow-1 p-0 m-0 flex-column">
      <div class="row d-flex flex-grow-1 justify-content-center">
        <SidebarComponent/>
        <ContentComponent/>
      </div>
    </div>
  )
}