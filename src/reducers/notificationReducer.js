import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  message: "",
  timeoutId: undefined
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(_, action) {
      const content = action.payload
      return content
    },
    clearNotification() {
      return initialState
    },
    cancelTimeout(state) {
      if(state.timeoutId) {
        clearTimeout(state.timeoutId)
      }
      return state
    }
  },
})

export const setNotificationWithTimeout = (text, timeout) => {
  return async dispatch => {
    dispatch(cancelTimeout())
    const timeoutId = setTimeout(() => dispatch(clearNotification()), timeout)
    dispatch(setNotification({
      message: text,
      timeoutId
    }))
  }
}

export const { setNotification, clearNotification, cancelTimeout } = notificationSlice.actions
export default notificationSlice.reducer