<template>
  <div class="q-mt-sm"> 
    <q-pull-to-refresh @refresh="refresher">
      <q-list>


        <q-item clickable v-ripple v-for="(item,index) in items" :key="index" @click="handleClick(item.id)">
          <q-item-section thumbnail class="q-pl-sm">
            <img :src="item.imageUrl" alt="" style="width:150px;height:150px;object-fit: cover;">
          </q-item-section>
          <!-- Cookbook Name -->
          <q-item-section top>
            <span class="text-weight-bold q-mb-xs">{{item.name}}</span>
            
            <!-- Rate -->
            <span class="text-subtitle2 q-mb-xs">评分：9.5</span>

            <!-- Info -->
            <div class="flex justify-start q-mb-md">
              <q-badge color="blue">Good！</q-badge>
            </div>
            
            <!-- Author -->
            <div class="flex justify-start items-center">              
              <q-avatar size='xs' class="q-mr-sm"><img :src="item.author.avatar" alt=""></q-avatar>
              <div class="text-caption">{{item.author.username}}</div>
            </div>
          </q-item-section>
        </q-item>


      </q-list>
    </q-pull-to-refresh>
  </div>
</template>

<script>
export default {
  data(){
    return {
      items:''
    }
  },
  methods:{
    refresher(done){
      done()
      return
    },
    handleClick(index){
      this.$router.push({
        name:'Detail',
        params:{id:index}
      })
    },
    _getCookbooks(){
      let page = this.$route.query.page || 1
      let per_page = this.$route.query.per_page || 20
      const path = `/cookbooks/?page=${page}&per_page=${per_page}`
      this.$axios.get(path).then(res=>{
        this.items = res.data.items
      }).catch(e=>{
        console.log(e)
      })
    }
  },
  created(){
    this._getCookbooks()
  }
}
</script>