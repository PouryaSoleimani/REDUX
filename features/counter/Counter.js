import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice'

const Counter = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch();

  return (
    <div>
      <p>{count}</p>
    </div>
  )
}

export default Counter