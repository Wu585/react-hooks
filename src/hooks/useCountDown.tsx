import React, {useEffect, useState} from 'react';

function useCountDown(initN: number) {
  const [n, setN] = useState(initN);
  useEffect(() => {
    const timer = setTimeout(() => {
      setN(n - 1);
    }, 1000);
    if (n === 0) {
      clearTimeout(timer);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [n]);
  return {n};
}

export default useCountDown;
