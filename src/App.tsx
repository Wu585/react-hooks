import React from 'react';
import styled from 'styled-components';
import Timer from './components/Timer';
import TestUseDebouncedValue from './components/TestUseDebouncedValue';

const Button = styled.button`
  color: red;
`

function App() {
  return (
    <div className="App">
      <Timer/>
      <TestUseDebouncedValue/>
    </div>
  );
}

export default App;
