import React from "react";
import { AddButton, BodyTopContainer, SearchBar } from "../styles/SearchBarStyle";

export const SearchPage = (props) => {
  return (
    <div className="row h-100 m-0 p-0">
      <BodyTopContainer className="m-0 p-0">
        <div class="h-100 mt-5 d-flex justify-content-center">
          <SearchBar>
            <div className="input-group justify-content-center bg-dark" style={{ height: "18%" }}>
              <input className=" col-xs-4 col-sm-4 col-md-3 col-lg-3 text-center p-2 shadow-sm rounded" type="text" />
              <input className=" col-xs-4 col-sm-4 col-md-3 col-lg-3 text-center p-2 shadow-sm rounded" type="datetime-local" />
              <input className=" col-xs-4 col-sm-4 col-md-3 col-lg-3 text-center p-2 shadow-sm rounded" type="datetime-local" />
              <input className=" col-xs-4 col-sm-4 col-md-2 col-lg-2 text-center p-2 shadow-sm rounded" type="input" />
              <AddButton className="d-flex justify-content-center align-items-center col-xs-4 col-sm-4 col-md-1 col-lg-1 text-center p-2 shadow-sm rounded" onClick={() => props.changeState()}>
                <p>FILTERS</p>
              </AddButton >
            </div>
          </SearchBar>
        </div>
      </BodyTopContainer >
      <div className="row justify-content-center m-0 p-0" style={{ height: "70%", backgroundColor: "rgba(255, 255, 255, 0.3)" }}>
        <div class="col-8 d-flex flex-wrap" >
          <div class="col d-flex justify-content-end align-items-center col-lg-6 px-4" style={{ height: "50%" }}>
            <div class="d-flex justify-content-center align-items-center" style={{ height: "85%", width: "75%", border: "2px solid black" }}>
              dada
            </div>
          </div>
          <div class="col d-flex justify-content-start align-items-center col-lg-6 px-4" style={{ height: "50%" }}>
            <div class="d-flex justify-content-center align-items-center" style={{ height: "85%", width: "75%", border: "2px solid black" }}>
              dada
            </div>
          </div>
          <div class="col d-flex justify-content-end align-items-center col-lg-6 px-4" style={{ height: "50%" }}>
            <div class="d-flex justify-content-center align-items-center" style={{ height: "85%", width: "75%", border: "2px solid black" }}>
              dada
            </div>
          </div>
          <div class="col d-flex justify-content-start align-items-center col-lg-6 px-4" style={{ height: "50%" }}>
            <div class="d-flex justify-content-center align-items-center" style={{ height: "85%", width: "75%", border: "2px solid black" }}>
              dada
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}