import styled from 'styled-components'
import { colors } from "./Colors";

// Range Slider
export const Slider = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  height: 15px;
  margin: auto;
  padding: 0;
  margin-top: 25px;
  margin-bottom: 50px;
`
export const RangeInput = styled.input`
  z-index: 2;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
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
  width: 100%;
  height: 30%;
  background-color: ${colors.grey};
  border-radius: 20px;
  &.center {
    z-index: 1;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    background-color: ${colors.green};
    border-radius: 0;
    width: ${props => `${props.right - props.left}%`};
    margin-left: ${props => `${props.left}%`};
  }
`
export const RangeValue = styled.input`
  width: 30%;
  margin-top: 30px;
  border-radius: 10px;
  border: 1.5px solid rgba(0, 0, 0, 0.2);
  padding-left: 5%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-left: ${props => props.marginleft};
  margin-right: ${props => props.marginright};
  background-color: rgba(255, 255, 255, 0.7);
  &:hover {
    border: 1.5px solid rgba(0, 0, 0, 0.6);
  }
`

// Date Input
export const DateInput = styled.input`
  width: 90%;
  margin: auto;
  padding: 0;
  border-radius: 10px;
  border: 1.5px solid rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.7);
  color: rgba(0, 0, 0, 0.6);
  outline: none !important;
  &:hover {
    border: 1.5px solid rgba(0, 0, 0, 0.6);
    cursor: pointer;
    color: black;
  }
`

export const Calendar = styled.div`
  width: 20%;
  height: 25%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  border-radius: 10px;
  background-color: ${colors.white};
  margin: 0;
  padding: 0;
`
export const MonthPanel = styled.div`
  height: 20%;
  padding-left: 3%;
  padding-right: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const WeekGrid = styled.div`
  height: 10%;
  display: flex;
  padding: 6px;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
`
export const DayGrid = styled.div`
  height: 70%;
  padding: 6px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  color: white;
`
export const Days = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.darkWhite};
  margin: 0;
  padding: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.1);
  color: ${colors.grey};
  &.this {
    background-color: ${colors.white};
    cursor: pointer;
    color: ${colors.black};
    &.reserved {
      background-color: ${colors.lightRed};
      color: ${colors.black};
    }
  }
  &.reserved {
    background-color: ${colors.lightRed};
    color: ${colors.grey};
  }
  &.active {
    background-color: rgba(160, 200, 50, 0.5);
    color: ${colors.black};
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 4px;
  }
`

// Select
export const MultiSelectInput = styled.li`
  width: 90%;
  border-radius: 8px;
  color: black;
  margin: auto;
  padding: 0;
  padding-left: ${props => (props.paddingleft)};
  margin-top: ${props => (props.margintop)};
  margin-bottom: ${props => (props.marginbottom)};
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
  height:  ${props => (props.height)};
  margin: auto;
  padding: ${props => (props.padding)};
  margin-bottom: 3%;
  border-radius:  ${props => (props.radius)};
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

// Text Input
export const TextInput = styled.input`
  width: ${props => (props.width)};
  height: ${props => (props.height)};
  padding: 0px 20px 0px 20px;
  border: 0.1rem solid ${colors.lightGrey};
  border-radius: 40px;
  background: rgba(255, 255, 255, 0.9);
  margin-bottom: 12px;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
  &.invalid {
    border: 0.1rem solid transparent !important;
    outline: 0.15rem solid ${colors.lightRed} !important;
  }
  &:focus {
    border: 0.1rem solid transparent;
    outline: 0.15rem solid ${colors.grey};
  }
`


// Check Input
export const CheckInput = styled.input.attrs(props => ({
  className: "form-check-input",
}))`
  background-color: rgba(255, 255, 255, 0.7);
  border: 0.15rem solid ${colors.lightGrey};
  width: 20px;
  height: 20px;
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
  className: "btn btn-outline-success",
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