import styled from 'styled-components'
import campingLogo from "../images/camping_Logo.png";
import iconCabins from "../images/icon_cabins.png";
import iconUsers from "../images/icon_users.png";
import iconReservations from "../images/icon_reservations.png";
import iconSettings from "../images/icon_settings.png";
import iconMap from "../images/icon_map.png";
import iconLogout from "../images/icon_logout.png";
import iconUser from "../images/icon_user.png";

export const NavigationBody = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x:hidden;
  width: 15rem;
  height: 100vh;
  margin: 0;
  padding: 0;
`
export const NavExtendContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  left: 8%;
  width: 50%;
  height: 90%;
`

export const NavigationContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: 0.15rem solid rgba(255, 255, 255, 0.4);
  left: 1rem;
  width: 100%;
  height: 98%;
`

export const NavigationLink = styled.div`
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  width: 100%;
  height: 2.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  &.user {
    height: 4.5rem !important;
    margin-top: 1rem !important;
    margin-bottom: 4rem !important;
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
    position: absolute;
    bottom: 0;
    left: 0;
    margin-bottom: 3rem;
    background-image: url(${iconLogout});
  }
`