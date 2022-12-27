<template>
  <v-container class="pt-15  bg-green accent-2">
      <v-row  class=" bg-green accent-2" style="height:540px ;">
          <v-col lg="6" >
              <h2 class="title-main text-white">Comunicate con nosotros</h2>
          <p class="description text-white"> <strong>Correo:</strong>talentos.humanos@uleam.edu.ec.</p>
          <p class="description text-white"> <strong>En horarios de: </strong>08h00 hasta 17H00

          </p>
   
             
          
          </v-col>
      
          <v-col  lg="6">
              <v-img
              :src="require('../assets/horarios.png')"
              class="my-3 "
              contain
              width="100%"
             
            />
          </v-col>
      </v-row>

  </v-container>


</template>

<script>
   
export default {
  name: "Horario",
};    


</script>

<style scoped>
  h2.title-main {
      font-size: 60px;
      font-weight:bold;
      font-family: cursive;
      color:rgb(24, 219, 54);
  }
  p.description {
      font-size: 30px;
      font-family: cursive;
      margin:32px 0px;
      color:#000000;
  }

  .white--text{
      font-size: 20px;
  }
</style>