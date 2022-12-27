<template>
  <PrincipalHeader />


</template>

<script>
import { defineComponent } from 'vue';

// Components


import PrincipalHeader from '../components/PrincipalHeader.vue';


export default defineComponent({
  name: 'HomeView',

  components: {

    PrincipalHeader
  },
});
</script>
