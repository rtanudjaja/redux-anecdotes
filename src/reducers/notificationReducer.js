import { createSlice } from '@reduxjs/toolkit'

const initialState = ""

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
  },
})

export const setNotificationWithTimeout = (text, timeout) => {
  return async dispatch => {
    dispatch(setNotification(text))
    setTimeout(() => dispatch(clearNotification()), timeout)
  }
}

export const { setNotification, clearNotification } = notificationSlice.actions
export default notificationSlice.reducer