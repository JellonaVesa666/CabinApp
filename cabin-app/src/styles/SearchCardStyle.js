import styled from 'styled-components';
import { colors } from './Colors';

export const SearchCardBody = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`

export const Container = styled.div`
  margin-top: ${props => (props.margintop)};
  margin-left: ${props => (props.marginLeft)};
`

/* overflow-y: auto;
-ms-overflow-style: none;
scrollbar-width: none;
&::-webkit-scrollbar {
  display: none;
} */

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
  background-color: ${colors.whiteDark};
  &.dropdownActive {
    flex-flow: row wrap;
    height: 100%;
  }
  &:nth-child(2n) {
    background-color: ${colors.whiteLight};
  }
`
export const CardContent = styled.div.attrs({
  className: "row  w-100 px-3 m-0 justify-content-center",
})`
  width: 100%;
  height: 100%;
`
export const CardLabel = styled.div.attrs({
  className: "d-flex col-6 justify-content-start",
})`
  font-weight: 400;
  font-size: 16px;
`
export const CardDropdown = styled.div.attrs({
  className: "d-flex col-6 justify-content-end",
})`
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
  position: absolute;
  right: 0;
  bottom: 0;
  color: ${colors.black};
  width: 80px;
  height: 30px;
  font-size: 14px;
  cursor: pointer;
`