<template>
<div>
  <q-dialog :value="value" @input="$emit('input',$event)">
    <q-card style="width:400px;" class="q-pa-md">
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

      <div>
        <q-btn label="确定" type="submit" color="primary"/>
        <q-btn label="取消" color="primary" flat class="q-ml-sm" @click="onCancel"/>
      </div>
    </q-form>
    </q-card>
  </q-dialog>
</div>  
</template>



<script>
// import {login_action,logout_action} from 'components/utils/login.js'
export default {
  props:{
    value:Boolean
  },
  data () {
    return {
      username: null,
      password:null,
      errorMsg:[],
      successMsg:null,
      commited:false,
    }
  },

  methods: {
    onSubmit () {
      // initial
      this.errorMsg = []
      if(this.commited){return;}

      const path = `/tokens`
      let payload = {
        username:this.username,
        password:this.password
      }
      this.commited = true;
      this.$axios.post(path,{},{auth:payload}).then(res=>{
        // this.temp = res.data.token
        this.$store.dispatch('base/login_action',res.data.token)
        this.onCancel()
        this.$toasted.success('登录成功！')
      }).catch(e=>{
        console.log(e)
        this.$toasted.error('登录失败...')
        this.onCancel(false)

      })


    },
    onCancel (close_modal=true) {
      // if(this.temp){
      //   let encodedUrl = this.temp.split('.')[1]
      //   console.log(encodedUrl)
      //   let decodedUrl = window.atob(encodedUrl)
      //   console.log(decodedUrl)
      // }
      // return;
      this.username=null
      this.password=null
      this.errorMsg=[]
      this.successMsg = null
      this.commited=false
      if(close_modal){
        this.$emit('input',false) 
      }
      
    }
  }
}
</script>