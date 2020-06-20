import Unsplash from 'unsplash-js'


export function getUnsplash() {
  if ( JSON.parse(localStorage.getItem("unsplash")) ) {
    return JSON.parse(localStorage.getItem("unsplash"))
  } else {
    createUnsplashsToken()
    return JSON.parse(localStorage.getItem("unsplash"))
  }
}

export function createUnsplashsToken() {
  const  unsplash = new Unsplash({
    accessKey: 'SS-qzRTpRuynDW_5CkErVjJKrv7FYTyXEsE4shsS__c',
    secret: 'QadEfl0A5s0d27k6vLdSGzWWyMPzyc6o0LG6ZgBlw_A',
    callbackUrl: 'http://localhost:3000/'
  })

  const code = 'x7vKL3p-ZLHm5As7h_Zq8Z2VS_iglhf7RKrgUIBFfTQ'
// Если код передан, отправляем запрос на получение токена
  if (code) {
    unsplash.auth.userAuthentication(code)
      .then(res =>
        res.json()
      )
      .then(json => {
        unsplash.auth.setBearerToken(json.access_token)


      })
  }
  return unsplash
}

function counter () {
  let count = 10
  return () => {
    return count++
  }
}

export let count = counter()

export function  optimizeDate(date) {
  const parsedDate = new Date(date)

  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',

    hour: 'numeric',
    minute: 'numeric',
  };

  return parsedDate.toLocaleString("ru", options)
}




