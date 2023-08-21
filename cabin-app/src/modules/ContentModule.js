import React from "react";
import { ENDPOINTS, createAPIEndpoint } from "../api";
import cabin_01 from "../images/cabin_05.jpg";
import cabin_02 from "../images/cabin_08.jpg";
import cabin_03 from "../images/cabin_10.jpg";
import cabin_04 from "../images/cabin_07.jpg";
import cabin_05 from "../images/cabin_06.jpg";
import cabin_06 from "../images/cabin_11.jpg";
import icon_persons from "../images/icon_persons.png";
import iconBed from "../images/icon_bed.png";
import iconTub from "../images/icon_tub.png";
import { colors } from "../styles/Colors";
import { CabinPreview } from "../styles/ContentStyle";

export const ContentModule = (props) => {

  const GetCabins = () => {
    createAPIEndpoint(ENDPOINTS.cabin)
      .get()
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  return (
    <main>
      <section
        className="d-flex justify-content-center align-items-center m-0 p-0"
        style={{ height: "42vh" }}
      >
        <div class="row mb-auto py-3">
          <p
            className="my-0"
            style={{ color: colors.white, fontSize: "2rem", fontWeight: 400, textAlign: "center" }}
          >
            Search
          </p>
          <p
            className="my-0"
            style={{ color: colors.white, fontSize: "1rem", fontWeight: 400, textAlign: "center" }}
          >
            1025 CABINS
          </p>
        </div>
      </section>
      <section
        className="d-flex position-absolute justify-content-center align-items-center m-auto p-0"
        style={{ top: "73.25%", left: 0, right: 0 }}
      >
        <div
          className="row row-cols-2"
          style={{ width: "76%", paddingTop: "5rem" }}
        >

          <div class="col px-4">
            <div
              className="position-relative d-flex"
            >
              <img
                src={cabin_01}
                alt="Logo"
                style={{ objectFit: "cover", width: "100%", height: "300px" }}
              />
              <CabinPreview>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ border: "0.2rem solid white", width: "20%", borderRadius: "0.5rem", height: "20%" }}
                  onClick={() => props.SetModalState("preview")}
                >
                  <p
                    style={{ color: "white", textAlign: "center", margin: "auto" }}
                  >
                    KATSELE
                  </p>
                </div>
              </CabinPreview>
            </div>
            <div className="row mt-2">
              <div
                className="col-8"
              >
                <p
                  className="col-12 m-0 p-0"
                  style={{ fontSize: "1.5rem", fontWeight: 400 }}
                >
                  Ekin Mesta
                </p>
                <p
                  className="col-12 m-0 p-0"
                  style={{ fontSize: "1rem", fontWeight: 400 }}
                >
                  Pohjois-Suomi / Oulu, Pohjois-Pohjanmaa
                </p>
              </div>
              <div
                className="row col-4 d-flex justify-content-center align-items-center mt-3"
              >
                <p
                  className="col-12 m-0 p-0"
                  style={{ fontSize: "1rem", fontWeight: 400, textAlign: "right" }}
                >
                  &#11088; 4.9
                </p>
                <p
                  className="col-12 m-0 p-0"
                  style={{ fontSize: "1rem", fontWeight: 400, textAlign: "right" }}
                >
                  Alkaen 500€ / vrk
                </p>
              </div>
              <div
                className="col-12 d-flex mt-2"
              >
                <div
                  className="col-8 d-flex justify-content-start align-items-center"
                >
                  <img
                    src={icon_persons}
                    alt="Logo"
                    style={{ objectFit: "cover", width: "32px", height: "100%", }}
                  />
                  <p
                    className="my-auto px-2"
                  >
                    4 + 2
                  </p>
                  <img
                    src={iconBed}
                    alt="Logo"
                    style={{ objectFit: "cover", width: "32px", height: "100%", }}
                  />
                  <p
                    className="my-auto px-2"
                  >
                    3
                  </p>
                  <img
                    src={iconTub}
                    alt="Logo"
                    style={{ objectFit: "cover", width: "32px", height: "100%", }}
                  />
                  <p
                    className="my-auto px-2"
                  >
                    2
                  </p>
                </div>
                <div
                  className="col-4 d-flex justify-content-end align-items-center"
                >
                  <input type="button" name="" value="VARAA" />
                </div>
              </div>
            </div>
          </div>
          <div class="col px-4">
            <div
              className="position-relative d-flex"
            >
              <img
                src={cabin_02}
                alt="Logo"
                style={{ objectFit: "cover", width: "100%", height: "300px" }}
              />
              <CabinPreview>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ border: "0.2rem solid white", width: "20%", borderRadius: "0.5rem", height: "20%" }}
                  onClick={() => props.SetModalState("preview")}
                >
                  <p
                    style={{ color: "white", textAlign: "center", margin: "auto" }}
                  >
                    KATSELE
                  </p>
                </div>
              </CabinPreview>
            </div>
            <div className="row mt-2">
              <div
                className="col-8"
              >
                <p
                  className="col-12 m-0 p-0"
                  style={{ fontSize: "1.5rem", fontWeight: 400 }}
                >
                  Ekin Mesta
                </p>
                <p
                  className="col-12 m-0 p-0"
                  style={{ fontSize: "1rem", fontWeight: 400 }}
                >
                  Pohjois-Suomi / Oulu, Pohjois-Pohjanmaa
                </p>
              </div>
              <div
                className="row col-4 d-flex justify-content-center align-items-center mt-3"
              >
                <p
                  className="col-12 m-0 p-0"
                  style={{ fontSize: "1rem", fontWeight: 400, textAlign: "right" }}
                >
                  &#11088; 4.9
                </p>
                <p
                  className="col-12 m-0 p-0"
                  style={{ fontSize: "1rem", fontWeight: 400, textAlign: "right" }}
                >
                  Alkaen 500€
                </p>
              </div>
              <div
                className="col-12 d-flex mt-2"
              >
                <div
                  className="col-8 d-flex justify-content-start align-items-center"
                >
                  <img
                    src={icon_persons}
                    alt="Logo"
                    style={{ objectFit: "cover", width: "32px", height: "100%", }}
                  />
                  <p
                    className="my-auto px-2"
                  >
                    4 + 2
                  </p>
                  <img
                    src={iconBed}
                    alt="Logo"
                    style={{ objectFit: "cover", width: "32px", height: "100%", }}
                  />
                  <p
                    className="my-auto px-2"
                  >
                    3
                  </p>
                  <img
                    src={iconTub}
                    alt="Logo"
                    style={{ objectFit: "cover", width: "32px", height: "100%", }}
                  />
                  <p
                    className="my-auto px-2"
                  >
                    2
                  </p>
                </div>
                <div
                  className="col-4 d-flex justify-content-end align-items-center"
                >
                  <input type="button" name="" value="VARAA" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}