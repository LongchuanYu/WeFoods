<template>
  <q-layout view="lHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar-title class="q-gutter-sm">
        <Navigate class="q-ml-md q-mt-md"/>
      </q-toolbar-title>

      <q-tabs align="center">
        <q-route-tab to="/schedule" label="我的计划" />
        <q-route-tab to="/cookbooks" label="食谱大全" />
        <q-route-tab to="/myself" label="我的" />
      </q-tabs>
      
    </q-header>

    
      <q-page-container>
        <transition name="fade-transform" mode="out-in" :duration="200">
          <!-- <div class="row justify-center"> -->
            <router-view id="l-viewer"/>
          <!-- </div> -->
        </transition>
      </q-page-container>
    
  </q-layout>
</template>

<script>
import Navigate from 'components/Navigate'
export default {
  components:{
    Navigate
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
@media screen and (min-width: 750px) {
  #l-viewer{
    margin-left:auto;
    margin-right:auto;
    width:45%;
  }
}
</style>