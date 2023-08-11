import React, { useRef, useEffect } from "react";
import { ModalContent } from "../styles/ModalStyle";
import { RangeSlider, CheckBox, Counter } from "./InputModules";
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
          if (event.target.id !== "modalBtn") {
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
        props.SetSearchFilters(state => ({ ...state, [item]: props.searchParameters[item] }))
      }
    })
  }

  console.log(props);

  if (props.state === "searchDate") {
    return (
      <ModalContent
        ref={wrapperRef}
        width={"auto"}
      >
        <CalendarModule
          defaultValue={props.searchFilters[props.state].defaultValue}
          value={props.searchFilters[props.state].value}
          reservations={props.searchFilters[props.state].reservations}
          count={props.searchFilters[props.state].count}
          SetSearchFilters={props.SetSearchFilters}
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
                index1={props.state}
                i={item}
                SetSearchFilters={props.SetSearchFilters}
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
                index1={props.state}
                i={item}
                SetSearchFilters={props.SetSearchFilters}
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
        width={"43.5%"}
      >
        {Object.keys(props.searchFilters).map(item => {
          if (!props.searchFilters?.[item]?.static &&
            props.searchFilters[item].type === "slider") {
            return (
              <RangeSlider
                key={item}
                data={props.searchFilters}
                i={item}
                language={language}
                SetSearchFilters={props.SetSearchFilters}
              />
            )
          }
          if (!props.searchFilters?.[item]?.static &&
            props.searchFilters[item].type === "checkbox") {
            return (
              <CheckBox
                key={item}
                data={props.searchFilters}
                i={item}
                language={language}
                color={colors.blue}
                SetSearchFilters={props.SetSearchFilters}
              />
            )
          }
          return null;
        })}
        <input type="button" value="RESET" onClick={() => ResetSearchFilters()} />
        <input type="button" value="CLOSE" onClick={() => props.SetModalState("")} />
      </ModalContent>
    )
  }
  else if (props.state === "preview") {
    console.log("true")
    return (
      <ModalContent
        ref={wrapperRef}
        width={"auto"}
      >
        <div className="col-12 row flex-wrap d-flex justify-content-center align-items-center">
          aldöaldaldöäaldäöaläödlaäöaldäö
        </div>
        <input type="button" value="RESET" onClick={() => ResetSearchFilters()} />
        <input type="button" value="CLOSE" onClick={() => props.SetModalState("")} />
      </ModalContent>
    )
  }
};