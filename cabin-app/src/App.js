import React, { useState, useEffect, useRef } from 'react';
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
  const [windowSize, SetWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  //Marker Position
  const [markerPos, setMarkerPos] = useState({});

  const imgRef = useRef();


  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  useEffect(() => {

    setCount({
      width: window.innerWidth,
      height: imgRef.current.height,
    });

    if (prevCount) {
      console.log("true");
      setMarkerPos({
        x: Math.round(window.innerWidth / prevCount.width * markerPos.x),
        y: Math.round(imgRef.current.height / prevCount.height * markerPos.y)
      })
    }


    const updateDimension = () => {
      SetWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    window.addEventListener('resize', updateDimension);

    return (() => {
      window.removeEventListener('resize', updateDimension);
    })
  }, [windowSize])

  if (prevCount)
    console.log(imgRef.current.height / prevCount.height * markerPos.y);


  const getMarkerPosition = (event) => {
    setMarkerPos({
      x: CalculatePos(event.clientX, windowSize.width, windowSize.width),
      y: CalculatePos(event.clientY, windowSize.height, windowSize.height),
    });
  }


  const CalculatePos = (A, B, C) => {
    return Math.round(A / B * C)
  }

  return (
    <div style={{ position: "relative" }}>
      <img ref={imgRef} src={map} alt="" onClick={(event) => getMarkerPosition(event)}
        style={{ zIndex: -1, width: "100%", top: 0, left: 0, right: 0, bottom: 0, resizeMode: 'cover' }} />
      <div style={circle(markerPos)} />
      {/* <h1>{1 * multiplier.x}</h1> */}
      <h1>{1 * windowSize.width}</h1>
      <h2>left: {1 * markerPos.x}</h2>
      <h2>top: {1 * markerPos.y}</h2>
      <h2>leftFixed: {Math.round(1000 / window.screen.width * windowSize.width)}</h2>
      <h2>topFixed: {Math.round(40 / window.screen.height * windowSize.height)}</h2>
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
  left: 0,
  top: markerPos.y,
});

export default App;