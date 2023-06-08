import React, { useState, useCallback } from 'react';
import map from "./images/revised-campground-map-without-tents.png"
import cabins from "./test/testData.json"
import './App.css';

function App() {
  const [markerPos, SetMarkerPos] = useState(0);
  const [initialize, SetInitialize] = useState(false);

  const imgRef = useCallback((node) => {
    if (node !== null) {
      if (!initialize) {
        const promise = new Promise((resolve) =>
          setTimeout(() => resolve(node.getBoundingClientRect())
            , 500));

        // Initialize windowSize
        promise.then((result) => {
          if (result) {
            CalculateMarkerPos(node);
            SetInitialize(true);
          }
        });
      }
      else {
        // Update windowSize
        const updateDimension = () => {
          CalculateMarkerPos(node);
        }
        window.addEventListener('resize', updateDimension);
      }
    }
  }, [initialize]);

  const CalculateMarkerPos = (node) => {
    const boundingBox = node.getBoundingClientRect();
    const X = ((boundingBox.right - boundingBox.left) * cabins.cabins[0].y) + boundingBox.left;
    const Y = ((boundingBox.bottom - boundingBox.top) * cabins.cabins[0].x) + boundingBox.top;

    SetMarkerPos({
      x: X,
      y: Y,
    })
  }

  return (
    <div style={{ position: "relative" }}>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <img ref={imgRef} src={map} alt=""
          style={{ width: "70%", marginTop: "100px" }} />
      </div>
      <div style={circle(markerPos)} />
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
  top: markerPos.y,
});

export default App;