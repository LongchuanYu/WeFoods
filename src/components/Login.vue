<template>
<div>
  <q-dialog :value="show" @input="show=false">
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
        <q-btn label="取消" color="primary" flat class="q-ml-sm"/>
      </div>
    </q-form>
    </q-card>
  </q-dialog>
  <q-btn label="click" @click="show=true"/>
</div>  
</template>



<script>
export default {
  data () {
    return {
      username: null,
      password:null,
      errorMsg:[],
      successMsg:null,
      commited:false,
      show:false
    }
  },

  methods: {
    onSubmit () {

    },

    onCancel () {

    },
    test(){
      this.show = false
    },
    test2(){}
  }
}
</script>