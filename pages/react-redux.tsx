//^ REACT-REDUX PAGE
import React, { useState } from 'react'
import { connect } from 'react-redux'

const ReactReduxPage = () => {


  //REACT USESTATE
  const [counter, setCounter] = useState(0)
  const increment = () => { setCounter(counter => counter + 1) }
  const decrement = () => { setCounter(counter => counter - 1) }
  const reset = () => { setCounter(0) }


  //RETURN
  return (
    <main>
      <h1 className='bg-gradient-to-r from-purple-950 via-purple-800 to-purple-600 py-3 text-center text-4xl font-extrabold'>React-Redux Page</h1>
      <div className='w-full text-center mt-10 text-6xl font-bold'>
        <h1>{counter}</h1>
        <div className='flex items-center justify-center space-x-5 mt-8'>
          <button onClick={increment} className='bg-green-700 px-7 h-20 text-md rounded-lg'>+</button>
          <button onClick={reset} className='bg-sky-700 px-6 h-20 text-[30px] rounded-lg'>↻</button>
          <button onClick={decrement} className='bg-red-700 px-8 h-20 text-md rounded-lg'>-</button>
        </div>
      </div>
    </main>
  )
}

function mapStateToProps(state: any) {
  console.log("STORE :", state)
  return {}
}

export default connect(mapStateToProps)(ReactReduxPage)