import styles from '../styles/PhotoModal.module.css'
import { likePhoto } from '../actions/actions'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function ButtonLike ({photo}) {
  const dispatch = useDispatch()
  const unsplash = useSelector(state => state.unsplash)

  const classes = [styles.like];

  if (photo.cover_photo.liked_by_user) {
    classes.push(styles.active)
  }

  return (
    <button
      className={classes.join(' ')}
      onClick={() => dispatch(likePhoto(unsplash, photo.cover_photo.id, photo.cover_photo.liked_by_user))}
    >
      <i className="fa fa-heart" aria-hidden="true" />
      <span>
              {photo.cover_photo.likes}
            </span>
    </button>
  )

}