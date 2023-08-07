import React, { useRef, useEffect } from "react";
import { ModalContent, ModalHeader, ModalLinkH4 } from "../styles/ModalStyle";
import { RangeSlider, OptionSelect, MultiSelect, CheckBox, Counter, Input } from "./InputModules";
import { CalendarModule } from "./CalendarModule";
import { colors } from "../styles/Colors";
import { useSelector } from "react-redux";

export const ModalModule = (props) => {

  const language = useSelector(state => state.session.language);

  const OutsideClick = (ref) => {
    useEffect(() => {

      // If clicked on outside of element
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          props.closeModal();
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

  /*   const Filter = (props) => {
      if (searchFilters[props.index].hasOwnProperty("isActive")) {
        return (
          <ModalHeader
            className={searchFilters[props.index].isActive ? "true" : ""}
            width={"80%"}
            marginbottom={"5%"}
            margintop={"5%"}
            onClick={() => props.setActive(props.index)}
          >
            {props.index}
          </ModalHeader >
        )
      }
    }
   */

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
      </ModalContent>
    )
  }
};

//changeState={(newValue, index) => ChangeState(setSearchFilters, newValue, index, "searchDate", "value")}

{/*           <CalendarModule  prevMonth={props.options?.[props.filter][0].prevMonth} thisMonth={props.options?.[props.filter][0].thisMonth} nextMonth={props.options?.[props.filter][0].nextMonth}/>
          <CalendarModule /> */}

{/*       <div style={{ marginTop: "50px" }}>
        {Object.keys(options).map(key => <Filter key={key} index={key} />)}
      </div> */}
{/*       <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={props.closeModal}
      >
        <ModalLinkH4 className="mt-2"
        >
          Close
        </ModalLinkH4>
      </div> */}

      //<div className="d-flex justify-content-evenly align-items-center ">