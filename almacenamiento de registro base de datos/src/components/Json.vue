<template>
    <v-container class="my-15 bg-green accent-2">
        <v-row justify="center  bg-green accent-2">
                <v-subheader class="text-h2 ">
                   <h3 class="verde">JSON RRHH</h3>
                </v-subheader>
                
            <slot v-if="activePerson === 'person'">
                
                <v-col lg="6">
                        
                    <v-card
                       class="mx-auto"
                       max-width="800"
                    
                       v-for="(person, index) in personList" :key="personindex"
                   
                     >
                       <v-img
                         class="white--text align-end"
                         height="200px"
                    
                         :src=person.image
                       >

                            
                    
                        
                       </v-img> 
                       
                       <v-card-subtitle class="pb-0">
                 
                       </v-card-subtitle>
                   
                       <v-card-text  class="text--primary">
                         <div> <strong>Nombre:</strong>{{person.nombre}}</div>
                         <div> <strong>Papel que desempeña:</strong>{{person.papel}}</div>
                         <div> <strong>Años de experiencia:</strong>{{person.año}}</div>
                         <br>
                         <div> <strong>Frase favorita</strong></div>
                         <div>{{person.frase}}</div>
                       </v-card-text>

                       <v-card-actions class="bg-blue">
                         <v-btn
                           color="white"
                           text
                         
                         >
                           Contactar    
                         </v-btn>
                       </v-card-actions>
                     </v-card>
             
                               </v-col>
                      
            </slot>
        </v-row>
    </v-container>
</template>


<script>
    export default{
        name:"JSON",
        data(){
            return{
                activePerson:'person',
                personList:
            [
                {nombre:'Jeff Weiner ', papel:'CEO', año:'5 Años' , frase:'“Nunca olvides que solo tienes una oportunidad de dar una buena primera impresión, con inversionistas, clientes, relaciones públicas y mercadotecnia.”' , image:'https://www.pngitem.com/pimgs/m/345-3453347_men-s-business-suit-imagen-de-hombre-traje.png'},   
                {nombre:'Tim Cook', papel:'CIO' , año:'3 Años', frase:'“Se necesita humildad para darse cuenta que no sabemos todo, no dormirse en los laureles y saber que debemos seguir aprendiendo y observando. Si no lo hacemos, aseguramos que habrá una empresa que va iniciando que tomará nuestro lugar.”',image:'https://pngscreativos.files.wordpress.com/2015/10/hombre-traje-chico.png'},   
                {nombre:'Richard Branson', papel:'CTO', año:'3 Años',frase:'“Los managers les dicen a las personas qué hacer, mientras que los líderes les inspiran para hacerlo.”',image:'https://www.seekpng.com/png/detail/249-2491837_woman-suit-png-mujer-con-traje-png.png'},   
            ],
         

            }
        }
    }
</script>

<style scoped>
.text-h4{
    color : green;
}

.verde{
  color: white;
}
</style>