import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  height: 100px;
  background-color: #333;
  color: whitesmoke;
  margin-bottom: 15px;
  text-align: center;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  background: ${(props) => (props.primary ? "black" : "white")};
  color: ${(props) => (props.primary ? "white" : "black")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
`;

const Header = ({ entete }) => {
  return (
    <div className="navbar">
      <StyledHeader>This is a Header</StyledHeader>
      <StyledButton>Normal</StyledButton>
      <StyledButton primary>primary</StyledButton>
    </div>
  );
};

export default Header;
