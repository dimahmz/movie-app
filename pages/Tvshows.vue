<template >

<main   class="min-h-screen bg-black" >
   
<!-- error occurred while fetching -->
<error v-if="$fetchState.error" type="error"/> 
<!-- loading while fetching -->
<Loading v-if="$fetchState.pending"/>
<div v-else class="pb-5 pt-10 px-8 bg-black">

 <!-- inputs section  -->
  <div class="text-white flex flex-col items-center justify-center  space-x-0    py-6 max-w-4xl space-y-5  mx-auto md:flex-row  md:space-y-0 md:space-x-16  md:items-center" >
   <div>
       <h1 class="mb-4 text-lg">Find any TV show </h1>

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
      <select class="w-48 h-7 text-black  mb-4 rounded-lg py-1 px-2"     v-model="tvshowsType">
         <option class=""  value="popular">  Popular</option>
         <option class="" value="top_rated">top rated</option>
          <option class="" value="on_the_air"> on the air</option>
      </select>
      <button href="" @click="$fetch"
        class="rounded-lg px-4 py-2 border-2 m-2 border-gray-900   text-white hover:bg-gray-900 hover:text-gray-100 duration-200">search</button>

   </div>

  </div>

<!-- tvshows grid -->
  
  <section 
   class="max-w-4xl justify-center py-5  bg-gray mx-auto flex flex-wrap gap-5"
   id="tvshows-grid" 
     v-if="TVShows.length !=0 ">
     <div v-for="(tv , index) in TVShows" :key="index">   
      <div   v-if="tv.name && tv.poster_path" >
          <NuxtLink :to="{ name: 'tvormovie' , params:{tvormovie:`tvshow${tv.id}` }}">
             <div class="relative">           
                <Card :tvMovieObj="tv" type="tvshow" /> 
             </div>   
          </NuxtLink>
      </div>      
      </div>

   </section  >

 <!-- can't find component -->
    <div v-else > 
          <error type="Tv Show"/>
     </div>
   </div>
</main>
</template>

<script>
 import axios from 'axios'
 import {myAPI_key} from '../api_key'
export default {
    scrollToTop: false,
 data(){
  return{
      TVShows: [],
       query: "",
       tvshowsType:"popular"
  }
 },
  head() {
      return {
        title: "TvShows page"
    }
    },
   
async fetch(){

 if (this.query === "") {
            await this.fetchShows(this.tvshowsType);
            return;
        }
     await this.queredTvshow()
     
},
  methods:{
     async fetchShows(type) {
      this.TVShows =[];
      for(let i =1;i<5;i++){
         let tvshowsData = axios.get(`https://api.themoviedb.org/3/tv/${type}?api_key=${myAPI_key}&language=en-US&page=${i}`);
         let tvshowsObj = await tvshowsData;
         tvshowsObj.data.results.forEach((tvs) => { this.TVShows.push(tvs); });
      }
    console.log(this.TVShows);

},

       async queredTvshow(){
         let searchedTvshows= axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${myAPI_key}&language=en-US&page=1&query=${this.query}`);
            let tvshowsObj = await searchedTvshows
            this.query=""
            this.TVShows = []
            tvshowsObj.data.results.forEach((tvs) => { this.TVShows.push(tvs); });
            // console.log(this.TVShows);

       }
    }
   

 }


</script>

<style>
select{
      color:black;
}
option{
   background:#14532d;
   color:white;
}
option :hover{
   color:white;
    background:black;
}
</style>