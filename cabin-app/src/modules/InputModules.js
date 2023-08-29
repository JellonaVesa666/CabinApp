import React, { useState } from "react";
import { Slider, RangeInput, RangeValue, SliderBackground, InputStyle, OptionStyle, MultiSelectInput, CheckInput, CounterButton, RangeWrapper } from "../styles/InputStyle"
import { colors } from "../styles/Colors";
import { ChangeState } from "../helpers/HelperFunctions";
import eyeShow from "../images/icon_eye_show.png";
import eyeHide from "../images/icon_eye_hide.png";

export const RangeSlider = (props) => {
  const result = Object.keys(props.data[props.i]).filter((i) => typeof i === "string" && !isNaN(i));
  return (
    <div
      className="row col d-flex"
    >
      {result.map(item => {
        if (result.length <= 1) {
          return (
            <div
              className="col-12 row d-flex justify-content-start align-items-center m-0 pe-5 py-2"
              key={item}
            >
              <Slider
                className="d-flex align-items-center justify-content-center m-0 p-0"
              >
                <RangeInput
                  type="range"
                  min={props?.data?.[props.i]?.[item]?.minDefault}
                  max={props?.data?.[props.i]?.[item]?.maxDefault}
                  value={props?.data?.[props.i]?.[item]?.minValue}
                  step={props?.data?.[props.i]?.[item]?.step}
                  onChange={(event) => ChangeState(props?.changeState, Math.max(props?.data?.[props.i]?.[item]?.minDefault, Math.min(event.target.value, props?.data?.[props.i]?.[item]?.maxValue)), "minValue", props?.i, item)}
                />
                <RangeInput
                  type="range"
                  min={props?.data?.[props.i]?.[item]?.minDefault}
                  max={props?.data?.[props.i]?.[item]?.maxDefault}
                  value={props?.data?.[props.i]?.[item]?.maxValue}
                  step={props?.step}
                  onChange={(event) => ChangeState(props?.changeState, Math.max(props?.data?.[props.i]?.[item]?.minValue, Math.min(event.target.value, props?.data?.[props.i]?.[item]?.maxDefault)), "maxValue", props?.i, item)}
                />
                <SliderBackground left={props?.data?.[props.i]?.[item]?.minValue / props?.data?.[props.i]?.[item]?.maxDefault * 100} right={props?.data?.[props.i]?.[item]?.maxValue / props?.data?.[props.i]?.[item]?.maxDefault * 100} className="center" />
                <SliderBackground />
                <div
                  className="row col-12 d-flex justify-content-center align-items-center m-0 p-0"
                >
                  <RangeWrapper
                    className="col d-flex justify-content-start align-items-center mt-5 mb-3 p-0"
                    marginright={"auto"}
                    suffix={props?.data?.[props.i]?.[item]?.suffix}
                  >
                    <RangeValue
                      type="number"
                      value={props?.data?.[props.i]?.[item]?.minValue}
                      onChange={(event) => ChangeState(props?.changeState, Math.max(props?.data?.[props.i]?.[item]?.minDefault, Math.min(event.target.value, props?.data?.[props.i]?.[item]?.maxValue)), "minValue", props.i, item)}
                    />
                  </RangeWrapper>
                  <RangeWrapper
                    className="col d-flex justify-content-end align-items-center mt-5 mb-3 p-0"
                    marginleft={"auto"}
                    suffix={props?.data?.[props.i]?.[item]?.suffix}
                  >
                    <RangeValue
                      type="number"
                      value={props?.data?.[props.i]?.[item]?.maxValue}
                      onChange={(event) => ChangeState(props?.changeState, Math.max(props?.data?.[props.i]?.[item]?.minValue, Math.min(event.target.value, props?.data?.[props.i]?.[item]?.maxDefault)), "maxValue", props.i, item)}
                    />
                  </RangeWrapper>
                </div>
              </Slider>
            </div>
          )
        }
        else {
          return (
            <div
              className="col-12 row d-flex justify-content-start align-items-center m-0 pe-5 py-2"
              key={item}
            >
              {Number(item) === 0 &&
                <div
                  className="col-12 d-flex justify-content-start align-items-center ps-5 pt-3"
                  style={{ fontWeight: 500, letterSpacing: "2px ", fontSize: "1em" }}
                />
              }
              {Number(item) !== 0 &&
                <>
                  <div
                    className="col-3 position-absolute d-flex justify-content-start align-items-center"
                    style={{ right: "75%", fontWeight: 400, letterSpacing: "2px ", marginBottom: "2.25rem", paddingLeft: "15%", fontSize: "0.75em" }}
                  >
                    {props?.data?.[props.i]?.[item]?.[props.language].toUpperCase()}
                  </div>
                  <Slider
                    className="d-flex align-items-center justify-content-center m-0 p-0"
                  >
                    <RangeInput
                      type="range"
                      min={props.data?.[props.i]?.[item]?.minDefault}
                      max={props.data?.[props.i]?.[item]?.maxDefault}
                      value={props.data?.[props.i]?.[item]?.minValue}
                      step={props.data?.[props.i]?.[item]?.step}
                      onChange={(event) => ChangeState(props.changeState, Math.max(props.data?.[props.i]?.[item]?.minDefault, Math.min(event.target.value, props.data?.[props.i]?.[item]?.maxValue)), "minValue", props.i, item)}
                    />
                    <RangeInput
                      type="range"
                      min={props.data?.[props.i]?.[item]?.minDefault}
                      max={props.data?.[props.i]?.[item]?.maxDefault}
                      value={props.data?.[props.i]?.[item]?.maxValue}
                      step={props.data?.[props.i]?.[item]?.step}
                      onChange={(event) => ChangeState(props.changeState, Math.max(props.data?.[props.i]?.[item]?.minValue, Math.min(event.target.value, props.data?.[props.i]?.[item]?.maxDefault)), "maxValue", props.i, item)}
                    />
                    <SliderBackground left={props.data?.[props.i]?.[item]?.minValue / props.data?.[props.i]?.[item]?.maxDefault * 100} right={props.data?.[props.i]?.[item]?.maxValue / props.data?.[props.i]?.[item]?.maxDefault * 100} className="center" />
                    <SliderBackground />
                    <div
                      className="row col-12 d-flex justify-content-center align-items-center m-0 p-0"
                    >
                      <RangeWrapper
                        className="col d-flex justify-content-start align-items-center mt-5 mb-3 p-0"
                        suffix={props.data?.[props.i]?.[item]?.suffix}
                      >
                        <RangeValue
                          type="number"
                          value={props.data?.[props.i]?.[item]?.minValue}
                          onChange={(event) => ChangeState(props.changeState, Math.max(props.data?.[props.i]?.[item]?.minDefault, Math.min(event.target.value, props.data?.[props.i]?.[item]?.maxValue)), "minValue", props.i, item)}
                        />
                      </RangeWrapper>
                      <RangeWrapper
                        className="col d-flex justify-content-end align-items-center mt-5 mb-3 p-0"
                        suffix={props.data?.[props.i]?.[item]?.suffix}
                      >
                        <RangeValue
                          type="number"
                          value={props.data?.[props.i]?.[item]?.maxValue}
                          onChange={(event) => ChangeState(props.changeState, Math.max(props.data?.[props.i]?.[item]?.minValue, Math.min(event.target.value, props.data?.[props.i]?.[item]?.maxDefault)), "maxValue", props.i, item)}
                        />
                      </RangeWrapper>
                    </div>
                  </Slider>
                </>
              }
            </div>
          )
        }
      })}
    </div >
  )
};

