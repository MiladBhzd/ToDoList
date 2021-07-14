import React from "react";
import styled from "styled-components";
const TodoItem = ({ text, completed }) => {
  return (
    <ItemContainer>
      <input type="checkbox" checked={completed} />
      <p>{text}</p>
    </ItemContainer>
  );
};

export default TodoItem;

const ItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 30px 20px 0;
  width: 70%;
  border-bottom: 1px solid #cecece;
  font-family: Roboto, sans-serif;
  font-weight: 100;
  font-size: 15px;
  color: #333333;
  input[type="checkbox"] {
    margin-right: 10px;
    font-size: 30px;
  }

  input[type="checkbox"]:focus {
    outline: 0;
  }
`;
