import { createSlice } from '@reduxjs/toolkit'

const initialState = ""

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilter(_, action) {
      const content = action.payload
      return content
    },
  },
})

export const { updateFilter } = filterSlice.actions
export default filterSlice.reducer