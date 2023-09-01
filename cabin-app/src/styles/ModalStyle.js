import styled, { keyframes } from 'styled-components';
import { colors } from "./Colors";

export const ModalContent = styled.section`
  z-index:10;
  position: absolute;
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
  height: auto;
  border-radius: 2px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 0;
  padding-left: 0;
  margin: 0;
  background-color: ${props => (`${props.background ? props.background : colors.white}`)};
  /* box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px; */
  &.secondaryColor > :nth-child(even) {
    background-color: ${colors.whiteDark};
  }
  @media screen and (max-width: 380px) {
    width: ${props => (`${props.width * 4.5}%`)};
    top: ${props => (`${props.top * 0.025}px`)};
  }
  @media screen and (min-width: 380px) and (max-width: 640px)  {
    width: ${props => (`${props.width * 4}%`)};
    top: ${props => (`${props.top * 0}px`)};
  }
  @media screen and (min-width: 640px) and (max-width: 860px)  {
    width: ${props => (`${props.width * 2.5}%`)};
    top: ${props => (`${props.top * 0.1}px`)};
  }
  @media screen and (min-width: 860px) and (max-width: 1024px) {
    width: ${props => (`${props.width * 2.25}%`)};
    top: ${props => (`${props.top * 0.2}px`)};
  }
  @media screen and (min-width: 1024px) and (max-width: 1280px)  {
    width: ${props => (`${props.width * 2}%`)};
    top: ${props => (`${props.top * 0.5}px`)};
  }
  @media screen and (min-width: 1280px) and (max-width: 1366px) {
    width: ${props => (`${props.width * 1.75}%`)};
    top: ${props => (`${props.top * 0.6}px`)};
  }
  @media screen and (min-width: 1366px) and (max-width: 1680px) {
    width: ${props => (`${props.width * 1.5}%`)};
    top: ${props => (`${props.top * 0.7}px`)};
  }
  @media screen and (min-width: 1680px) and (max-width: 1920px){
    width: ${props => (`${props.width * 1.25}%`)};
    top: ${props => (`${props.top * 1}px`)};
  }
  @media screen and (min-width: 1920px){
    width: ${props => (`${props.width}%`)};
    top: ${props => (`${props.top * 1}px`)};
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
  animation: ${spinner} ${props => (props.animation)};
`