import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Flex } from "@pega/cosmos-react-core";
import styled, { css } from "styled-components";
interface UserResults {
  users: string[];
}

const StyledAppContainer = styled.div(() => {
  return css`
    flex-direction: row;
  `;
});

function App() {
  const [backendData, setBackendData] = useState<string[]>([]);

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
    <Flex container as={StyledAppContainer}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            {backendData.map((item, indx) => (
              <li key={indx}>{item}</li>
            ))}
          </ul>
        </header>
      </div>
    </Flex>
  );
}

export default App;
