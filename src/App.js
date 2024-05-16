import { useState, useEffect } from "react";
import "./App.css";

function App() {
  function randomColor() {
    console.log(Math.random());
  }

  const [windowSize, setWindwoSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [offset, setOffset] = useState(10);

  //component

  const Create = ({ ctrl, x, strWidth, color }) => (
    <>
      <line
        x1={`${(x * windowSize.width) / 32}px`}
        y1="0"
        x2={`${(x * windowSize.width) / 32}px`}
        y2={`${(14 * windowSize.height) / 32}px`}
        stroke={color}
        strokeWidth={strWidth}
      ></line>

      <line
        x1={`${(x * windowSize.width) / 32}px`}
        y1={`${(18 * windowSize.height) / 32}px`}
        x2={`${(x * windowSize.width) / 32}px`}
        y2={`${(32 * windowSize.height) / 32}px`}
        stroke={color}
        strokeWidth={strWidth}
      ></line>

      <line
        x1={`${(x * windowSize.width) / 32}px`}
        y1={`${(14 * windowSize.height) / 32}px`}
        x2={`${(x * windowSize.width) / 32 + 20}px`}
        y2={`${(14 * windowSize.height) / 32}px`}
        stroke={color}
        strokeWidth={strWidth}
      ></line>
      <line
        x1={`${(x * windowSize.width) / 32}px`}
        y1={`${(18 * windowSize.height) / 32}px`}
        x2={`${(x * windowSize.width) / 32 + 20}px`}
        y2={`${(18 * windowSize.height) / 32}px`}
        stroke={color}
        strokeWidth={strWidth}
      ></line>
      <line
        x1={`${(x * windowSize.width) / 32 + 20}px`}
        y1={`${(14 * windowSize.height) / 32}px`}
        x2={`${(x * windowSize.width) / 32 + 20}px`}
        y2={`${(18 * windowSize.height) / 32}px`}
        stroke={color}
        strokeWidth={strWidth}
      ></line>
    </>
  );

  return (
    <svg width={`${windowSize.width}px`} height={`${windowSize.height}px`}>
      {Array.from({ length: 3 }).map((_, index) => (
        <Create key={index} x={index} strWidth={"3"} color={"black"} />
      ))}

      {/* {create(1, 15)} */}
    </svg>
  );
}

export default App;
