import { useState } from 'react' 
import './App.css'

function App() {

  

  let [counter , setCounter] = useState(0)


  const addvalue = () => {
    if (counter<20) {
      setCounter(counter+1)
    }
    
  }
  
  const decreaseValue = () => {
    if(counter > 0){
      setCounter(counter -1);
    }
    
  }
  return (
    <>
    <h1> Create A Counter</h1>
    <p>Count Is : {counter}</p>

    <button onClick={addvalue}>Increace</button> &nbsp;
    <button onClick={decreaseValue}>Decrease</button>
  
    </>)
}

export default App
