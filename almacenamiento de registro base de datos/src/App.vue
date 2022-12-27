<template>
    <v-app>
      <Header />

  
    <v-main>
        
      <router-view/>
    </v-main>
    
  </v-app>
</template>

<script>

import Header from './components/Header.vue';
import PrincipalHeader from './components/PrincipalHeader.vue';
export default {
  name: 'App',

  components: {
    Header,
    PrincipalHeader
},
}
</script>
