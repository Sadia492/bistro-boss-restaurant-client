import React from "react";

export default function MenuCard({ item }) {
  const { name, image, price, recipe } = item;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="w-full">
        <img src={image} alt="Shoes" className="w-full" />
      </div>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-outline border-yellow-500 text-yellow-500 border-0 border-b-4 mt-4">
            View Full Menu
          </button>{" "}
        </div>
      </div>
    </div>
  );
}
