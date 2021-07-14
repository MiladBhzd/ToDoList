import styled from "styled-components";
import "./App.css";
import TodoItem from "./components/TodoItem";
import todosData from "./todosData";

function App() {
  const todoItems = todosData.map((item) => (
    <TodoItem key={item.id} text={item.text} completed={item.completed} />
  ));

  return <Container>{todoItems}</Container>;
}

export default App;

const Container = styled.div`
  background-color: white;
  margin: auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #efefef;
  box-shadow:
    /* The top layer shadow */ 0 1px 1px rgba(0, 0, 0, 0.15),
    /* The second layer */ 0 10px 0 -5px #eee,
    /* The second layer shadow */ 0 10px 1px -4px rgba(0, 0, 0, 0.15),
    /* The third layer */ 0 20px 0 -10px #eee,
    /* The third layer shadow */ 0 20px 1px -9px rgba(0, 0, 0, 0.15);
  padding: 30px;
`;
