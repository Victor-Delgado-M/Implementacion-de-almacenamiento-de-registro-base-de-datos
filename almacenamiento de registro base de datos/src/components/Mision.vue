<template>
    <v-container  class="my-15 bg-green accent-2">
        <v-row justify="center bg-green accent-2">
            <v-col lg="6" class="text-center bg-green accent-2 ">
                <v-subheader class="text-h2 bg-green accent-2">
                   <h3 class="bg-green accent-2 font-italic">Misión</h3>
                </v-subheader>
                <p class="text-h3">Buscamos generar acciones estratégicas e innovadoras para atraer, retener y desarrollar el talento humano de la Universidad Laica Eloy Alfaro
                </p>
            </v-col>
         
            <v-col lg="6" class="text-center bg-green accent-2 ">
                <v-subheader class="text-h2 bg-green accent-2">
                   <h3 class=" bg-green accent-2  font-italic">Visión</h3>
                </v-subheader>
                <p class="text-h3">Nuestra oficina aspira a ser parte integral del asesoramiento confiable de la alta gerencia y del logro de los objetivos de la Institución.
                </p>
            </v-col>


        </v-row>
    </v-container>
</template>


<script>
    export default{
        name:"Mision",
        data(){
            return{
                activeProyecto:'proyectoapp',
                proyectosList:
            [
                {title:'Proyecto Informática', facultad:'Facultad Informática' , lider:'Dr. Jorge Herrera Tapia', descripcion:'Aplicaciones tecnológicas para personas con discapacidad.' , image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnSHjFec9Q8GlzOf7vNi3PDSy-alq0engsml8BcIn7Dw&s'},   
                {title:'Proyecto Arquitectura',facultad:'Facultad arquitectura',lider:'Dr. Fernando Represa' ,descripcion:'Proyecto para la incidencia del rendimiento de la mano de obra y materiales en el costo de la construcción en Manta(Zona 4 de planificación).',image:'https://www.masqueteclas.com/wp-content/uploads/2019/04/cat-s61_8.jpeg'}   
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
  color: green;
}


</style>