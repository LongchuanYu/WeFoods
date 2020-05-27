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
        @click="dataUrl=''"
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
    handleImgChange(e){
      let inputDOM = this.$refs.inputer;
      // 通过DOM取文件数据
      this.file    = inputDOM.files[0];
      this.errText = '';

      let size = Math.floor(this.file.size / 1024);
      if (size > 5000) {
          // 这里可以加个文件大小控制
          return false
      }

      let data = new FormData();
      let header = {
        headers:{
          'Content-Type':'multipart/form-data'
        }
      }
      const path = `http://localhost:5000/api/avatar`
      data.append('pic',this.file);
      this.$axios.post(path,data,header).then(res=>{
        console.log(res)
      }).catch(e=>{
        console.log(e)
      })



      // 触发这个组件对象的input事件
      this.$emit('input', this.dataUrl);

      
      // 这里就可以获取到文件的名字了
      this.fileName = this.file.name;
      
      this.imgPreview(this.file)

      // 这里加个回调也是可以的
      this.onChange && this.onChange(this.file, inputDOM.value);
    }
  }
}
</script>