import React, { useState, forwardRef } from "react";
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

export const OptionSelect = forwardRef(function OptionSelect(props, ref) {
  const { ...otherProps } = props;
  const [val, setVal] = useState();

  return (
    <OptionItem
      width={props.width}
      height={props.height}
      radius={props.radius}
      padding={props.padding}
      defaultValue={val}
      onChange={(event) => setVal(event.target.value)} {...otherProps} ref={ref}
    >
      {
        Object.keys(props.data[props.i]).map(index => {
          if (typeof index === "string" && !isNaN(index))
            return (
              <option
                key={index}
                value={props.data[props.i][index].value}
              >
                {props.data[props.i][index].value}
              </option>
            )
        })
      }
    </OptionItem>
  )
});

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

export const CheckBox = forwardRef(function CheckBox(props, ref) {
  const { ...otherProps } = props;
  const [val, setVal] = useState();
  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        marginTop: "3%",
        marginBottom: "3%"
      }}
    >
      {
        Object.keys(props.data[props.i]).map(index => {
          if (typeof index === "string" && !isNaN(index)) {
            return (
              <div key={index} style={{ display: "flex", marginTop: "3%", marginBottom: "3%" }}>
                <input
                  style={{ width: "15px", height: "50px" }}
                  type="checkbox"
                  defaultValue={val}
                  defaultChecked={props.multi ? props.data[props.i][index].selected : props.data[props.i].selected === index}
                  onChange={(event) => setVal(event.target.value)} {...otherProps} ref={ref}
                />
                <label style={{
                  paddingLeft: "10px", margin: "auto", color: "rgba(0, 0, 0, 0.5)", fontWeight: "500", paddingLeft: 15,
                }}
                >
                  {props.data[props.i][index].value}</label>
              </div>
            )
          }
        })}
    </div>
  )
});

export const TextField = forwardRef(function TextField(props, ref) {
  const { ...otherProps } = props;
  const [val, setVal] = useState();
  return (
    <TextInput
      width={props.width}
      height={props.height}
      className={props.data[props.i].errors.length > 0 ? "invalid" : ""}
      type={props.data[props.i].type}
      defaultValue={val}
      onChange={(event) => setVal(event.target.value)} {...otherProps} ref={ref}
    />
  );
});