<template>
    <Mision />

  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  
import Mision from '../components/Mision.vue';
export default defineComponent({
    name: 'MisionView',
  
    components: {
      Mision
    },
  });
  </script>
  