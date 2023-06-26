import styled from 'styled-components';
import signPlus from "../images/sign_plus.png";
import signMinus from "../images/sign_minus.png";
import iconDropdown from "../images/icon_dropdown.png";

export const SearchCardBody = styled.div`
  width: 85%;
  height: 100%;
  margin: auto;
`

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: ${props => (props.marginTop)};
  margin-left: ${props => (props.marginLeft)};
`

export const CardHeader = styled.p`
  text-align: ${props => (props.alignCenter ? "center" : "")};
  margin: auto;
  padding-left: ${props => (props.paddingLeft)};
  width: ${props => (props.width)};
  text-transform: capitalize;
  &.isActive {
    background-color: rgba(0, 0, 0, 0.25);
  }
`

export const CardList = styled.ul`
  width: 100%;
  list-style-type: none;
  padding: 0;
  margin: 0;
  padding-left: ${props => (props.paddingLeft)};
  padding-right: ${props => (props.paddingRight)};
`

export const CardBody = styled.li`
  display: flex;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.25);
  color: black;
  margin: 0;
  padding: 0;
  padding-top: 4px;
  padding-bottom: 4px;
  margin-top: ${props => (props.marginTop)};
  &.dropdownActive {
    flex-flow: row wrap;
    height: 100%;
  }
`

export const ListItem = styled.li`
  width: 90%;
  border-radius: 8px;
  color: black;
  margin: auto;
  padding: 0;
  padding-left: ${props => (props.paddingLeft)};
  margin-top: ${props => (props.marginTop)};
  margin-bottom: ${props => (props.marginBottom)};
  border: 1.5px solid rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.5);
  color: rgba(0, 0, 0, 0.4);
  &.selected {
    background-color: rgba(255, 255, 255, 0.75) !important;
    color: black;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.75);
    cursor: pointer;
    color: black;
  }
`

export const AddButton = styled.input`
  background-color: rgba(0, 0, 0, 0.4);
  color: whitesmoke;
  width: 100%;
  height: 25px;
  border-radius: 10px;
  margin: 0;
  padding: 0;
  margin-top: ${props => (props.marginTop)};
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