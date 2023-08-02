import React, { useRef, useEffect } from "react";
import { ModalContent, ModalHeader, ModalLinkH4 } from "../styles/ModalStyle";
import { RangeSlider, OptionSelect, MultiSelect, CheckBox, Counter, Input } from "./InputModules";
import { CalendarModule } from "./CalendarModule";

export const ModalModule = (props) => {

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

  if (props.filter) {
    //const result = Object.keys(props.searchFilters[props.filter]).filter((i) => typeof i === "string" && !isNaN(i));
    return (
      <ModalContent ref={wrapperRef}>
        {props.filter === "searchDate" &&
          <CalendarModule
            defaultValue={props.searchFilters[props.filter].defaultValue}
            value={props.searchFilters[props.filter].value}
            reservations={props.searchFilters[props.filter].reservations}
            count={props.searchFilters[props.filter].count}
            changeState={(newValue, property) => props.changeState(newValue, property, "searchDate", "value")}
          />
        }
        {props.filter === "persons" &&
          <>
            {Object.keys(props.searchFilters).map(item => {
              if (item === props.filter) {
                return (
                  <Counter
                    data={props.searchFilters}
                    i={item}
                    changeState={(newValue, index2) => props.changeState(newValue, "value", item, index2)}
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
                    data={props.searchFilters}
                    i={item}
                    changeState={(newValue, index2) => props.changeState(newValue, "value", item, index2)}
                  />
                )
              }
            })
            }
          </>
        }
        {props.filter === "dynamicFilters" &&
          props.searchFilters["slider"].type === "slider" &&
          <RangeSlider
            minDefault={props.searchFilters["slider"].minDefault}
            maxDefault={props.searchFilters["slider"].maxDefault}
            maxValue={props.searchFilters["slider"].maxValue}
            minValue={props.searchFilters["slider"].minValue}
            step={props.searchFilters["slider"].step}
            changeState={(newValue, property) => props.changeState(newValue, property, "slider")}
          />

        }
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