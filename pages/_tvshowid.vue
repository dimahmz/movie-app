<template>
<div>

<Loading v-if="$fetchState.pending"/>
<div  v-else >
  <span class="my-16 mx-10 top-10 let-15">
    <IconsBackArrow/>
  </span>
 
  <h1>{{tvshow.name}}</h1>
  <p>popularity {{tvshow.popularity}}   </p>
  <p> release date {{tvshow.release_date}}</p>
  <p> vote average {{tvshow.vote_average}} <span><IconsStar/></span> </p>
  <p>status {{tvshow.status}}</p>
  <p>geners {{tvshow.genres[0].name}}</p>
 <p>runtime {{tvshow.runtime}}</p>
 <p>spoken language {{tvshow.spoken_languages[0].english_name}}</p>
  <p>the original title {{tvshow.original_name}}</p>
 <div>
  <img :src="`https://image.tmdb.org/t/p/w500/${tvshow.backdrop_path}`"  :alt="`movie image ${tvshow.name}`"/>
 
 </div>
  <div>
    <img :src="`https://image.tmdb.org/t/p/w500/${tvshow.poster_path}` "       :alt="`movie image ${tvshow.name}`"></img>
  </div>
    <p>{{tvshow.overview}}</p>  
  <h1>{{tvshow.name}}</h1>
</div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SelectedTvShow',

  
  data(){
    return{
     tvshow:{},
      id:this.$route.params.tvshowid
    }
  },
  async fetch(){
    let tvshowData= axios.get(`https://api.themoviedb.org/3/tv/${this.id}?api_key=c695182479fa9880b1a52cd4525a0caf`)
    let tvshowObj= await tvshowData
     this.tvshow=tvshowObj.data
     console.log(this.tvshow)
   },
   fetchDelay:1000
  }

</script>

