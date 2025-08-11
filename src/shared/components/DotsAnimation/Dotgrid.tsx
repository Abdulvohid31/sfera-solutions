import React from "react";
import "./Dots.css";

export default function DotGrid({ row, col, time }: any) {
  const rows = row;
  const cols = col;

  return (
    <div className="dot-grid z-10">
      {Array.from({ length: rows * cols }).map((_, i) => (
        <span
          key={i}
          style={{
            animationDelay: `${i * 0.5}s`,
          }}
        ></span>
      ))}
    </div>
  );
}
