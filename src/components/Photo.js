import React from 'react'
import styles from '../styles/Photo.module.css'
import { optimizeDate } from '../functions/functions'
import { Link } from 'react-router-dom'

export function Photo ({photo}) {
  return (
    <div key={photo.id} className={styles.photo}>
      <Link to={`/photo/${photo.id}`} >
        <img src={photo.cover_photo.urls.small} alt="photodawd"/>
        <div className={styles.info}>

          <div className={styles.author}>
            <img src={photo.user.profile_image.small}
                 alt='autor'
                 className={styles.author_img}
            />

            <a
              className={styles.author_name}
              href={photo.user.links.html}
            >
              {photo.user.name}
            </a>
          </div>

          <div className={styles.publish_date} >
            {optimizeDate(photo.published_at)}
          </div>

          <button className={styles.like} >
            <i className="fa fa-heart" aria-hidden="true"></i>
          </button>
        </div>
      </Link>
    </div>

  )
}

