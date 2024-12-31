import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useCategoryData from "../hooks/useCategoryData";
import MenuCard from "../shared/MenuCard";

export default function TabCategory() {
  const { data: dessert } = useCategoryData("dessert");
  const { data: pizza } = useCategoryData("pizza");
  const { data: salad } = useCategoryData("salad");
  const { data: soup } = useCategoryData("soup");
  const { data: drinks } = useCategoryData("drinks");

  return (
    <div className="my-12">
      <Tabs className="w-4/5 mx-auto">
        <TabList className="text-center">
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-3 gap-6 mt-12">
            {salad?.map((item) => (
              <MenuCard key={item._id} item={item}></MenuCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-6 mt-12">
            {pizza?.map((item) => (
              <MenuCard key={item._id} item={item}></MenuCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-6 mt-12">
            {soup?.map((item) => (
              <MenuCard key={item._id} item={item}></MenuCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-6 mt-12">
            {dessert?.map((item) => (
              <MenuCard key={item._id} item={item}></MenuCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-6 mt-12">
            {drinks?.map((item) => (
              <MenuCard key={item._id} item={item}></MenuCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