export const Counter = (props) => {
  const result = Object.keys(props.data[props.i]).filter((i) => typeof i === "string" && !isNaN(i));
  return (
    <div
      className="row col-12 d-flex justify-content-center align-items-center p-0 m-0"
    >
      {
        result.map(item => {
          return (
            <div
              className="d-flex justify-content-center align-items-center py-2 px-0 m-0"
              key={item}
            >
              <div
                className="col-6 d-flex justify-content-start align-items-center m-0 p-0"
                style={{ color: "black", fontSize: "14px", fontWeight: 600, textTransform: "capitalize" }}
              >
                {
                  props.data[props.i][item]?.[props.language]?.[0].toUpperCase() +
                  props.data[props.i][item]?.[props.language].slice(1).toLowerCase()
                }
              </div>
              <div
                className="col-6 d-flex justify-content-end align-items-center p-1"
                style={{ border: "1px solid black", width: "150px" }}
              >
                <div
                  className="col-5 d-flex justify-content-start align-items-start m-0 p-0"
                >
                  <CounterButton
                    type="button"
                    value="-"
                    className=""
                    style={{ borderRadius: "4px", outline: 0, border: "none", width: "32px", height: "32px", color: "black", fontSize: "16px" }}
                    onClick={() => { ChangeState(props.changeState, (Number(props.data[props.i][item].value) > 0 ? Number(props.data[props.i][item].value) - 1 : 0), "value", props.index1, item) }}
                  />
                </div>
                <div
                  className="col-2 d-flex justify-content-center align-items-center p-0 m-0"
                  style={{ color: colors.black, fontSize: "16px", fontWeight: 600, width: "26px", height: "26px", borderRadius: "20px" }}
                >
                  {props.data[props.i][item]?.value}
                </div>
                <div
                  className="col-5 d-flex justify-content-end align-items-start m-0 p-0"
                >
                  <CounterButton
                    type="button"
                    value="+"
                    onClick={() => { ChangeState(props.changeState, (Number(props.data[props.i][item].value) + 1), "value", props.index1, item) }}
                  />
                </div>
              </div>
            </div>
          )
        })
      }
    </div >
  )
}

