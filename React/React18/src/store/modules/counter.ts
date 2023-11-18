import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const counterStore = createSlice({
  name: 'counter',
  // 初始化state
  initialState: {
    value: 0,
    list: [''],
  },
  // 修改state
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    addToNumber: (state, action) => {
      state.value += action.payload
    },
    setList: (state, action) => {
      state.list = action.payload
    },
  },
})

// 异步请求部分
const { setList } = counterStore.actions

const fetchList = () => {
  return async (dispatch: any) => {
    const res = await axios.get('http://localhost')
    dispatch(setList(res.data.data.list))
  }
}

const { increment, decrement, addToNumber } = counterStore.actions
const reducer = counterStore.reducer

export { increment, decrement, addToNumber, fetchList }
export default reducer
