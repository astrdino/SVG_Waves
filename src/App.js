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

  const [patMidPt, setPattMidPt] = useState(0);

  const [mouseCoordinate, setMouseCoordinate] = useState({
    x: 0,
    y: 0,
  });

  const [dynamic, setDynamic] = useState({
    color: "red",
    floatOffset: 0,
  });

  //component

  const Create = ({ ctrl, x, strWidth, color, expansion }) => {
    var test = (14 * windowSize.height) / 32 - expansion;

    if (test < 0) {
      test += expansion;
    } else {
      test = (14 * windowSize.height) / 32 - expansion;
    }
    return (
      <>
        <line
          x1={`${(x * windowSize.width) / 32}px`}
          y1="0"
          x2={`${(x * windowSize.width) / 32}px`}
          y2={`${(14 * windowSize.height) / 32 - expansion}px`}
          stroke={color}
          strokeWidth={strWidth}
        ></line>

        <line
          x1={`${(x * windowSize.width) / 32}px`}
          y1={`${(18 * windowSize.height) / 32 + expansion}px`}
          x2={`${(x * windowSize.width) / 32}px`}
          y2={`${(32 * windowSize.height) / 32}px`}
          stroke={color}
          strokeWidth={strWidth}
        ></line>

        <line
          x1={`${(x * windowSize.width) / 32}px`}
          y1={`${(14 * windowSize.height) / 32 - expansion}px`}
          x2={`${(x * windowSize.width) / 32 + 20}px`}
          y2={`${(14 * windowSize.height) / 32 - expansion}px`}
          stroke={color}
          strokeWidth={strWidth}
        ></line>
        <line
          x1={`${(x * windowSize.width) / 32}px`}
          y1={`${(18 * windowSize.height) / 32 + expansion}px`}
          x2={`${(x * windowSize.width) / 32 + 20}px`}
          y2={`${(18 * windowSize.height) / 32 + expansion}px`}
          stroke={color}
          strokeWidth={strWidth}
        ></line>
        <line
          x1={`${(x * windowSize.width) / 32 + 20}px`}
          y1={`${test}px`}
          x2={`${(x * windowSize.width) / 32 + 20}px`}
          y2={`${(18 * windowSize.height) / 32 + expansion}px`}
          stroke={"red"}
          strokeWidth={strWidth}
        ></line>
      </>
    );
  };

  // useEffect(() => {
  //   const handleMouseMove = (event) => {
  //     setMouseCoordinate({ x: event.clientX, y: event.clientY });

  //     if (mouseCoordinate.y > 328 && mouseCoordinate.y < 420) {
  //       setDynamic({ color: "blue", floatOffset: 105 });
  //     } else {
  //       setDynamic({ color: "red", floatOffset: 100 });
  //     }

  //     // console.log(mouseCoordinate);
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);
  //   // Cleanup event listener on component unmount
  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // });

  return (
    <svg width={`${windowSize.width}px`} height={`${windowSize.height}px`}>
      {Array.from({ length: 17 }).map((_, index) => (
        <Create
          key={index}
          x={index}
          strWidth={"3"}
          color={"black"}
          expansion={index * 20}
        />
      ))}

      {/* {create(1, 15)} */}
    </svg>
  );
}

export default App;
