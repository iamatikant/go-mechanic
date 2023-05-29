import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Flex, Button } from "@pega/cosmos-react-core";
import styled, { css } from "styled-components";
import ServiceListing from "./service-listing";
interface UserResults {
  users: string[];
}

const StyledAppContainer = styled.div(() => {
  return css`
    //flex-direction: column;
  `;
});

function App() {
  const [backendData, setBackendData] = useState<string[]>([]);
  const [chcekState, setCheck] = useState<string>("no-check");
  console.log(chcekState);

  // Checking to data set up from local server
  const getData = async (endpoint: string) => {
    const response = await fetch(endpoint);
    const data: UserResults = await response.json();
    return data;
  };

  const fetchUsers = async () => {
    const userData = await getData("http://localhost:5005/api");
    console.log(userData);
    if (userData && userData.users) {
      setBackendData(userData.users);
    }
  };

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="App">
        <ServiceListing />
      </div>
    </div>
  );
}

export default App;
