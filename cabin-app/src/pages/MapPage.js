import React, { useState, useCallback } from 'react';
import map from "./images/revised-campground-map-without-tents.png"
import cabins from "../mockup/mapData.json"
import './App.css';

export default function Map() {
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

    const boundingBox = node.target ? node.target.getBoundingClientRect() : node.getBoundingClientRect()
    var X, Y;

    // Mouse click event
    if (node.target) {

      console.log(node.target);

      X = (node.clientX - boundingBox.left) / boundingBox.width;
      Y = (node.clientY - boundingBox.top) / boundingBox.height;

      console.log(X, Y);

      // Set new coordinates
      cabins.cabins[0].x = X;
      cabins.cabins[0].y = Y;

      console.log(((boundingBox.right - boundingBox.left) * cabins.cabins[0].x) + boundingBox.left);
      console.log(((boundingBox.bottom - boundingBox.top) * cabins.cabins[0].y) + boundingBox.top);
    }

    X = ((boundingBox.right - boundingBox.left) * cabins.cabins[0].x) + boundingBox.left;
    Y = ((boundingBox.bottom - boundingBox.top) * cabins.cabins[0].y) + boundingBox.top;

    SetMarkerPos({
      x: X,
      y: Y,
    })
  }

  return (
    <div style={{ position: "relative" }}>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <img ref={imgRef} src={map} alt="" onClick={(event) => CalculateMarkerPos(event)}
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