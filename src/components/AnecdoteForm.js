import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { addNotification, clearNotification } from '../reducers/notificationReducer'

export const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const [textInput, setTextInput] = useState('')

  const handleChange = (event) => {
    setTextInput(event.target.value)
  }

  const add = (e) => {
    e.preventDefault()
    if(!textInput.trim()) {
    } else {
      dispatch(addAnecdote(textInput))
      dispatch(addNotification(`you created '${textInput}'`))
      setTimeout(() => dispatch(clearNotification()), 5000)
      setTextInput('')
    }
  }
  
  return (
    <>
      <h2>create new</h2>
      <form onSubmit={add}>
        <div><input value={textInput} onChange={handleChange} /></div>
        <button>create</button>
      </form>
    </>
  )
}

export default AnecdoteForm