import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="h-screen flex justify-center items-center">
      <progress className="progress w-56"></progress>
    </div>
  );
}
