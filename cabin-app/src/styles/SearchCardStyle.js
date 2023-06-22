import styled from 'styled-components';
import signPlus from "../images/sign_plus.png";
import signMinus from "../images/sign_minus.png";
import iconDropdown from "../images/icon_dropdown.png";

export const SearchCardBody = styled.div`
  width: 100%;
  height: 100%;
  //background-color: red;
`

export const Container = styled.div`
  position: relative;
  display: flex;
  padding-left: ${props => (props.paddingLeft)};
  margin-top: ${props => (props.marginTop)};
`

export const CardHeader = styled.p`
  text-align: ${props => (props.alignCenter ? "center" : "")};
  margin: auto;
  padding: auto;
  margin-left: ${props => (props.marginLeft)};
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
  flex-flow: row wrap;
  width: 80%;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.4);
  color: black;
  margin: auto;
  padding: 0;
  margin-top: ${props => (props.marginTop)};
`

export const ListItem = styled.li`
  width: 100%;
  border-radius: 8px;
  color: black;
  margin: 0;
  padding: 0;
  margin-top: ${props => (props.marginTop)};
  &.selected {
    background-color: darkviolet;
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

export const AddSign = styled.div`
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

export const RemoveSearchCard = styled.div`
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background-image: url(${signMinus});
  width: ${props => (props.width)};
  height: 40px;
  padding: 0;
  margin: 0;
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
  height: 40px;
  padding: 0;
  margin: 0;
`