import { useReducer } from 'react'

export default function MyReducer() {
  function reducer(state: number, action: any) {
    switch (action.type) {
      case 'INC':
        return state + 1
      case 'DEC':
        return state - 1
      case 'SET':
        return action.payload
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, 0)

  dispatch({ type: 'INC' })

  return (
    <div>
      {state}
      <button onClick={() => dispatch({ type: 'INC' })}>加</button>
      <button onClick={() => dispatch({ type: 'SET', payload: 100 })}>update</button>
    </div>
  )
}
