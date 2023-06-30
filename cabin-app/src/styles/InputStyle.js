import styled from 'styled-components'
import { colors } from "./Colors";

// Range Slider
export const Slider = styled.div`
  position: relative;
  width: 90%;
  height: 15px;
  margin: auto;
  padding: 0;
  margin-top: 20px;
  margin-bottom: 50px;
`
export const RangeInput = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  background: none;
  pointer-events: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  &::-moz-range-thumb {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    border: 3px solid #1b53c0;
    background-color: #fff;
    pointer-events: auto;
    -moz-appearance: none;
  }
  &::-webkit-slider-thumb {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 3px solid #1b53c0;
    background-color: #fff;
    pointer-events: auto;
    -webkit-appearance: none;
  }
`
export const SliderBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: #2e2e2e;
  border-radius: 10px;
`
export const RangeValue = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`

// Date Input
export const DateInput = styled.input`
  width: 90%;
  margin: auto;
  padding: 0;
  border-radius: 10px;
  border: 1.5px solid rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.75);
  color: black;
  outline: none !important;
  &:hover {
    background-color: rgba(255, 255, 255, 0.75);
    cursor: pointer;
    color: black;
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
    background-color: ${colors.green} !important;
    color: white !important;
  }
  &:hover {
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
  background-color: rgba(255, 255, 255, 0.75);
  color: black;
  outline: none !important;
  &:hover {
    background-color: rgba(255, 255, 255, 0.75);
    cursor: pointer;
    color: black;
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