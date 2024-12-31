import React from "react";

export default function Cover({ img, title, subtitle, bgColor }) {
  return (
    <div
      className="hero p-12"
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "top right",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-content w-full text-neutral-content text-center">
        <div className={` ${bgColor} p-20 w-full`}>
          <h1 className="mb-5 text-4xl  font-medium">{title}</h1>
          <p className="mb-5 w-3/5 mx-auto ">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
