export function login_action(token){
  let encodedToken = token.split('.')[1].replace('-','+').replace('_','/')
  let decodedToken = JSON.parse(window.atob(encodedToken))
  window.localStorage.setItem('wefoods-token',token);
  window.localStorage.setItem('wefoods-userid',decodedToken.userid?decodedToken.userid:'')
  window.localStorage.setItem('wefoods-username',decodedToken.username?decodedToken.username:'')
}


export function logout_action(){
  window.localStorage.removeItem('wefoods-token')
  window.localStorage.removeItem('wefoods-userid')
  window.localStorage.removeItem('wefoods-username')
  
}
