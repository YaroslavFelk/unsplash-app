import { toJson } from 'unsplash-js'
import { FETCH_PHOTOS } from './constants'

export function fetchPhotos (unsplash, page) {
  return async dispatch => {
    unsplash.collections.listCollections(page, 10, 'latest')
      .then(toJson)
      .then(json => {
        dispatch({ type: FETCH_PHOTOS, photos: json, page: page + 1})
      })
  }
}




