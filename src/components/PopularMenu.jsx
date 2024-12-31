import React, { useEffect, useState } from "react";
import SectionTitle from "../shared/SectionTitle";

import MenuItem from "../shared/MenuItem";
import useCategoryData from "../hooks/useCategoryData";

export default function PopularMenu() {
  const { data: popular, loading, error } = useCategoryData("popular");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="my-12">
      <SectionTitle
        title={"FROM OUR MENU"}
        subtitle={"---Check it out---"}
      ></SectionTitle>
      <div className="grid grid-cols-2 gap-6 w-4/5 mx-auto my-6">
        {popular?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          View Full Menu
        </button>
      </div>
    </div>
  );
}
