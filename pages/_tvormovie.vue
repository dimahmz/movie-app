<template>
  <Loading v-if="$fetchState.pending"/>

<main  v-else class="bg-black relative text-white pb-12 px-6 overflow-hidden sm:pb-18 " >
  <!-- the back arrow -->
  <span @click="goBack" class="my-10 mx-5 text-2xl hover:text-red">
    <IconsBackArrow/>
  </span>
   <h1 class="text-center mb-10 text-2xl md:text-4xl font-bold tracking-widest md:mb-20" >{{title}}</h1>

  <div  class="sm:flex sm:justify-between md:justify-around sm:mb-28  ">

    <div   class="self-center" >
       <img 
       style="max-height:300px;"
       class="mx-auto"
       :src="`https://image.tmdb.org/t/p/w500/${tvANDmovie.backdrop_path}`"   :alt="`tvshow image ${title}`"/>
    </div>

  <!-- the story -->
    <div>
       <h1  class="text-2xl  mt-10 underline tracking-wide sm:ml-4 sm:text-4xl">STORY :</h1>
         <p style="max-width:440px;" class="text-xl sm:text-2xl mx-auto ml-4 my-8 mb-7 tracking-wide" >{{tvANDmovie.overview}}</p>  
     </div>

 </div>
<!-- tvshow image -->
<div  class="md:flex md:justify-evenly items-center" >


  <div 
   class="flex justify-center">
    <img 
    class="inline-block"
    style="max-height:500px;"
    :src="`https://image.tmdb.org/t/p/w500/${tvANDmovie.poster_path}`"    :alt="`image of ${title}`"/>
  </div>

 <!--  tvANDmovie infos -->
 <div  class="sm:flex sm:justify-center" >

   <section
      style="max-width:600px;"
       class="py-10 px-5 flex flex-col text-lg sm:text-xl space-y-5 md:justify-center " >
       <div  class="flex justify-between sm:space-x-10 md:pace-x-18" >
            <p>Popularity :</p>
            <p>{{tvANDmovie.popularity}}
            <IconsTrend class="inline-block text-blue-300 h-10 w-10 "/>
            </p>
       </div>
       <div  class="flex justify-between" >
            <p> Release date :</p>
            <p>{{release}}</p>
       </div>
       <div  class="flex justify-between" >
            <p> Vote average :</p>
            <p>{{tvANDmovie.vote_average}} <IconsStar class="inline-block h-10 w-10 text-yellow-300"/></p>
       </div>
       <div  class="flex justify-between" >
            <p>Status :</p>
            <p>{{tvANDmovie.status}}</p>
       </div>
       <div class="flex justify-between"  >
        <p>Geners :</p>
        <p>{{tvANDmovie.genres[0].name}}</p>
       </div>
        <div   class="flex justify-between"  >
        <p>language :</p>
        <p>{{tvANDmovie.spoken_languages[0].english_name}}</p>
       </div>
        <div  class="flex justify-between" >
            <p>Title :</p>
            <p>{{original_title}}</p>
       </div>
    
   </section>

  </div>

 </div>
  
</main>

</template>

<script>
import axios from 'axios'
import {myAPI_key} from '../api_key'
export default {
  name: 'SelectedTvShow',
  layout: "noNavbar",
  data(){
    return{
      id:this.$route.params.tvormovie,
      tvANDmovie:{},
      release:"",
      title:"", 
      original_title:""
    }
  },
   methods:{
    goBack(){
        this.$router.go(-1)
   },
   //fill infos
    tvshowORmovifos(the_tvANDmovie){

       if(this.id.slice(0,6)=="amovie"){
        this.title=the_tvANDmovie.title
        this.release=the_tvANDmovie.release_date
        this.original_title=the_tvANDmovie.original_title
      }

      else{
           this.title=the_tvANDmovie.name
           this.release=the_tvANDmovie.first_air_date
           this.original_title=the_tvANDmovie.original_name
       }
     
    }
   },
    head() {
      return {
        title: this.title,
      meta: [
          {
            hid: this.original_title,
            name: this.title
          }
        ]
    }
    },
  async fetch(){
    if(this.id.slice(0,6)=="tvshow")
         var tvshowORmovieData= axios.get(`https://api.themoviedb.org/3/tv/${this.id.slice(6)}?api_key=${myAPI_key}`)
    else  var tvshowORmovieData= axios.get(`https://api.themoviedb.org/3/movie/${this.id.slice(6)}?api_key=${myAPI_key}`)
    let tvshowORmovieObj= await tvshowORmovieData
    this.tvANDmovie=tvshowORmovieObj.data
    this.tvshowORmovifos(this.tvANDmovie)
     console.log(this.tvANDmovie)
   },
   fetchDelay:1000
  }

</script>

<style>

</style>