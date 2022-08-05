import { createSlice } from '@reduxjs/toolkit'

const initialState = ""

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification(_, action) {
      const content = action.payload
      return content
    },
    clearNotification() {
      return initialState
    },
  },
})

export const { addNotification, clearNotification } = notificationSlice.actions
export default notificationSlice.reducer