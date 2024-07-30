import React from "react";
import "./Loader.css";

export function Loader({ size = 100 }) {
  return (
    <div
      className="spinner"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <span style={{ height: `${size / 5}px` }}></span>
      <span style={{ height: `${size / 5}px` }}></span>
      <span style={{ height: `${size / 5}px` }}></span>
      <span style={{ height: `${size / 5}px` }}></span>
    </div>
  );
}
