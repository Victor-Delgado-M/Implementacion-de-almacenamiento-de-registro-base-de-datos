<template>
    <Objetivo />
    <About />
   
  
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  
  
import Objetivo from '../components/Objetivo.vue';

  
  export default defineComponent({
    name: 'HomeView',
  
    components: {
        Objetivo,
 
    },
  });
  </script>
  