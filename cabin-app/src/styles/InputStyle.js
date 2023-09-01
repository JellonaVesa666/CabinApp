import styled from 'styled-components'
import { colors } from "./Colors";

// Range Slider
export const Slider = styled.div`
  width: 80%;
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
export const SliderBackground = styled.div.attrs(props => ({
  style: {
    width: `${100 - props.left - (100 - props.right)}%`,
    marginLeft: `${100 - (props.right - (props.left - (100 - props.right)))}%`,
  },
}))`
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
    background-color: ${colors.blue};
  }
`
export const RangeWrapper = styled.div`
  &::after {
    content: ${(props) => ("'" + props.suffix + "'")};
  }
`

export const RangeValue = styled.input`
  width: 45px;
  border: none;
  background: none;
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
  &.other{
    background-color: rgba(0, 0, 0, 0.1);
    visibility: visible;
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

export const OptionStyle = styled.select`
  width: ${props => (props.width)};
  height: ${props => (props.height)};
  border: ${props => (props.border)};
  border-radius: ${props => (props.radius)};
  padding: ${props => (props.padding)};
  background-color: rgba(255, 255, 255, 0.9);
  color: rgba(0, 0, 0, 0.6);
  outline: none !important;
  font-size: calc(12px + 0.1vw);
  &:hover {
    border: 1.5px solid rgba(0, 0, 0, 0.6);
    cursor: pointer;
    color: black;
  }
`

export const InputStyle = styled.input.attrs((props) => ({
  id: props.id,
  type: props.type
}))`
  width: ${props => (props.width ? props.width : "100%")};
  height: ${props => (props.height ? props.height : "100%")};
  border: ${props => (props.border)};
  border-radius: ${props => (props.radius)};
  background: ${props => (props.backgroundColor ? props.backgroundColor : colors.white)};
  margin: ${props => (props.margin)};
  padding: ${props => (props.padding)};
  color: ${props => (props.color ? props.color : colors.black)};
  outline: none;
  font-size: ${props => (props.fontSize ? `calc(${props.fontSize}px + 0.1vw)` : "calc(12px + 0.1vw)")};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "500")};
  text-align: ${props => (props.textalign ? props.textalign : "center")};
  &::placeholder {
    color: ${colors.grey};
  }
  &:hover {
    cursor: pointer;
  }
  &:focus {
    border: ${props => (props.type !== "submit" ? "0.1rem solid transparent" : "none")};
    outline: ${props => (props.type !== "submit" ? `0.15rem solid ${colors.grey}` : "none")};
  }
  &:active {
    transform: ${props => (props.type === "submit" ? "scale(0.95)" : "")};
  }
`

// Check Input
export const CheckInput = styled.input`
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  min-width: 16px;
  min-height: 16px;
  max-width: 16px;
  max-height: 16px;
  background-color: white;
  border-radius: 0.1rem;
  border: 0.05rem solid ${props => (props.color ? props.color : "rgba(0, 0, 0, 0.3)")};
  vertical-align: middle;
  cursor: pointer;
  &:hover {
    border: 0.1rem solid ${colors.black};
    cursor: pointer;
    -webkit-appearance: button;
  }
  &:focus {
    border: 0.1rem solid ${colors.black};
    cursor: pointer;
  }
  &:checked {
    border: 0.15rem solid transparent;
    accent-color: #4b7cc5;
    -webkit-appearance: button;
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

export const CounterButton = styled.input.attrs({
  className: "col-5 d-flex justify-content-center align-items-center m-0 p-0"
})`
  border-radius: 4px;
  outline: 0;
  border: none;
  width: 32px;
  height: 32px;
  color: black;
  font-size: 16px;
  &:hover {
    cursor: pointer;
    background-color: ${colors.blueLight}
  }
`