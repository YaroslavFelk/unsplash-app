import React, { useEffect } from 'react'

import {useHistory} from "react-router-dom";
import styles from '../styles/PhotoModal.module.css'
import { optimizeDate } from '../functions/functions'
import { closeClick } from '../actions/modalActions'
import { ButtonLike } from './ButtonLike'


export function PhotoModal ({photo}) {
  let history = useHistory();

  useEffect( () => {
    document.body.classList.add(styles.fixed);
    return () => {
      document.body.classList.remove(styles.fixed);
    }
  }, [])

  return (
    <div
      className={styles.modal}
      onClick={(e) => closeClick(e, history)}
    >
      <section className={styles.modalContainer}>
        <div className={styles.info}>
          <div className={styles.author}>
            <img src={photo.user.profile_image.small}
                 alt='author'
                 className={styles.author_img}
            />

            <a
              className={styles.author_name}
              href={photo.user.links.html}
            >
              {photo.user.name}
            </a>
          </div>

          <ButtonLike photo={photo} />

        </div>

        <div className={styles.imageBlock}>
          <img src={photo.cover_photo.urls.regular} alt="photodawd"/>
        </div>

        <div className={styles.infoBottom}>
          <div className={styles.photoDescription}>
            <p> {photo.cover_photo.description} </p>
          </div>

          <div className={styles.publish_date} >
            Опубликованно:  {optimizeDate(photo.published_at)}
          </div>
        </div>
      </section>
    </div>
  )
}