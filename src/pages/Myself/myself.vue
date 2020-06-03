<template>
  <div class="q-mt-md">
    <!-- 已登录界面 -->
    <div v-if="shareState.is_authed">
      <q-avatar>
        <img :src="shareState.useravatar" alt="">
      </q-avatar>
      <div>{{shareState.username}}</div>
      <q-btn label="logout" @click="handleLogout"/>
    </div>

    <!-- 未登录 -->
    <div v-else>
      <q-btn label="Login" @click="showLoginModal=true" />
      <q-btn label="Register" @click="showRegisterModal=true"/>
      <Register v-model="showRegisterModal"/>
      <Login v-model="showLoginModal"/>
    </div>


    <div>我的关注</div>
    <div>我收藏的作品</div>
    <div>我发布的作品</div>
    <q-btn label="tst" @click="test"/>

    <!-- <img src='http://localhost:5000/upload/f3c121ae-f06f-3b1d-b1da-f1f4b8678f34' alt=""> -->






  </div>
</template>

<script>
import Login from 'components/Login.vue'
import Register from 'components/Register.vue'
import {logout_action} from 'components/utils/login.js'
import { mapState } from 'vuex'


export default {
  components:{Register,Login},

  data(){
    return {
      shareState:this.$store.state.base,
      showLoginModal:false,
      showRegisterModal:false,
    }
  },
  methods:{
    handleLogout(){
      this.$store.dispatch('base/logout_action')
      this.$toasted.info('您已登出...')
    },
    test(){
      console.log(this.transform)
      console.log(this.username,this.$store.state.base.username)
    },
    // _pingFlask(){
    //   const path = "/ping"
    //   this.$axios.get(path).then(res=>{}).catch(e=>{
    //     this.handleLogout()
    //   })
    // }
  },
  created(){}

}
</script>