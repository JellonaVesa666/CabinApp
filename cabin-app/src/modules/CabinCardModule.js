import React, { useState } from "react";
import { cabinData } from "../mockup/cabinData";
import { colors } from "../styles/Colors";
import { ChangeState } from "../helpers/HelperFunctions";

export const CabinCardModule = () => {
  const [previewImage, setPreviewImage] = useState(0);

  return (
    <div className="col-12 d-flex justify-content-center align-items-center">
      <div className="row col-7 d-flex justify-content-center align-items-center m-0 p-0 bg-info">
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
            &#11088; 4.9
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
            className="bg-light d-flex justify-content-center align-items-center"
            style={{ fontSize: "1.4rem", width: "50%" }}
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
            className="bg-light d-flex justify-content-center align-items-center"
            style={{ fontSize: "1.4rem", width: "50%" }}
            onClick={() =>  (previewImage + 7) <= Object.keys(cabinData["images"]).length ? setPreviewImage(previewImage + 1) : ""}
          >
            {">"}
          </div>
        </div>
        <div className="row row-cols-6 d-flex justify-content-center align-items-center m-0 p-0">
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
      </div>
      <div
        className="col-5"
      >
        adsad
      </div>
    </div >
  )
}