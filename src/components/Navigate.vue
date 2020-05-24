<template>
  <div>

    <q-btn flat round  icon="home" padding="xs" to="/" class="q-mr-md"/>
    <q-btn flat round  icon="arrow_back" padding="xs" @click="$router.back()"/>
    <q-btn flat round  icon="arrow_forward" padding="xs" @click="$router.forward()"/>
    <q-btn flat round icon="add" @click="$router.push('/detail-edit/0')"/>
    <!-- <q-btn
      class="float-right"
      flat round padding="xs"
      @click="$q.fullscreen.toggle()"
      :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
    /> -->
  </div>
</template>