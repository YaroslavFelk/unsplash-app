import { FETCH_PHOTOS, LIKE_PHOTO } from '../constants'

const initialState = {
  photos: [],
  page: 5
}

export const photoReducer = (state = initialState, action ) => {
  switch (action.type) {
    case FETCH_PHOTOS:
      return {...state, photos: state.photos.concat(action.photos), page: action.page}
    case LIKE_PHOTO:
      const newPhotos = state.photos.map(photo => {
        if (photo.cover_photo.id === action.payload.id) {
          photo.cover_photo = action.payload
        }
        return photo
      })
      return {...state, photos: newPhotos}
    default:
      return state
  }
}

