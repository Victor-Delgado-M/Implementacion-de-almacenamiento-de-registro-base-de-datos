<template>
    <v-container class="pt-15  bg-green accent-2">
        <v-row  class=" bg-green accent-2" style="height:740px ;">
            <v-col lg="6" >
                <h2 class="title-main text-white">Presentamos a:</h2>
            <p class="description text-white"> <strong>Ricardo García:</strong></p>
            <p class="description text-white">10 Años de Experiencia en el sector público.</p>
            <p class="description text-white"> <strong>Paula Rivera(Alado de Ricardo):</strong></p>
            <p class="description text-white">Colíder dentro del proyecto "Millones de empleos".</p>
            <p class="description text-white"> <strong>Sofía Valdiezo:</strong></p>
            <p class="description text-white">Colíder dentro del proyecto "Millones de empleos".</p>
     
               
            
            </v-col>
        
            <v-col  lg="6">
                <v-img
                :src="require('../assets/equipo.png')"
                class="my-3 "
                contain
                width=100%
                height="100%"
                
               
              />
            </v-col>
        </v-row>
  
    </v-container>
  
  
  </template>
  
  <script>
     
  export default {
    name: "Equipo",
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