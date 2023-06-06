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

  //Marker Position
  const [markerPos, setMarkerPos] = useState({});

  const imgRef = useRef();


  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  useEffect(() => {

    setCount(() => getCurrentDimension().width);
    setMarkerPos({ x: Math.round((getCurrentDimension().width / prevCount) * markerPos.x), y: markerPos.y })

    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    }
    window.addEventListener('resize', updateDimension);

    return (() => {
      window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])


  //console.log(mousePos.x / window.screen.width * screenSize.width);


  const getMarkerPosition = (event) => {
    setMarkerPos({
      x: Math.round(event.clientX / screenSize.width * screenSize.width),
      y: Math.round(event.clientY / screenSize.height * screenSize.height)
    });
  };


  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <img ref={imgRef} src={map} alt="" onClick={(event) => getMarkerPosition(event)}
        style={{ zIndex: -1, width: "100%", top: 0, left: 0, right: 0, bottom: 0, resizeMode: 'cover' }} />
      <div style={circle(markerPos)} />
      {/* <h1>{1 * multiplier.x}</h1> */}
      <h1>{1 * screenSize.width}</h1>
      <h2>left: {1 * markerPos.x}</h2>
      <h2>top: {1 * markerPos.y}</h2>
      <h2>leftFixed: {Math.round(1000 / window.screen.width * screenSize.width)}</h2>
      <h2>topFixed: {Math.round(40 / window.screen.height * screenSize.height)}</h2>
    </div>
  );
}

const circle = (markerPos) => ({
  position: "absolute",
  margin: "auto",
  width: "1vw",
  aspectRatio: 1 / 1,
  borderRadius: 22,
  background: "red",
  left: markerPos.x,
  top: 0,
});

export default App;