import React from 'react';
import styled from 'styled-components';
import Timer from './components/Timer';
import TestUseDebouncedValue from './components/TestUseDebouncedValue';
import TestUseBoolean from './components/TestUseBoolean';

const Button = styled.button`
  color: red;
`;

function App() {
  return (
    <div className="App">
      <Timer/>
      <TestUseDebouncedValue/>
      <TestUseBoolean/>
    </div>
  );
}

export default App;
