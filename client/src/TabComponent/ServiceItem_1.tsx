import React, { FC, Fragment } from "react";
import {
  Text,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Flex,
  Image,
} from "@pega/cosmos-react-core";
import styled, { css } from "styled-components";
import { ServiceListMockData } from "../TabComponent/ServiceList.mock";

export const StyledCard = styled.article(() => {
  return css`
    width: 100%;
  `;
});

export const StyleFlex = styled.div(() => {
  return css`
    margin-bottom: 1rem;
  `;
});

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

//TODO: theme not working
export const StylePrice = styled.span(({ theme }) => {
  console.log(theme);
  return css`
    text-decoration: line-through;
    color: gray;
    font-size: 10px;
  `;
});

const TabOne: FC<{}> = () => {
  return (
    <Fragment>
      <Text variant="h1">Scheduled Services</Text>

      {ServiceListMockData.data.map(
        ({
          title,
          description,
          imgUrl,
          expectedPrice,
          actualPrice,
          features,
        }) => (
          <Flex container as={StyleFlex}>
            <Image src={imgUrl} alt="Pega" />
            <Card as={StyledCard}>
              <CardHeader>
                <Text variant="h2">{title}</Text>
              </CardHeader>
              <CardContent>
                <p>{description}</p>
                {/* TODO: Need to check this */}
                {/* <UnorderedList items={items} /> */}
              </CardContent>
              <CardFooter>
                <Flex container={{ gap: 1 }}>
                  <StylePrice>$ {actualPrice}</StylePrice>
                  <span>$ {expectedPrice}</span>
                  <StyleButton> + Add to cart </StyleButton>
                </Flex>
              </CardFooter>
            </Card>
          </Flex>
        )
      )}
    </Fragment>
  );
};
export default TabOne;
