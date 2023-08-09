import React, { useRef, useEffect } from "react";
import { ModalContent } from "../styles/ModalStyle";
import { RangeSlider, CheckBox, Counter } from "./InputModules";
import { CalendarModule } from "./CalendarModule";
import { colors } from "../styles/Colors";
import { useSelector } from "react-redux";
import { ChangeState } from "../helpers/HelperFunctions";

export const ModalModule = (props) => {

  const language = useSelector(state => state.session.language);

  const OutsideClick = (ref) => {
    useEffect(() => {

      // If clicked on outside of element
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          if (event.target.id !== "modalBtn") {
            props.SetModalActive(false);
            props.SetSelectedFilter("");
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
        props.SetSearchFilters(state => ({ ...state, [item]: props.searchParameters[item] }))
      }
    })
  }

  if (props.filter !== "dynamic") {
    // Add Counter etc. modules under one if statement
    return (
      <ModalContent
        ref={wrapperRef}
        width={"auto"}
      >
        {props.filter === "searchDate" &&
          <CalendarModule
            defaultValue={props.searchFilters[props.filter].defaultValue}
            value={props.searchFilters[props.filter].value}
            reservations={props.searchFilters[props.filter].reservations}
            count={props.searchFilters[props.filter].count}
            SetSearchFilters={props.SetSearchFilters}
          />
        }
        {props.filter === "persons" &&
          <>
            {Object.keys(props.searchFilters).map(item => {
              if (item === props.filter) {
                return (
                  <Counter
                    language={language}
                    data={props.searchFilters}
                    index1={props.filter}
                    i={item}
                    SetSearchFilters={props.SetSearchFilters}
                  />
                )
              }
            })
            }
          </>
        }
        {props.filter === "rooms" &&
          <>
            {Object.keys(props.searchFilters).map(item => {
              if (item === props.filter) {
                return (
                  <Counter
                    language={language}
                    data={props.searchFilters}
                    index1={props.filter}
                    i={item}
                    SetSearchFilters={props.SetSearchFilters}
                  />
                )
              }
            })
            }
          </>
        }
      </ModalContent>
    )
  }
  else {
    return (
      <ModalContent
        className="secondaryColor"
        ref={wrapperRef}
        width={"40%"}
      >
        {Object.keys(props.searchFilters).map(item => {
          return (
            <>
              {
                !props.searchFilters?.[item]?.static &&
                props.searchFilters[item].type === "slider" &&
                <RangeSlider
                  data={props.searchFilters}
                  i={item}
                  language={language}
                  SetSearchFilters={props.SetSearchFilters}
                />
              }
              {!props.searchFilters?.[item]?.static &&
                props.searchFilters[item].type === "checkbox" &&
                <>
                  <CheckBox
                    data={props.searchFilters}
                    i={item}
                    language={language}
                    color={colors.blue}
                    SetSearchFilters={props.SetSearchFilters}
                  />
                </>
              }
            </>
          )
        })}
        <input type="button" value="RESET" onClick={() => ResetSearchFilters()} />
        <input type="button" value="CLOSE" onClick={() => props.SetModalActive(false)} />
      </ModalContent>
    )
  }
};