export const Option = (props) => {
  // Filter out string keys
  const result = Object.keys(props.data[props.i]).filter((i) => typeof i === "string" && !isNaN(i));
  return (
    <OptionStyle
      className="mx-auto px-2"
      width={props.width}
      height={props.height}
      radius={props.radius}
      padding={props.padding}
      value={props.data[props.i].value}
      onChange={(event) => props.changeState(event)}
    >
      {
        result.map(item => {
          return (
            <option
              key={Object.keys(props.data[props.i]).indexOf(item)}
              value={item}
            >
              {props.data[props.i][item]?.[props.language]}
            </option>
          )
        })
      }
    </OptionStyle>
  )
};

export const MultiSelect = (props) => {
  // Filter out string keys
  const result = Object.keys(props.data[props.i]).filter((i) => typeof i === "string" && !isNaN(i));
  return (
    <ul
      className="py-3 w100 m-0 p-0"
      style={{ listStyleType: "none" }}
    >
      {
        result.map(item => {
          return (
            <MultiSelectInput
              key={Object.keys(props.data[props.i]).indexOf(item)}
              className={props.data[props.i][item].value === true ? "selected" : ""}
              width={props.width}
              radius={props.radius}
              onClick={() => props.changeState(props.data[props.i][item].value, item)}
            >
              {props.data[props.i][item].name}
            </MultiSelectInput>
          )
        })
      }
    </ul>
  )
}

export const CheckBox = (props) => {
  // Filter out string keys
  const result = Object.keys(props.data[props.i]).filter((i) => typeof i === "string" && !isNaN(i));
  if (props.data?.[props.i]?.rows < 1) {
    return (
      <div className="row col d-flex">
        {
          result.map(item => {
            return (
              <div
                key={Object.keys(props.data[props.i]).indexOf(item)}
                className={`d-flex col-${result.length <= 3 ? (12 / result.length) : 12} justify-content-start my-1`}
              >
                <CheckInput
                  type="checkbox"
                  color={props.color}
                  checked={props.data?.[props.i]?.multiSelect ? props.data[props.i][item].value : props.data[props.i].value === Number(item) ? true : false}
                  onChange={props.data?.[props.i]?.multiSelect ? () => ChangeState(props.changeState, !props.data[props.i][item].value, "value", props.i, item) : () => ChangeState(props.changeState, Number(item), "value", props.i)}
                />
                <label style={{ color: "rgba(0, 0, 0, 0.8)", fontWeight: "400", letterSpacing: "2px", fontSize: "calc(12px + 0.1vw)", paddingLeft: "15px" }}>
                  {props.data[props.i][item]?.[props.language] !== undefined ? props.data[props.i][item][props.language].toUpperCase() : "ERROR"}
                </label>
              </div>
            )
          })
        }
      </div>
    )
  }
  else {
    return (
      <div className="row col d-flex">
        {
          result.map(item => {
            return (
              <div
                key={Object.keys(props.data[props.i]).indexOf(item)}
                className={`d-flex col-${12 / props.data[props.i].rows} justify-content-start my-1`}
              >
                <CheckInput
                  type="checkbox"
                  color={props.color}
                  checked={props.data?.[props.i]?.multiSelect ? props.data[props.i][item].value : props.data[props.i].value === Number(item) ? true : false}
                  onChange={props.data?.[props.i]?.multiSelect ? () => ChangeState(props.changeState, !props.data[props.i][item].value, "value", props.i, item) : () => ChangeState(props.changeState, Number(item), "value", props.i)}
                />
                <label style={{ color: "rgba(0, 0, 0, 0.8)", fontWeight: "400", letterSpacing: "calc(2px + 0.0025vw)", fontSize: "calc(10px + 0.1vw)", paddingLeft: "15px", textAlign: "left" }}>
                  {(props.data[props.i][item]?.[props.language])?.toUpperCase()}
                </label>
              </div>
            )
          })
        }

      </div>
    )
  }
};

export const Password = (props) => {
  const [showPassword, setHidePassword] = useState(false);
  return (
    <>
      <InputStyle
        width={props.width}
        height={props.height}
        radius={props.radius}
        border={props.border}
        padding={props.padding}
        textAlign={props.textAlign}
        placeholder={props.placeholder}
        type={showPassword ? "text" : props.data[props.i].type}
        value={props.data[props.i].value}
        onChange={(event) => props.changeState(event)}
      />
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ width: "15%", height: "100%", borderRadius: props.radius, border: props.border }}
      >
        {showPassword &&
          <img
            src={eyeShow}
            alt=""
            style={{ height: "40%", width: "auto" }}
            onClick={() => setHidePassword(!showPassword)}
          />
        }
        {!showPassword &&
          <img
            src={eyeHide}
            alt=""
            style={{ height: "40%", width: "auto" }}
            onClick={() => setHidePassword(!showPassword)}
          />
        }
      </div>
    </>
  )
};