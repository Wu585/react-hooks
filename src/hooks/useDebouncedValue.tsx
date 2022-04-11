import React, {useEffect, useState} from 'react';

function useDebouncedValue<T>(value: T, delay?: number) {
  const [debouncedValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay || 500);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);
  return debouncedValue;
}

export default useDebouncedValue;
