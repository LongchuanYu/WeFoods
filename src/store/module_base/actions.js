/*
export function someAction (context) {
}
*/
export function login_action(ctx,token){
  ctx.commit('LOGIN_ACTION',token)
}

export function logout_action(ctx){
  ctx.commit('LOGOUT_ACTION')
}