import React, { useRef, useEffect } from "react";
import { ModalContent } from "../styles/ModalStyle";
import { RangeSlider, CheckBox, Counter } from "./InputModules";
import { CalendarModule } from "./CalendarModule";
import { colors } from "../styles/Colors";
import { useSelector } from "react-redux";
import { CabinCardModule } from "./CabinCardModule";
import { cabinData } from "../mockup/cabinData";
import { GetDatesBetween } from "../helpers/HelperFunctions";

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
        props.SetSearchFilters(state => ({ ...state, [item]: props.defaultSearchFilters[item] }))
      }
    })
  }

  const GetTotalPrice = (range) => {
    let price = 0;

    // Weekend Price
    if (range.length === 3 && cabinData?.weekendPrice && cabinData?.weekendPrice > 0) {
      if (range[0].getDay() === 5 && range[2].getDay() === 0) {
        console.log(cabinData.weekendPrice)
        price = cabinData.weekendPrice;
      }
    }
    //Week Price
    else if (range.length === 7 &&
      range[0].getDay() === 1 &&
      range[6].getDay() === 0 &&
      cabinData?.weekPrice &&
      cabinData?.weekPrice > 0) {
      price = cabinData.weekPrice;
    }
    // Day Price
    else {
      if (cabinData?.dayPrice && cabinData?.dayPrice > 0) {
        price = (range.length - 1) * cabinData.dayPrice;
      }
    }

    return price;
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
                index1={"persons"}
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
                index1={"rooms"}
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

    const startDate = new Date(props.searchFilters["searchDate"].value[0].year, props.searchFilters["searchDate"].value[0].month - 1, props.searchFilters["searchDate"].value[0].day);
    const endDate = new Date(props.searchFilters["searchDate"].value[1].year, props.searchFilters["searchDate"].value[1].month - 1, props.searchFilters["searchDate"].value[1].day);
    const reservationRange = GetDatesBetween(startDate, endDate);

    const totalPrice = GetTotalPrice(reservationRange);


    console.log(totalPrice);

    /*     if (cabinData?.weekPrice) {
          // Get weekends
          for (let i = 0; i < reservationRange.length; i++) {
            if (reservationRange[i].getDay() === 6 || reservationRange[i].getDay() === 0)
              console.log(reservationRange[i])
          }
        } */

    /*     for (let index = 0; index < delta.days + 1; index++) {
          const element = array[index];
          
        } */
    /* 
        for i in range(delta.days + 1):
          day = start_date + timedelta(days = i)
        print(day) */

    return (
      <ModalContent
        ref={wrapperRef}
        width={"50%"}
      >
        <div className="col-12 d-flex justify-content-center align-items-center">
          <div className="row col-7 d-flex justify-content-center align-items-center m-0 p-0">
            <CabinCardModule />
          </div>
          <div
            className="col-5"
          >
            <CalendarModule
              defaultValue={props.searchFilters["searchDate"].defaultValue}
              value={props.searchFilters["searchDate"].value}
              reservations={props.searchFilters["searchDate"].reservations}
              count={props.searchFilters["searchDate"].count}
              SetSearchFilters={props.SetSearchFilters}
            />
          </div>
        </div>
        {/*         <input type="button" value="RESET" onClick={() => ResetSearchFilters()} />
        <input type="button" value="CLOSE" onClick={() => props.SetModalState("")} /> */}
      </ModalContent>
    )
  }
};