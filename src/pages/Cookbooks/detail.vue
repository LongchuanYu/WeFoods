<template>
  <div v-if="resources">
    <!-- Nav img -->
    <q-img :src="resources.imageUrl" 
      style="object-fit: scale-down;" 
      class="q-mb-md"
    />
    <!-- Content -->
    <div class="q-pa-md">
      <div class="text-h5 text-weight-bold flex justify-center q-mb-sm">{{resources.name}}</div>
      
      <div class="text-subtitle2 flex justify-center q-mb-md">
        <span class="">7.5分</span>
        <span>・</span>
        <span>1.5亿次浏览</span>
      </div>
      
      <!-- Author -->
      <div class="flex justify-start  q-mb-lg">
        <q-avatar class="q-mr-md">
          <img :src="resources.author.avatar" alt="">
        </q-avatar>
        <div class="flex column">
          <span class="text-h6">{{resources.author.username}}</span>
          <span class="text-weight-light" style="font-size:0.5em;">{{$moment(resources.timestamp).format('YYYY-MM-DD')}}</span>
        </div>
        <q-space />
        <q-btn outline color="primary" label="关注" class="" @click="test" />
      </div>
      
      <div class="q-mb-sm">{{resources.description}}</div>
      <!-- 食材 -->
      <div class="q-mb-sm">
        <div class="text-h6 text-weight-bold">食材</div>
        <q-table 
          :data="JSON.parse(resources.myfoods)"
          :columns="food.columns"
          row-key="hahaha"
          hide-header
          hide-bottom
          flat
        />
      </div>


      <!-- 步骤 -->
      <div class="text-h6 text-weight-bold">步骤</div>
      <span>{{resources.step}}</span>
    </div>

    <!-- sticky function -->
    <q-page-sticky position="bottom-right" :offset="[25,100]">
      <q-btn dense icon="add"  round color="secondary"  @click="open_dialog" style="opacity:0.8;"/>
    </q-page-sticky>
    <q-page-sticky position="bottom-right" :offset="[25,50]">
      <q-btn dense icon="thumb_up_alt"  round color="secondary" style="opacity:0.8;"/>
      <q-badge color="orange" class="g-custom-badge" >9999</q-badge>
    </q-page-sticky>

    <!-- dailog layer -->
    <q-dialog v-model="dailog.show" position="bottom" >
      <q-card class="" style="width:300px">
        <q-list>
          <q-item>
            <q-item-section>
              <q-item-label caption="">把{{resources.name}}安排到哪天</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator inset />

          <q-item clickable v-ripple v-for="(item,index) in schedule" :key="index" @click="assign(item.day)">
            <span>{{$g_transform[item.day-1]}}：{{item.cookbook?item.cookbook.name:''}}</span>
          </q-item>


        </q-list>
      </q-card>

    </q-dialog>

  </div>
</template>

<script>
export default {
  data(){
    return {
      food:{
        columns:[
          {name:'name',field: 'name',required: true,align:'left'},
          {name:'value',field: 'value',required: true,align:'left'}
        ],
      },
      dailog:{
        show:false 
      },
      resources:'',
      schedule:''


    }
  },
  methods:{
    assign(day){
      const path = '/schedules'
      let payload = {
        day_name:day,
        cookbook_id:this.resources.id
      }
      this.$axios.put(path,payload).then(res=>{
        console.log(res)
        this.dailog.show=false

      }).catch(e=>{
        console.log(e)
      })

    },
    open_dialog(){
      this.dailog.show = true
      this._getSchedule()
    },
    _getCookbook(id){
      const path = `/cookbooks/${id}`
      this.$axios.get(path).then(res=>{
        console.log(res)
        this.resources = res.data
      }).catch(e=>{
        console.log(e)
      })

    },
    _getSchedule(){
      const path = '/schedules'
      this.$axios.get(path).then(res=>{
        console.log(res)
        this.schedule = res.data;
      }).catch(e=>{
        console.log(e)
      })
    },
    test(){
      console.log(JSON.parse(this.resources.myfoods))
    }
  },
  created(){
    let ckid = this.$route.params.id
    this._getCookbook(ckid)
  }
}
</script>
