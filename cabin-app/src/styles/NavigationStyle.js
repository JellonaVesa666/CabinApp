import styled from 'styled-components'
import { colors } from "./Colors";

export const NavigationBody = styled.nav.attrs({
  className: "navbar navbar-expand-lg",
})`
  overflow: hidden;
  background-color: ${colors.white};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
`

export const NavigationContainer = styled.div.attrs({
  className: "container-fluid",
})`
`

export const NavigationLogo = styled.a.attrs({
  className: "navbar-brand",
})`
  background-color: ${colors.lightGrey}
`

export const NavigationList = styled.ul.attrs({
  className: "navbar-nav flex-nowrap",
})`
`

export const NavigationLink = styled.li.attrs({
  className: "nav-item",
})`
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