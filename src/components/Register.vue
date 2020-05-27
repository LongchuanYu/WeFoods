<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <q-input
        dense
        filled
        v-model="username"
        label="Please input your username"
        hint="username"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        dense
        filled
        type="password"
        v-model="password"
        label="Please input your password"
        hint="password"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        dense
        filled
        type="email"
        v-model="email"
        label="Please input your email"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your email'
        ]"
      />

    <q-banner class="bg-positive text-white" v-if="successMsg">
      {{successMsg}}
    </q-banner>
    <q-banner class="bg-negative text-white" v-if="errorMsg.length" v-for="(item,index) in errorMsg" :key="index">
      {{item}}
    </q-banner>

      <div>
        <q-btn label="确定" type="submit" color="primary"/>
        <q-btn label="取消" color="primary" flat class="q-ml-sm" @click="onCancel" />
      </div>
    </q-form>

  </div>
</template>



<script>
export default {
  data () {
    return {
      username: null,
      password:null,
      email: null,
      errorMsg:[],
      successMsg:null
    }
  },

  methods: {
    onSubmit () {
      const path = `users`
      let self = this
      let payload = {
        username:this.username,
        password:this.password,
        email:this.email
      }
      this.errorMsg = []
      this.$axios.post(path,payload).then(res=>{
        this.successMsg="恭喜，注册成功！"
        setTimeout(() => {
          self.$store.commit('myself/HANDLE_REGISTER_MODAL',false)
        }, 1000);
        
      }).catch(e=>{
        if(e.response && e.response.data){
          let response = e.response.data.message;
          for(let res in response){
            console.log(res,response[res])
            this.errorMsg.push(res.toString()+': '+response[res].toString())
          }
        }
        console.log(e.response.data)
      })
      
    },

    onCancel () {
      this.username = null
      this.email = null
      this.password=null
      this.$store.commit('myself/HANDLE_REGISTER_MODAL',false)
    }
  }
}
</script>