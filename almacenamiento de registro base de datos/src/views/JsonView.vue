<template>
    <JSON />
  
  
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  

  import JSON from '../components/Json.vue';
  
  export default defineComponent({
    name: 'JsonView',
  
    components: {
 
      JSON
     
    },
  });
  </script>
  