import React, { useState } from "react";
import Tabs from "../src/TabComponent/Tabs";
import TabOne from "./TabComponent/ServiceItem_1";
import TabTwo from "./TabComponent/ServiceItem_2";
import TabThree from "./TabComponent/ServiceItem_3";
import styled, { css } from "styled-components";

import {
  Card,
  CardHeader,
  Flex,
  Text,
  CardContent,
  CardFooter,
} from "@pega/cosmos-react-core";

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

export const StyleButton = styled.button(() => {
  return css`
    outline: none;
    text-decoration: none;
    transition-property: background-color, color, box-shadow;
    transition-duration: calc(0.5 * 0.25s);
    transition-timing-function: cubic-bezier(0.4, 0.6, 0.1, 1);
    cursor: pointer;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 32px;
    min-width: 32px;
    line-height: 1;
    border: 0.0625rem solid transparent;
    border-radius: calc(0.5rem * 9999);
    -webkit-user-select: none;
    user-select: none;
    padding: 0 1rem;
    --button-background-color: #076bc9;
    color: #fff;
    background-color: #076bc9;
  `;
});

export const StyledViewCart = styled.span(({ theme }) => {
  console.log(theme);
  return css`
    border: 1px solid lightgrey;
  `;
});
export const ServiceListing = () => {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);
  return (
    <Flex container={{ gap: 1 }} className="service-listing">
      <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
      <Card as={StyledViewCart}>
        <CardHeader>
          <img
            className="view-cart-image"
            src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Seltos/6226/1679395459776/front-left-side-47.jpg?impolicy=resize&imwidth=480"
            alt="Car standing on a platform"
          />
        </CardHeader>
        <CardContent>
          <Flex container={{ gap: 2 }}>
            <Text variant="h2">Basic car clean up</Text>
            <Text variant="h2">$ 900</Text>
          </Flex>
          <Flex container={{ gap: 2 }}>
            <Text variant="h2">Basic car clean up</Text>
            <Text variant="h2">$ 900</Text>
          </Flex>
          <Flex container={{ gap: 2 }}>
            <Text variant="h2">Basic car clean up</Text>
            <Text variant="h2">$ 900</Text>
          </Flex>
        </CardContent>
        <CardFooter>
          <StyleButton>Checkout</StyleButton>
        </CardFooter>
      </Card>
    </Flex>
  );
};

export default ServiceListing;
