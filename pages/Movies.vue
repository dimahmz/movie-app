<template >
<main class="min-h-screen  bg-black" @click="clicked" >
<!-- error occurred while fetching -->
<error v-if="$fetchState.error" type="error"/>
   <!-- loading while fetching -->
<Loading class="bg-black" v-if="$fetchState.pending" />
<div v-else class="pb-5 pt-10 px-8 " >
<div class="text-white flex flex-col items-center justify-center  space-x-0    py-6 max-w-4xl space-y-5  mx-auto md:flex-row  md:space-y-0 md:space-x-16  md:items-center" >
   <div>
       <h1 class="mb-4 text-lg">Find any Movie </h1>

       <input type="text" 
        class="text-black px-2 shadow-sm w-48 h-7 border-gray-900  rounded-lg   mb-4 focus:ring-2 focus:ring-indigo-200 focus:border-gray-900 " 
         @keyup.enter="$fetch" 
         v-model="query" >
        <button href=""
           @click="$fetch"
            class="rounded-lg px-4 py-2 border-2 m-2 mt-4 border-gray-900 text-white hover:bg-gray-900 hover:text-gray-100  duration-200">
         search</button>
   </div>
   <div> 
      <h1 class="mb-4 text-lg">Select type</h1>
      <select class="w-48 h-7 text-black  mb-4 rounded-lg py-1 px-2"     v-model="moviesTypes">
         <option value="popular">  Popular</option>
               <option  value="top_rated">top rated</option>
               <option  value="now_playing">  now playing </option>
               <option  value="upcoming"> up coming</option>
      </select>
      <button href="" @click="$fetch"
        class="rounded-lg px-4 py-2 border-2 m-2 border-gray-900  text-white hover:bg-gray-900 hover:text-gray-100 duration-200">search</button>

   </div>
  </div>

<!-- MOvies grid -->

  <section 
   class="max-w-4xl py-5 justify-center mx-auto flex flex-wrap gap-5"
   v-if="MOVIES.length !=0 "  id="movies-grid" >

     <div v-for="(movie , index) in MOVIES" :key="index" >
        <div>
           <NuxtLink :to="{ name: 'tvormovie' , params:{tvormovie:`amovie${movie.id}` }}">
             <Card :tvMovieObj="movie" type="movie"/>
          </NuxtLink>
       </div>
     </div>
  </section  >
<!-- can't find  -->  
   <div v-else >
       <error type="Movie"/>
   </div>

 </div>
</main>
</template>

<script>
import axios from 'axios'
export default {
   scrollToTop: false,
    data() {
        return {
            MOVIES: [],
            query: "",
            moviesTypes:"popular"
        }
    },
     head() {
      return {
        title: "movies page"
    }
    },
    async fetch() {
        if (this.query === "") {
           await this.fetchMovies(this.moviesTypes);
            return;
        } 
        await this.quearedMovie();
    },
    methods: {
      clicked(){
      
        $nuxt.$emit("outsideClick")

      },
      // scroll to the top function
        // topScroll() {
        //     window.scrollTo(0, 0);
        //     console.log("to the top ")
        // },
        async quearedMovie() {
            let movieData = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c695182479fa9880b1a52cd4525a0caf&language=en-US&page=1&query=${this.query}`);
            let searchedMovieObj = await movieData;
            // console.log(searchedMovieObj.data.results)
            this.query=""
            this.MOVIES = []
           searchedMovieObj.data.results.forEach((movie) => { if(movie.title && movie.poster_path && movie.vote_average) this.MOVIES.push(movie)})
        },
        async fetchMovies(type) {
            this.MOVIES = [];
            for(let i=1;i<10;i++){
                let PopMoviesData = axios.get(`https://api.themoviedb.org/3/movie/${type}?api_key=c695182479fa9880b1a52cd4525a0caf&page=${i}`);
                let moviesObj = await PopMoviesData;
                moviesObj.data.results.forEach((movie) => { if(movie.title && movie.poster_path && movie.vote_average) this.MOVIES.push(movie)});
            }
        },
      
    } 
}
</script>
<style>

</style>