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
    <>
      <NavigationBody>
        {/* <Navigation className={isActive ? "hide" : "show"}> */}
        <NavigationLogo >
          adad
          {/* <NavigationLink className="user" onClick={() => setIsActive("")} /> */}
        </NavigationLogo >
        <NavigationContainer>
          {
            Object.keys(navData).reverse().map((type) => {
              if (type === "language") {
                return (
                  <NavigationList key={type}>
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
                  <div key={type} style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", height: "100%" }}>
                    {
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
                    }
                  </div>
                )
              }
              if (type === "link") {
                return (
                  <NavigationList key={type} marginleft={"auto"}>
                    {
                      Object.keys(navData[type]).map((item) => {
                        return (
                          Object.keys(navData[type][item]).map((child) => {
                            if (child === language) {
                              if (item !== 0) {
                                return (
                                  <NavigationLink key={item} style={{ display: "inline", padding: "20px 20px" }}>
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
        </NavigationContainer>
      </NavigationBody >
    </>
  )
}