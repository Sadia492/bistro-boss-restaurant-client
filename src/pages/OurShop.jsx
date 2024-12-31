import React from "react";
import Cover from "../shared/Cover";
import OurShopImg from "../assets/shop/banner2.jpg";
import TabCategory from "../components/TabCategory";

export default function OurShop() {
  return (
    <div>
      <Cover
        img={OurShopImg}
        title={"OUR SHOP"}
        subtitle={"Would you like to try a dish?"}
        bgColor={"bg-black/40 text-white mb-24 mt-12"}
      ></Cover>
      <TabCategory></TabCategory>
    </div>
  );
}
