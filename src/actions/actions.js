import { toJson } from 'unsplash-js'
import { FETCH_PHOTOS, LIKE_PHOTO } from '../constants'

export function fetchPhotos (unsplash, page) {
  return async dispatch => {
    unsplash.collections.listCollections(page, 10, 'latest')
      .then(toJson)
      .then(json => {
        dispatch({ type: FETCH_PHOTOS, photos: json, page: page + 1})
      })
  }
}

export function getBearerToken(unsplash) {
  return async () => {
    const code = window.location.search.split('code=')[1]
    if (code) {
      unsplash.auth.userAuthentication(code)
        .then(res =>
          res.json())
        .then(json => {
          unsplash.auth.setBearerToken(json.access_token);
        })
    }
  }
}

export function likePhoto (unsplash, id, isLike) {
  console.log(isLike)
  if (isLike) {
    return async dispatch => {
        unsplash.photos.unlikePhoto(id)
        .then(toJson)
        .then(json => {
          dispatch({ type: LIKE_PHOTO, payload: json.photo })
        })
    }
  } else  {
    return async dispatch => {
      unsplash.photos.likePhoto(id)
      .then(toJson)
      .then(json => {
        dispatch({ type: LIKE_PHOTO, payload: json.photo })
      })
    }
  }
}







