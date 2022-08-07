import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

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

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(addAnecdote(newAnecdote))
  }
}

export const voteAnecdote = id => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.voteAnecdote(id)
    dispatch(updateAnecdote(updatedAnecdote))
  }
}

export default anecdoteSlice.reducer