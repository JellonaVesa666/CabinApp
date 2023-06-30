import React from "react";
import { CardHeader } from "../styles/SearchCardStyle";
import { Slider, RangeInput, RangeValue, SliderBackground, DateInput, TextInput, OptionItem, MultiSelectInput } from "../styles/InputStyle"

export const RangeSlider = ({ minDefault, maxDefault, maxValue, minValue, step, changeState }) => {
  return (
    <Slider>
      <RangeInput
        type="range"
        min={minDefault}
        max={maxDefault}
        defaultValue={minValue}
        step={step}
        onMouseUp={(event) => changeState(Math.max(minDefault, Math.min(event.target.value, maxValue)), "minValue")}
      />
      <RangeInput
        type="range"
        min={minDefault}
        max={maxDefault}
        defaultValue={maxValue}
        step={step}
        onMouseUp={(event) => changeState(Math.max(minValue, Math.min(event.target.value, maxDefault)), "maxValue")}
      />
      <SliderBackground />
      <RangeValue>
        <input
          type="number"
          defaultValue={minValue}
          style={{ width: "25%", marginRight: "25%", marginTop: "5%", borderRadius: "10px" }}
          onChange={(event) => changeState(Math.max(minDefault, Math.min(event.target.value, maxValue)), "minValue")}
        />
        <input
          type="number"
          defaultValue={maxValue}
          style={{ width: "25%", marginLeft: "25%", marginTop: "5%", borderRadius: "10px" }}
          onChange={(event) => changeState(Math.max(minValue, Math.min(event.target.value, maxDefault)), "maxValue")}
        />
      </RangeValue>
    </Slider>
  );
};

export const DatePicker = () => {
  return (
    <>
      <CardHeader
        width={"90%"}
        margintop={"5%"}
        marginbottom={"1%"}
      >
        Arrival Date
      </CardHeader>
      <DateInput
        style={{
          paddingLeft: "2%"
        }}
        defaultValue={new Date().toISOString().slice(0, -8)}
        type="datetime-local"
      />
      <CardHeader
        width={"90%"}
        margintop={"5%"}
        marginbottom={"1%"}
      >
        Departure Date
      </CardHeader>
      <DateInput
        style={{
          marginBottom: "3%",
          paddingLeft: "2%"
        }}
        defaultValue={new Date().toISOString().slice(0, -8)}
        type="datetime-local"
      />
    </>
  )
}

export const OptionSelect = ({ filters, i, width, height, radius, padding, changeState }) => {
  return (
    <>
      {/*       <CardHeader
        width={"90%"}
        margintop={"5%"}
        marginbottom={"1%"}
      >
        {filters[i].name ? filters[i].name : i}
      </CardHeader> */}
      <OptionItem
        width={width}
        height={height}
        radius={radius}
        padding={padding}
        value={filters[i].selected}
        onChange={(event) => changeState(event)}
      >
        {
          Object.keys(filters[i]).map(index => {
            if (typeof index === "string" && !isNaN(index))
              return (
                <option
                  key={index}
                  value={filters[i][index].value}
                >
                  {filters[i][index].value}
                </option>
              )
          })
        }
      </OptionItem>
    </>
  )
}

export const MultiSelect = ({ filters, i, changeState }) => {
  return (
    <ul style={{ width: "100%", listStyleType: "none", margin: "0", padding: "0" }}>
      {
        Object.keys(filters[i]).map(index => {
          if (typeof index === "string" && !isNaN(index)) {
            return (
              <MultiSelectInput
                key={index}
                className={filters[i][index].selected === true ? "selected" : ""}
                margintop={"3%"}
                marginbottom={"3%"}
                paddingleft={"5%"}
                onClick={() => changeState(filters[i][index].selected, index)}
              >
                {filters[i][index].value}
              </MultiSelectInput>
            )
          }
        })}
    </ul>
  )
}

export const CheckBox = ({ filters, i, changeState, multi }) => {
  return (
    <div style={{ width: "90%", margin: "auto", display: "flex", flexDirection: "column", marginTop: "3%", marginBottom: "3%" }}>
      {
        Object.keys(filters[i]).map(index => {
          if (typeof index === "string" && !isNaN(index)) {
            return (
              <div key={index} style={{ display: "flex", marginTop: "3%", marginBottom: "3%" }}>
                <input
                  style={{ width: "15px" }}
                  type="checkbox"
                  defaultChecked={multi ? filters[i][index].selected : filters[i].selected === index}
                  onClick={multi ? () => changeState(filters[i][index].selected, index) : () => changeState(index)}
                />
                <label style={{ paddingLeft: "10px" }}>{filters[i][index].value}</label>
              </div>
            )
          }
        })}
    </div>
  )
}

export const TextField = ({ filters, i, width, height, changeState }) => {
  return (
    <>
      <TextInput
        width={width}
        height={height}
        className={filters[i].errors.length > 0 ? "invalid" : ""}
        type={filters[i].type}
        defaultValue={filters[i].value}
        onBlur={(event) => changeState(event)}
      />
    </>
  )
}