<template>
  <div class="w-40 h-72 bg-indigo-300  " >
    <img :src=" `https://image.tmdb.org/t/p/w500/${objTvShow.poster_path}` "            :alt="`movie image ${objTvShow.name}`">
     <h1>{{objTvShow.name}}</h1>
        <!-- <h1>{{objMovies.title.slice(0,25)}}
        <span  v-if="objMovies.title.length > 25" >...</span>
        </h1> -->
  </div>
</template>

<script>
export default {
 props:["objTvShow"]
}
</script>
.
<style>

</style>


