import React, { useState, useEffect, useRef, useCallback } from 'react';
import map from "./images/revised-campground-map-without-tents.png"
import './App.css';

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

function App() {

  // Window size
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  //Mouse Position
  const [mousePos, setMousePos] = useState({});

  const imgRef = useRef();


  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  useEffect(() => {

    setCount(() => getCurrentDimension().width);
    console.log(Math.round((getCurrentDimension().width / prevCount) * (mousePos.x / prevCount * prevCount)));
    setMousePos({x: Math.round((getCurrentDimension().width / prevCount) * (mousePos.x / prevCount * prevCount)), y: mousePos.y})

    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    }
    window.addEventListener('resize', updateDimension);

    return (() => {
      window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])


  //console.log(mousePos.x / window.screen.width * screenSize.width);


  const getMousePosition = (event) => {
    setMousePos({ x: event.clientX, y: event.clientY });
  };


  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <img ref={imgRef} src={map} alt="" onClick={(event) => getMousePosition(event)}
        style={{ zIndex: -1, width: "100%", top: 0, left: 0, right: 0, bottom: 0, resizeMode: 'cover' }} />
      <div style={circle(screenSize, mousePos)} />
      {/* <h1>{1 * multiplier.x}</h1> */}
      <h1>{1 * screenSize.width}</h1>
      <h2>left: {mousePos.x / screenSize.width * screenSize.width}</h2>
      <h2>top: {mousePos.y / screenSize.height * screenSize.height}</h2>
      <h2>leftFixed: {Math.round(1000 / window.screen.width * screenSize.width)}</h2>
      <h2>topFixed: {Math.round(40 / window.screen.height * screenSize.height)}</h2>
    </div>
  );
}

const circle = (screenSize, mousePos) => ({
  position: "absolute",
  margin: "auto",
  width: "1vw",
  aspectRatio: 1 / 1,
  borderRadius: 22,
  background: "red",
  left: 1000 / window.screen.width * screenSize.width,
  top: 40 / window.screen.height * screenSize.height,
});

export default App;