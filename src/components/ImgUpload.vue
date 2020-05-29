<template>
  <div class="">
    <input 
      type="file" 
      id="upload_img"  
      @change="handleImgChange" 
      ref="inputer" 
      accept="image/png,image/jpeg,image/bmp"
      hidden
    />
    <div v-if="dataUrl" class="relative-position">
      <q-btn round dense 
        color="negative" 
        icon="delete_outline" 
        class="absolute" 
        style="top:20px;right:20px;"
        @click="handleDelete"
      />
      <img :src="dataUrl" alt="" style="width:100%;object-fit:scale-down">
    </div>

    <div class="bg-grey-4 relative-position" style="height:30vh;" v-else>
      <label for="upload_img" style="top:0;right:0;bottom:0;left:0;" class="absolute">
        <span class="flex flex-center absolute-center text-grey text-h6">点击添加封面</span>
      </label>
    </div>
  </div>
</template>
<script>
/*
@emit {:string} dataUrl 
 */
export default {
  data(){
    return {
      dataUrl:''
    }
  },
  methods:{
    imgPreview(file){
      let self = this;
      if(!file || !URL.createObjectURL){
        return;
      }
      if(/^image/.test(file.type)){
        this.dataUrl = URL.createObjectURL(file)
        console.log(this.dataUrl)
      }
    },
    handleDelete(){
      this.dataUrl='',
      this.$emit('input', null);
    },
    handleImgChange(e){
      let inputDOM = this.$refs.inputer;
      // 通过DOM取文件数据
      this.imgfile    = inputDOM.files[0];
      this.errText = '';

      let size = Math.floor(this.imgfile.size / 1024);
      if (size > 5000) {
          // 这里可以加个文件大小控制
          return false
      }
      this.imgPreview(this.imgfile)
      // 把 this.file 抛出去



      // let data = new FormData();
      // let header = {
      //   headers:{
      //     'Content-Type':'multipart/form-data'
      //   }
      // }
      // const path = `http://localhost:5000/api/avatar`
      // data.append('pic',this.file);
      // this.$axios.post(path,data,header).then(res=>{
      //   console.log(res)
      // }).catch(e=>{
      //   console.log(e)
      // })

      // 触发这个组件对象的input事件
      this.$emit('input', this.imgfile);

    }
  }
}
</script>