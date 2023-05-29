import React, { useState } from "react";
import Tabs from "../src/TabComponent/Tabs";
import TabOne from "./TabComponent/ServiceItem_1";
import TabTwo from "./TabComponent/ServiceItem_2";
import TabThree from "./TabComponent/ServiceItem_3";

import { Card, CardHeader, Flex, Text } from "@pega/cosmos-react-core";

type TabsType = {
  label: string;
  index: number;
  Component: React.FC<{}>;
}[];

// Tabs Array
const tabs: TabsType = [
  {
    label: "Periodic Services",
    index: 1,
    Component: TabOne,
  },
  {
    label: "AC Services & Repair",
    index: 2,
    Component: TabTwo,
  },
  {
    label: "Batteries",
    index: 3,
    Component: TabThree,
  },
];

export const ServiceListing = () => {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);
  return (
    <Flex container={{ gap: 1 }} className="service-listing">
      <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
      <Card>
        <CardHeader>View cart</CardHeader>
      </Card>
    </Flex>
  );
};

export default ServiceListing;
