<template>
  <div class="q-mt-sm"> 
    
    <q-infinite-scroll @load="onLoad" :offset="250">
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
      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>
    
  </div>
</template>

<script>
export default {
  data(){
    return {
      items:'',
      _meta:'',
      shareData:{
        page:1,
        per_page:10
      }
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
    _getCookbooks(refresh=null){
      let page = this.shareData.page
      let per_page = this.shareData.per_page
      const path = `/cookbooks/?page=${page}&per_page=${per_page}`
      this.$axios.get(path).then(res=>{
        console.log(res)
        this.items = res.data.items
        this._meta = res.data._meta
        if(refresh) refresh()
      }).catch(e=>{
        console.log(e)
      })
    },
    refresher(done){
      this._getCookbooks(done)
    },
    onLoad(index,done){
      // this._getCookbooks(null,done)
      if(!this.items || !this._meta || (this._meta && this._meta.page>this._meta.pages) ){
        done()
        return;
      }
      let page = this._meta.page+1
      let per_page = this.shareData.per_page
      const path = `/cookbooks/?page=${page}&per_page=${per_page}`
      this.$axios.get(path).then(res=>{
        this._meta = res.data._meta
        this.items = this.items.concat(res.data.items)
        done()
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