import React, { useState } from "react";
import { cabinData } from "../mockup/cabinData";
import { colors } from "../styles/Colors";

export const CabinCardModule = () => {
  const [previewImage, setPreviewImage] = useState(0);

  return (
    <div className="row col-12 d-flex justify-content-center align-items-center bg-danger">
      <div className="col-7 bg-info">
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
            style={{ fontSize: "1rem", fontWeight: 400, textAlign: "right" }}
          >
            Alkaen 500€ / vrk
          </p>
        </div>
      </div>
      <div className="col-5 bg-info">
        adadad
      </div>
      <div
        className="col-7 d-flex justify-content-center align-items-center"
        style={{ backgroundColor: colors.grey }}
      >
        {Object.keys(cabinData["images"]).map((item) => {
          console.log(cabinData["images"][item].src);
          return (
            <>
              <img
                key={item}
                src={require('../images/icon_preview.png')}
                alt=""
                style={{ objectFit: "cover", width: "600px", height: "100%", display: previewImage === Number(item) ? "flex" : "none" }}
              />
              {previewImage}
            </>
          )
        })}
      </div>
      <div
        className="col-5"
      >
        adsad
      </div>
    </div>
  )
}