import React, { useState, useEffect } from "react";
import { NavigationBody, NavigationContainer, NavigationLink, NavigationList, NavigationAnchor, NavigationLogo } from "../styles/NavigationStyle";
import { navigationData } from "../mockup/navigationData";
import { ButtonInput } from "../styles/InputStyle";

export default function NavigationComponent() {

  const [navData, setNavData] = useState(navigationData);
  const [language, setLanguage] = useState();

  useEffect(() => {
    Object.keys(navData.language).forEach(item => {
      if (navData.language[item].isActive === "true") {
        setLanguage(item);
      }
    })
  }, [navData.language]);

  return (
    <NavigationBody>
      <NavigationContainer>
        <NavigationLogo >
          Navbar
        </NavigationLogo >
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse flex-grow-1 text-right" id="navbarSupportedContent">
          {
            Object.keys(navData).reverse().map((type) => {
              if (type === "language") {
                return (
                  <NavigationList key={type} className="ms-0">
                    {
                      Object.keys(navData[type]).map((item) => {
                        if (item === language)
                          return (
                            <NavigationLink key={item}>
                              <NavigationAnchor href="">{item.toUpperCase()}</NavigationAnchor>
                            </NavigationLink >
                          )
                      })
                    }
                  </NavigationList>
                )
              }
              if (type === "button") {
                return (
                  Object.keys(navData[type]).map((item) => {
                    return (
                      Object.keys(navData[type][item]).map((child) => {
                        if (child === language) {
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
                            if (child === language) {
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
      </NavigationContainer>
    </NavigationBody >
  )
}