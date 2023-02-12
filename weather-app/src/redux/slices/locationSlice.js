import {createSlice} from '@reduxjs/toolkit'

const initialState = {
city:'',
areDetailsChecked: false,
clickedCardIndex: -1,
previousUvIndex: NaN,
}

export const locationSlice = createSlice({
name: 'location',
initialState,
reducers: {
setCity : (state, action) => {state.city = action.payload},
setAreDetailsChecked : (state, action) => {state.areDetailsChecked = action.payload},
setClickedCardIndex : (state, action) => {state.clickedCardIndex = action.payload},
setPreviousUvIndex : (state, action) => {state.previousUvIndex = action.payload},

}
})

export const {setCity, setAreDetailsChecked, setClickedCardIndex, setPreviousUvIndex} = locationSlice.actions
export default locationSlice.reducer