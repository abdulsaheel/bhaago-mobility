"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";

const CurvedPathEditor = () => {
  const [strokeWidth, setStrokeWidth] = useState(10);
  const [dashArray, setDashArray] = useState("15 10");
  const [opacity, setOpacity] = useState(0.66);
  const [points, setPoints] = useState([
    { x: 50, y: 50 },
    { x: 150, y: 200 },
    { x: 250, y: 100 },
  ]);

  const handleDrag = (index: number, e: React.MouseEvent<SVGCircleElement, MouseEvent>) => {
    const newPoints = [...points];
    newPoints[index] = { x: e.clientX, y: e.clientY };
    setPoints(newPoints);
  };

  const addPoint = () => {
    setPoints([...points, { x: 100, y: 300 }]);
  };

  const pathD = `M${points.map((p) => `${p.x},${p.y}`).join(" L ")}`;

  return (
    <div className="relative w-full h-screen bg-gray-200 flex flex-col items-center p-4">
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity }}
      >
        <path d={pathD} stroke="#FFFFFF" strokeWidth={strokeWidth + 5} strokeLinecap="round" />
        <path d={pathD} stroke="#FFCBA3" strokeWidth={strokeWidth} strokeLinecap="round" strokeDasharray={dashArray} />
        {points.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={5}
            fill="red"
            className="cursor-pointer"
            onMouseDown={(e) => handleDrag(i, e)}
          />
        ))}
      </svg>
      
      <div className="absolute bottom-10 bg-white p-4 rounded-lg shadow-md flex flex-col space-y-2">
        <button onClick={addPoint} className="bg-blue-500 text-white px-4 py-2 rounded">Add Turn</button>
        <label>
          Stroke Width: 
          <input type="range" min="5" max="30" value={strokeWidth} onChange={(e) => setStrokeWidth(Number(e.target.value))} />
        </label>
        <label>
          Dash Array: 
          <input type="text" value={dashArray} onChange={(e) => setDashArray(e.target.value)} />
        </label>
        <label>
          Opacity: 
          <input type="range" min="0.1" max="1" step="0.1" value={opacity} onChange={(e) => setOpacity(Number(e.target.value))} />
        </label>
      </div>
    </div>
  );
};

export default CurvedPathEditor;
