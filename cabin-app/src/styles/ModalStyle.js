import styled from 'styled-components'
import {colors} from "./Colors";

export const ModalContent = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  border-radius: 6px;
  width: 20%;
  padding-top: 3rem;
  padding-bottom: 3rem;
  height: auto;
  background-color: ${colors.white};
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  &.true {
    display: block;
  }
  &.false {
    display: none;
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