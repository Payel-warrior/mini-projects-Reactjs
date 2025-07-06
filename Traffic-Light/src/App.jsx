import React,{useState,useEffect} from 'react'
import'./App.css'

function App() {
  const[lights,setLights] =useState('Red');
  useEffect(()=>{
    const interval = setInterval(() =>{
      setLights((prev) => (prev == 'Red' ? 'Green' : prev == 'Green' ? 'Yellow' : 'Red'))
    },3000)

    return () => clearInterval(interval);

  },[])
  return (
    <div className="container">
      <div className="traffic-light">
        <div className={`light Red ${lights == 'Red' ? 'active' : ''}`}></div>
      <div className={`light Yellow ${lights == 'Yellow' ? 'active' : ''}`}></div>
      <div className={`light Green ${lights == 'Green' ? 'active' : ''}`}></div>
      </div>
    </div>
  )
}

export default App
