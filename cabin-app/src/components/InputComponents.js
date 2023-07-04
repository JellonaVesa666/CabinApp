import React, { useState } from "react";
import { CardHeader } from "../styles/SearchCardStyle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Slider, RangeInput, RangeValue, SliderBackground, DateInput, TextInput, OptionItem, MultiSelectInput, CheckInput } from "../styles/InputStyle"

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

export const OptionSelect = (props) => {
  return (
    <OptionItem
      className={props.data[props.i].errors && props.data[props.i].errors.length > 0 ? "invalid" : ""}
      width={props.width}
      height={props.height}
      radius={props.radius}
      padding={props.padding}
      defaultValue={props.data[props.i].value}
      onChange={(event) => props.changeState(event)}
    >
      {
        Object.keys(props.data[props.i]).filter(i => typeof i === "string" && !isNaN(i)).map(index => {
          return (
            <option
              key={index}
              value={index}
            >
              {props.data[props.i][index].value}
            </option>
          )
        })
      }
    </OptionItem>
  )
};

export const MultiSelect = (props) => {
  return (
    <ul style={{ width: "100%", listStyleType: "none", margin: "0", padding: "0" }}>
      {
        Object.keys(props.data[props.i]).map(index => {
          if (typeof index === "string" && !isNaN(index)) {
            return (
              <MultiSelectInput
                key={index}
                className={props.data[props.i][index].selected === true ? "selected" : ""}
                margintop={"3%"}
                marginbottom={"3%"}
                paddingleft={"5%"}
                onClick={() => props.changeState(props.data[props.i][index].selected, index)}
              >
                {props.data[props.i][index].value}
              </MultiSelectInput>
            )
          }
        })}
    </ul>
  )
}

export const CheckBox = (props) => {
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
        Object.keys(props.data[props.i]).filter(i => typeof i === "string" && !isNaN(i)).map(index => {
          return (
            <div
              key={index}
              style={{ display: "flex" }}
            >
              <CheckInput
                className={props.data[props.i].errors && props.data[props.i].errors.length > 0 ? "invalid" : ""}
                type="checkbox"
                defaultValue={props.data[props.i].value}
                defaultChecked={props.multi ? props.data[props.i][index].selected : props.data[props.i].selected === index}
                onChange={(event) => props.changeState(event)}
              />
              <label style={{
                margin: "auto", color: "rgba(0, 0, 0, 0.5)", fontWeight: "500", paddingLeft: "15px",
              }}
              >
                {props.data[props.i][index].value}</label>
            </div>
          )
        })
      }
    </div>
  )
};

export const TextField = (props) => {
  return (
    <>
      <TextInput
        width={props.width}
        height={props.height}
        className={props.data[props.i].errors.length > 0 ? "invalid" : ""}
        type={props.data[props.i].type}
        defaultValue={props.data[props.i].value}
        onChange={(event) => props.changeState(event)}
      />
    </>
  )
};

export const PasswordField = (props) => {
  const [showPassword, setHidePassword] = useState(false);
  return (
    <>
      <TextInput
        width={props.width}
        height={props.height}
        className={props.data[props.i].errors.length > 0 ? "invalid" : ""}
        type={showPassword ? "text" : props.data[props.i].type}
        defaultValue={props.data[props.i].value}
        onChange={(event) => props.changeState(event)}
      />
      {showPassword && <FontAwesomeIcon icon={faEye} onClick={() => setHidePassword(false)} style={{ position: "absolute", top: 40, left: 185 }} />}
      {!showPassword && <FontAwesomeIcon icon={faEyeSlash} onClick={() => setHidePassword(true)} style={{ position: "absolute", top: 40, left: 185 }} />}
    </>
  )
};