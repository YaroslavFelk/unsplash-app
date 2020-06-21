import Unsplash from 'unsplash-js'

const initialState = new Unsplash({
  accessKey: 'SS-qzRTpRuynDW_5CkErVjJKrv7FYTyXEsE4shsS__c',
  secret: 'QadEfl0A5s0d27k6vLdSGzWWyMPzyc6o0LG6ZgBlw_A',
  callbackUrl: 'http://localhost:3000/auth'
})

export const unsplashReducer = (state = initialState, action ) => {
  switch (action.type) {
    default:
      return state
  }
}