import React from "react";
import { useNavigate } from "react-router-dom";
import { NavbarAnchor, NavbarDropdownItem, NavbarDropdown } from "../styles/NavigationStyle";
import { navigationData } from "../mockup/navigationData";
import { ButtonInput } from "../styles/InputStyle";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../reducers/sessionReducer";
import { colors } from "../styles/Colors";

export default function NavigationModule() {
  const language = useSelector(state => state.session.language);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <div
      className="navbar sticky-top flex-md-nowrap shadow navbar-expand-lg"
      style={{ height: "60px", backgroundColor: colors.white }}
    >
      <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Company name</a>
      <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbarCollapse">
        {
          Object.keys(navigationData).reverse().map(type => {
            if (type === "language") {
              return (
                <div key={Object.keys(navigationData).indexOf(type)} className="dropdown mx-4">
                  <button className="btn dropdown-toggle border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {language.toUpperCase()}
                  </button>
                  <NavbarDropdown className="dropdown-menu" key={type}>
                    {
                      Object.keys(navigationData[type]).map((item) => {
                        if (item !== language)
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
                Object.keys(navigationData[type]).map((item) => {
                  return (
                    Object.keys(navigationData[type][item]).map((child) => {
                      if (child === language) {
                        return (
                          <ButtonInput id={navigationData[type][item].route} onClick={(event) => navigate(event.target.id)} key={item}>
                            {navigationData[type][item][child].name.toUpperCase()}
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
                    Object.keys(navigationData[type]).map((item) => {
                      return (
                        Object.keys(navigationData[type][item]).map((child) => {
                          if (child === language) {
                            if (item !== 0) {
                              return (
                                <li className="nav-item" id={navigationData[type][item].route} onClick={(event) => navigate(event.target.id)} key={item}>
                                  <NavbarAnchor className="nav-link my-2 mx-4 menu-item" >{navigationData[type][item][child].name.toUpperCase()}</NavbarAnchor>
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