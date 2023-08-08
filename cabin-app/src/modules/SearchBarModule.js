import React, { useState } from "react";
import { ModalModule } from "./ModalModule"
import { ChangeState } from "../helpers/HelperFunctions";
import { OptionSelect, MultiSelect, Counter, Input } from "./InputModules";
import { FilterList, FilterCard, CardLabel, SearchBar } from "../styles/SearchBarStyle";
import { searchParameters } from "../mockup/searchFilterData";
import { colors } from "../styles/Colors";
import { useSelector } from "react-redux";
import filterBlack from "../images/icon_filter_black.png"

export const SearchBarModule = () => {
  const language = useSelector(state => state.session.language);

  const [modalActive, setModalActive] = useState(false);
  const [searchFilters, setSearchFilters] = useState(searchParameters);
  const [selectedFilter, setSelectedFilter] = useState("");

  const dynamicFilters2 = Object.keys(searchFilters).map(item => {
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
              {searchFilters[item]?.info?.[language]}
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
              </>
            }
          </FilterCard>
        </FilterList>
      )
  })

  // Static filter items
  const staticFilters = Object.keys(searchFilters).map(item => {

    if (searchFilters[item].static) {
      return (
        <>
          {searchFilters[item].type === "text" &&
            searchFilters[item].context === "field" &&
            !searchFilters[item].modal &&
            < Input
              type={searchFilters[item].type}
              width={"200px"}
              height={"40px"}
              radius={"0px"}
              border={"none"}
              i={item}
              data={searchFilters}
              placeholder={searchFilters[item].placeholder[language]}
              value={searchFilters[item].value}
              changeState={(value) => ChangeState(setSearchFilters, value, "value", item)}
            />
          }
          {searchFilters[item].type === "button" &&
            searchFilters[item].context === "date" &&
            searchFilters[item].modal &&
            <Input
              type={searchFilters[item].type}
              width={"220px"}
              height={"40px"}
              radius={"0px"}
              border={"none"}
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
              onClick={() => OpenModal(item)}
            />
          }
          {searchFilters[item].type === "button" &&
            searchFilters[item].context === "counter" &&
            searchFilters[item].modal &&
            <Input
              type={searchFilters[item].type}
              width={"200px"}
              height={"40px"}
              radius={"0px"}
              border={"none"}
              i={item}
              data={searchFilters}
              value={`${searchFilters[item][0].value} ${searchFilters[item][0][language]} ${"\uD83D\uDF84"} ${searchFilters[item][1].value} ${searchFilters[item][1][language]}`}
              changeState={(value) => ChangeState(setSearchFilters, value, "value", item)}
              onClick={() => OpenModal(item)}
            />
          }
        </>
      )
    }
  })

  const OpenModal = (item) => {
    setModalActive(!modalActive);
    setSelectedFilter(item);
  }

  return (
    <>

      {/* Modal Component */}
      {modalActive &&
        <ModalModule
          filter={selectedFilter}
          searchFilters={searchFilters}
          SetSearchFilters={setSearchFilters}
          SetModalActive={setModalActive}
          searchParameters={searchParameters}
        />
      }

      {/* Searchbar */}
      <SearchBar>
        <div
          className="d-flex justify-content-center align-items-center gap-2 bg-warning py-1 px-1 mt-4"
          style={{ width: "auto" }}
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
            type="image"
            src={filterBlack}
            className="text-uppercase d-flex justify-content-center align-items-center"
            style={{ width: "40px", height: "40px", backgroundColor: colors.white }}
            onClick={() => OpenModal("dynamic")}
          />
        </div>
      </SearchBar >
    </>
  )
}