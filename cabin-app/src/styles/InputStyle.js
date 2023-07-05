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
export const CheckInput = styled.input`
  background-color: rgba(255, 255, 255, 0.7);
  border: 0.15rem solid ${colors.lightGrey};
  border-radius: 4px;
  width: 20px;
  height: 20px;
  outline: none;
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  box-shadow: none !important;
  &:hover {
    border: 0.15rem solid ${colors.grey};
    cursor: pointer;
    accent-color: ${colors.white}
    color:white;
  }
  &:focus {
    border: 0.15rem solid ${colors.grey};
    cursor: pointer;
  }
  &:checked {
    accent-color: ${colors.green};
    width: 20px;
    height: 20px;
  }
  &:not(:checked) {
    -moz-appearance: none;
    -webkit-appearance: none;
    -o-appearance: none;
  }
  &.invalid {
    border: 0.1rem solid transparent !important;
    outline: 0.15rem solid ${colors.lightRed} !important;
  }
`