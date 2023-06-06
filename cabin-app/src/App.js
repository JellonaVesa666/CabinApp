import React, { useState, useEffect, useRef } from 'react';
import map from "./images/revised-campground-map-without-tents.png"
import './App.css';


function App() {

  // Window size
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  //Mouse Position
  const [mousePos, setMousePos] = useState({});

  const imgRef = useRef();

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([imgRef.current.clientWidth, imgRef.current.clientHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      console.log(event.clientX, event.clientY)
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('click', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove',handleMouseMove);
    };
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <img ref={imgRef} src={map}
        style={{ zIndex: -1, width: "100%", top: 0, left: 0, right: 0, bottom: 0, resizeMode: 'cover' }} />
      <div style={circle(windowSize, mousePos)} />
      <h2>left: {1000 / window.screen.width * windowSize[0]}</h2>
      <h2>top: {40 / window.screen.height * windowSize[1]}</h2>
    </div>
  );
}

const circle = (windowSize, mousePos) => ({
  aspectRatio: 1 / 8,
  position: "absolute",
  margin: "auto",
  width: "1vw",
  aspectRatio: 1 / 1,
  borderRadius: 22,
  background: "red",
  left: mousePos.x,
  top: mousePos.y,
});

export default App;