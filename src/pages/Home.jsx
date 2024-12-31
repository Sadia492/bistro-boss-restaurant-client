import React from "react";
import Banner from "../components/Banner";
import OrderOnline from "../components/OrderOnline";
import Cover from "../shared/Cover";
import bgImg from "../assets/home/chef-service.jpg";
import PopularMenu from "../components/PopularMenu";
import ChefRecommends from "../components/ChefRecommends";
import Featured from "../components/Featured";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div className="space-y-12">
      <Banner></Banner>
      <OrderOnline></OrderOnline>
      <Cover
        img={bgImg}
        title={"Bistro Boss"}
        subtitle={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
        }
        bgColor={"bg-white text-black"}
      ></Cover>
      <PopularMenu></PopularMenu>
      <ChefRecommends></ChefRecommends>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
}
