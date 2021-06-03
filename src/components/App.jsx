import React, { useState } from "react";
const App = ()=>{

  const now =  new Date().toLocaleTimeString();
// Using hooks to hold both the current time and setTIme for updating the current time 
  const [time, setTime]= useState(now);
  // console.log(time);
  console.log(setTime); 
  // so now time = useState(now); 

  const updateTime = ()=>{
    const newTime = new Date().toLocaleTimeString(); 
    setTime (newTime);
    setInterval(updateTime, 1000); 
  }
 
  return (
    <div className="container">
      <h1>My Clock</h1>
      <h1>{time}</h1>
      <button onClick = {updateTime} >Get Time</button>
    </div>
  );
}

export default App; 



