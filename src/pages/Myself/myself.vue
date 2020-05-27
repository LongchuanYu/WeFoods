<template>
  <div class="q-mt-lg">


    <!-- 父组件 -->
    <div style="width:200px;height:100px;border:1px solid" class="bg-primary">
      <span>parent</span>
      <input type="text" class="q-ma-md" v-model="button_val"/>
    </div>


    <!-- 子组件 -->
    <div style="width:200px;height:100px;border:1px solid" class="bg-info">
      <span>child</span>
      <test v-model="button_val" class="q-ma-md"/>
    </div>
    

  </div>
</template>
<script>
import test from 'components/test.vue'
export default {
  data(){
    return {
      button_val:1
    }
  },
  components:{test},
  methods:{
    handleInputChange(event){
      this.button_val=Number(event.target.value)
    }
  }
}
</script>