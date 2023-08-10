import React from "react";
//import { Link, Route, Routes } from "react-router-dom"
import { BodyBackground } from "./styles/BaseStyle"
import NavigationModule from "./modules/NavigationModule";
import { SearchBarModule } from './modules/SearchBarModule';
import cabin_01 from "../src/images/cabin_05.jpg";
import cabin_02 from "../src/images/cabin_08.jpg";
import cabin_03 from "../src/images/cabin_10.jpg";
import cabin_04 from "../src/images/cabin_07.jpg";
import cabin_05 from "../src/images/cabin_06.jpg";
import cabin_06 from "../src/images/cabin_11.jpg";
import icon_persons from "../src/images/icon_persons.png";
import { colors } from "./styles/Colors";

function App() {

  return (
    <BodyBackground>
      <NavigationModule />
      <SearchBarModule />

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
        <div class="row d-flex justify-content-center align-items-center m-0 bg-light">

          <div
            class="row row-cols-3 g-4"
            style={{ width: "80%" }}
          >
            <div class="row col px-4 py-5">
              <img
                src={cabin_01}
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
    </BodyBackground>
  );
}

export default App;