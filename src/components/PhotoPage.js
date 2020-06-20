import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export function PhotoPage () {
  const link = useParams()
  const photos = useSelector( state => state.photos.photos)
  const photo = photos.find( (photo) => link.id == photo.id)
  console.log(photo)
  return (
    <container>
      <Link to='/' >
        <div>
          <img src={photo.cover_photo.urls.full} alt="photodawd"/>
        </div>
      </Link>

    </container>

  )
}