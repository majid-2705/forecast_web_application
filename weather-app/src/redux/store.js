import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {weatherApi} from '../redux/services/weatherApi'
import {countryApi} from '../redux/services/countryApi'
import locationSlice from './slices/locationSlice'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
           [weatherApi.reducerPath]: weatherApi.reducer,
           [countryApi.reducerPath]: countryApi.reducer,
           location: locationSlice,
})


export const store = configureStore({

// Add the generated reducer as a specific top-level slice
reducer: rootReducer, //{
          // [weatherApi.reducerPath]: weatherApi.reducer,
           //location: locationSlice,
           //[countryApi.reducerPath]: countryApi.reducer
           //},

 // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`
//middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(countryApi.middleware)
middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat([weatherApi.middleware, countryApi.middleware])
//applyMiddleware(thunk)
})