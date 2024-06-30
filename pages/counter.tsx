//* COUNTER PAGE ========================================================================================================================================   

import React from 'react'

const Counter = () => {
  return (
    <main className='flex items-center justify-center w-screen h-screen'>

      <div id="counter" className=' flex flex-col items-center py-32 justify-between bg-zinc-900 w-[30%] h-[80%] rounded-xl border-8 border-zinc-400'>
        <h1 className='text-6xl font-extrabold '>0</h1>

        <div id='Buttons' className='flex items-center justify-center space-x-2 mt-10'>
          <button className=' w-28 px-3 py-4 rounded-lg bg-red-500 text-4xl font-extrabold'>-</button>
          <button className=' w-28 px-3 py-4 rounded-lg bg-sky-500 text-4xl font-extrabold'>↺</button>
          <button className=' w-28 px-3 py-4 rounded-lg bg-green-500 text-4xl font-extrabold'>+</button>
        </div>

      </div>

    </main>
  )
}

export default Counter