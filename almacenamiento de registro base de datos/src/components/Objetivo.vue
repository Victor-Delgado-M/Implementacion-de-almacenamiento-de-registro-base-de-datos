<template>
    <v-container class="pt-15  bg-green accent-2">
        <v-row  class=" bg-green accent-2" style="height:740px ;">
            <v-col lg="6" >
                <h2 class="title-main text-white ">Objetivos:</h2>
            <p class="description text-white"> <strong>Objetivos General:</strong></p>
            <p class="description text-white">Captar a candidatos calificados o con la capacidad de adquirir las competencias necesarias para el puesto que desempeñarán y los objetivos de la empresa.</p>
            <p class="description text-white"> <strong>Objetivos Específicos</strong></p>
            <li class="description text-white">Proporcionar a su empresa colaboradores calificados, satisfechos con su puesto de trabajo y fieles al negocio.</li>
            <li class="description text-white">Medir el desempeño de los empleados para tomar medidas que ayuden a identificar su contribución e importancia para la compañía.</li>
            <li class="description text-white">Manejar estrategias de flexibilidad respecto al lugar y horario de trabajo.</li>
         
     
               
            
            </v-col>
        
            <v-col  lg="3">
                <v-img
                :src="require('../assets/objetivo.png')"
                class="my-3 "
                contain
                width=100%
                height="80%"
                
               
              />
            </v-col>
        </v-row>
  
    </v-container>
  
  
  </template>
  
  <script>
     
  export default {
    name: "Objetivo",
  };    
  
  
  </script>
  
  <style scoped>
    h2.title-main {
        font-size: 60px;
        font-weight:bold;
        font-family: cursive;
        color:rgb(24, 219, 54);
    }
    li.description , p.description
    {
        font-size: 20px;
        font-family: cursive;
        margin:32px 0px;
        color:#000000;
    }
  
    .white--text{
        font-size: 20px;
    }
  </style>