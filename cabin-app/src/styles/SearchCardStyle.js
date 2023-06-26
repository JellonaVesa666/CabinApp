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
  margin-top: ${props => (props.marginTop)};
  &.dropdownActive {
    flex-flow: row wrap;
    height: 100%;
  }
`

export const ListItem = styled.li`
  width: 90%;
  border-radius: 5px;
  color: black;
  margin: auto;
  padding: 0;
  padding-left: ${props => (props.paddingLeft)};
  margin-top: ${props => (props.marginTop)};
  margin-bottom: ${props => (props.marginBottom)};
  &.selected {
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
  }
`

export const AddButton = styled.input`
  background-color: rgba(0, 0, 0, 1);
  color: whitesmoke;
  width: 80%;
  height: 40px;
  margin: auto;
  padding: auto;
  border-radius: 20px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  margin-top: ${props => (props.marginTop)};
`

export const PlusSign = styled.div`
  position: absolute;
  bottom: 0;
  left: 75%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background-image: url(${signPlus});
  width: 10%;
  height: 40px;
  padding: 0;
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
  height: 30px;
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
  height: 30px;
  margin: auto;
`