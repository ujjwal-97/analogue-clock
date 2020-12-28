import React, {useState} from 'react';
import { useInterval } from './hooks/useInterval';
import {ClockBase, Center, SecondHand, MinuteHand, HourHand } from './components';

function App() {
  const date= new Date();
  const [seconds,setSeconds]= useState(0);
  const [minutes,setMinutes]= useState(0);
  const [hours,setHours]= useState(0);
  
  useInterval(() =>{
    setSeconds(date.getSeconds())
    setMinutes(date.getMinutes())
    setHours(date.getHours() %12 || 12)
  }, 1000)

  return (
    <div>
      <ClockBase>
        <Center/>
        <SecondHand fraction={seconds}/>
        <MinuteHand fraction={minutes}/>
        <HourHand fraction={hours}/>
      </ClockBase>
      <div className="digital"> {hours}:{minutes}:{seconds}</div>
    </div>
  );
}

export default App;
