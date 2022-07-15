import { useState } from 'react'
import logo from './logo.svg'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col bg-slate-900 h-screen justify-center pl-20">
     <p className='text-white font-bold text-3xl'>Starter Pack</p>
     <h1 className='text-9xl font-black text-cyan-500 ml-6'>React🧙‍♂️</h1>
     <h1 className='text-9xl font-black text-yellow-500 ml-32'>Vite⚡</h1>
     <h1 className='text-9xl font-black text-blue-500 ml-48'>Tailwind🌬️</h1>
    </div>
  )
}

export default Home
