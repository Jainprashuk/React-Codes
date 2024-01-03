import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  const myobj = {
    name : "prashuk",
    age : 24,
  }

  const arr = [1,2,3,4]

  return (
    <>
     <h1 className='text-black bg-green-500 p-5 rounded-xl mb-4'>Tailwind And Props</h1>


     <Card username="prashuk" object = {myobj} array = {arr}/>
     

    </>
  )
}

export default App
