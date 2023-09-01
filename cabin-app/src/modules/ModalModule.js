/* React */
import React, { useRef, useEffect } from "react";
/* Redux */
import { useSelector } from "react-redux";
/* Modules */
import { ModalContent } from "../styles/ModalStyle";
import { RangeSlider, CheckBox, Counter } from "./InputModules";
import { CalendarModule } from "./CalendarModule";
import { CabinCardModule } from "./CabinCardModule";
import { RegisterModule } from "./RegisterModule";
import { LoginModule } from "./LoginModule";

export const ModalModule = (props) => {

  const language = useSelector(state => state.session.language);

  const OutsideClick = (ref) => {
    useEffect(() => {
      // If clicked on outside of element
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          if (event.target.id !== "modalBtn" &&
            (
              (props.state !== "register" || props.state !== "login")
              ||
              (props.routePath !== ("/register") || props.routePath !== ("/login")
              )
            )
          ) {
            props.SetModalState("");
          }
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  OutsideClick(wrapperRef);

  const ResetSearchFilters = () => {
    // Filter and reset dynamic filters
    Object.keys(props.searchFilters).forEach((item) => {
      if (!props.searchFilters[item].static) {
        props.SetSearchFilters(state => ({ ...state, [item]: props.defaultSearchFilters[item] }))
      }
    })
  }

  if (props.state === "searchDate") {
    return (
      <ModalContent
        ref={wrapperRef}
        width={"auto"}
      >
        <CalendarModule
          defaultValue={props.searchFilters["searchDate"].defaultValue}
          value={props.searchFilters["searchDate"].value}
          reservations={props.searchFilters["searchDate"].reservations}
          count={props.searchFilters["searchDate"].count}
          changeState={props.SetSearchFilters}
          clearButton={true}
        />
      </ModalContent>
    )
  }
  else if (props.state === "persons") {
    return (
      <ModalContent
        ref={wrapperRef}
        width={"auto"}
      >
        {Object.keys(props.searchFilters).map(item => {
          if (item === props.state) {
            return (
              <Counter
                key={item}
                language={language}
                data={props.searchFilters}
                index1={"persons"}
                i={item}
                changeState={props.SetSearchFilters}
              />
            )
          }
          return null;
        })
        }
      </ModalContent>
    )
  }
  else if (props.state === "rooms") {
    return (
      <ModalContent
        ref={wrapperRef}
        width={"auto"}
      >
        {Object.keys(props.searchFilters).map(item => {
          if (item === props.state) {
            return (
              <Counter
                key={item}
                language={language}
                data={props.searchFilters}
                index1={"rooms"}
                i={item}
                changeState={props.SetSearchFilters}
              />
            )
          }
          return null;
        })
        }
      </ModalContent>
    )
  }
  else if (props.state === "advanced") {
    return (
      <ModalContent
        className="secondaryColor"
        ref={wrapperRef}
        width={"35%"}
      >
        {Object.keys(props.searchFilters).map(item => {
          if (!props.searchFilters?.[item]?.static &&
            props.searchFilters[item].type === "slider") {
            return (
              <div
                className=" row col-12 d-flex justify-content-center align-items-center py-3 m-0"
              >
                <div
                  className="col-3 d-flex justify-content-start align-items-center mb-auto ps-5 pt-3"
                  style={{ fontWeight: 500, letterSpacing: "2px", fontSize: "1em" }}
                >
                  {(props.searchFilters?.[item]?.info?.header?.[language])?.toUpperCase()}
                </div>
                <RangeSlider
                  key={item}
                  data={props.searchFilters}
                  i={item}
                  language={language}
                  changeState={props.SetSearchFilters}
                  toUpperCase={true}
                />
              </div>
            )
          }
          if (!props.searchFilters?.[item]?.static &&
            props.searchFilters[item].type === "checkbox") {
            return (
              <div className=" row col-12 d-flex justify-content-center align-items-center py-3 m-0">
                <div
                  className="col-3 d-flex justify-content-start align-items-center mb-auto ps-5 pt-3"
                  style={{ fontWeight: 500, letterSpacing: "2px", fontSize: "1em" }}
                >
                  {(props.searchFilters?.[item]?.info?.header?.[language])?.toUpperCase()}
                </div>
                <CheckBox
                  key={item}
                  data={props.searchFilters}
                  i={item}
                  letterSpacing={2}
                  fontSize={10}
                  language={language}
                  changeState={props.SetSearchFilters}
                  toUpperCase={true}
                />
              </div>
            )
          }
          return null;
        })}
        <input type="button" value="RESET" onClick={() => ResetSearchFilters()} />
        <input type="button" value="CLOSE" onClick={() => props.SetModalState("")} />
      </ModalContent>
    )
  }
  else if (props.state === "register" || props.routePath === "/register") {
    return (
      <ModalContent
        ref={wrapperRef}
        width={"18.5"}
        top={"100"}
        background={"none"}
      >
        <RegisterModule
          SetModalState={props.SetModalState}
        />
      </ModalContent>
    )
  }
  else if (props.state === "login" || props.routePath === "/login") {
    return (
      <ModalContent
        ref={wrapperRef}
        width={"25"}
        top={"120"}
        background={"none"}
      >
        <LoginModule
          SetModalState={props.SetModalState}
        />
      </ModalContent>
    )
  }
  else if (props.state === "preview") {
    return (
      <ModalContent
        ref={wrapperRef}
        width={"55%"}
      >
        <CabinCardModule
          searchFilters={props.searchFilters}
          SetSearchFilters={props.SetSearchFilters}
        />
      </ModalContent >
    )
  }
};