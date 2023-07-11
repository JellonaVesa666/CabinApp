import styled from 'styled-components'
import { colors } from "./Colors";

export const NavigationBody = styled.div.attrs({
  className: 'd-flex col-12',
  })`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 4.5vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: ${colors.white};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
`

export const NavigationContainer = styled.div.attrs({
  className: 'd-flex col-10',
  })`
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const NavigationLogo = styled.div.attrs({
  className: 'd-flex col-2',
  })`
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${colors.lightGrey}
`

export const NavigationList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-left: ${props => (props.marginleft)};
`

export const NavigationLink = styled.li`
  display: inline; 
  padding: 10px 10px;
`

export const NavigationAnchor = styled.a`
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  display: inline-block;
  padding: 6px 20px;
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