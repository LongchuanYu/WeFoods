<template>
<div class="q-mt-sm">
  <q-pull-to-refresh @refresh="refresher">
  <!-- 星期一 -->
  <q-card dark bordered class="bg-blue-grey-5 my-card ">
    <q-card-section>
      <div class="text-h6">星期一：土豆炖牛肉</div>
      <span class="text-subtitle2">牛肉：</span><small>500cal</small>
      <br>
      <span class="text-subtitle2">土豆：</span><small>200cal</small>
      <div></div>
    </q-card-section>
    <q-separator dark inset />
    <q-card-section class="q-pa-xs flex justify-end">
      <q-btn flat color="grey-1" label="换一道菜" size="md" class=""/>
      <q-btn flat color="grey-1" label="编辑" size="md" class="" @click="getit"/>
    </q-card-section>
  </q-card>
  <!-- 星期二 -->
  <q-card dark bordered class="bg-secondary my-card q-mt-sm">
    <q-card-section>
      <div class="text-h6">星期二：土豆炖牛肉</div>
      <span class="text-subtitle2">牛肉：</span><small>500cal</small>
      <br>
      <span class="text-subtitle2">土豆：</span><small>200cal</small>
      <div></div>
    </q-card-section>
    <q-separator dark inset />
    <q-card-section class="q-pa-xs flex justify-end">
      <q-btn flat color="grey-1" label="编辑" size="md" class="" @click="putit"/>
    </q-card-section>
  </q-card>
  <!-- 星期三 -->
  <!-- 星期四 -->
  <!-- 星期五 -->
  <!-- 星期六 -->
  <!-- 星期天 -->
  </q-pull-to-refresh>
</div>
</template>
<script>
export default {
  data(){
    return {
      
    }
  },
  methods:{
    getit(){
      const path = '/schedules'
      this.$axios.get(path).then(res=>{
        console.log(res)
      }).catch(e=>{
        console.log(e)
      })
    },
    putit(){
      console.log('123')
      const path = '/schedules'
      let payload = {
        day_name:'3',
        cookbook_id:'1'
      }
      this.$axios.post(path,payload).then(res=>{
        console.log(res)
      }).catch(e=>{
        console.log(e)
      })
    },
    refresher(done){
      console.log('refresh')
      done()
    }
  }
}
</script>