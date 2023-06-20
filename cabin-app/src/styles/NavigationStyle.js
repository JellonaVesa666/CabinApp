import styled from 'styled-components'
import iconCabins from "../images/icon_cabins.png";
import iconUsers from "../images/icon_users.png";
import iconReservations from "../images/icon_reservations.png";
import iconSettings from "../images/icon_settings.png";
import iconMap from "../images/icon_map.png";
import iconLogout from "../images/icon_logout.png";
import iconUser from "../images/icon_user.png";

export const NavigationBody = styled.div`
  position: fixed;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding-top: 5vh;
  padding-bottom: 5vh;
  width: 18vw;
  @media screen and (max-width: 1024px) {
    transition: .2s all linear;
    width: 50vw;
  }
`

export const NavigationContainer = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  height: 100%;
  &.hide {
    width: 25%;
  }
  &.show {
    width: 100%;
  }
`

export const Navigation = styled.div`
  margin: auto;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: 0.1vw solid rgba(255, 255, 255, 0.4);
  height: 98%;
  &.hide {
    width: 75%;
  }
  &.show {
    margin-left: 3%;
    width: 24%;
  }
`

export const NavigationLink = styled.div`
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  width: 40%;
  height: 5%;
  padding: 0;
  margin-top: 20%;
  &.user {
    width: 80%;
    height: 100%;
    margin-top: 0%;
    margin-bottom: 0%;
    background-image: url(${iconUser});
  }
  &.cabins {
    background-image: url(${iconCabins});
  }
  &.users {
    background-image: url(${iconUsers});
  }
  &.reservations {
    background-image: url(${iconReservations});
  }
  &.map {
    background-image: url(${iconMap});
  }
  &.settings {
    background-image: url(${iconSettings});
  }
  &.logout {
    width: 50%;
    height: 100%;
    margin-top: 0%;
    margin-bottom: 0%;
    background-image: url(${iconLogout});
  }
`