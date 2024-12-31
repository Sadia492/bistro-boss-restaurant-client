import React from "react";
import Cover from "../shared/Cover";
import OurMenuImg from "../assets/menu/banner3.jpg";
import SectionTitle from "../shared/SectionTitle";
import useCategoryData from "../hooks/useCategoryData";
import MenuItem from "../shared/MenuItem";
import img2 from "../assets/home/chef-service.jpg";

export default function OurMenu() {
  const { data: offered } = useCategoryData("offered");
  const { data: dessert } = useCategoryData("dessert");
  const { data: pizza } = useCategoryData("pizza");
  const { data: salad } = useCategoryData("salad");
  const { data: soup } = useCategoryData("soup");

  return (
    <div>
      <Cover
        img={OurMenuImg}
        title={"OUR MENU"}
        subtitle={"Would you like to try a dish?"}
        bgColor={"bg-black/40 text-white mb-24 mt-12"}
      ></Cover>
      {/* todays offer */}

      <section className="my-12">
        <SectionTitle
          title={"TODAY'S OFFER"}
          subtitle={"---Don't miss---"}
        ></SectionTitle>
        <div className="grid grid-cols-2 gap-6 w-4/5 mx-auto my-6">
          {offered?.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className="text-center">
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </div>
      </section>
      {/* deserts section */}
      <section className="my-12">
        <Cover
          img={img2}
          title={"DESSERTS"}
          subtitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          bgColor={"bg-black/40 text-white "}
        ></Cover>

        <div className="grid grid-cols-2 gap-6 w-4/5 mx-auto my-6">
          {dessert?.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className="text-center">
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </div>
      </section>
      {/* pizza section */}
      <section className="my-12">
        <Cover
          img={img2}
          title={"PIZZA"}
          subtitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          bgColor={"bg-black/40 text-white "}
        ></Cover>

        <div className="grid grid-cols-2 gap-6 w-4/5 mx-auto my-6">
          {pizza?.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className="text-center">
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </div>
      </section>
      {/* salad section */}
      <section className="my-12">
        <Cover
          img={img2}
          title={"SALADS"}
          subtitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          bgColor={"bg-black/40 text-white "}
        ></Cover>

        <div className="grid grid-cols-2 gap-6 w-4/5 mx-auto my-6">
          {salad?.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className="text-center">
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </div>
      </section>
      {/* soup section */}
      <section className="my-12">
        <Cover
          img={img2}
          title={"SOUPS"}
          subtitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          bgColor={"bg-black/40 text-white "}
        ></Cover>

        <div className="grid grid-cols-2 gap-6 w-4/5 mx-auto my-6">
          {soup?.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className="text-center">
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </div>
      </section>
    </div>
  );
}
