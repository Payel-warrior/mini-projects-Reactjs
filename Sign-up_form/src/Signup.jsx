import { useState } from 'react'
import './App.css'


const Signup = () => {
  const data = {
    name:"",
    email:"",
    password:""
  }
  const [Input, setInput] = useState(data)
  const [fill,setfill] = useState(false)

  const handleInput = (event) =>{
    
     
    setInput({...Input, [event.target.name]:event.target.value})
    
  }
  console.log(Input);

  const submit = (event) => {
   event.preventDefault()
   if(!Input.name || !Input.email || !Input.password){
    alert("All Fields required")
   }else{
    setfill(true)
    setTimeout(()=>{
      setfill(false)
    },7000)
   }
  }

  return (
    <form onSubmit={submit} className="box">
      {fill? Input.name+" :Signed up Successfully!" : null}
      <h1>Please Sign-Up</h1>
      <div className='inputs'>
          <input type='text' placeholder='Name'  name="name" value={Input.name} onChange={handleInput} />
          <input type='email' placeholder='Email' name="email" value={Input.email} onChange={handleInput} />
          <input type='password' placeholder='Passsword' name="password" value={Input.password} onChange={handleInput} />
        </div>
      <button>Sign up</button>
    </form>
  )
}

export default Signup

