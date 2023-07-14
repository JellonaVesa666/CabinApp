import styled from 'styled-components'
import logoDark from "../images/logo_Dark.png";
import { colors } from './Colors';

export const NavbarBody = styled.div`
  background-color: ${colors.white};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;   
`

export const NavbarLogo = styled.a`
  > img {
  background: url(${logoDark}) no-repeat;
  position: absolute;
  width: 360px;
  height: 220px;
  bottom: 0;
  left: 0;
  padding: 0;
  margin: 0;
  } 
`

export const NavbarDropdown = styled.ul`
  min-width: 100% !important;
  text-align: center;
  border-radius: 0px 0px 10px 10px;
  border: none;
  &.show {
    display: flex;
    justify-content: center;
  }
`

export const NavbarDropdownItem = styled.a`
  border: 2px solid transparent;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`

export const NavbarAnchor = styled.a`
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  position: relative;
  color: black;
  &:after {    
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: black;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after { 
    width: 100%; 
    left: 0; 
  }
`