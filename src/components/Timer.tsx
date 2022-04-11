import React, {useEffect, useState} from 'react';
import useCountDown from '../hooks/useCountDown';

function Timer() {
  const {n} = useCountDown(10);
  return (
    <div>{n}</div>
  );
}

export default Timer;
