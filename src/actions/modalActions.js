import styles from '../styles/PhotoModal.module.css'

export function closeClick(e, history) {
  e.stopPropagation()
  if (e.target.className === styles.modal) {
    history.push('/auth');
  }
}