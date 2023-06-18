import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Flex, Input } from "@pega/cosmos-react-core";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("http://localhost:5005/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

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
      <div>
        <form onSubmit={handleFormSubmit}>
          <Flex container={{ gap: 2, direction: "column" }}>
            <div>
              <label htmlFor="name">Name: </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                name="name"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <input
                id="email"
                type="text"
                value={formData.email}
                name="email"
                onChange={handleInputChange}
              />
            </div>
            <Flex container={{ justify: "center" }}>
              <button type="submit">Submit</button>
            </Flex>
          </Flex>
        </form>
      </div>
    </Flex>
  );
}

export default App;
