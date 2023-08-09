import React/* , { useState } */ from "react";
import { Slider, RangeInput, RangeValue, SliderBackground, InputStyle, OptionItem, MultiSelectInput, CheckInput, CounterButton, RangeWrapper } from "../styles/InputStyle"
import { colors } from "../styles/Colors";
import { ChangeState } from "../helpers/HelperFunctions";

export const RangeSlider = (props) => {
  const result = Object.keys(props.data[props.i]).filter((i) => typeof i === "string" && !isNaN(i));
  return (
    <div className="col-12 row flex-wrap d-flex justify-content-center align-items-center">
      {result.map(item => {
        if (result.length <= 1) {
          return (
            <>
              <div
                className="col-3 d-flex justify-content-start align-items-center mb-5 ps-5"
                style={{ fontWeight: 500, letterSpacing: "2px ", fontSize: "1em" }}
              >
                {props.data[props.i].info?.header[props.language].toUpperCase()}
              </div>
              <div className="col-9 row pe-5 m-0 py-2">
                <Slider
                  className="d-flex align-items-center justify-content-center m-0 p-0"
                >
                  <RangeInput
                    type="range"
                    min={props?.data?.[props.i]?.[item]?.minDefault}
                    max={props?.data?.[props.i]?.[item]?.maxDefault}
                    value={props?.data?.[props.i]?.[item]?.minValue}
                    step={props?.data?.[props.i]?.[item]?.step}
                    onChange={(event) => ChangeState(props?.SetSearchFilters, Math.max(props?.data?.[props.i]?.[item]?.minDefault, Math.min(event.target.value, props?.data?.[props.i]?.[item]?.maxValue)), "minValue", props?.i, item)}
                  />
                  <RangeInput
                    type="range"
                    min={props?.data?.[props.i]?.[item]?.minDefault}
                    max={props?.data?.[props.i]?.[item]?.maxDefault}
                    value={props?.data?.[props.i]?.[item]?.maxValue}
                    step={props?.step}
                    onChange={(event) => ChangeState(props?.SetSearchFilters, Math.max(props?.data?.[props.i]?.[item]?.minValue, Math.min(event.target.value, props?.data?.[props.i]?.[item]?.maxDefault)), "maxValue", props?.i, item)}
                  />
                  <SliderBackground left={props?.data?.[props.i]?.[item]?.minValue / props?.data?.[props.i]?.[item]?.maxDefault * 100} right={props?.data?.[props.i]?.[item]?.maxValue / props?.data?.[props.i]?.[item]?.maxDefault * 100} className="center" />
                  <SliderBackground />
                  <RangeWrapper
                    className="mt-5 mb-3"
                    marginright={"auto"}
                    suffix={props?.data?.[props.i]?.[item]?.suffix}
                  >
                    <RangeValue
                      type="number"
                      value={props?.data?.[props.i]?.[item]?.minValue}
                      onChange={(event) => ChangeState(props?.SetSearchFilters, Math.max(props?.data?.[props.i]?.[item]?.minDefault, Math.min(event.target.value, props?.data?.[props.i]?.[item]?.maxValue)), "minValue", props.i, item)}
                    />
                  </RangeWrapper>
                  <RangeWrapper
                    className="mt-5 mb-3"
                    marginleft={"auto"}
                    suffix={props?.data?.[props.i]?.[item]?.suffix}
                  >
                    <RangeValue
                      type="number"
                      value={props?.data?.[props.i]?.[item]?.maxValue}
                      onChange={(event) => ChangeState(props?.SetSearchFilters, Math.max(props?.data?.[props.i]?.[item]?.minValue, Math.min(event.target.value, props?.data?.[props.i]?.[item]?.maxDefault)), "maxValue", props.i, item)}
                    />
                  </RangeWrapper>
                </Slider>
              </div>
            </>
          )
        }
        else {
          return (
            <>
              {Number(item) === 0 &&
                <div
                  className="col-12 d-flex justify-content-start align-items-center ps-5 pt-3"
                  style={{ fontWeight: 500, letterSpacing: "2px ", fontSize: "1em" }}
                >
                  {props?.data?.[props.i]?.info?.header?.[props.language].toUpperCase()}
                </div>
              }
              {Number(item) !== 0 &&
                <>
                  <div
                    className="col-3 d-flex justify-content-start align-items-center mb-5"
                    style={{ fontWeight: 400, letterSpacing: "2px ", paddingLeft: "15%", fontSize: "0.75em" }}
                  >
                    {props?.data?.[props.i]?.[item]?.[props.language].toUpperCase()}
                  </div>
                  <div className="col-9 row pe-5 m-0 py-2">
                    <Slider
                      className="d-flex align-items-center justify-content-center m-0 p-0"
                    >
                      <RangeInput
                        type="range"
                        min={props.data?.[props.i]?.[item]?.minDefault}
                        max={props.data?.[props.i]?.[item]?.maxDefault}
                        value={props.data?.[props.i]?.[item]?.minValue}
                        step={props.data?.[props.i]?.[item]?.step}
                        onChange={(event) => ChangeState(props.SetSearchFilters, Math.max(props.data?.[props.i]?.[item]?.minDefault, Math.min(event.target.value, props.data?.[props.i]?.[item]?.maxValue)), "minValue", props.i, item)}
                      />
                      <RangeInput
                        type="range"
                        min={props.data?.[props.i]?.[item]?.minDefault}
                        max={props.data?.[props.i]?.[item]?.maxDefault}
                        value={props.data?.[props.i]?.[item]?.maxValue}
                        step={props.data?.[props.i]?.[item]?.step}
                        onChange={(event) => ChangeState(props.SetSearchFilters, Math.max(props.data?.[props.i]?.[item]?.minValue, Math.min(event.target.value, props.data?.[props.i]?.[item]?.maxDefault)), "maxValue", props.i, item)}
                      />
                      <SliderBackground left={props.data?.[props.i]?.[item]?.minValue / props.data?.[props.i]?.[item]?.maxDefault * 100} right={props.data?.[props.i]?.[item]?.maxValue / props.data?.[props.i]?.[item]?.maxDefault * 100} className="center" />
                      <SliderBackground />
                      <RangeWrapper
                        className="mt-5 mb-3"
                        marginright={"37%"}
                        suffix={props.data?.[props.i]?.[item]?.suffix}
                      >
                        <RangeValue
                          type="number"
                          value={props.data?.[props.i]?.[item]?.minValue}

                          onChange={(event) => ChangeState(props.SetSearchFilters, Math.max(props.data?.[props.i]?.[item]?.minDefault, Math.min(event.target.value, props.data?.[props.i]?.[item]?.maxValue)), "minValue", props.i, item)}
                        />
                      </RangeWrapper>
                      <RangeWrapper
                        className="mt-5 mb-3"
                        marginleft={"37%"}
                        suffix={props.data?.[props.i]?.[item]?.suffix}
                      >
                        <RangeValue
                          type="number"
                          value={props.data?.[props.i]?.[item]?.maxValue}
                          onChange={(event) => ChangeState(props.SetSearchFilters, Math.max(props.data?.[props.i]?.[item]?.minValue, Math.min(event.target.value, props.data?.[props.i]?.[item]?.maxDefault)), "maxValue", props.i, item)}
                        />
                      </RangeWrapper>
                    </Slider>
                  </div>
                </>
              }
            </>
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
      className="row col-12 py-3 m-0"
    >
      {
        result.map(item => {
          return (
            <div
              className="d-flex justify-content-center align-items-center py-2 m-0"
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
                style={{ border: "1px solid black" }}
              >
                <div
                  className="col-5 d-flex justify-content-start align-items-start m-0 p-0"
                >
                  <CounterButton
                    type="button"
                    value="-"
                    className=""
                    style={{ borderRadius: "4px", outline: 0, border: "none", width: "32px", height: "32px", color: "black", fontSize: "16px" }}
                    onClick={() => { ChangeState(props.SetSearchFilters, (Number(props.data[props.i][item].value) > 0 ? Number(props.data[props.i][item].value) - 1 : 0), "value", props.index1, item) }}
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
                    onClick={() => { ChangeState(props.SetSearchFilters, (Number(props.data[props.i][item].value) + 1), "value", props.index1, item) }}
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

export const OptionSelect = (props) => {
  return (
    <OptionItem
      className="mx-auto my-3 py-1 px-2"
      width={props.width}
      radius={props.radius}
      value={props.data[props.i].value}
      onChange={(event) => props.changeState(event)}
    >
      {
        Object.keys(props.data[props.i]).filter(i => typeof i === "string" && !isNaN(i)).map(item => {
          return (
            <option
              key={Object.keys(props.data[props.i]).indexOf(item)}
              value={item}
            >
              {props.data[props.i][item].name}
            </option>
          )
        })
      }
    </OptionItem>
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
      <div className="col-12 d-flex justify-content-center align-items-center">
        <div
          className="col-3 d-flex justify-content-start align-items-center mb-auto ps-5 pt-3"
          style={{ fontWeight: 500, letterSpacing: "2px" }}
        >
          {(props.data?.[props.i]?.info?.header?.[props.language])?.toUpperCase()}
        </div>
        <div className="col-9 row px-5 py-3 m-0">
          {
            result.map(item => {
              return (
                <div
                  key={Object.keys(props.data[props.i]).indexOf(item)}
                  className={`d-flex col-${result.length <= 3 ? (12 / result.length) : 12} justify-content-start my-1`}
                >
                  <CheckInput
                    className={props.data[props.i].errors && props.data[props.i].errors.length > 0 ? "invalid" : ""}
                    type="checkbox"
                    color={props.color}
                    checked={props.data?.[props.i]?.multiSelect ? props.data[props.i][item].value : props.data[props.i].value === Number(item) ? true : false}
                    onChange={props.data?.[props.i]?.multiSelect ? () => ChangeState(props.SetSearchFilters, !props.data[props.i][item].value, "value", props.i, item) : () => ChangeState(props.SetSearchFilters, Number(item), "value", props.i)}
                  />
                  <label style={{ color: "rgba(0, 0, 0, 0.8)", fontWeight: "400", letterSpacing: "2px", fontSize: "0.75em", paddingLeft: "15px" }}>
                    {props.data[props.i][item]?.[props.language] !== undefined ? props.data[props.i][item][props.language].toUpperCase() : "ERROR"}
                  </label>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="col-12 d-flex justify-content-center align-items-center">
        <div
          className="col-3 d-flex justify-content-start align-items-center mb-auto ps-5 pt-3"
          style={{ fontWeight: 500, letterSpacing: "2px", fontSize: "1em" }}
        >
          {(props.data?.[props.i]?.info?.header?.[props.language])?.toUpperCase()}
        </div>
        <div className="col-9 row px-5 py-3 m-0">
          {
            result.map(item => {
              return (
                <div
                  key={Object.keys(props.data[props.i]).indexOf(item)}
                  className={`d-flex col-${12 / props.data[props.i].rows} justify-content-start my-1`}
                >
                  <CheckInput
                    className={props.data[props.i].errors && props.data[props.i].errors.length > 0 ? "invalid" : ""}
                    type="checkbox"
                    color={props.color}
                    checked={props.data?.[props.i]?.multiSelect ? props.data[props.i][item].value : props.data[props.i].value === Number(item) ? true : false}
                    onChange={props.data?.[props.i]?.multiSelect ? () => ChangeState(props.SetSearchFilters, !props.data[props.i][item].value, "value", props.i, item) : () => ChangeState(props.SetSearchFilters, Number(item), "value", props.i)}
                  />
                  <label style={{ color: "rgba(0, 0, 0, 0.8)", fontWeight: "400", letterSpacing: "2px", fontSize: "0.75em", paddingLeft: "15px" }}>
                    {(props.data[props.i][item]?.[props.language])?.toUpperCase()}
                  </label>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
};

export const Input = (props) => {
  return (
    <InputStyle
      id={props.id}
      type={props.type}
      value={props.value}
      width={props.width}
      height={props.height}
      radius={props.radius}
      border={props.border}
      margintop={props.margintop}
      marginbottom={props.marginbottom}
      placeholder={props.placeholder}
      className={props.data[props.i]?.errors?.length > 0 ? "invalid" : ""}
      onChange={(event) => props.changeState(event.target.value)}
      onClick={props.onClick}
    />
  )
};

export const PasswordField = (props) => {
  //const [showPassword, setHidePassword] = useState(false);
  return (
    <>
      <InputStyle
        width={props.width}
        height={props.height}
        className={props.data[props.i].errors.length > 0 ? "invalid" : ""}
        //type={showPassword ? "text" : props.data[props.i].type}
        value={props.data[props.i].value}
        onChange={(event) => props.changeState(event)}
      />
      {/*       {showPassword && <FontAwesomeIcon icon={faEye} onClick={() => setHidePassword(false)} style={{ position: "absolute", top: 40, left: 185 }} />}
      {!showPassword && <FontAwesomeIcon icon={faEyeSlash} onClick={() => setHidePassword(true)} style={{ position: "absolute", top: 40, left: 185 }} />} */}
    </>
  )
};

export const Date = (props) => {
  return (
    <>
      <input
        className="px-2"
        style={{ borderRadius: "6px", border: "1px solid grey", width: "45%", fontSize: "14px" }}
        type="date"
        name=""
      />
    </>
  )
};