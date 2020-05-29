/*
export function someMutation (state) {
}
*/

export function LOGIN_ACTION(state,token){
  window.localStorage.setItem('wefoods-token',token)
  let encodedToken = token.split('.')[1].replace('-','+').replace('_','/')
  let decodedToken = JSON.parse(window.atob(encodedToken))
  state.is_authed = true
  state.userid = decodedToken.userid
  state.username = decodedToken.username
  state.useravatar = decodedToken.avatar
  state.useremail = decodedToken.email
}

export function LOGOUT_ACTION(state){
  window.localStorage.removeItem('wefoods-token')
  state.is_authed = false
  state.userid = ''
  state.username = ''
  state.useravatar = ''
  state.useremail = ''
}