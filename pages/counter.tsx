//^ COUNTER PAGE =========================================================================================================================================================>
import React from 'react'

const CounterPage = () => {
  return (
    <section className='flex flex-col '>
      <div>
        <h1 className='bg-gradient-to-r from-purple-800 via-orange-600 to-yellow-400 text-3xl font-extrabold py-2 text-center'>COUNTER PAGE</h1>
      </div>

      <div id="Container" className='bg-zinc-700 rounded-lg min-w-[30%] min-h-[70%] mt-10 mx-auto flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-extrabold mt-4'>0</h1>
        <div className='flex items-center justify-center space-x-7 mt-10 mb-4'>
          <button className='w-20 h-10 bg-green-600 rounded-lg'>➕</button>
          <button className='w-20 h-10 bg-sky-600 rounded-lg'>🔄</button>
          <button className='w-20 h-10 bg-red-600 rounded-lg'>➖</button>
        </div>
      </div>
    </section>
  )
}

export default CounterPage