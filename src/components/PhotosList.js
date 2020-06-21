import React, { useEffect } from 'react'
import { fetchPhotos, getBearerToken } from '../actions/actions'
import Masonry from 'react-masonry-css'
import styles from '../styles/PhotosList.module.css'
import { Photo } from './Photo'
import { useDispatch, useSelector } from 'react-redux'
import { count } from '../functions/functions'

function PhotosList () {

  const dispatch = useDispatch()
  const photos = useSelector( state => state.photos.photos)
  const unsplash = useSelector(state => state.unsplash)
  useEffect( () => {
    dispatch(getBearerToken(unsplash))
    dispatch(fetchPhotos(unsplash, count()))

    if (window.location.search.split('code=')[1]) {
      localStorage.setItem('token', window.location.search.split('code=')[1])
    }

    window.addEventListener('scroll', () => handleScroll())
  }, [])

  function handleScroll() {
    const bottom = Math.ceil(window.pageYOffset + document.documentElement.clientHeight) === document.body.clientHeight;

    if (bottom) {
      return dispatch(fetchPhotos(unsplash, count()))
    }
  }

  return (
    <div
      className={styles.container}
      id="container"
    >
      <Masonry
        breakpointCols={3}
        className={styles.myMasonryGrid}
        columnClassName={styles.myMasonryGrid_column}
      >
        {photos.map( photo => {
          return <Photo key={photo.id}  photo={photo} />
        })}
      </Masonry>

    </div>
  )
}

export default PhotosList