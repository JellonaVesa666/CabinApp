import styled from 'styled-components';
import signMinus from "../images/sign_minus.png";
import iconDropdown from "../images/icon_dropdown.png";
import { colors } from './Colors';

export const SearchCardBody = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`

export const Container = styled.div`
  margin-top: ${props => (props.margintop)};
  margin-left: ${props => (props.marginLeft)};
`

export const CardHeader = styled.p`
  display: flex;
  margin: auto;
  padding: 0;
  margin-top: ${props => (props.margintop)};
  margin-bottom: ${props => (props.marginbottom)};
  padding-left: ${props => (props.paddingleft)};
  width: ${props => (props.width)};
  text-transform: capitalize;
  font-weight: ${props => (props.weight)};
  font-size: ${props => (`${props.size}rem`)};
  &.isActive {
    background-color: rgba(0, 0, 0, 0.25);
  }
`

export const CardList = styled.ul`
  width: 100%;
  list-style-type: none;
  padding: 0;
  margin: 0;
  padding-left: ${props => (props.paddingleft)};
  padding-right: ${props => (props.paddingright)};
`

export const CardBody = styled.li`
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
  background-color: ${colors.whiteDark};
  &.dropdownActive {
    flex-flow: row wrap;
    height: 100%;
  }
  &:first-child {
    margin-top: ${props => (props.margintop)};
  }
  &:nth-child(2n) {
    background-color: ${colors.whiteLight};
  }
`

export const ListItem = styled.li`
  width: 90%;
  border-radius: 8px;
  color: black;
  margin: auto;
  padding: 0;
  padding-left: ${props => (props.paddingleft)};
  margin-top: ${props => (props.margintop)};
  margin-bottom: ${props => (props.marginbottom)};
  border: 1.5px solid rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.5);
  color: rgba(0, 0, 0, 0.4);
  &.selected {
    background-color: #8cbbea !important;
    color: black;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.75);
    cursor: pointer;
    color: black;
  }
`

export const AddButton = styled.input`
  background-color: ${colors.grey};
  color: whitesmoke;
  width: 100%;
  height: 25px;
  border-radius: 10px;
  margin: 0;
  padding: 0;
  margin-top: ${props => (props.margintop)};
  cursor: pointer;
  border: none;
  box-shadow: none;
`

export const MinusSign = styled.div`
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background-image: url(${signMinus});
  width: ${props => (props.width)};
  height: 20px;
  margin: auto;
`

export const DropDown = styled.div`
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background-image: url(${iconDropdown});
  width: ${props => (props.width)};
  height: 20px;
  margin: auto;
`