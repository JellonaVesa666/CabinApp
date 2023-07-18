import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavbarAnchor, NavbarLogo, NavbarDropdownItem, NavbarDropdown } from "../styles/NavigationStyle";
import { navigationData } from "../mockup/navigationData";
import { ButtonInput } from "../styles/InputStyle";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../reducers/sessionReducer";
import { colors } from "../styles/Colors";

export default function NavigationModule() {

  // TODO: Implement reducer usage through App.js
  const session = useSelector(state => state.session);
  const dispatch = useDispatch();

  const [navData, setNavData] = useState(navigationData);
  const navigate = useNavigate();

  return (
    <div
      className="navbar sticky-top flex-md-nowrap shadow navbar-expand-lg"
      style={{ height: "60px", backgroundColor: colors.white }}
    >
      <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Company name</a>
      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navbarCollapse">
        {
          Object.keys(navData).reverse().map((type) => {
            if (type === "language") {
              return (
                <div className="dropdown mx-4">
                  <button className="btn dropdown-toggle border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {session.language.toUpperCase()}
                  </button>
                  <NavbarDropdown className="dropdown-menu" key={type}>
                    {
                      Object.keys(navData[type]).map((item) => {
                        if (item !== session.language)
                          return (
                            <li key={item}>
                              <NavbarDropdownItem defaultValue={item.toUpperCase()} className="dropdown-item" id={item} onClick={(event) => dispatch(changeLanguage(event.target.id))}>
                                {item.toUpperCase()}
                              </NavbarDropdownItem>
                            </li >
                          )
                      })
                    }
                  </NavbarDropdown>
                </div>
              )
            }
            if (type === "button") {
              return (
                Object.keys(navData[type]).map((item) => {
                  return (
                    Object.keys(navData[type][item]).map((child) => {
                      if (child === session.language) {
                        return (
                          <ButtonInput id={navData[type][item].route} onClick={(event) => navigate(event.target.id)} key={item}>
                            {navData[type][item][child].name.toUpperCase()}
                          </ButtonInput>
                        )
                      }
                    })
                  )
                })
              )
            }
            if (type === "link") {
              return (
                <ul key={type} className="ms-auto navbar-nav flex-nowrap">
                  {
                    Object.keys(navData[type]).map((item) => {
                      return (
                        Object.keys(navData[type][item]).map((child) => {
                          if (child === session.language) {
                            if (item !== 0) {
                              return (
                                <li className="nav-item" id={navData[type][item].route} onClick={(event) => navigate(event.target.id)} key={item}>
                                  <NavbarAnchor className="nav-link my-2 mx-4 menu-item" href="">{navData[type][item][child].name.toUpperCase()}</NavbarAnchor>
                                </li >
                              )
                            }
                          }
                        })
                      )
                    })
                  }
                </ul>
              )
            }
          })
        }
      </div>
    </div>
  )
}