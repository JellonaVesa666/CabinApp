import styled from 'styled-components'
import iconCabins from "../images/icon_cabins.png";
import iconUsers from "../images/icon_users.png";
import iconReservations from "../images/icon_reservations.png";
import iconSettings from "../images/icon_settings.png";
import iconMap from "../images/icon_map.png";
import iconLogout from "../images/icon_logout.png";
import iconUser from "../images/icon_user.png";
import {colors} from "./Colors";

export const NavigationBody = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100vh;
  width: 18vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
  @media (max-width: 1200px) {
    width: 30vw;
  }
  @media (max-width: 600px) {
    width: 50vw;
  }
`

export const Navigation = styled.div`
  z-index: 2;
  align-self: center;
  background-color: ${colors.navy};
  height: 90%;
  width: 20%;
  margin-left: 5%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  &.hide {
    border-radius: 10px 0px 0px 10px;
  }
  &.show {
    border-radius: 10px 10px 10px 10px;
  }
`

export const NavigationExtend = styled.div`
  z-index: 1;
  align-self: center;
  height: 90%;
  border-radius: 0px 10px 10px 0px;
  overflow: hidden;
  padding: 0;
  margin: 0;
  scrollbar-gutter: stable;
  &:hover {
    overflow-y: auto;
  }
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 100px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #72b3d1;
    border-radius: 100px;
  }
  &.hide {
    width: 0%;
    transition: 0.1s ease-in-out;
  }
  &.show {
    transition: 0.1s ease-in-out;
    margin-right: 5%;
    padding-left: 10px;
    width: 70%;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
  }
`

export const NavigationLink = styled.div`
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  width: 32px;
  height: 4%;
  padding: 0;
  margin-top: 2vh;
  &.user {
    background-image: url(${iconUser});
    width: 70px;
    height: 100%;
    margin: 0;
    @media (max-width: 1200px) {
      width: 50px;
    }
    @media (max-width: 600px) {
      width: 60px;
    }
  }
  &.reservations {
    background-image: url(${iconReservations});
  }
  &.users {
    background-image: url(${iconUsers});
  }
  &.cabins {
    background-image: url(${iconCabins});
  }
  &.map {
    background-image: url(${iconMap});
  }
  &.settings {
    background-image: url(${iconSettings});
  }
  &.logout {
    background-image: url(${iconLogout});
    width: 40px;
    height: 100%;
    @media (max-width: 1200px) {
      width: 30px;
    }
    @media (max-width: 600px) {
      width: 20px;
    }
  }
  &.selected {
    background-color: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.6);
    border-radius: 10px;
    padding: 0px 35px 0px 35px;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.6);
    border-radius: 10px;
    padding: 0px 35px 0px 35px;
  }
`