import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'
import Count from './components/count.jsx'


function App() {
  const[count, setCount] = useState(0);

  


  return (
    
   <div className='container'>
    <p className='para'> The count is {count}</p>
    <button className='btn' onClick={() =>setCount(count+1)} >Click me</button>
   
   <div>
    <Count >
    <h1 className='title'>Aniket Chavhan</h1>
    <p className='description'>I am a software engineer.</p>
    </Count>
   </div>
   </div>
  )
}

export default App
