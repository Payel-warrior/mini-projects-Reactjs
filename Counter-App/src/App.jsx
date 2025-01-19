import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increment = () => setCount((prevCount)=>prevCount +1);
  const decrement = () => setCount((prevCount)=> prevCount -1);
  const reset = () => setCount(0);

  return (
    <div className="Counter__box">
     <h1>The current count is : {count}</h1>
     <button onClick={increment}>Increase</button>
     <button onClick={decrement}>Decrease</button>
     <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App
