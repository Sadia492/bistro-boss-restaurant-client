import React from "react";
import featuredImg from "../assets/home/featured.jpg";
import SectionTitle from "../shared/SectionTitle";

export default function Featured() {
  return (
    <div>
      <div
        className="hero min-h-screen bg-fixed"
        style={{
          backgroundImage: `url(${featuredImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className=" text-neutral-content text-center">
          <div className="">
            <SectionTitle
              title={"FROM OUR MENU"}
              subtitle={"---Check it out---"}
            ></SectionTitle>
            <div className="flex items-center gap-8 mt-12 w-4/5 mx-auto">
              <div className="flex-1">
                <img src={featuredImg} alt="" />
              </div>
              <div className="flex-1">
                <p className="text-left">
                  March 20, 2023 <br /> WHERE CAN I GET SOME? Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Error voluptate facere,
                  deserunt dolores maiores quod nobis quas quasi. Eaque repellat
                  recusandae ad laudantium tempore consequatur consequuntur
                  omnis ullam maxime tenetur.
                </p>
                <button className="btn text-white btn-outline border-0 border-white border-b-4 mt-4">
                  View Full Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
