import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { PhotoModal } from './PhotoModal'

export function PhotoPage () {
  const link = useParams()
  const photos = useSelector(state => state.photos.photos)
  const [ photo ] = photos.filter( ph =>  ph.cover_photo.id === link.id )

  if (photo) {
    return (
      <div>
        <PhotoModal photo={photo} />
      </div>
    )
  } else {
    return (
      <p>loading ...</p>
    )
  }
}