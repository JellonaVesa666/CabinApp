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
export const CardBody = styled.li`
  background-color: ${colors.whiteDark};
  &.dropdownActive {
    height: 100%;
  }
  &:nth-child(2n) {
    background-color: ${colors.white};
  }
`
export const CardLabel = styled.div`
  font-weight: 400;
  font-size: 16px;
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

export const AddButton = styled.div`
  color: ${colors.whiteDark};
  background-color: ${colors.black};
  border-radius: 0px 10px 10px 0px;
  border: 2px solid ${colors.grey};
  border-left-style: none;
  cursor: pointer;
  > p {
    font-size: 10px;
    margin: auto;
  }
`

export const BodyTopContainer = styled.div`
  height: 30%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) -50%, rgba(0, 0, 0, 0) 100%);
`

export const Sidebar = styled.div`
  background-color: ${colors.white};
  position: -webkit-sticky;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  top:4.7%;
  width: 25%;
  height: 95.3vh;

  @media only screen and (min-width: 1400px) and (max-width: 1500px) {
    width: 26%;
  }

  @media only screen and (min-width: 1500px) and (max-width: 1900px) {
    width: 23%;
  }

  @media only screen and (min-width: 1900px) and (max-width: 3000px) {
    width: 20%;
  }
`

export const SidebarFilters = styled.div`
  overflow-y: scroll;
`

export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 1400px) and (max-width: 1600px) {
    width: 23%;
  }

  @media only screen and (min-width: 1600px) and (max-width: 3000px) {
    width: 40%;
  }
`