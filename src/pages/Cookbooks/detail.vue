<template>
  <div>




    <!-- Nav img -->
    <q-img src="statics/fake_resources/food_1.png" 
      style="object-fit: scale-down;" 
      class="q-mb-md"
    />
    <!-- Content -->
    <div class="q-pa-md">
      <div class="text-h5 text-weight-bold flex justify-center q-mb-sm">肯德基全家桶</div>
      
      <div class="text-subtitle2 flex justify-center q-mb-md">
        <span class="">7.5分</span>
        <span>・</span>
        <span>1.5亿次浏览</span>
      </div>
      
      <!-- Author -->
      <div class="flex justify-start  q-mb-lg">
        <q-avatar class="q-mr-md">
          <img src="statics/fake_resources/avatar.png" alt="">
        </q-avatar>
        <div class="flex column">
          <span class="text-h6">Name</span>
          <span class="text-weight-light" style="font-size:0.5em;">2020.10.1</span>
        </div>
        <q-space />
        <q-btn outline color="primary" label="关注" class=""/>
      </div>
      
      <div class="q-mb-sm">Description</div>
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
      <span>先煮饭，再炒土豆，最后盛饭，开吃先煮饭，再炒土豆，最后盛饭，开吃先煮饭，再炒土豆，最后盛饭，开吃</span>
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
      }
    }
  },
  methods:{
    open_dialog(){
      this.dailog.show = true
    }
  }
}
</script>
