<script setup>
import { ref, computed } from 'vue'
import Home from './Home.vue'
import Playground from './playground.vue'



</script>


<template>
  <VueScrollProgress></VueScrollProgress>
  <router-view></router-view>
</template>

<style>
* {
  font-family: 'Exo 2';
}

.pbar {
  z-index: 99999;
}

</style>