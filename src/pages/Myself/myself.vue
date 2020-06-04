<template>
  <div class="">


    <q-dialog v-model="logoutconfirm">
      <q-card>
        <q-card-section class="row items-center">
          <span class="q-ml-sm">确定登出？</span>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="取消" color="primary" v-close-popup />
          <q-btn flat label="确认" color="primary" @click="handleLogout" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <Register v-model="showRegisterModal"/>
    <Login v-model="showLoginModal"/>


    <div style="height:200px;" class="text-white bg-deep-orange-12 row justify-center items-center">
      <!-- 已登录界面 -->
      <div v-if="shareState.is_authed" class="column items-center">
        <q-avatar class="q-mb-md" size="5rem"  @click="logoutconfirm=true">
          <img :src="shareState.useravatar" alt="">
        </q-avatar>
        <div>{{shareState.username}}</div>
      </div>

      <!-- 未登录 -->
      <div v-else>
        <span>点击<a href="javascript:void(0)" @click="showLoginModal=true">登录</a>或者<a href="javascript:void(0)" @click="showRegisterModal=true">注册</a></span>
        <!-- <q-btn label="Login" @click="showLoginModal=true" />
        <q-btn label="Register" @click="showRegisterModal=true"/> -->

      </div>


    </div>






    <div>我的关注</div>
    <div>我收藏的作品</div>
    <div>我发布的作品</div>
    <!-- <q-btn label="tst" @click="test"/> -->

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
      logoutconfirm:false
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