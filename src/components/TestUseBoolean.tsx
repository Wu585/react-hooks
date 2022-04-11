import React from 'react';
import useBoolean from '../hooks/useBoolean';

function TestUseBoolean() {
  const {status, toggle} = useBoolean(true);
  return (
    <div>
      <button onClick={() => toggle()}>{status.toString()}</button>
    </div>
  );
}

export default TestUseBoolean;
