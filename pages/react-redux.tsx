import React, { useState } from 'react'





const ReactReduxPage = () => {
  const [counter, setCounter] = useState(0)
  const increment = () => { setCounter(counter => counter + 1) }
  const decrement = () => { setCounter(counter => counter - 1) }



  //RETURN
  return (
    <main>
      <h1 className='bg-gradient-to-r from-purple-950 via-purple-800 to-purple-600 py-3 text-center text-4xl font-extrabold'>React-Redux Page</h1>
      <div className='w-full text-center mt-10 text-6xl font-bold'>
        <h1>{counter}</h1>
        <div className='flex items-center justify-center space-x-5 mt-4'>
          <button className='bg-green-700 px-4 h-20 text-md rounded-lg' onClick={increment}>+</button>
          <button className='bg-red-700 px-6 h-20 text-md rounded-lg' onClick={decrement}>-</button>
        </div>
      </div>
    </main>
  )
}

export default ReactReduxPage