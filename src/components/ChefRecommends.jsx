import React from "react";
import SectionTitle from "../shared/SectionTitle";
import useCategoryData from "../hooks/useCategoryData";
import MenuCard from "../shared/MenuCard";

export default function ChefRecommends() {
  const { data } = useCategoryData("salad");
  console.log(data);
  return (
    <div className="w-4/5 mx-auto">
      <SectionTitle
        title={"CHEF RECOMMENDS"}
        subtitle={"---Should Try---"}
      ></SectionTitle>

      <div className="grid grid-cols-3 mt-4 gap-6">
        {data?.slice(0, 3)?.map((item) => (
          <MenuCard item={item}></MenuCard>
        ))}
      </div>
    </div>
  );
}
