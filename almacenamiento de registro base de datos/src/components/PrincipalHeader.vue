<template >
    <v-container class="pt-15 bg-green accent-2
    ">
        <v-row  class="bg-green accent-2">
            <v-col lg="6"  class="green accent-2
            ">
                <h2 class="title-main font-italic text-white          "><strong>Bienvenido</strong></h2>
                <p class="description">Encontrarás la mejor manera de gestionar el talento humano</p>
             

                 <router-link class="p" to="/equipo">  <p class="p text-black">
                    <v-btn color="grey-ligth-1" class="white--text mr-10" rounded>
                        <v-icon>mdi-eye</v-icon>  Ver a nuestro equipo
                      </v-btn>

                 </p></router-link>  
                 <router-link class="p" to="/json">  <p class="p text-black">
                    <v-btn color="grey-ligth-1" class="white--text mr-10" rounded>
                        <v-icon>mdi-text-box-multiple</v-icon>  Ver Json
                      </v-btn>

                 </p></router-link>  
                 <router-link class="p" to="/xml">  <p class="p text-black">
                    <v-btn color="grey-ligth-1" class="white--text mr-10" rounded>
                        <v-icon>mdi-file-document</v-icon>  Ver XML
                      </v-btn>

                 </p></router-link>  
            </v-col>
            <v-col lg="6"  class="bg-green accent-2">
                <v-img
                :src="require('../assets/sin fondo.png')"
                class="my-3"
                contain
                width="100%"
               
              />
            </v-col>
        </v-row>

    </v-container >


</template>

<script>
     
  export default {
    name: "PrincipalHeader",
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
        margin:80px 100px;
        color:#ffffff;
   
    }

    .white--text{
        font-size: 20px;
    }

    .p{
  text-decoration: none; 
  color: inherit;
  padding: 2%;
 }


</style>