import React from "react";
//import { Link, Route, Routes } from "react-router-dom"
import { BodyBackground } from "./styles/BaseStyle"
import NavigationModule from "./modules/NavigationModule";
import { SearchBarModule } from './modules/SearchBarModule';
import cabin_01 from "../src/images/cabin_05.jpg";
import cabin_02 from "../src/images/cabin_08.jpg";

function App() {

  return (
    <BodyBackground>
      <NavigationModule />
      <SearchBarModule />

      <main>
        <section class="py-5 text-center container">
          <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="fw-light">Album example</h1>
              <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
              <p>
                <a href="#" class="btn btn-primary my-2">Main call to action</a>
                <a href="#" class="btn btn-secondary my-2">Secondary action</a>
              </p>
            </div>
          </div>
        </section>

        <div class="row d-flex justify-content-center align-items-center m-0 py-5 bg-light">
          <div class="row col-3 g-5">
            <img
              src={cabin_01}
              alt="Logo"
              style={{ objectFit: "cover", width: "100%", height: "300px", }}
            />
            <p
              className="col-6 mt-2"
              style={{ fontSize: "1.5rem", fontWeight: 400 }}
            >
              Ekin Mesta
            </p>
            <p className="col-6">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            {/*               <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div> */}

          </div>
          <div class="row col-3 g-5">
            <img
              src={cabin_02}
              alt="Logo"
              style={{ objectFit: "cover", width: "100%", height: "300px", }}
            />
            <p
              className="col-6 mt-2"
              style={{ fontSize: "1.5rem", fontWeight: 400 }}
            >
              Ekin Mesta
            </p>
            <p className="col-6">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            {/*               <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div> */}

          </div>
        </div>

      </main>
    </BodyBackground>
  );
}

export default App;