import styled from 'styled-components'
import { colors } from "./Colors";

// Range Slider
export const Slider = styled.div.attrs({
  className: "d-flex align-items-center justify-content-center m-auto p-0"
})`
  width: 75%;
  position: relative;
`
export const RangeInput = styled.input`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 15px;
  margin-top: 20px;
  background: none;
  pointer-events: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  &::-moz-range-thumb {
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background-color: ${colors.white};
    pointer-events: auto;
    -moz-appearance: none;
  }
  &::-webkit-slider-thumb {
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background-color: ${colors.white};
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    pointer-events: auto;
    -webkit-appearance: none;
  }
  &:hover::-webkit-slider-thumb {
    outline: 2px solid rgba(0, 0, 0, 0.6);
    cursor: pointer;
    color: black;
  }
`
export const SliderBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 15px;
  margin-top: 20px;
  background-color: ${colors.grey};
  border-radius: 20px;
  &.center {
    z-index: 1;
    background-color: ${colors.green};
    width: ${props => `${props.right - props.left}%`};
    margin-left: ${props => `${props.left}%`};
  }
`
export const RangeValue = styled.input.attrs({
  className: "d-flex align-items-center justify-content-start mt-5 mb-3 py-1",
})`
  text-align: center;
  width: ${props => props.width};
  border-radius: 10px;
  border: 1.5px solid rgba(0, 0, 0, 0.2);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-left: ${props => props.marginleft};
  margin-right: ${props => props.marginright};
  background-color: rgba(255, 255, 255, 0.7);
  &:hover {
    border: 1.5px solid rgba(0, 0, 0, 0.6);
  }
  &::-webkit-inner-spin-button{
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  &::-webkit-outer-spin-button{
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
`

// Calendar
export const MonthPanel = styled.div`
  padding-left: 3%;
  padding-right: 3%;
  padding-top: 6px;
  padding-bottom: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const WeekGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
`
export const DayGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  color: white;
`
export const Days = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin: 0;
  padding: 0;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: ${colors.grey};
  visibility: hidden;
  &.this {
    background-color: ${colors.white};
    cursor: pointer;
    color: ${colors.black};
    visibility: visible;
    &.reserved {
      background-color: ${colors.lightRed};
      color: ${colors.black};
      visibility: visible;
    }
  }
  &.reserved {
    background-color: ${colors.lightRed};
    color: ${colors.grey};
  }
  &.active {
    background-color: #4AADF9;
    color: ${colors.white};
    border: 1px solid ${colors.white};
  }
`

// Select
export const MultiSelectInput = styled.li.attrs({
  className: "m-auto py-1 mt-2 px-2",
})`
  width: ${props => (props.width)};
  border-radius: ${props => (props.radius)};
  color: black;
  border: 1.5px solid rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.6);
  &.selected {
    border: 1.5px solid ${colors.green} !important;
    background-color: ${colors.green} !important;
    color: white !important;
  }
  &:hover {
    border: 1.5px solid rgba(0, 0, 0, 0.6);
    cursor: pointer;
    color: black;
  }
`

// Option Select
export const OptionItem = styled.select`
  width: ${props => (props.width)};
  border-radius: ${props => (props.radius)};
  border: 1.5px solid rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.7);
  color: rgba(0, 0, 0, 0.6);
  outline: none !important;
  &:hover {
    border: 1.5px solid rgba(0, 0, 0, 0.6);
    cursor: pointer;
    color: black;
  }
    &.invalid {
    border: 0.1rem solid transparent !important;
    outline: 0.15rem solid ${colors.lightRed} !important;
  }
`

// Text Input //radius:40px
export const InputStyle = styled.input`
  width: ${props => (props.width)};
  height: ${props => (props.height)};
  padding: 0px 20px 0px 20px;
  border: ${props => (props.border)};
  border-radius: ${props => (props.radius)};
  background: rgba(255, 255, 255, 0.9);
  margin-top: ${props => (props.margintop)};
  margin-bottom: ${props => (props.marginbottom)};
  outline: none;
  font-size: 14px;
  font-weight: 500;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
  &.invalid {
    border: ${props => (props.border)};
  }
  &:focus {
    border: ${props => (props.border)};
  }
`

// Check Input
export const CheckInput = styled.input.attrs({
  className: "form-check-input",
})`
  background-color: rgba(255, 255, 255, 0.7);
  min-height: 16px;
  min-width: 16px;
  border: 0.1rem solid ${colors.lightGrey};
  outline: none;
  outline: 0px !important;
  -webkit-appearance:none !important;
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  box-shadow: none !important;
  &:hover {
    border: 0.15rem solid ${colors.grey};
    cursor: pointer;
    color:white;
  }
  &:focus {
    border: 0.15rem solid ${colors.grey};
    cursor: pointer;
  }
  &:checked {
    border: 0.15rem solid transparent;
    background-color: ${props => (props.color)};
  }
  &.invalid {
    border: 0.1rem solid transparent !important;
    outline: 0.15rem solid ${colors.lightRed} !important;
  }
`

export const ButtonInput = styled.a.attrs({
  className: "btn",
})`
  height: 60%;
  width: 110px;
  font-size: 12px;
  font-weight: 500;
  color: ${colors.white} !important;
  background-color: ${colors.navy} !important;
  border-radius: 20px;
  margin: 0px 10px;
  @media (max-width:992px){
    width: 70px;
  }
  &:hover {
    cursor: pointer;
  }
  &:focus {
    cursor: pointer;
    border: none;
    box-shadow: none;
  }
  &:active {
    border: 0.1rem solid rgba(255, 255, 255, 0.1);
  }
`

export const CounterInput = styled.div.attrs({
  className: "row py-3 m-0",
})`
  @media only screen and (max-width: 768px) {
    padding-right: 3rem;
    padding-left: 3rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1350px) {
    padding-right: 6rem;
    padding-left: 6rem;
  }

  @media only screen and (min-width: 2100px) and (max-width: 3000px) {
    padding-right: 3rem;
    padding-left: 3rem;
  }
`

export const CounterValue = styled.div.attrs({
  className: "col-4 d-flex justify-content-center align-items-center p-0",
})`
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 3rem;
  margin-left: 3rem;
`