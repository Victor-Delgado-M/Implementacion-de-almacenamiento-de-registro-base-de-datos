<template>
    <v-container class="my-15 bg-green accent-2">
        <v-row justify="center  bg-green accent-2">
                <v-subheader class="text-h2 ">
                   <h3 class="verde">XML RRHH</h3>
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
                   
                       <v-card-text class="text--primary">
                        <div>{{mostrarXML}}</div>
                        <div> <strong>Nombre:</strong>{{xml.personas.persona[0].nombre[0]}}</div>
                         <div> <strong>Papel que desempeña:</strong>{{xml.personas.persona[0].papel[0]}}</div>
                         <div> <strong>Año de experiencia:</strong>{{xml.personas.persona[0].año[0]}}</div>
                         <br>
                         <div> <strong>Frase favorita</strong></div>
                         <div>{{xml.personas.persona[0].frase[0]}}</div>
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

const xml2js = require('xml2js');
const parser = new xml2js.Parser();
    export default{
        name:"xml",
        data(){
            return{
                xml: '',
                activePerson:'person',
                personList:
            [
                {nombre:'Jeff Weiner ', papel:'CEO', año:'5 Años' , frase:'“Nunca olvides que solo tienes una oportunidad de dar una buena primera impresión, con inversionistas, clientes, relaciones públicas y mercadotecnia.”' , image:'https://www.pngitem.com/pimgs/m/345-3453347_men-s-business-suit-imagen-de-hombre-traje.png'}  
            ],
         

            }
        },
        computed: {

mostrarXML() {

    parser.parseString(`<personas>  
<persona>  
<nombre>Jeff Weiner</nombre>  
<papel>CEO</papel>  
<año>Diciembre 6/2022</año>  
<frase>“Nunca olvides que solo tienes una oportunidad de dar una buena primera impresión, con inversionistas, clientes, relaciones públicas y mercadotecnia.”</frase>  
</persona>   
</personas>`, (err, result)  => {
    let data = "";
 
  
    this.xml =result;
 
    }); 

 

   
},
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