import React from "react";
import { ChangeState } from "../helpers/HelperFunctions";
import { SearchBar } from "../styles/SearchBarStyle";
import { colors } from "../styles/Colors";
import { useSelector } from "react-redux";
import filterBlack from "../images/icon_filter_black.png"
import { InputStyle } from "../styles/InputStyle";

export const SearchBarModule = (props) => {
  const language = useSelector(state => state.session.language);

  // Static filter items
  const staticFilters = Object.keys(props.searchFilters).map(item => {

    if (props.searchFilters[item].static) {
      return (
        <div key={item}>
          {props.searchFilters[item].type === "text" &&
            props.searchFilters[item].context === "field" &&
            !props.searchFilters[item].modal &&
            < InputStyle
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
            < InputStyle
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
            <InputStyle
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