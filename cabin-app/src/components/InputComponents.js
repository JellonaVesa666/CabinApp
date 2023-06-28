import React, { useState } from "react";
import { CardHeader } from "../styles/SearchCardStyle";
import { Slider, RangeInput, RangeValue, SliderBackground, DateInput, OptionItem, MultiSelectInput } from "../styles/InputStyle"


export const RangeSlider = (props) => {
  const [max, setMax] = useState(10);
  const [min, setMin] = useState(0);

  return (
    <Slider>
      <RangeInput
        type="range"
        min={props.min}
        max={props.max}
        value={min}
        step={props.step}
        onChange={(event) => setMin(Math.max(props.min, Math.min(event.target.value, max)))}
      />
      <RangeInput
        type="range"
        min={props.min}
        max={props.max}
        value={max}
        step={props.step}
        onChange={(event) => setMax(Math.max(min, Math.min(event.target.value, props.max)))}
      />
      <SliderBackground />
      <RangeValue>
        <input type="number" value={min} style={{ width: "25%", marginRight: "25%", marginTop: "5%", borderRadius: "10px" }} />
        <input type="number" value={max} style={{ width: "25%", marginLeft: "25%", marginTop: "5%", borderRadius: "10px" }} />
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

export const OptionSelect = ({ filters, i, setActive }) => {
  return (
    <>
      <CardHeader
        width={"90%"}
        margintop={"5%"}
        marginbottom={"1%"}
      >
        {filters[i].name}
      </CardHeader>
      <OptionItem
        value={filters[i].selected}
        onChange={(event) => setActive(event)}
        style={{
          marginBottom: "3%",
        }}
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

export const MultiSelect = ({ filters, i, setActive }) => {
  return (
    <ul style={{ width: "100%", listStyleType: "none", margin: "0", padding: "0" }}>
      {
        Object.keys(filters[i]).map(index => {
          console.log(filters[i][index].selected)
          if (typeof index === "string" && !isNaN(index)) {
            return (
              <MultiSelectInput
                key={index}
                className={filters[i][index].selected === true ? "selected" : ""}
                margintop={"3%"}
                marginbottom={"3%"}
                paddingleft={"5%"}
                onClick={() => setActive(filters[i][index].selected, index)}
              >
                {filters[i][index].value}
              </MultiSelectInput>
            )
          }
        })}
    </ul>
  )
}