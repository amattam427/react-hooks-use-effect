import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  
  //below we are telling react to update doc title when text variable changes.
  useEffect(()=>{
    document.title = text;
  },[text])

 //below we are telling react to reset the count variable back to 0 after 5 seconds.  
  useEffect(()=>{
    setTimeout(()=> setCount(0),5000);
  }, [])

  console.log("Component rendering");

  return (
    <div>
      <button onClick={()=>setCount((count)=>count +1)}>I've been clicked {count} times</button>
      <input
        type='text'
        placeholder='Type away...'
        value={text}
        onChange={(e)=>setText(e.target.value)}
      />
    </div>
  )
}

export default App;
