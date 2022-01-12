import React, { useState } from 'react';
import styled from 'styled-components';
import List from './List';

function App() {
  const [Todo, setTodo] = useState(['라면 끓이기']);
  const [newData, setnewData] = useState();

  const inputData = (e) => {
    setnewData(e.target.value);
  }

  const addList = (e) => {
    e.preventDefault();
    setTodo([...Todo, newData])
  }

  return (
    <>
      <Title>ToDo List</Title>

      <InputTodo action=''>
        <input type='text' name='' onChange={inputData}/>
        <button onClick={addList}>입 력</button>
      </InputTodo>

      <List Todo={Todo}/>
    </>
  )
}

export default App;

const Title = styled.h1 `
  font-size: 1.5rem;
  color: #ad5b5b;
  padding: 2rem;
`

const InputTodo = styled.form `
  display: flex;
  margin-left: 2rem;
`