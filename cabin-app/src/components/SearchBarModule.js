import React, { useState } from "react";
import { Modal } from "./ModalComponent"
import { ChangeState, DayToInt, ValidateElement } from "../helpers/HelperFunctions";
import { RangeSlider, OptionSelect, MultiSelect, CheckBox, Counter, Input } from "./InputModules";
import { FilterList, FilterCard, CardLabel, SearchBar, SidebarCollapsed } from "../styles/SearchBarStyle";
import { searchParameters } from "../mockup/searchFilterData";
import { colors } from "../styles/Colors";
import { useSelector } from "react-redux";
import { dayNames, monthNames } from "../mockup/calendarData";

export const SearchBarModule = () => {
  const language = useSelector(state => state.session.language);

  const [modalActive, setModalActive] = useState(false);
  const [searchFilters, setSearchFilters] = useState(searchParameters);
  const [selectedFilter, setSelectedFilter] = useState("");

  const dynamicFilters = Object.keys(searchFilters).map(item => {
    if (searchFilters[item].isActive)
      return (
        <FilterList
          key={Object.keys(searchFilters).indexOf(item)}
          className={searchFilters[item].dropdown ? "h-auto col-12 row m-0 p-0" : "h-auto col-12 row m-0 p-0"}
        >
          <FilterCard className="col-12 row mx-0 p-0">
            <div className="col-1 py-2 " onClick={() => ChangeState(setSearchFilters, false, "isActive", item)}>
              {/* - */}
            </div>
            <CardLabel className=" py-2 col-6">
              {searchFilters[item]?.info?.[language]?.translation}
            </CardLabel>
            <div
              className="d-flex col-5 py-2 justify-content-end"
              onClick={() => ChangeState(setSearchFilters, !searchFilters[item].dropdown, "dropdown", item)}
            >
              {/* {searchFilters[item].dropdown ? <>&#9650;</> : <>&#x25BC;</>} */}
            </div>
            {
              searchFilters[item].dropdown &&
              <>
                {searchFilters[item].type === "multiSelect" &&
                  <MultiSelect
                    width={"75%"}
                    radius={"6px"}
                    data={searchFilters}
                    i={item}
                    changeState={(value, index) => ChangeState(setSearchFilters, !value, "value", item, index)}
                  />
                }
                {searchFilters[item].type === "option" &&
                  <>
                    <OptionSelect
                      width={"75%"}
                      radius={"6px"}
                      data={searchFilters}
                      i={item}
                      changeState={(event) => ChangeState(setSearchFilters, event.target.value, "value", item)}
                    />
                  </>
                }
                {searchFilters[item].type === "counter" &&
                  <Counter
                    data={searchFilters}
                    i={item}
                    changeState={(value, index) => ChangeState(setSearchFilters, value, "value", item, index)}
                  />
                }
                {searchFilters[item].type === "slider" &&
                  <RangeSlider
                    minDefault={searchFilters[item].minDefault}
                    maxDefault={searchFilters[item].maxDefault}
                    maxValue={searchFilters[item].maxValue}
                    minValue={searchFilters[item].minValue}
                    step={searchFilters[item].step}
                    changeState={(value, property) => ChangeState(setSearchFilters, value, property, item)}
                  />
                }
                {(() => {
                  if (searchFilters[item].type.split(/(?=[A-Z])/)[0] === "checkbox") {
                    if (searchFilters[item].type.split(/(?=[A-Z])/)[1] === "Multi") {
                      return (
                        <CheckBox
                          data={searchFilters}
                          i={item}
                          multi={true}
                          color={colors.green}
                          changeState={(value, index) => ChangeState(setSearchFilters, !value, "value", item, index)}
                        />
                      )
                    } else if (searchFilters[item].type.split(/(?=[A-Z])/)[1] === "Single") {
                      return (
                        <CheckBox
                          data={searchFilters}
                          i={item}
                          single={true}
                          color={colors.green}
                          changeState={(index) => ChangeState(setSearchFilters, index, "value", item)}
                        />
                      )
                    }
                  }
                })()}
              </>
            }
          </FilterCard>
        </FilterList>
      )
  })

  // Static filter items
  const staticFilters = Object.keys(searchFilters).map(item => {

    /*     let dateValue;
    
        if (searchFilters[item].type === "button" &&
          searchFilters[item].context === "date" &&
          searchFilters[item].modal) {
          if (searchFilters?.[item]?.value[0] === "" && searchFilters?.[item]?.value[1] === "") {
            dateValue = (`${searchFilters?.[item]?.defaultValue?.[0]?.["dayName"]?.[language] + '\x20' +
              searchFilters?.[item]?.defaultValue?.[0]?.["day"] + '\x20' +
              searchFilters?.[item]?.defaultValue?.[0]?.["monthName"]?.[language] + ' - ' +
              searchFilters?.[item]?.defaultValue?.[1]?.["dayName"]?.[language] + '\x20' +
              searchFilters?.[item]?.defaultValue?.[1]?.["day"] + '\x20' +
              searchFilters?.[item]?.defaultValue?.[1]?.["monthName"]?.[language]
              }`);
          }
          else if (searchFilters?.[item]?.value[0] === "" && searchFilters?.[item]?.value[1] !== "") {
            console.log("B")
            dateValue = (`${searchFilters?.[item]?.defaultValue?.[0]?.["dayName"]?.[language] + '\x20' +
              searchFilters?.[item]?.defaultValue?.[0]?.["day"] + '\x20' +
              searchFilters?.[item]?.defaultValue?.[0]?.["monthName"]?.[language] + ' - ' +
              searchFilters?.[item]?.value?.[1]?.["dayName"]?.[language] + '\x20' +
              searchFilters?.[item]?.value?.[1]?.["day"] + '\x20' +
              searchFilters?.[item]?.value?.[1]?.["monthName"]?.[language]
              }`);
          }
        }
     */
    //console.log(searchFilters);

    if (searchFilters[item].static) {
      return (
        <>
          {searchFilters[item].type === "text" &&
            searchFilters[item].context === "field" &&
            !searchFilters[item].modal &&
            < Input
              type={searchFilters[item].type}
              width={"15%"}
              height={"40px"}
              radius={"0px"}
              border={"none"}
              margintop={"3rem"}
              marginbottom={"0.5rem"}
              i={item}
              data={searchFilters}
              placeholder={searchFilters[item].placeholder[language].translation}
              value={searchFilters[item].value}
              changeState={(value) => ChangeState(setSearchFilters, value, "value", item)}
            />
          }
          {searchFilters[item].type === "button" &&
            searchFilters[item].context === "date" &&
            searchFilters[item].modal &&
            <Input
              type={searchFilters[item].type}
              width={"15%"}
              height={"40px"}
              radius={"0px"}
              border={"none"}
              margintop={"3rem"}
              marginbottom={"0.5rem"}
              i={item}
              data={searchFilters}
              value={(searchFilters?.[item]?.value[0] === "" && searchFilters?.[item]?.value[1] === "") ?
                `${searchFilters?.[item]?.defaultValue?.[0]?.["dayName"]?.[language] + '\x20' +
                searchFilters?.[item]?.defaultValue?.[0]?.["day"] + '\x20' +
                searchFilters?.[item]?.defaultValue?.[0]?.["monthName"]?.[language] + ' - ' +
                searchFilters?.[item]?.defaultValue?.[1]?.["dayName"]?.[language] + '\x20' +
                searchFilters?.[item]?.defaultValue?.[1]?.["day"] + '\x20' +
                searchFilters?.[item]?.defaultValue?.[1]?.["monthName"]?.[language]
                }`
                :
                `${searchFilters?.[item]?.value?.[0]?.["dayName"]?.[language] + '\x20' +
                searchFilters?.[item]?.value?.[0]?.["day"] + '\x20' +
                searchFilters?.[item]?.value?.[0]?.["monthName"]?.[language] + ' - ' +
                searchFilters?.[item]?.value?.[1]?.["dayName"]?.[language] + '\x20' +
                searchFilters?.[item]?.value?.[1]?.["day"] + '\x20' +
                searchFilters?.[item]?.value?.[1]?.["monthName"]?.[language]
                }`


              }
              onClick={() => SelectedFilter(searchFilters[item].type, searchFilters[item].context, searchFilters[item].modal, item)}
            />
          }
          {searchFilters[item].type === "counter" &&
            <Input
              type={searchFilters[item].type}
              width={"15%"}
              height={"40px"}
              radius={"0px"}
              border={"none"}
              margintop={"3rem"}
              marginbottom={"0.5rem"}
              i={item}
              data={searchFilters}
              value={"2 aikuista + 0 lasta"}
              changeState={(value) => ChangeState(setSearchFilters, value, "value", item)}
            />
            /*             <Counter
                          data={searchFilters}
                          i={item}
                          changeState={(value, index) => ChangeState(setSearchFilters, value, "value", item, index)}
                        /> */
          }
        </>
      )
    }
  })

  const SelectedFilter = (type, context, modal, item) => {
    if (type === "button") {
      if (context === "date") {
        if (modal === true) {
          setModalActive(!modalActive);
          setSelectedFilter(item);
          console.log(item);
        }
      }
    }
  }

  return (
    <>
      {modalActive &&
        <Modal
          filter={selectedFilter}
          searchFilters={searchFilters}
          closeModal={() => setModalActive(false)}
          changeState={(newValue, index) => ChangeState(setSearchFilters, newValue, index, "searchDate", "value")}
        />
      }
      <SearchBar>
        <div className="d-flex justify-content-center align-items-center gap-2" style={{ width: "60%" }}>
          {staticFilters}
          <input
            type="button"
            value={"hae"}
            className="text-uppercase d-flex justify-content-center align-items-center"
            style={{ color: colors.black, width: "10%", height: "40px" }}
          />
        </div>
      </SearchBar >
    </>
  )
}



{/*               <div
                className="d-flex justify-content-center align-items-center"
                onClick={() => setModalActive(!modalActive)}
                style={{ height: "40px", width: "40px", backgroundColor: "black", color: "white", fontSize: "12px", borderRadius: " 0px 10px 10px 0px" }}
              >
                &equiv;
              </div> */}
/* </div> */

{/* {dynamicFilters} */ }