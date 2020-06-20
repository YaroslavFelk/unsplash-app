import {combineReducers} from 'redux'
import {photoReducer} from "./photoReducer";
import { unsplashReducer} from './unsplashReducer'

export const rootReducer = combineReducers( {
    photos: photoReducer,
    unsplash: unsplashReducer
})
