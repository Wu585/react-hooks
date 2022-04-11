import React from 'react';
import styled from 'styled-components';
import Timer from './components/Timer';

const Button = styled.button`
  color: red;
`

function App() {
  return (
    <div className="App">
      <Timer/>
    </div>
  );
}

export default App;
