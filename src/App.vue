<script lang="ts" setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue';

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
  })
})


</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>