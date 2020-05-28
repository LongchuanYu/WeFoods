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
    <q-btn label="set1" @click="handleSet_1"/>
    <q-btn label="set2" @click="handleSet_2"/>
    <q-btn label="get" @click="handleGet"/>

  </div>
</template>

<script>
import Login from 'components/Login.vue'
import Register from 'components/Register.vue'
import { mapGetters } from 'vuex'
export default {
  components:{Register,Login},
  computed:{
    ...mapGetters({'userid':'base/userid'})
  },
  data(){
    return {
      showLoginModal:false,
      showRegisterModal:false
    }
  },
  methods:{
    handleSet_1(){
      window.localStorage.setItem('wefoods-token','1')
      console.log(window.localStorage.getItem('wefoods-token'))
    },
    handleSet_2(){
      window.localStorage.setItem('wefoods-token','2')
      console.log(window.localStorage.getItem('wefoods-token'))
    },
    handleGet(){
      console.log(
        this.$store.getters['base/userid'],
        this.$store.state.base.user.name
      )
    }
  }
}
</script>