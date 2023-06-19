import styled from 'styled-components'
import iconCabins from "../images/icon_cabins.png";
import iconUsers from "../images/icon_users.png";
import iconReservations from "../images/icon_reservations.png";
import iconSettings from "../images/icon_settings.png";
import iconMap from "../images/icon_map.png";
import iconLogout from "../images/icon_logout.png";
import iconUser from "../images/icon_user.png";

export const NavigationBody = styled.div`
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
`
export const NavigationContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 18vw;
  padding-top: 5vh;
  padding-bottom: 5vh;
`

export const NavigationExtend = styled.div`
  position: relative;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0.65vw;
  height: 100%;
  &.hide {
    width: 30%;
  }
  &.show {
    width: 100%;
  }
`

export const Navigation = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 0.5vw;
  border: 0.1vw solid rgba(255, 255, 255, 0.4);
  width: 80%;
  height: 98%;
  margin-left: 0.5vw;
`

export const NavigationLink = styled.div`
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  width: auto;
  height: 1.5vw;
  margin-top: 1vw;
  margin-bottom: 1vw;
  &.user {
    margin-top: 0.5vw;
    margin-bottom: 2.5vw;
    width: auto;
    height: 3vw;
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
    margin-top: 24vw;
    background-image: url(${iconLogout});
  }
`