<template>
        <v-app-bar
      style="padding: 0px 60px"
      app
      color="green darken-3"
      dark
      elevation="9"
      elevate-on-scroll
    >
     <v-toolbar-title class="v-toolbar-title">Talento Humano</v-toolbar-title>
          <v-spacer />
            <router-link class="p" to="/"> <p class="p">Inicio</p></router-link>  
                <router-link class="p"  to="/mision">Misión y Visión</router-link>
                <router-link class="p"  to="/funciones">Funciones</router-link>
                <router-link class="p"  to="/objetivo">Objetivos</router-link>
                <router-link class="p"  to="/equipo">Equipo de trabajo</router-link>
                <router-link class="p"  to="/Horario">   <v-btn color="white"> Horario de atención  </v-btn></router-link>
                <router-link class="p"  to="/registro">   <v-btn color="white"> Registrarse  </v-btn></router-link>
                <router-link class="p"  to="/login">   <v-btn color="white"> Login  </v-btn></router-link>
           
              
    </v-app-bar>
  

</template>
  
  <script>
  

  export default {
    name: "Header",
    data(){
      return {
        menus:[
          {title:'Home', route:'/proyecto'},
          {title:'Proyectos', route:'proyectos'},
          {title:'Suscribirse', route:'suscribirse'},
          {title:'Contactos', route:'contactos'},

  
        ]
      }
    }
  };
  </script>
  
<style scoped>
 .v-toolbar-title{
  font-size:20px;
  color:#eaeeea;
  font-weight: 100;
  font-family: cursive;

 }

 .p{
  text-decoration: none; 
  color: inherit;
  padding: 2%;
 }
</style>