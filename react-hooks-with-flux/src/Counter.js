import React, { useContext } from 'react'
import CounterContext from './contexts/CounterContext'
import { increment, decrement } from './actions/CounterActions'

export default function Counter() {
  const { count, dispatch } = useContext(CounterContext)
  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => increment(dispatch)}>Increment</button>
      <button onClick={() => decrement(dispatch)}>Decrement</button>
    </>
  )
}
