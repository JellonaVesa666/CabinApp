import styled from 'styled-components'
import backgroundGray from "../images/background_Gray.png";
import logoLight from "../images/logo_Light.png";

export const MainBody = styled.div`
  position: relative;
  background: url(${backgroundGray}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  box-shadow:inset 0px 0px 80vw #333;
`

export const Logo = styled.div`
  background: url(${logoLight}) no-repeat;
  position:absolute;
  width: 360px;
  height: 220px;
  bottom: 3%;
  left: 2%;
  padding: 0;
  margin: 0;
`