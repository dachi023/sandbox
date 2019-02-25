import React, { useReducer } from 'react'
import Counter from './Counter'
import CounterContext from './contexts/CounterContext'
import CounterReducer from './reducers/CounterReducer'
import './App.css'

export default function App() {
  const [state, dispatch] = useReducer(CounterReducer, { count: 0 })
  return (
    <div className="App">
      <header className="App-header">
        <CounterContext.Provider value={{ ...state, dispatch }}>
          <Counter />
        </CounterContext.Provider>
      </header>
    </div>
  )
}
