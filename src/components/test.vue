<template>
  <div>
    <q-btn color="primary" label="clickme" @click="handleTest"/>
  </div>
</template>

<script>
export default {
  data(){
    return {}
  },
  methods:{
    handleTest(){
      const path=`http://localhost:5000/api/avatar`
      this.$axios.get(path).then(res=>{
        console.log(res)
      }).catch(e=>{
        console.log(e)
      })
    }
  }
}
</script>