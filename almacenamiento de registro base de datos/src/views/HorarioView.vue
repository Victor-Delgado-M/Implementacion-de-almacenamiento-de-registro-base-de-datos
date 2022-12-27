<template>
    <Horario />

   
  
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  
  
import Horario from '../components/Horario.vue';

  
  export default defineComponent({
    name: 'HorarioView',
  
    components: {
      Horario,
 
    },
  });
  </script>
  