import React, { useState } from "react";
import { cabinData, cabinFeatures } from "../mockup/cabinData";
import checked from "../images/icon_checked.png";
import restricted from "../images/icon_restricted.png";

export const CabinCardModule = () => {
  const [previewImage, setPreviewImage] = useState(0);

  return (
    <div className="col-12 d-flex justify-content-center align-items-center">
      <div className="row col-7 d-flex justify-content-center align-items-center m-0 p-0">
        <div className="row mt-2">
          <p
            className="col-12 m-0 p-0"
            style={{ fontSize: "1.5rem", fontWeight: 400 }}
          >
            Ekin Mesta
          </p>
          <p
            className="col-12 d-flex justify-content-start align-items-center m-0 p-0"
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
        </div>
        {previewImage}
        <div
          className="d-flex justify-content-start align-items-center m-0 p-0"
          style={{ fontSize: "1.4rem", width: "10%" }}
        >
          <div
            className="d-flex justify-content-center align-items-center bg-success"
            style={{ fontSize: "1.4rem", width: "50%", color: "white" }}
            onClick={() => (previewImage >= 1 ? setPreviewImage(previewImage - 1) : 0)}
          >
            {"<"}
          </div>
        </div>
        <div
          className="d-flex justify-content-center align-items-center m-0 p-0 bg-light"
          style={{ width: "80%" }}
        >
          {Object.keys(cabinData["images"]).map((item) => {
            return (
              <img
                key={item}
                src={require('../images/icon_preview.png')}
                alt=""
                style={{ objectFit: "cover", width: "100%", height: "100%", display: previewImage === Number(item) ? "flex" : "none" }}
              />
            )
          })}
        </div>
        <div
          className="d-flex justify-content-end align-items-center m-0 p-0"
          style={{ fontSize: "1.4rem", width: "10%" }}
        >
          <div
            className="d-flex justify-content-center align-items-center bg-success"
            style={{ fontSize: "1.4rem", width: "50%", color: "white" }}
            onClick={() => (previewImage + 7) <= Object.keys(cabinData["images"]).length ? setPreviewImage(previewImage + 1) : ""}
          >
            {">"}
          </div>
        </div>
        <div className="row row-cols-6 d-flex justify-content-center align-items-center m-0 mt-3 p-0">
          {Object.keys(cabinData["images"]).map((item) => {
            return (
              <div
                className="col"
                style={{ display: (Number(item) >= previewImage && Number(item) <= previewImage + 5) ? "flex" : "none" }}
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
            style={{ fontSize: "1.2rem", fontWeight: 500, letterSpacing: "2px" }}
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
            style={{ fontSize: "1rem", fontWeight: 500 }}
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
            style={{ fontSize: "1rem", fontWeight: 500 }}
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
            style={{ fontSize: "1rem", fontWeight: 500 }}
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
            style={{ fontSize: "1rem", fontWeight: 500 }}
          >
            1
          </p>
          <p
            className="col-12 mt-3"
            style={{ fontSize: "1.2rem", fontWeight: 500, letterSpacing: "2px" }}
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
            style={{ fontSize: "1rem", fontWeight: 500 }}
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
            style={{ fontSize: "1rem", fontWeight: 500 }}
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
            style={{ fontSize: "1rem", fontWeight: 500 }}
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
            style={{ fontSize: "1rem", fontWeight: 500 }}
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
            style={{ fontSize: "1rem", fontWeight: 500 }}
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
            style={{ fontSize: "1rem", fontWeight: 500 }}
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
                    className="col d-flex"
                  >
                    <img
                      src={cabinData["features"].includes(Number(item)) ? checked : restricted}
                      alt=""
                      style={{ objectFit: "cover", width: "26px", height: "100%" }}
                    />
                    <p
                      className="px-3"
                      style={{ fontSize: "1", fontWeight: 400, textAlign: "center" }}
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
        className="col-5"
      >
        adsad
      </div>
    </div >
  )
}