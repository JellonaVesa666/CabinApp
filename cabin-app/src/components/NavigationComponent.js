import React, { useState } from "react";
import { NavigationBody, NavigationContainer, NavigationLink, NavigationList, NavigationAnchor, NavigationLogo, NavigationDropdownItem, NavigationDropdown } from "../styles/NavigationStyle";
import { navigationData } from "../mockup/navigationData";
import { ButtonInput } from "../styles/InputStyle";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../reducers/sessionReducer";
import { colors } from "../styles/Colors";

export default function NavigationComponent() {

  // TODO: Implement reducer usage through App.js
  const session = useSelector(state => state.session);
  const dispatch = useDispatch();

  const [navData, setNavData] = useState(navigationData);

  return (
    <div
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: `${colors.white}`,
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px"
      }}
    >
      <NavigationLogo>
        <img />
      </NavigationLogo>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse flex-grow-1 text-right" id="navbarSupportedContent">
        {
          Object.keys(navData).reverse().map((type) => {
            if (type === "language") {
              return (
                <div className="dropdown">
                  <button className="btn dropdown-toggle border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {session.language.toUpperCase()}
                  </button>
                  <NavigationDropdown key={type}>
                    {
                      Object.keys(navData[type]).map((item) => {
                        if (item !== session.language)
                          return (
                            <li key={item}>
                              <NavigationDropdownItem id={item} onClick={(event) => dispatch(changeLanguage(event.target.id))}>{item.toUpperCase()}</NavigationDropdownItem>
                            </li >
                          )
                      })
                    }
                  </NavigationDropdown>
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
                          <ButtonInput key={item}>
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
                <NavigationList key={type} className="ms-auto">
                  {
                    Object.keys(navData[type]).map((item) => {
                      return (
                        Object.keys(navData[type][item]).map((child) => {
                          if (child === session.language) {
                            if (item !== 0) {
                              return (
                                <NavigationLink key={item}>
                                  <NavigationAnchor href="">{navData[type][item][child].name.toUpperCase()}</NavigationAnchor>
                                </NavigationLink >
                              )
                            }
                          }
                        })
                      )
                    })
                  }
                </NavigationList>
              )
            }
          })
        }
      </div>
    </div >
  )
}