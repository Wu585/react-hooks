import React, {useState} from 'react';

function useBoolean(initialState: boolean) {
  const [status, setStatus] = useState(initialState);
  const toggle = () => {
    setStatus(!status);
  };
  const setTrue = () => {
    setStatus(true);
  };
  const setFalse = () => {
    setStatus(false);
  };
  return {status, toggle, setTrue, setFalse};
}

export default useBoolean;
