<template>
  <Equipo />

 

</template>

<script>
import { defineComponent } from 'vue';

// Components


import Equipo from '../components/Equipo.vue';


export default defineComponent({
  name: 'LoginView',

  components: {
    Equipo,

  },
});
</script>
