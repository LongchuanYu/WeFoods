<template>
<div>
  <q-markup-table flat square class="q-mb-sm">
    <tbody>
      <tr v-for="(item,index) in value" :key="index">
        <td>
          <q-input placeholder="名字" borderless dense input-style="padding:0;" v-model="item.name"/>
        </td>
        <td>
          <q-input placeholder="数量" borderless dense input-style="padding:0;" v-model="item.value"/>
        </td>
        <td>
          <q-btn size="sm" flat dense icon="clear" @click="handleDeleteRow(index)"/>
        </td>
      </tr>
    </tbody>
    
  </q-markup-table>
  <q-btn color="grey-3" text-color="grey-7" unelevated icon="add" size="sm" dense @click="handleAddRow" style="width:100%;"/>
</div>
</template>

<script>
/*
 组件这样使用：<CustomGrid @foodvalue="field.foodvalue = $event" />
 */
export default {
  props:{
    value:{
      type:Array,
    }
  },
  data(){
    return{
      // items:[{name:'',value:''}]
    }
  },
  methods:{
    handleAddRow(){
      this.value.push({
        name:'',
        value:''
      })
    },
    handleDeleteRow(index){
      if (this.value.length<=1) {
        this.value[0].name =''
        this.value[0].value=''
        return;
      }
      this.value.splice(index,1)
    }
  },
}
</script>
