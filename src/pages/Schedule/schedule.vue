<template>
<div class="">
  <q-pull-to-refresh @refresh="refresher">


  <!-- 星期一 -->
  <q-card dark bordered class="bg-blue-grey-5 my-card q-mt-sm" v-for="(item,index) in items" :key="index">
    <q-card-section>
      <div class="text-h6">{{$g_transform[item.day-1]}}：{{item.cookbook?item.cookbook.name:''}}</div>
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



  <!-- 星期二
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
  </q-card> -->
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
      items:[],
      // transform:[{name:'星期一',color:''},{name:'星期二',color:''},{name:'星期三',color:''},{name:'星期四',color:''},
      //   {name:'星期五',color:''},{name:'星期六',color:''},{name:'星期天',color:''}
      // ],
    }
  },
  methods:{
    _getSchedule(){
      const path = '/schedules'
      this.$axios.get(path).then(res=>{
        console.log(res)
        this.items = res.data;
      }).catch(e=>{
        console.log(e)
      })
    },
    getit(){
      console.log(this.transform)
      return;

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
        day_name:'1',
        cookbook_id:'2'
      }
      this.$axios.put(path,payload).then(res=>{
        console.log(res)
      }).catch(e=>{
        console.log(e)
      })
    },
    refresher(done){
      console.log('refresh')
      done()
    }
  },
  created(){
    this._getSchedule()
  }
}
</script>