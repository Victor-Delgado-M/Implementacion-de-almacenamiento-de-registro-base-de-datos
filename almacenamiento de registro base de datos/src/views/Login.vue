<template>
    <v-container class="my-15 bg-green accent-2">
 <v-row justify="center bg-green accent-2">
     <v-col lg="12" class="text-center">
         <v-subheader class="text-h4 justify-center">
            <h3 class="title-main text-white">Iniciar sesión</h3> 
         </v-subheader>

 
 

     </v-col>
    

     <v-col cols="6" align="center" lg="12">
         <div>
             <h1 class="title-main  text-white">Ingrese su correo y contraseña</h1>
             <form @submit.prevent="handleSubmit"> 

                 <input class="text-black border-double " type="email" placeholder="Ingrese email" v-model.trim="email">
                 <br>
                 <br>
                 <input class=" text-black  border-double" type="password" placeholder="Ingrese password" v-model.trim="password">
                 <br>
                 <br>
               
                 <button type="submit" class="title-main text-black bg-green accent-2"><v-btn color="grey-ligth-1" class="black--text mr-10" rounded>
                        <v-icon>mdi-account-key</v-icon> Iniciar sesión
                      </v-btn></button>
             </form>
           
         </div>
     </v-col>
 </v-row>
</v-container>
</template>

<script setup>
import {ref} from 'vue';
import {useUserStore} from '../store/usuario'
import {useRouter}  from 'vue-router'

const userStore = useUserStore() 
const router = useRouter()

const email = ref('')
const password = ref('')


const handleSubmit = async()=>{
if(!email.value || password.value.length < 6 ){
return alert('Verifica los campos')
}
await userStore.loginUser(email.value, password.value)
router.push('/equipo')
}


</script>

<style scoped>

.center-green{


padding-left: 150px;
color: rgb(7, 159, 22);

}

.p{
text-decoration: none; 
color: inherit;
padding: 2%;
}

h3.title-main {
      font-size: 60px;
      font-weight:bold;
      font-family: cursive;
      color:rgb(24, 219, 54);
  }

button.title-main {
      font-size: 35px;
      font-weight:bold;
      font-family: cursive;
      color:rgb(24, 219, 54);
  }

</style>