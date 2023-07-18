import styled from 'styled-components'
import { colors } from './Colors';

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