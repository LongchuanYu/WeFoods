<template>
  <div>
    <q-btn color="primary" :label="buttonVal+'  (+1)'" @click="handleTest"/>
  </div>
</template>

<script>
export default {
  model:{
    prop:'buttonVal',
    event:'haha'
  },
  props:{
    buttonVal:{
      type:Number,
      default:0
    }
    
  },
  data(){
    return {}
  },
  methods:{
    handleTest(){
      this.$emit('haha',this.buttonVal+1)
    }

  }
}
</script>