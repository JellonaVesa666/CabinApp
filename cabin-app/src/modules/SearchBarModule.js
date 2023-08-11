import React, { useState } from "react";
import { ModalModule } from "./ModalModule"
import { ChangeState } from "../helpers/HelperFunctions";
import { Input } from "./InputModules";
import { SearchBar } from "../styles/SearchBarStyle";
import { searchParameters } from "../mockup/searchFilterData";
import { colors } from "../styles/Colors";
import { useSelector } from "react-redux";
import filterBlack from "../images/icon_filter_black.png"

export const SearchBarModule = (props) => {
  const language = useSelector(state => state.session.language);

  // TODO: Implement multiselect and option

  /*   const dynamicFilters2 = Object.keys(searchFilters).foreach(item => {
      if (searchFilters[item].isActive)
        return (
          <FilterList
            key={Object.keys(searchFilters).indexOf(item)}
            className={searchFilters[item].dropdown ? "h-auto col-12 row m-0 p-0" : "h-auto col-12 row m-0 p-0"}
          >
            <FilterCard className="col-12 row mx-0 p-0">
              <div className="col-1 py-2 " onClick={() => ChangeState(setSearchFilters, false, "isActive", item)}>
                {-}
              </div>
              <CardLabel className=" py-2 col-6">
                {searchFilters[item]?.info?.[language]}
              </CardLabel>
              <div
                className="d-flex col-5 py-2 justify-content-end"
                onClick={() => ChangeState(setSearchFilters, !searchFilters[item].dropdown, "dropdown", item)}
              >
                {searchFilters[item].dropdown ? <>&#9650;</> : <>&#x25BC;</>}
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
                </>
              }
            </FilterCard>
          </FilterList>
        )
    }) */

  // Static filter items
  const staticFilters = Object.keys(props.searchFilters).map(item => {

    if (props.searchFilters[item].static) {
      return (
        <div key={item}>
          {props.searchFilters[item].type === "text" &&
            props.searchFilters[item].context === "field" &&
            !props.searchFilters[item].modal &&
            < Input
              type={props.searchFilters[item].type}
              width={"200px"}
              height={"40px"}
              radius={"0px"}
              border={"none"}
              i={item}
              data={props.searchFilters}
              placeholder={props.searchFilters[item].placeholder[language]}
              value={props.searchFilters[item].value}
              changeState={(value) => ChangeState(props.SetSearchFilters, value, "value", item)}
            />
          }
          {props.searchFilters[item].type === "button" &&
            props.searchFilters[item].context === "date" &&
            props.searchFilters[item].modal &&
            <Input
              id={"modalBtn"}
              type={props.searchFilters[item].type}
              width={"240px"}
              height={"40px"}
              radius={"0px"}
              border={"none"}
              i={item}
              data={props.searchFilters}
              value={(props.searchFilters?.[item]?.value[0] === "" && props.searchFilters?.[item]?.value[1] === "") ?
                `${props.searchFilters?.[item]?.defaultValue?.[0]?.["dayName"]?.[language] + '\x20' +
                props.searchFilters?.[item]?.defaultValue?.[0]?.["day"] + '\x20' +
                props.searchFilters?.[item]?.defaultValue?.[0]?.["monthName"]?.[language] + ' - ' +
                props.searchFilters?.[item]?.defaultValue?.[1]?.["dayName"]?.[language] + '\x20' +
                props.searchFilters?.[item]?.defaultValue?.[1]?.["day"] + '\x20' +
                props.searchFilters?.[item]?.defaultValue?.[1]?.["monthName"]?.[language]
                }`
                :
                `${props.searchFilters?.[item]?.value?.[0]?.["dayName"]?.[language] + '\x20' +
                props.searchFilters?.[item]?.value?.[0]?.["day"] + '\x20' +
                props.searchFilters?.[item]?.value?.[0]?.["monthName"]?.[language] + ' - ' +
                props.searchFilters?.[item]?.value?.[1]?.["dayName"]?.[language] + '\x20' +
                props.searchFilters?.[item]?.value?.[1]?.["day"] + '\x20' +
                props.searchFilters?.[item]?.value?.[1]?.["monthName"]?.[language]
                }`


              }
              onClick={() => props.toggleModal(item)}
            />
          }
          {props.searchFilters[item].type === "button" &&
            props.searchFilters[item].context === "counter" &&
            props.searchFilters[item].modal &&
            <Input
              id={"modalBtn"}
              type={props.searchFilters[item].type}
              width={"240px"}
              height={"40px"}
              radius={"0px"}
              border={"none"}
              i={item}
              data={props.searchFilters}
              value={`${props.searchFilters[item][0].value} ${props.searchFilters[item][0][language]} ${"\uD83D\uDF84"} ${props.searchFilters[item][1].value} ${props.searchFilters[item][1][language]}`}
              changeState={(value) => ChangeState(props.SetSearchFilters, value, "value", item)}
              onClick={() => props.toggleModal(item)}
            />
          }
        </div>
      )
    }
    return null;
  })

  return (
    <SearchBar>
      <div
        className="d-flex justify-content-center align-items-center gap-2 p-1 mt-auto"
        style={{ width: "auto", backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        {/* Filters - Static Filters */}
        {staticFilters}

        {/* Button - Search */}
        <input
          type="button"
          value={"hae"}
          className="text-uppercase d-flex justify-content-center align-items-center"
          style={{ color: colors.white, outline: "none", border: "none", fontWeight: 500, backgroundColor: colors.navy, width: "100px", height: "40px" }}
        />

        {/* Button - Advanced Filters */}
        <input
          id="modalBtn"
          type="image"
          alt=""
          aria-label=""
          src={filterBlack}
          className="text-uppercase d-flex justify-content-center align-items-center"
          style={{ width: "40px", height: "40px", backgroundColor: colors.white }}
          onClick={() => props.toggleModal("advanced")}
        />
      </div>
    </SearchBar >
  )
}