<template>
  <div class="q-mt-md">
    <div>
      <div>Avatar</div>
      <div>Name / info</div>
      <q-btn label="Login" @click="showLoginModal=true"/>
      <q-btn label="Register" @click="showRegisterModal=true"/>


      <Register v-model="showRegisterModal"/>
      <Login v-model="showLoginModal"/>

    </div>
    <div>我的关注</div>
    <div>我收藏的作品</div>
    <div>我发布的作品</div>
    <div></div>

  </div>
</template>

<script>
import Login from 'components/Login.vue'
import Register from 'components/Register.vue'
export default {
  components:{Register,Login},
  data(){
    return {
      showLoginModal:false,
      showRegisterModal:false
    }
  },
  methods:{
  }
}
</script>