

export default function () {
  var token =window.localStorage.getItem('wefoods-token')
  return {
    auth:{
      is_authenticated:1?true:false
    },
    user:{
      id:getLocalToken(),
      name:new Date().getSeconds(),

    }
    //
  }
}
function getLocalToken(){
  // let encodedCode = token.split('.')[1]
  // let decodedCode = JSON.parse(atob(encodedCode))
  // return decodedCode
  return window.localStorage.getItem('wefoods-token')
}