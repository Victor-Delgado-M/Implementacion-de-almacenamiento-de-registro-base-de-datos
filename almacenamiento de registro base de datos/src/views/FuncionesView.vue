<template>
    <Contacto />

  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  
import Contacto from '../components/Funciones.vue';
export default defineComponent({
    name: 'ContactoView',
  
    components: {
        Contacto
    },
  });
  </script>
  