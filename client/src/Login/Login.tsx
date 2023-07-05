import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import {
  Text,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Flex,
  Image,
  Input,
} from "@pega/cosmos-react-core";

export const StyledDiv = styled.div(() => {
  return css`
    background-image: url("https://cdn.wallpapersafari.com/38/29/mKFTMS.jpg");
    background-size: cover;
    height: 100vh;
    // display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `;
});
export const StyleCard = styled.div(() => {
  return css`
    margin-bottom: 1rem;
    width: 100%;
    padding: 4rem;
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
function Login() {
  return (
    <Flex container as={StyledDiv}>
      <div className="App">
        <Card as={StyleCard}>
          <CardContent>
            {/* <Input
              id="input-demo"
              type="text"
              label="Username"
              placeholder="Username"
              required={true}
            /> */}
            <input type="text" required placeholder="Username" />
            <br />
            <input type="password" required placeholder="Password" />
          </CardContent>
          <CardFooter>
            <StyleButton type="submit" className="">
              Login
            </StyleButton>
            <StyleButton type="submit" className="">
              Login with SSO
            </StyleButton>
          </CardFooter>
        </Card>
      </div>
    </Flex>
  );
}
export default Login;
