import {configureStore,combineReducers} from '@reduxjs/toolkit'
const RootReducer= combineReducers({
    //
})

export const store= configureStore( {reducer: RootReducer});