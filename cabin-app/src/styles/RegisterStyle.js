import styled from 'styled-components';
import { colors } from './Colors';

export const RegisterBody = styled.div`
  position: absolute;
  width: 35rem;
  border-radius: 16px;
  transition: 1s ease-in-out;
  top: ${props => (props.show === 1 ? "8rem" : "-100vh")};
`

export const LinkH4 = styled.h4`
  color: rgba(0, 0, 0, 0.5);
  font-weight: 300;
  &:hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 1);
    text-decoration: underline;
  }
`

export const ErrorMessage = styled.p`
  visibility: hidden;
  &.show1 {
    color: rgba(0, 0, 0, 0.4);
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.6rem;
    visibility: visible;
    margin: 0;
    margin-left: 2rem;
    padding: 0;
  }
  &.show2 {
    color: rgba(0, 0, 0, 0.4);
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.7rem;
    visibility: visible;
    margin-left: -2rem;
    padding: 0;
    padding-left: 1.5rem;
  }
`

export const TermsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &.invalid {
    border-radius: 6px;
    outline: 0.15rem solid rgba(200, 20, 80, 0.4);
  }
`

export const SubmitBtn = styled.button`
  height: 50px; 
  color: white !important;
  background-color: ${colors.navy} !important;
  border-radius: 40px;
  border: none;
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

export const CloseBtn = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  background-color: ${colors.navy} !important;
  color: white;
  border-radius: 10px 16px 0px 10px;
  border: none;
  width: 100px;
  height: 40px;
  margin-right: -12px;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    cursor: pointer;
    border: none;
    box-shadow: none;
  }
  &:active {
    border: 0.1rem solid rgba(255, 255, 255, 0.8);
  }
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  background-color: rgba(255, 255, 255, 1);
  width: 20px;
  height: 20px;
  border: 0.15rem solid rgba(0, 0, 0, 0.2);
  outline: 0px !important;
  -webkit-appearance:none !important;
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  box-shadow: none !important;
  &:hover {
    border: 0.15rem solid rgba(0, 0, 0, 0.4);
    cursor: pointer;

  }
  &:focus {
    border: 0.15rem solid rgba(0, 0, 0, 0.4);
    cursor: pointer;

  }
  &:checked {
    border: 0.15rem solid rgba(0, 0, 0, 0.4);
    background-color: black;
  }
`