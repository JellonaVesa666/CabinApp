import styled from 'styled-components'
import backgroundForest from "../images/background_forest.jpg";
import backgroungCabin from "../images/background_cabin.jpg";
import logoLight from "../images/logo_Light.png";

export const BodyBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 80%;
  width: 100%;
  background-image: url(${backgroundForest});
  background-size: cover;
`

export const LoginBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url(${backgroungCabin});
  background-size: cover;
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