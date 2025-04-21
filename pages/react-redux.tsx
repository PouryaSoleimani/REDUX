//^ REACT-REDUX PAGE =======================================================================================================
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '@/features/counter/counterSlice'

const ReactReduxPage = () => {

  const count = useSelector((state: any) => state.counter.count)
  const dispatch = useDispatch();

  //RETURN
  return (
    <main>
      <h1 className='bg-gradient-to-r from-purple-950 via-purple-800 to-purple-600 py-3 text-center text-4xl font-extrabold'>React-Redux Page</h1>
      <div className='w-full text-center mt-10 text-6xl font-bold'>
        <h1>{count}</h1>
        <div className='flex items-center justify-center space-x-5 mt-8'>
          <button onClick={() => dispatch(increment())} className='bg-green-700 px-7 h-20 text-md rounded-lg'>+</button>
          <button onClick={() => dispatch(decrement())} className='bg-red-700 px-8 h-20 text-md rounded-lg'>-</button>
        </div>
      </div> 
    </main>
  )
}

export default ReactReduxPage