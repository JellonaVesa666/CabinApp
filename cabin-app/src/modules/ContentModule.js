import React, { useEffect } from "react";
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

export const ContentModule = () => {

  const GetCabins = () => {
    createAPIEndpoint(ENDPOINTS.cabin)
      .get()
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  useEffect(() => {
    //GetCabins();
  }, []);

  return (
    <main>
      <section
        class="py-3 text-center container"
        style={{ height: "540px" }}
      >
        <div class="row">
          <div class="col-lg-6 col-md-8 mx-auto">
            <p
              className="my-0"
              style={{ color: colors.white, fontSize: "2rem", fontWeight: 400 }}
            >
              Search
            </p>
            <p
              className="my-0"
              style={{ color: colors.white, fontSize: "1rem", fontWeight: 400 }}
            >
              1025 CABINS
            </p>
          </div>
        </div>
      </section>
      <div
        className="row d-flex justify-content-center align-items-center m-0 bg-light">
        <div
          className="row row-cols-2 g-4"
          style={{ width: "80%" }}
        >
          <div class="row col px-4 py-5">
            <div
              className="position-relative d-flex"
            >
              <img
                src={cabin_01}
                alt="Logo"
                style={{ objectFit: "cover", width: "100%", height: "300px" }}
              />
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ position: "absolute", top: "0", width: "calc(((100% - 1.5rem)", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              >
                <p
                  style={{ color: "white" }}
                >
                  KATSELE
                </p>
              </div>
            </div>
            <div
              className="col-8 mt-2"
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
          <div class="row col px-4 py-5">
            <img
              src={cabin_02}
              alt="Logo"
              style={{ objectFit: "cover", width: "100%", height: "300px", }}
            />
            <div
              className="col-8 mt-2"
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
          </div>
          <div class="row col px-4 py-5">
            <img
              src={cabin_03}
              alt="Logo"
              style={{ objectFit: "cover", width: "100%", height: "300px", }}
            />
            <div
              className="col-8 mt-2"
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
          </div>


          <div class="row col px-4 py-5">
            <img
              src={cabin_04}
              alt="Logo"
              style={{ objectFit: "cover", width: "100%", height: "300px", }}
            />
            <div
              className="col-8 mt-2"
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
          </div>
          <div class="row col px-4 py-5">
            <img
              src={cabin_05}
              alt="Logo"
              style={{ objectFit: "cover", width: "100%", height: "300px", }}
            />
            <div
              className="col-8 mt-2"
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
                className="col-2 d-flex justify-content-start align-items-center"
              >
                <img
                  src={icon_persons}
                  alt="Logo"
                  style={{ objectFit: "cover", width: "30px", height: "100%", }}
                />
                <p
                  className="m-auto"
                >
                  4 + 2
                </p>
              </div>
              <div
                className="col-2 d-flex justify-content-start align-items-center"
              >
                <img
                  src={icon_persons}
                  alt="Logo"
                  style={{ objectFit: "cover", width: "30px", height: "100%", }}
                />
                <p
                  className="m-auto"
                >
                  4 + 2
                </p>
              </div>
              <div
                className="col-2 d-flex justify-content-start align-items-center"
              >
                <img
                  src={icon_persons}
                  alt="Logo"
                  style={{ objectFit: "cover", width: "30px", height: "100%", }}
                />
                <p
                  className="m-auto"
                >
                  4 + 2
                </p>
              </div>
            </div>
          </div>
          <div class="row col px-4 py-5">
            <img
              src={cabin_06}
              alt="Logo"
              style={{ objectFit: "cover", width: "100%", height: "300px", }}
            />
            <div
              className="col-8 mt-2"
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
                className="col-2 d-flex justify-content-start align-items-center"
              >
                <img
                  src={icon_persons}
                  alt="Logo"
                  style={{ objectFit: "cover", width: "30px", height: "100%", }}
                />
                <p
                  className="m-auto"
                >
                  4 + 2
                </p>
              </div>
              <div
                className="col-2 d-flex justify-content-start align-items-center"
              >
                <img
                  src={icon_persons}
                  alt="Logo"
                  style={{ objectFit: "cover", width: "30px", height: "100%", }}
                />
                <p
                  className="m-auto"
                >
                  4 + 2
                </p>
              </div>
              <div
                className="col-2 d-flex justify-content-start align-items-center"
              >
                <img
                  src={icon_persons}
                  alt="Logo"
                  style={{ objectFit: "cover", width: "30px", height: "100%", }}
                />
                <p
                  className="m-auto"
                >
                  4 + 2
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </main>
  )
}