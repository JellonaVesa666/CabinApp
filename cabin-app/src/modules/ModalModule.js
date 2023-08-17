import React, { useRef, useEffect } from "react";
import { ModalContent } from "../styles/ModalStyle";
import { RangeSlider, CheckBox, Counter } from "./InputModules";
import { CalendarModule } from "./CalendarModule";
import { colors } from "../styles/Colors";
import { useSelector } from "react-redux";
import { CabinCardModule } from "./CabinCardModule";
import { cabinData } from "../mockup/cabinData";
import { GetDatesBetween } from "../helpers/HelperFunctions";
import { InputStyle } from "../styles/InputStyle";
import iconUser from "../images/icon_user.png";

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
    if (range.length === 3 && cabinData?.weekendPrice && cabinData?.weekendPrice > 0 &&
      range[0].getDay() === 5 && range[2].getDay() === 0) {
      price = cabinData.weekendPrice;
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

    let reservationRange;
    let startDate;
    let endDate;

    startDate = new Date(props.searchFilters["searchDate"]?.value?.[0]?.year, props.searchFilters["searchDate"]?.value?.[0]?.month - 1, props.searchFilters["searchDate"]?.value?.[0]?.day);
    endDate = new Date(props.searchFilters["searchDate"]?.value?.[1]?.year, props.searchFilters["searchDate"]?.value?.[1]?.month - 1, props.searchFilters["searchDate"]?.value?.[1]?.day);
    reservationRange = GetDatesBetween(startDate, endDate);

    const totalPrice = GetTotalPrice(reservationRange);

    return (
      <ModalContent
        ref={wrapperRef}
        width={"55%"}
      >
        <div className="row col-12 m-0 p-0">
          <div className=" row col-7 d-flex justify-content-center align-items-center mb-auto m-0 py-3 ps-4">
            <CabinCardModule />
          </div>
          <div
            className="row col-5 d-flex justify-content-center align-items-center m-0 mb-auto py-3 pe-4"
          >
            <p
              style={{ fontSize: "1.5rem", fontWeight: 400 }}
            >
              Tee varaus
            </p>
            {cabinData?.dayPrice &&
              <p
                className="mt-4"
              >
                Vuorokausi: {cabinData.dayPrice}€
              </p>
            }
            <br />
            {cabinData?.weekendPrice &&
              <p>
                Viikonloppu, pe-su: {cabinData.weekendPrice}€
              </p>
            }
            <br />
            {cabinData?.weekPrice &&
              <p>
                Viikko: {cabinData.weekPrice}€
              </p>
            }
            <div
              className="row col-12 d-flex justify-content-center align-items-center mb-3"
              style={{ border: "0.1rem solid rgba(0, 0, 0, 0.2)", borderRadius: "0.5rem" }}
            >
              <div className="row col-12 m-0">
                <CalendarModule
                  defaultValue={props.searchFilters["searchDate"].defaultValue}
                  value={props.searchFilters["searchDate"].value}
                  reservations={true}
                  count={props.searchFilters["searchDate"].count}
                  SetSearchFilters={props.SetSearchFilters}
                  clearButtton={false}
                />
              </div>
            </div>
            <div
              className="row col-12 d-flex justify-content-center align-items-center px-4 mb-3"
              style={{ border: "0.1rem solid rgba(0, 0, 0, 0.2)", borderRadius: "0.5rem" }}
            >
              <p
                className="col-6 mt-3"
                style={{ fontSize: "1rem", fontWeight: 500, textAlign: "left" }}
              >
                alkupäivä
              </p>
              <p
                className="col-6 mt-3"
                style={{ fontSize: "1rem", fontWeight: 500, textAlign: "right" }}
              >
                {props.searchFilters["searchDate"]?.value?.[0].day !== undefined &&
                  `${props.searchFilters["searchDate"].value[0].day}.${props.searchFilters["searchDate"].value[0].month}.${props.searchFilters["searchDate"].value[0].year}`
                }
                {props.searchFilters["searchDate"]?.value?.[0].day === undefined &&
                  `${props.searchFilters["searchDate"].defaultValue[0].day}.${props.searchFilters["searchDate"].defaultValue[0].month}.${props.searchFilters["searchDate"].defaultValue[0].year}`
                }
              </p>
              <div style={{ width: "95%", height: "2px", backgroundColor: "rgba(0, 0, 0, 0.2)" }} />
              <p
                className="col-6 mt-3"
                style={{ fontSize: "1rem", fontWeight: 500, textAlign: "left" }}
              >
                loppupäivä
              </p>
              <p
                className="col-6 mt-3"
                style={{ fontSize: "1rem", fontWeight: 500, textAlign: "right" }}
              >
                {props.searchFilters["searchDate"]?.value?.[1].day !== undefined &&
                  `${props.searchFilters["searchDate"].value[1].day}.${props.searchFilters["searchDate"].value[1].month}.${props.searchFilters["searchDate"].value[1].year}`
                }
                {props.searchFilters["searchDate"]?.value?.[1].day === undefined &&
                  "----------"
                }
              </p>
              <div style={{ width: "95%", height: "2px", backgroundColor: "rgba(0, 0, 0, 0.2)" }} />

              <p
                className="col-6 mt-3"
                style={{ fontSize: "1rem", fontWeight: 500, textAlign: "left" }}
              >
                hinta
              </p>
              <p
                className="col-6 mt-2"
                style={{ fontSize: "1rem", fontWeight: 500, textAlign: "right" }}
              >
                {props.searchFilters["searchDate"]?.value?.[1].day !== undefined && props.searchFilters["searchDate"]?.value?.[0].day !== undefined &&
                  `${totalPrice}€`
                }
                {props.searchFilters["searchDate"]?.value?.[1].day === undefined &&
                  "----------"
                }
              </p>
              <div
                className="col-6"
              >
                <InputStyle
                  type={"field"}
                  changeState={(value) => console.log(value)}
                  width={"80%"}
                  height={"40px"}
                  borderRadius={"0.4rem"}
                  margin={"1rem 0rem 1.5rem 0rem"}
                  padding={"0rem 1rem 0rem 1rem"}
                  textAlign={"left"}
                  placeholder="Alennus koodi"
                  border={"0.1rem solid rgba(0, 0, 0, 0.2)"}
                />
              </div>
              <div
                className="col-6"
              >
                <InputStyle
                  type={"button"}
                  width={"100%"}
                  height={"40px"}
                  borderRadius={"0.4rem"}
                  margin={"1rem 0rem 1.5rem 0rem"}
                  border={"none"}
                  value="Varaa"
                  color={colors.white}
                  backgroundColor={colors.green}
                />
              </div>
            </div>
            <div
              className="row col-12 d-flex justify-content-center align-items-center mb-4"
              style={{ border: "0.1rem solid rgba(0, 0, 0, 0.2)", borderRadius: "0.5rem" }}
            >

              <div
                className="col-3 d-flex justify-content-end align-items-center mb-auto mt-3"
              >
                <img
                  src={iconUser}
                  alt=""
                  style={{ objectFit: "cover", width: "40px", height: "100%" }}
                />
              </div>
              <div
                className="row col-9 d-flex justify-content-start align-items-center mt-2"
              >
                <div
                  className="col-12 d-flex justify-content-start align-items-center"
                  style={{
                    height: "50px",
                    width: "240px",
                    fontSize: "1rem",
                    fontWeight: 500,
                  }}
                >
                  Test User
                </div>
                <div
                  className="col-12 d-flex justify-content-center align-items-center mb-3"
                  style={{
                    height: "40px",
                    width: "240px",
                    borderRadius: "0.5rem",
                    backgroundColor: colors.green,
                    color: "white",
                    fontSize: "1.25rem",
                    fontWeight: 500,
                  }}
                >
                  045 2266670
                </div>
              </div>
            </div>
            <div
              className="row col-12 d-flex justify-content-center align-items-center mt-5 mb-5"
            >
              <div
                className="col-12 d-flex justify-content-start align-items-center ps-4 mt-3"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 400,
                }}
              >
                Arvostelut
              </div>
              <div
                className="col-12 d-flex justify-content-start align-items-center ps-4"
                style={{
                  fontSize: "1rem",
                  fontWeight: 400,
                }}
              >
                (6 arvostelua)
              </div>
              <div
                className="col-6 d-flex justify-content-start align-items-center ps-4 mt-3"
                style={{
                  fontSize: "1rem",
                  fontWeight: 400,
                }}
              >
                Siisteys
              </div>
              <div
                className="col-6 d-flex justify-content-center align-items-center mt-3"
              >
                <img
                  src={iconUser}
                  alt=""
                  style={{ objectFit: "cover", width: "40px", height: "100%" }}
                />
              </div>
              <div
                className="col-6 d-flex justify-content-start align-items-center ps-4"
                style={{
                  fontSize: "1rem",
                  fontWeight: 400,
                }}
              >
                Kunto
              </div>
              <div
                className="col-6 d-flex justify-content-center align-items-center"
              >
                <img
                  src={iconUser}
                  alt=""
                  style={{ objectFit: "cover", width: "40px", height: "100%" }}
                />
              </div>
            </div>
            <div
              className="col-12"
              style={{ marginTop: "17.5rem" }}
            >
              <iframe
                id="iframeId"
                width="100%"
                height="450px"
                loading="lazy"
                allowFullscreen=""
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?q=${65.045490},${25.352965}&key=AIzaSyBNybM4XtlOILBxKTD6oxYhwML8cA1SQpI`}>
              </iframe>
            </div>
          </div>
        </div>
        {/*         <input type="button" value="RESET" onClick={() => ResetSearchFilters()} />
        <input type="button" value="CLOSE" onClick={() => props.SetModalState("")} /> */}
      </ModalContent >
    )
  }
};