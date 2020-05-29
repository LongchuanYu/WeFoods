<template>
  <div class="q-mt-md">
    <!-- 已登录界面 -->
    <div v-if="shareState.base.is_authed">
      <q-avatar>
        <img :src="shareState.base.useravatar" alt="">
      </q-avatar>
      <div>{{shareState.base.username}}</div>
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






  </div>
</template>

<script>
import Login from 'components/Login.vue'
import Register from 'components/Register.vue'
import {logout_action} from 'components/utils/login.js'
export default {
  components:{Register,Login},

  data(){
    return {
      shareState:this.$store.state,
      showLoginModal:false,
      showRegisterModal:false
    }
  },
  methods:{
    handleLogout(){
      this.$store.dispatch('base/logout_action')
      this.$toasted.info('您已登出...')
    },
    test(){
      console.log(this.shareState.base.username)
    }
  },
  created(){
    
  }
}
</script>