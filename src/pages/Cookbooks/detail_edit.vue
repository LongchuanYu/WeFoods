<template>
  <div >




    <!-- Nav img -->
    <ImgUpload v-model="imgfile"/>

    <!-- Content -->
    <div class="q-pa-md">

      <!-- Name -->
      <q-input 
        v-model="fieldForm.title" 
        label="菜名"
        class="q-mb-xl"
      />

      <!-- description -->
      <div class="q-mb-lg">
        <div class="text-weight-bold q-mb-sm">描述</div>
        <q-input 
        v-model="fieldForm.description"
        filled
        type="textarea"
        />
      </div>

      <!-- 食材 -->
      <div class="q-mb-lg">
        <div class="text-weight-bold q-mb-sm">食材</div>
        <CustomGrid v-model="fieldForm.foodItems"/>

      </div>
      
      <!-- <q-btn @click="test" label="display"/>
      <q-btn @click="test_2" label="change"/> -->




      <!-- 步骤 -->
      <div class="q-mb-lg">
        <div class="text-weight-bold q-mb-sm">步骤</div>
        <q-input 
        v-model="fieldForm.step"
        filled
        type="textarea"
        />
      </div>

      <!-- 发布 -->
      <div>
        <q-btn color="primary" label="发布" style="width:100%" @click="handlePublish"/>
      </div>


    </div>


  </div>
</template>

<script>
import ImgUpload from 'components/ImgUpload.vue'
import CustomGrid from 'components/CustomGrid.vue'
export default {
  components:{ImgUpload,CustomGrid},
  data(){
    return {
      imgfile:null,
      fieldForm:{
        title:'',
        description:'',
        foodItems:[{name:'',value:''}],
        step:''
      },
      foo:''
      
    }
  },
  methods:{
    handlePublish(){
      let data = new FormData();
      let header = {
        headers:{
          'Content-Type':'multipart/form-data'
        }
      }
      const path = `api/cookbooks`
      data.append('imgfile',this.imgfile);
      data.append('name',this.fieldForm.title)
      data.append('description',this.fieldForm.description)
      data.append('myfoods',JSON.stringify(this.fieldForm.foodItems))
      data.append('step',this.fieldForm.step)
      this.$axios.post(path,data,header).then(res=>{
        this.$toasted.success('发布成功.')
        this.$router.push('/cookbooks')
      }).catch(e=>{
        console.log(e.response)
      })

    },
    _ping(){
      const path='api/ping'
      this.$axios.get(path).then(res=>{}).catch(e=>{})
    }
  },
  created(){
    this._ping()
  }
}
</script>
