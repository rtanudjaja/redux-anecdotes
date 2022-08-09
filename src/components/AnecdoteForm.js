import { connect } from 'react-redux'
import { useState } from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotificationWithTimeout } from '../reducers/notificationReducer'

export const AnecdoteForm = (props) => {
  const [textInput, setTextInput] = useState('')

  const handleChange = (event) => {
    setTextInput(event.target.value)
  }

  const add = async (event) => {
    event.preventDefault()
    if(!textInput.trim()) {
    } else {
      props.createAnecdote(textInput)
      props.setNotificationWithTimeout(`new anecdote '${textInput}'`, 5000)
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

const ConnectedAnnecdoteForm = connect(
  null,
  { createAnecdote, setNotificationWithTimeout }
)(AnecdoteForm)
export default ConnectedAnnecdoteForm