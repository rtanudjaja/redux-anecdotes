import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotificationWithTimeout } from '../reducers/notificationReducer'

export const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes).slice() || []
  const filter = useSelector(state => state.filter).toLowerCase()
  const vote = (id) => {
    const selectedAnecdote = anecdotes.find(a => a.id === id)
    dispatch(voteAnecdote(selectedAnecdote.id))
    dispatch(setNotificationWithTimeout(`you voted '${selectedAnecdote.content}'`, 5000))
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