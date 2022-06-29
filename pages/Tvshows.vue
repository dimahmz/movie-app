<template>
<div>
    <NavsNavbar/>
<!-- <Loading v-if="$fetchState.pending"/> -->
<Loading v-if="$fetchState.pending"/>
<div v-else 
  class="pb-5 bg-black">
   <div class="absolute top-20 left-14 " >

  <input type="text" class="" 
   @keyup.enter="$fetch" 
   v-model="query" >
  <button class="rounded py-1 px-6 bg-indigo-900"
   @click="$fetch">serch
   </button>
 </div>
  <!-- tvshows grid -->
  
  <section 
     class="max-w-4xl py-7 justify-center mx-10 bg-grey mx-auto 
      my-10 flex flex-wrap gap-5 "
      id="movies-grid" 
      v-if="TVShows.length !=0 ">
     <div v-for="(tv , index) in TVShows" 
            :key="index">
         <NuxtLink :to="{ name: 'tvshowid' , params:{tvshowid:tv.id}}">
            <tvshowCard :objTvShow="tv" />
         </NuxtLink>
      </div>

     </section  >
 <!-- can't find component -->
    <div v-else >
      <movieError/>
     </div>

   </div>
</div>
</template>

<script>
 import axios from 'axios'
export default {
 data(){
  return{
      TVShows: [],
       query: ""
  }
 },
   
async fetch(){

 if (this.query === "") {
            await this.fetchShows();
            return;
        }
     await this.queredTvshow()
    },
  methods:{
     async fetchShows() {
            let tvshowsData = axios.get("https://api.themoviedb.org/3/tv/popular?api_key=c695182479fa9880b1a52cd4525a0caf");
            let tvshowsObj = await tvshowsData;
            this.TVShows = [];
            tvshowsObj.data.results.forEach((tvs) => { this.TVShows.push(tvs); });
            console.log(this.TVShows);
        },
       async queredTvshow(){
        let searchedTvshows= axios.get(`https://api.themoviedb.org/3/search/tv?api_key=c695182479fa9880b1a52cd4525a0caf&language=en-US&page=1&query=${this.query}"`);
            let tvshowsObj = await searchedTvshows;
            this.TVShows = [];
            tvshowsObj.data.results.forEach((tvs) => { this.TVShows.push(tvs); });
            console.log(this.TVShows);

       }
    }
   

 }


</script>

<style>

</style>