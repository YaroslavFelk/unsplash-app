import { FETCH_PHOTOS } from '../constants'

const initialState = {
  photos: [],
  page: 10
}

export const photoReducer = (state = initialState, action ) => {
  switch (action.type) {
    case FETCH_PHOTOS:
      return {...state, photos: state.photos.concat(action.photos), page: action.page}
    default:
      return state
  }
}

