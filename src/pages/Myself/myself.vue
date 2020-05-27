<template>
  <div class="q-mt-md">
    <div>
      <div>Avatar</div>
      <div>Name / info</div>
      <q-btn label="Login" @click="test"/>
      <q-btn label="Register" @click="showRegisterModal=true"/>
      <q-dialog v-model="showRegisterModal">
        <q-card style="width:400px;">
          <Register />
        </q-card>
      </q-dialog>
    </div>
    <div>我的关注</div>
    <div>我收藏的作品</div>
    <div>我发布的作品</div>
    <div></div>

  </div>
</template>

<script>
import Register from 'components/Register.vue'
export default {
  components:{Register},
  data(){
    return {
    
    }
  },
  methods:{
    test(){
      console.log(this.$store.state.myself.show_register_modal)
    }
  },
  computed:{
    showRegisterModal:{
      get(){
        return this.$store.state.myself.show_register_modal
      },
      set(value){
        this.$store.commit('myself/HANDLE_REGISTER_MODAL', value)
      }
    }
  }
}
</script>