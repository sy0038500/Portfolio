import React, { useState } from 'react';
import './ClickSpark.css';

export default function ClickSpark({ children }) {
  const [sparks, setSparks] = useState([]);

  const handleClick = (e) => {
    const newSpark = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    };

    setSparks((prev) => [...prev, newSpark]);

    setTimeout(() => {
      setSparks((prev) => prev.filter((spark) => spark.id !== newSpark.id));
    }, 650);
  };

  return (
    <div className="click-spark-area" onClick={handleClick}>
      {children}

      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="click-spark"
          style={{
            left: `${spark.x}px`,
            top: `${spark.y}px`,
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      ))}
    </div>
  );
}