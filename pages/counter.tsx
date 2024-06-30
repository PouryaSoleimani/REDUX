//* COUNTER PAGE ========================================================================================================================================   

import React from 'react'
import "@/COUNTER/COUNTER_REDUCER"
const Counter = () => {
  return (
    <main className='flex items-center justify-center w-full h-screen'>

      <div id="counter" className=' flex flex-col items-center py-6 justify-center bg-zinc-900 min-w-[30%] min-h-[80%] rounded-xl border-8 border-zinc-400'>
        <h1 id='numElem' className='text-6xl font-extrabold '>0</h1>

        <div id='Buttons' className='flex items-center min-w-full min-h-full flex-wrap justify-center space-x-2 mt-10'>
          <button id='decButton' className=' w-[30%] px-3 py-4 rounded-lg bg-red-500 text-4xl text-balance font-extrabold'>-</button>
          <button id='resButton' className=' w-[30%] px-3 py-4 rounded-lg bg-sky-500 text-4xl font-extrabold'>↺</button>
          <button id='incButton' className=' w-[30%] px-3 py-4 rounded-lg bg-green-500 text-4xl font-extrabold'>+</button>
        </div>

      </div>

    </main>
  )
}

export default Counter