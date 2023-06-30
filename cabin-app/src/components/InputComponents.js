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

export const OptionSelect = ({ data, i, width, height, radius, padding, changeState }) => {
  return (
    <>
      <OptionItem
        width={width}
        height={height}
        radius={radius}
        padding={padding}
        value={data[i].selected}
        onChange={(event) => changeState(event)}
      >
        {
          Object.keys(data[i]).map(index => {
            if (typeof index === "string" && !isNaN(index))
              return (
                <option
                  key={index}
                  value={data[i][index].value}
                >
                  {data[i][index].value}
                </option>
              )
          })
        }
      </OptionItem>
    </>
  )
}

export const MultiSelect = ({ data, i, changeState }) => {
  return (
    <ul style={{ width: "100%", listStyleType: "none", margin: "0", padding: "0" }}>
      {
        Object.keys(data[i]).map(index => {
          if (typeof index === "string" && !isNaN(index)) {
            return (
              <MultiSelectInput
                key={index}
                className={data[i][index].selected === true ? "selected" : ""}
                margintop={"3%"}
                marginbottom={"3%"}
                paddingleft={"5%"}
                onClick={() => changeState(data[i][index].selected, index)}
              >
                {data[i][index].value}
              </MultiSelectInput>
            )
          }
        })}
    </ul>
  )
}

export const CheckBox = ({ data, i, changeState, multi }) => {
  return (
    <div style={{ width: "90%", margin: "auto", display: "flex", flexDirection: "column", marginTop: "3%", marginBottom: "3%" }}>
      {
        Object.keys(data[i]).map(index => {
          if (typeof index === "string" && !isNaN(index)) {
            return (
              <div key={index} style={{ display: "flex", marginTop: "3%", marginBottom: "3%" }}>
                <input
                  style={{ width: "15px" }}
                  type="checkbox"
                  defaultChecked={multi ? data[i][index].selected : data[i].selected === index}
                  onClick={multi ? () => changeState(data[i][index].selected, index) : () => changeState(index)}
                />
                <label style={{ paddingLeft: "10px" }}>{data[i][index].value}</label>
              </div>
            )
          }
        })}
    </div>
  )
}

export const TextField = ({ data, i, width, height, changeState }) => {
  return (
    <>
      <TextInput
        width={width}
        height={height}
        className={data[i].errors.length > 0 ? "invalid" : ""}
        type={data[i].type}
        defaultValue={data[i].value}
        onBlur={(event) => changeState(event)}
      />
    </>
  )
}