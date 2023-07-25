import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-row justify-center items-start pt-10 px-10'>
      <h2 className='text-3xl font-bold tracking-widest'>Hello React</h2>
    </div>
  )
}

export default App
