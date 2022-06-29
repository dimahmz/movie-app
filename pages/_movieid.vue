<template>
<Loading v-if="$fetchState.pending"/>
<div  v-else >
  <span class="my-16 mx-10 top-10 let-15">
    <IconsBackArrow/>
  </span>
 
  <h1>{{Movie.title}}</h1>
  <p>popularity {{Movie.popularity}}   </p>
  <p> release date {{Movie.release_date}}</p>
  <p> vote average {{Movie.vote_average}} <span><IconsStar/></span> </p>
  <p>status {{Movie.status}}</p>
<p>geners {{Movie.genres[0].name}}</p>
<p>runtime {{Movie.runtime}}</p>
<p>spoken language {{Movie.spoken_languages[0].english_name}}</p>
<p>the original title {{Movie.original_title}}</p>
 <div>
  <img :src="`https://image.tmdb.org/t/p/w500/${Movie.backdrop_path}` "            :alt="`movie image ${Movie.title}`"></img>
 </div>
  <div>
    <img :src="`https://image.tmdb.org/t/p/w500/${Movie.poster_path}` "            :alt="`movie image ${Movie.title}`"></img>
  </div>
    <p>{{Movie.overview}}</p>  
  <h1>{{Movie.title}}</h1>
</div>
</transition>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SelectedMovie',

  
  data(){
    return{
      Movie:{},
      id:this.$route.params.movieid
    }
  },
  async fetch(){
    let movieData= axios.get(`https://api.themoviedb.org/3/movie/${this.id}?api_key=c695182479fa9880b1a52cd4525a0caf`)
    let movieObj= await movieData
     this.Movie=movieObj.data
     console.log(this.Movie)
   },
   fetchDelay:2000
  }

</script>

<style scoped>

</style>


