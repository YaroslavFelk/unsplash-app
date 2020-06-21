import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos } from '../actions/actions'
import { count } from '../functions/functions'

export function Registration() {
  const unsplash = useSelector(state => state.unsplash)

  // Генерируем адрес страницы аутентификации на unsplash.com
// и указываем требуемые разрешения (permissions)
  const authenticationUrl = unsplash.auth.getAuthenticationUrl([
    "public",
    "write_likes"
  ]);
// Отправляем пользователя по этому адресу
  window.location.assign(authenticationUrl);
}