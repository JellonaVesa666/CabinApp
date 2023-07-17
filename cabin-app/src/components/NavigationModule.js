import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavbarBody, NavbarAnchor, NavbarLogo, NavbarDropdownItem, NavbarDropdown } from "../styles/NavigationStyle";
import { navigationData } from "../mockup/navigationData";
import { ButtonInput } from "../styles/InputStyle";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../reducers/sessionReducer";

export default function NavigationModule() {

  // TODO: Implement reducer usage through App.js
  const session = useSelector(state => state.session);
  const dispatch = useDispatch();

  const [navData, setNavData] = useState(navigationData);
  const navigate = useNavigate();

  const test = () => {
    console.log("test");
    navigate("/search")
  }

  return (
    <NavbarBody
      className="navbar navbar-expand-lg"
    >
      <NavbarLogo onClick={() => navigate("/")}>
        <img />
      </NavbarLogo>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse flex-grow-1 text-right" id="navbarSupportedContent">
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
    </NavbarBody>
  )
}