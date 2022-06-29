<template>
  <div class="w-40 h-72 bg-indigo-300  " >
    <img :src="`https://image.tmdb.org/t/p/w500/${objMovies.poster_path}` " :alt="`movie image ${objMovies.title}`">
        <!-- <h1>{{objMovies.title.slice(0,25)}}
        <span  v-if="objMovies.title.length > 25" >...</span>
        </h1> -->
  </div>
</template> 

<script>
export default {
 props:["objMovies"],
 data(){
  return{
    img:"",
    alt:""

  }
  
 },
 async fetch(){

 },

 methods:{
 
} 



}
</script>
.
<style>

</style>