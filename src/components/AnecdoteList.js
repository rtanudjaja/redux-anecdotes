import { useSelector, useDispatch } from 'react-redux'
import { updateAnecdote } from '../reducers/anecdoteReducer'
import { addNotification, clearNotification } from '../reducers/notificationReducer'

export const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes).slice() || []
  const filter = useSelector(state => state.filter).toLowerCase()
  const vote = (id) => {
    const selectedAnecdote = anecdotes.find(a => a.id === id)
    dispatch(updateAnecdote({
      ...selectedAnecdote,
      votes: selectedAnecdote.votes + 1
    }))
    dispatch(addNotification(`you voted '${selectedAnecdote.content}'`))
    setTimeout(() => dispatch(clearNotification()), 5000)
  }
  return (
    <>
      {anecdotes.length > 0 && anecdotes
        ?.sort((a, b) => b?.votes - a?.votes)
        ?.map(anecdote => 
        <div key={anecdote?.id}>
          {(!filter || anecdote.content.toLowerCase().includes(filter)) && (
            <>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote.id)}>vote</button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default AnecdoteList