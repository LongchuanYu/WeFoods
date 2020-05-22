<template>
  <div>
    <q-pull-to-refresh @refresh="refresher">
      <q-list>


        <q-item clickable v-ripple v-for="(item,index) in 5" :key="index" @click="handleClick(index)">
          <q-item-section thumbnail class="q-pl-sm">
            <img src="statics/fake_resources/test.png" alt="" style="width:150px;height:150px;object-fit: cover;">
          </q-item-section>
          <!-- Cookbook Name -->
          <q-item-section top>
            <span class="text-weight-bold q-mb-xs">红红红红红红红红红红红红红烧肉！</span>
            
            <!-- Rate -->
            <span class="text-subtitle2 q-mb-xs">评分：9.5</span>

            <!-- Info -->
            <div class="flex justify-start q-mb-md">
              <q-badge color="blue">Good！</q-badge>
            </div>
            
            <!-- Author -->
            <div class="flex justify-start items-center">              
              <q-avatar size='xs' class="q-mr-sm"><img src="statics/fake_resources/avatar.png" alt=""></q-avatar>
              <div class="text-caption">name</div>
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
    }
  }
}
</script>