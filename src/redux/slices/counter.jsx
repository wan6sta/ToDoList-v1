import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  inputValue: '',
  listTodo: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    onChangeInput: (state, action) => {
      state.inputValue = action.payload
    },
    addTodo: (state) => {
      state.listTodo.push(state.inputValue)
      state.inputValue = '';
    },
    deleteTodo: (state, action) => {
      state.listTodo = state.listTodo.filter((_, id) => {
        return (action.payload !== id)
      })
    }
  },
})

export const {increment, decrement, incrementByAmount, onChangeInput, addTodo, deleteTodo} = counterSlice.actions

export default counterSlice.reducer