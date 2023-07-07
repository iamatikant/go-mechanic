import React, { useState } from "react";

import styled, { css } from "styled-components";

import {
  Card,
  CardHeader,
  Flex,
  Text,
  CardContent,
  CardFooter,
  PhoneInput,
} from "@pega/cosmos-react-core";

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

export const Checkout = () => {
  return (
    <>
      <Card>
        <CardHeader>Account</CardHeader>
        <CardContent>
          {/* <PhoneInput
            additionalInfo={{
              heading: "Additional Info",
              content: "Some additional info",
            }}
            value={"9876543210"}
            //onChange={setPhoneNumber}
            showCountryCode={true}
            required={true}
            disabled={false}
            readOnly={true}
          /> */}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>Select Date and time of service</CardHeader>
        <CardContent>
          {/* <PhoneInput
            additionalInfo={{
              heading: "Additional Info",
              content: "Some additional info",
            }}
            value={"9876543210"}
            //onChange={setPhoneNumber}
            showCountryCode={true}
            required={true}
            disabled={false}
            readOnly={true}
          /> */}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>Add/Update Address</CardHeader>
        <CardContent>
          {/* <PhoneInput
            additionalInfo={{
              heading: "Additional Info",
              content: "Some additional info",
            }}
            value={"9876543210"}
            //onChange={setPhoneNumber}
            showCountryCode={true}
            required={true}
            disabled={false}
            readOnly={true}
          /> */}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>Payment</CardHeader>
        <CardContent>
          {/* <PhoneInput
            additionalInfo={{
              heading: "Additional Info",
              content: "Some additional info",
            }}
            value={"9876543210"}
            //onChange={setPhoneNumber}
            showCountryCode={true}
            required={true}
            disabled={false}
            readOnly={true}
          /> */}
        </CardContent>
      </Card>
    </>
  );
};

export default Checkout;
