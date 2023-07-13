import styled from 'styled-components'
import { colors } from "./Colors";
import logoDark from "../images/logo_Dark.png";

export const NavigationContainer = styled.div.attrs({
  className: "container-fluid",
})`
`

export const NavigationLogo = styled.a.attrs({
  className: "navbar-brand",
})`
> img {
  background: url(${logoDark}) no-repeat;
  position:absolute;
  width: 360px;
  height: 220px;
  bottom: 0;
  left: 0;
  padding: 0;
  margin: 0;
} 
`

export const NavigationList = styled.ul.attrs({
  className: "navbar-nav flex-nowrap",
})`
`

export const NavigationLink = styled.li.attrs({
  className: "nav-item",
})`
`

export const NavigationDropdown = styled.ul.attrs({
  className: "dropdown-menu",
})`
  min-width: 100% !important;
  text-align: center;
  border-radius: 0px 0px 10px 10px;
  border: none;
  &.show {
    display: flex;
    justify-content: center;
  }
`

export const NavigationDropdownItem = styled.a.attrs({
  className: "dropdown-item",
})`
  border: 2px solid transparent;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`

export const NavigationAnchor = styled.a.attrs({
  className: "nav-link my-2 mx-4 menu-item",
})`
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