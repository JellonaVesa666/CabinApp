import React, { useEffect, useState, useCallback } from "react";
import { cabinData, cabinFeatures } from "../mockup/cabinData";
import checked from "../images/icon_checked.png";
import restricted from "../images/icon_restricted.png";
import { CalendarModule } from "./CalendarModule";
import { colors } from "../styles/Colors";
/* Helpers */
import { GetDatesBetween } from "../helpers/HelperFunctions";
/* Styles */
import { InputStyle } from "../styles/InputStyle";
/* Images */
import iconUser from "../images/icon_user.png";
import starGrey from "../images/icon_star_grey.png";
import starYellow from "../images/icon_star_yellow.png";
import starHalftone from "../images/icon_star_halftone.png";

export const CabinCardModule = (props) => {
  const [previewImgID, setPreviewImgID] = useState(0);
  const [cuponCode, setCuponCode] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [rating, setRating] = useState({});

  const [date, setDate] = useState({
    searchDate: {
      value: {
        0: props?.searchFilters["searchDate"].value[0],
        1: props?.searchFilters["searchDate"].value[1],
      },
      defaultValue: {
        0: props?.searchFilters["searchDate"].defaultValue[0],
        1: props?.searchFilters["searchDate"].defaultValue[1],
      }
    }
  })

  const GetRatings = () => {
    let rating = {
      count: 0,
      average: 0,
      tidiness: 0,
      condition: 0,
      furnishing: 0,
      location: 0,
      reliability: 0,
    }

    Object.keys(cabinData.ratings).forEach((item) => {
      rating.count++;
      rating.tidiness += cabinData.ratings[item].tidiness;
      rating.condition += cabinData.ratings[item].condition;
      rating.furnishing += cabinData.ratings[item].furnishing;
      rating.location += cabinData.ratings[item].location;
      rating.reliability += cabinData.ratings[item].reliability;
    })

    rating.average += rating.tidiness;
    rating.average += rating.condition;
    rating.average += rating.furnishing;
    rating.average += rating.location;
    rating.average += rating.reliability;
    rating.average = (rating.average / (rating.count * (5 * 5))) * 5;
    rating.average = rating.average.toFixed(1);

    rating.tidiness = (Math.round(rating.tidiness / rating.count * 2) / 2).toFixed(1);
    rating.condition = (Math.round(rating.condition / rating.count * 2) / 2).toFixed(1);
    rating.furnishing = (Math.round(rating.furnishing / rating.count * 2) / 2).toFixed(1);
    rating.location = (Math.round(rating.location / rating.count * 2) / 2).toFixed(1);
    rating.reliability = (Math.round(rating.reliability / rating.count * 2) / 2).toFixed(1);

    return rating;
  }

  const GetTotalPrice = useCallback(() => {
    let reservationRange;
    let startDate;
    let endDate;
    let price = 0;

    // Calculate reservation range
    if (date["searchDate"].value?.[0]?.day !== undefined && date["searchDate"].value?.[1]?.day !== undefined) {
      startDate = new Date(date["searchDate"].value?.[0]?.year, date["searchDate"].value?.[0]?.month - 1, date["searchDate"].value?.[0]?.day);
      endDate = new Date(date["searchDate"].value?.[1]?.year, date["searchDate"].value?.[1]?.month - 1, date["searchDate"].value?.[1]?.day);
      reservationRange = GetDatesBetween(startDate, endDate);
    }
    else {
      startDate = new Date(date["searchDate"].defaultValue?.[0]?.year, date["searchDate"].defaultValue?.[0]?.month - 1, date["searchDate"].defaultValue?.[0]?.day);
      endDate = new Date(date["searchDate"].defaultValue?.[1]?.year, date["searchDate"].defaultValue?.[1]?.month - 1, date["searchDate"].defaultValue?.[1]?.day);
      reservationRange = GetDatesBetween(startDate, endDate);
    }

    //Calculate Price
    // Weekend Price
    if (reservationRange.length === 3 && cabinData?.weekendPrice && cabinData?.weekendPrice > 0 &&
      reservationRange[0].getDay() === 5 && reservationRange[2].getDay() === 0) {
      price = cabinData.weekendPrice;
    }
    //Week Price
    else if (reservationRange.length === 7 &&
      reservationRange[0].getDay() === 1 &&
      reservationRange[6].getDay() === 0 &&
      cabinData?.weekPrice &&
      cabinData?.weekPrice > 0) {
      price = cabinData.weekPrice;
    }
    // Day Price
    else {
      if (cabinData?.dayPrice && cabinData?.dayPrice > 0) {
        price = (reservationRange.length - 1) * cabinData.dayPrice;
      }
    }

    // Cupon Discount
    if (cuponCode === cabinData.cuponCode)
      price -= cabinData.discountValue;

    return price;
  }, [cuponCode, date]);

  useEffect(() => {
    setTotalPrice(GetTotalPrice());
    setRating(GetRatings());
  }, [GetTotalPrice]);

  const renderList = (stars) => {

    let listItems = [];
    for (let i = 0; i < 5; i++) {

      stars -= 1;

      if (stars >= 0) {
        listItems.push(
          <img
            src={starYellow}
            alt=""
            style={{ objectFit: "cover", width: "20px", height: "100%" }}
          />
        );
      }
      else if (stars === -0.5) {
        listItems.push(
          <img
            src={starHalftone}
            alt=""
            style={{ objectFit: "cover", width: "20px", height: "100%" }}
          />
        );
      }
      else {
        listItems.push(
          <img
            src={starGrey}
            alt=""
            style={{ objectFit: "cover", width: "20px", height: "100%" }}
          />
        );
      }
    }
    return listItems;
  };

  console.log(date["searchDate"].value?.[0].day);

  return (
    <div className="row col-12 m-0 p-0">
      <div className=" row col-7 d-flex justify-content-center align-items-center m-0 mb-auto py-3 ps-5">

        <p
          className="col-12 m-0 p-0"
          style={{ fontSize: "1.5rem", fontWeight: 400 }}
        >
          Ekin Mesta
        </p>
        <p
          className="col-12 d-flex justify-content-start align-items-center m-0 mt-3 p-0"
          style={{ fontSize: "1rem", fontWeight: 400, textAlign: "right" }}
        >
          &#11088; 4.9 ( 6 arvostelua)
        </p>
        <p
          className="col-8 d-flex justify-content-start align-items-center m-0 p-0"
          style={{ fontSize: "1rem", fontWeight: 400, textAlign: "right" }}
        >
          HattiWattikuja 1, 90500 Pohjois-Pohjanmaa
        </p>
        <p
          className="col-4 d-flex justify-content-end align-items-center m-0 p-0"
          style={{ fontSize: "1.2rem", fontWeight: 500, textAlign: "right" }}
        >
          Alkaen 500€ / vrk
        </p>

        <div
          className="d-flex justify-content-center align-items-center m-0 p-0"
          style={{ width: "100%", backgroundColor: "#e1e1e1" }}
        >
          <div
            className="d-flex justify-content-center align-items-center me-auto bg-success"
            style={{ fontSize: "1.4rem", width: "5%", color: "white" }}
            onClick={() => (previewImgID >= 1 ? setPreviewImgID(previewImgID - 1) : 0)}
          >
            {"<"}
          </div>
          {Object.keys(cabinData["images"]).map((item) => {
            return (
              <img
                key={item}
                src={require('../images/icon_preview.png')}
                alt=""
                style={{ objectFit: "cover", width: "80%", height: "100%", display: previewImgID === Number(item) ? "flex" : "none" }}
              />
            )
          })}
          <div
            className="d-flex justify-content-center align-items-center ms-auto bg-success"
            style={{ fontSize: "1.4rem", width: "5%", color: "white" }}
            onClick={() => (previewImgID + 7) <= Object.keys(cabinData["images"]).length ? setPreviewImgID(previewImgID + 1) : ""}
          >
            {">"}
          </div>
        </div>
        <div className="row row-cols-6 d-flex justify-content-center align-items-center m-0 mt-3 p-0">
          {Object.keys(cabinData["images"]).map((item) => {
            return (
              <div
                className="col justify-content-center align-items-center"
                style={{ display: (Number(item) >= previewImgID && Number(item) <= previewImgID + 5) ? "flex" : "none" }}
              >
                <img
                  key={item}
                  src={require('../images/icon_preview.png')}
                  alt=""
                  style={{ objectFit: "cover", width: "100px", height: "100%" }}
                />
                {item}
              </div>
            )
          })}
        </div>
        <div
          className="col-12 d-flex justify-content-start align-items-center mt-5"
          style={{ fontSize: "1rem" }}
        >
          {cabinData.description}
        </div>
        <div
          className="row d-flex justify-content-start align-items-center m-0 mt-5 p-0"
        >
          <p
            className="col-12"
            style={{ fontSize: "1.2rem", fontWeight: 500 }}
          >
            Kohteen Tiedot
          </p>
          <p
            className="col-5"
            style={{ fontSize: "1rem", fontWeight: 500 }}
          >
            Tyyppi
          </p>
          <p
            className="col-7 justify-content-start align-items-center"
            style={{ fontSize: "1rem", fontWeight: 400 }}
          >
            Hirsimökki
          </p>
          <p
            className="col-5"
            style={{ fontSize: "1rem", fontWeight: 500 }}
          >
            Pinta-ala
          </p>
          <p
            className="col-7 justify-content-start align-items-center"
            style={{ fontSize: "1rem", fontWeight: 400 }}
          >
            60 m
          </p>
          <p
            className="col-5"
            style={{ fontSize: "1rem", fontWeight: 500 }}
          >
            Makuuhuoneet
          </p>
          <p
            className="col-7 justify-content-start align-items-center"
            style={{ fontSize: "1rem", fontWeight: 400 }}
          >
            2
          </p>
          <p
            className="col-5"
            style={{ fontSize: "1rem", fontWeight: 500 }}
          >
            Kylpyhuoneet
          </p>
          <p
            className="col-7 justify-content-start align-items-center"
            style={{ fontSize: "1rem", fontWeight: 400 }}
          >
            1
          </p>
          <p
            className="col-12 mt-3"
            style={{ fontSize: "1.2rem", fontWeight: 500 }}
          >
            Palsta
          </p>
          <p
            className="col-5"
            style={{ fontSize: "1rem", fontWeight: 500 }}
          >
            Pinta-ala
          </p>
          <p
            className="col-7 justify-content-start align-items-center"
            style={{ fontSize: "1rem", fontWeight: 400 }}
          >
            60 m
          </p>
          <p
            className="col-5"
            style={{ fontSize: "1rem", fontWeight: 500 }}
          >
            Aidattu piha
            {/* Enclosed yard */}
          </p>
          <p
            className="col-7 justify-content-start align-items-center"
            style={{ fontSize: "1rem", fontWeight: 400 }}
          >
            Kyllä
          </p>
          <p
            className="col-5"
            style={{ fontSize: "1rem", fontWeight: 500 }}
          >
            Ranta
          </p>
          <p
            className="col-7 justify-content-start align-items-center"
            style={{ fontSize: "1rem", fontWeight: 400 }}
          >
            Kyllä
          </p>
          <p
            className="col-5"
            style={{ fontSize: "1rem", fontWeight: 500 }}
          >
            Jaettu ranta
          </p>
          <p
            className="col-7 justify-content-start align-items-center"
            style={{ fontSize: "1rem", fontWeight: 400 }}
          >
            Ei
          </p>
          <p
            className="col-5"
            style={{ fontSize: "1rem", fontWeight: 500 }}
          >
            Käyttöoikeus rantaan
          </p>
          <p
            className="col-7 justify-content-start align-items-center"
            style={{ fontSize: "1rem", fontWeight: 400 }}
          >
            Kyllä
          </p>
          <p
            className="col-5"
            style={{ fontSize: "1rem", fontWeight: 500 }}
          >
            Käyttöoikeus vesistöön
          </p>
          <p
            className="col-7 justify-content-start align-items-center"
            style={{ fontSize: "1rem", fontWeight: 400 }}
          >
            Kyllä
          </p>
          <p
            className="col-12 mt-4"
            style={{ fontSize: "1.2rem", fontWeight: 500, letterSpacing: "2px" }}
          >
            Varustelu
          </p>
          <div className="row row-cols-3 justify-content-center align-items-center">
            {
              Object.keys(cabinFeatures).map((item) => {
                return (
                  <div
                    className="col-4 d-flex"
                  >
                    <img
                      src={cabinData["features"].includes(Number(item)) ? checked : restricted}
                      alt=""
                      style={{ objectFit: "cover", width: "26px", height: "100%" }}
                    />
                    <p
                      className="px-3"
                      style={{ fontSize: "1", fontWeight: 400, textAlign: "left" }}
                    >
                      {cabinFeatures[item]["fi"]}
                    </p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

      <div
        className="row col-5 d-flex justify-content-center align-items-center m-0 mb-auto py-3 pe-5"
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
              defaultValue={date["searchDate"].defaultValue}
              value={date["searchDate"].value}
              reservations={true}
              count={2}
              changeState={setDate}
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
            {date["searchDate"].value?.[0].day !== undefined &&
              `${date["searchDate"].value[0].day}.${date["searchDate"].value[0].month}.${date["searchDate"].value[0].year}`
            }
            {date["searchDate"].value?.[0].day === undefined &&
              `${date["searchDate"].defaultValue[0].day}.${date["searchDate"].defaultValue[0].month}.${date["searchDate"].defaultValue[0].year}`
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
            {date["searchDate"].value?.[1].day !== undefined &&
              `${date["searchDate"].value[1].day}.${date["searchDate"].value[1].month}.${date["searchDate"].value[1].year}`
            }
            {date["searchDate"].value?.[1].day === undefined &&
              `${date["searchDate"].defaultValue[1].day}.${date["searchDate"].defaultValue[1].month}.${date["searchDate"].defaultValue[1].year}`
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
            {totalPrice}€
          </p>
          <div
            className="col"
          >
            <InputStyle
              type={"field"}
              onChange={(event) => setCuponCode(event.target.value)}
              value={cuponCode}
              width={"80%"}
              height={"40px"}
              borderRadius={"0.4rem"}
              margin={"1rem 0rem 1.5rem 0rem"}
              textAlign={"left"}
              placeholder="Alennus koodi"
              border={"0.1rem solid rgba(0, 0, 0, 0.2)"}
            />
          </div>
          <div
            className="col"
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
          className="row col-12 d-flex justify-content-center align-items-center mt-5"
        >
          <div
            className="col-6 d-flex justify-content-start align-items-center ps-4"
            style={{
              fontSize: "1.5rem",
              fontWeight: 400,
            }}
          >
            Arvostelut
          </div>
          <div
            className="col-6 d-flex justify-content-end align-items-center pe-5"
            style={{
              fontSize: "1.5rem",
              fontWeight: 400,
            }}
          >
            {rating?.average}/5
          </div>
          <div
            className="col-12 d-flex justify-content-start align-items-center ps-4 mb-4"
            style={{
              fontSize: "1rem",
              fontWeight: 400,
            }}
          >
            (6 arvostelua)
          </div>
          <div
            className="col-6 d-flex justify-content-start align-items-center ps-4"
            style={{
              fontSize: "1rem",
              fontWeight: 400,
            }}
          >
            Siisteys
          </div>
          <div
            className="col-6 d-flex justify-content-end align-items-center pe-5 mb-1"
          >
            {renderList(rating?.tidiness)}{'\xa0'}{rating?.tidiness}
          </div>
          <div
            className="col-6 d-flex justify-content-start align-items-center ps-4 mb-1"
            style={{
              fontSize: "1rem",
              fontWeight: 400,
            }}
          >
            Kunto
          </div>
          <div
            className="col-6 d-flex justify-content-end align-items-center pe-5 mb-1"
          >
            {renderList(rating?.condition)}{'\xa0'}{rating?.condition}
          </div>
          <div
            className="col-6 d-flex justify-content-start align-items-center ps-4 mb-1"
            style={{
              fontSize: "1rem",
              fontWeight: 400,
            }}
          >
            Varustelu
          </div>
          <div
            className="col-6 d-flex justify-content-end align-items-center pe-5 mb-1"
          >
            {renderList(rating?.furnishing)}{'\xa0'}{rating?.furnishing}
          </div>
          <div
            className="col-6 d-flex justify-content-start align-items-center ps-4 mb-1"
            style={{
              fontSize: "1rem",
              fontWeight: 400,
            }}
          >
            Sijainti
          </div>
          <div
            className="col-6 d-flex justify-content-end align-items-center pe-5 mb-1"
          >
            {renderList(rating?.location)}{'\xa0'}{rating?.location}
          </div>
          <div
            className="col-6 d-flex justify-content-start align-items-center ps-4 mb-1"
            style={{
              fontSize: "1rem",
              fontWeight: 400,
            }}
          >
            Luotettavuus
          </div>
          <div
            className="col-6 d-flex justify-content-end align-items-center pe-5 mb-1"
          >
            {renderList(rating?.reliability)}{'\xa0'}{rating?.reliability}
          </div>
        </div>
        <div
          className="col-12"
          style={{ marginTop: "17.5rem" }}
        >
          <iframe
            title="map"
            width="100%"
            height="450px"
            loading="lazy"
            allowFullscreen=""
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?q=${65.045490},${25.352965}&key=AIzaSyBNybM4XtlOILBxKTD6oxYhwML8cA1SQpI`} />
        </div>
      </div>
    </div>
  )
}