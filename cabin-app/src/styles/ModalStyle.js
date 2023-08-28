import styled, { keyframes } from 'styled-components';
import { colors } from "./Colors";

export const ModalContent = styled.section`
  z-index:10;
  position: absolute;
  top: ${props => (props.top ? props.top : "212px")};
  left: 50%;
  -ms-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: ${props => (props.width)};
  height: auto;
  border-radius: 2px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 0;
  padding-left: 0;
  margin: 0;
  background-color: ${colors.white};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  &.secondaryColor > :nth-child(even) {
    background-color: ${colors.whiteDark};
  }
`

export const ModalHeader = styled.p`
  text-align: center;
  margin: auto;
  padding: 0;
  padding-top: 1%;
  padding-bottom: 1%;
  margin-top: ${props => (props.margintop)};
  margin-bottom: ${props => (props.marginbottom)};
  padding-left: ${props => (props.paddingleft)};
  width: ${props => (props.width)};
  border-radius: 20px;
  border: 1.5px solid ${colors.lightGrey};
  color: rgba(0, 0, 0, 0.6);
  text-transform: capitalize;
  &.true {
    background-color: ${colors.green} !important;
    border: 1.5px solid transparent !important;
    color: white !important;
  }
  &:hover {
    border: 1.5px solid rgba(0, 0, 0, 0.6);
    cursor: pointer;
    color: black;
  }
`

export const ModalLinkH4 = styled.h4`
  color: rgba(0, 0, 0, 0.5);
  font-weight: 300;
  padding-bottom: 5%;
  &:hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 1);
    text-decoration: underline;
  }
`

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 200px;
  border: 10px solid #f3f3f3; /* Light grey */
  border - top: 10px solid #383636; /* Black */
  border - radius: 50 %;
  animation: ${spinner} ${props => (props.animation)};
`