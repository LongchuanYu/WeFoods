<template>
  <div>




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
          <span class="text-weight-light" style="font-size:0.5em;">2020.10.1</span>
        </div>
        <q-space />
        <q-btn outline color="primary" label="关注" class=""/>
      </div>
      
      <div class="q-mb-sm">{{resources.description}}</div>
      <!-- 食材 -->
      <div class="q-mb-sm">
        <div class="text-h6 text-weight-bold">食材</div>
        <q-table 
          :data="food.data"
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
      <q-btn dense icon="add"  round color="secondary"  @click="open_dialog()" />
    </q-page-sticky>
    <q-page-sticky position="bottom-right" :offset="[25,50]">
      <q-btn dense icon="thumb_up_alt"  round color="secondary" />
      <q-badge color="orange" class="g-custom-badge">9999</q-badge>
    </q-page-sticky>

    <!-- dailog layer -->
    <q-dialog v-model="dailog.show" position="bottom">
      <q-card class="" style="width:300px">
        <q-list>
          <q-item>
            <q-item-section>
              <q-item-label caption="">把红烧牛肉安排到哪天</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator inset />

          <q-item clickable v-ripple>
            <span>星期一：红烧牛肉红烧牛肉红烧牛肉红烧牛肉红烧牛肉</span>
          </q-item>
          <q-item clickable v-ripple>
            <span>星期一：红烧牛肉</span>
          </q-item>
          <q-item clickable v-ripple>
            <span>星期一：红烧牛肉</span>
          </q-item>
          <q-item clickable v-ripple>
            <span>星期一：红烧牛肉</span>
          </q-item>
          <q-item clickable v-ripple>
            <span>星期一：红烧牛肉</span>
          </q-item>
          <q-item clickable v-ripple>
            <span>星期一：红烧牛肉</span>
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
          {name:'foodname',field: 'foodname',required: true,align:'left'},
          {name:'foodcal',field: 'foodcal',required: true,align:'left'}
        ],
        data:[
          {foodname:'米饭',foodcal:'115 cal'},
          {foodname:'土豆',foodcal:'2000 cal'}
        ]
      },
      dailog:{
        show:false 
      },
      resources:{
        name:'',
        description:'',
        imageUrl:'',
        myfoods:'',
        step:'',
        author:''
      }


    }
  },
  methods:{
    open_dialog(){
      this.dailog.show = true
    },
    _getCookbook(id){
      const path = `/cookbooks/${id}`
      this.$axios.get(path).then(res=>{
        console.log(res)
        let data = res.data;
        this.resources.name = data.name
        this.resources.description = data.description
        this.resources.imageUrl = data.imageUrl
        this.resources.myfoods = data.myfoods
        this.resources.step = data.step
        this.resources.author = data.author
      }).catch(e=>{
        console.log(e)
      })

    }
  },
  created(){
    let ckid = this.$route.params.id
    this._getCookbook(ckid)
  }
}
</script>
