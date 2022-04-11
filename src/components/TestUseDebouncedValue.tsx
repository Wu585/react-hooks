import React, {useEffect, useState} from 'react';
import useDebouncedValue from '../hooks/useDebouncedValue';

function TestUseDebouncedValue() {
  const [n, setN] = useState(1);
  const debouncedN = useDebouncedValue(n);
  useEffect(() => {
    console.log('n变了');
  }, [n]);
  useEffect(() => {
    console.log('防抖后的n变了');
  }, [debouncedN]);
  return (
    <div>
      <button onClick={() => setN(n + 1)}>+1</button>
    </div>
  );
}

export default TestUseDebouncedValue;
