<template >
<div>
<NavsNavbar/>
<Loading v-if="$fetchState.pending"/>
<div v-else 
  class="pb-5 bg-black">
    <!-- search input -->
  <div class="absolute top-20 left-14 " >

  <input type="text" class="" 
   @keyup.enter="$fetch" 
   v-model="query" >
  <button class="rounded py-1 px-6 bg-indigo-900"
   @click="$fetch">serch
   </button>
  </div>


  <!-- MOvies grid -->
  
 
<section 
class="max-w-4xl py-7 justify-center mx-10 bg-grey mx-auto  my-10 flex flex-wrap gap-5 "
v-if="MOVIES.length !=0  "  id="movies-grid" 
  >
<!-- movies  -->
  <div v-for="(movie , index) in MOVIES" 
       :key="index">
     <NuxtLink :to="{ name: 'movieid' , params:{movieid:movie.id}}">
        <filmCard :objMovies="movie" />
     </NuxtLink>
    </div>
</section  >
<div v-else >
 <!-- can't find component -->
 <movieError/>
</div>

</div>
</div>

</template>

<script>
import axios from 'axios'
export default {
    name: "IndexPage",
    data() {
        return {
            MOVIES: [],
            query: ""
        };
    },
    async fetch() {
        if (this.query === "") {
            await this.fetchMovies();
            return;
        }
        await this.quearedMovie();
    },
    methods: {
        topScroll() {
            window.scrollTo(0, 0);
        },
        async quearedMovie() {
            let movieData = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c695182479fa9880b1a52cd4525a0caf&language=en-US&page=1&query=${this.query}`);
            let searchedMovieObj = await movieData;
            // console.log(searchedMovieObj.data.results)
            this.MOVIES = []
           searchedMovieObj.data.results.forEach((movie) => { this.MOVIES.push(movie); })
        },
        async fetchMovies() {
            this.MOVIES = [];
            let moviesData = axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=c695182479fa9880b1a52cd4525a0caf");
            let moviesObj = await moviesData;
            moviesObj.data.results.forEach((movie) => { this.MOVIES.push(movie); });
            //  console.log(this.MOVIES)
        },
      
    } 
}
</script>
