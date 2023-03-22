import {createSlice} from '@reduxjs/toolkit'

const initialState = {
city:'',
areDetailsChecked: false,
clickedCardIndex: -1,
previousUvIndex: NaN,
isPhoneMode: false,
id: NaN,
adminArea: ""
}

export const locationSlice = createSlice({
name: 'location',
initialState,
reducers: {
setCity : (state, action) => {state.city = action.payload},
setAreDetailsChecked : (state, action) => {state.areDetailsChecked = action.payload},
setClickedCardIndex : (state, action) => {state.clickedCardIndex = action.payload},
setPreviousUvIndex : (state, action) => {state.previousUvIndex = action.payload},
setPhoneMode : (state, action) =>  {state.isPhoneMode = action.payload},
setId : (state, action) =>  {state.id = action.payload},
setAdminArea: (state, action) =>  {state.adminArea = action.payload}

}
})

export const {setCity, setAreDetailsChecked, setClickedCardIndex, setPreviousUvIndex, setPhoneMode, setId, setAdminArea} = locationSlice.actions
export default locationSlice.reducer