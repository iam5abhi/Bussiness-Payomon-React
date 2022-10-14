import React from "react";
import { RotatingLines } from  'react-loader-spinner'
import "./LoadingSpinner.css";

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
         <RotatingLines
          strokeColor="white"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
    </div>
  );
}