import { createSlice } from '@reduxjs/toolkit'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    addAnecdote(state, action) {
      return [...state, {
        ...action.payload
      }]
    },
    updateAnecdote(state, action) {
      const { id } = action.payload
      const filtered = state.filter(a => a.id !== id)
      return [...filtered, {
        ...action.payload
      }]
    },
    setAnecdotes(_, action) {
      return [...action.payload]
    }
  }
})

export const { addAnecdote, updateAnecdote, setAnecdotes } = anecdoteSlice.actions

export default anecdoteSlice.reducer