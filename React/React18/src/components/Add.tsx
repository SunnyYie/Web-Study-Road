import { configureStore } from '@reduxjs/toolkit'

export default function Add() {
  function reducer(state = { count: 0 }, action: any) {
    if (action.type === 'increment') {
      return { count: state.count + 1 }
    }
    if (action.type === 'decrement') {
      return { count: state.count - 1 }
    }
    return state
  }

  const store = configureStore({
    reducer: reducer,
  })

  store.subscribe(() => {
    console.log(store.getState())
  })

  return (
    <div>
      <button onClick={() => store.dispatch({ type: 'increment' })}>+</button>
      {` ${store.getState().count} `}
      <button onClick={() => store.dispatch({ type: 'decrement' })}>-</button>
    </div>
  )
}
