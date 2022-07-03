<template>
  <div style="background:#14532d;" class="w-40 h-70 sm:w-44 md:w-48 md:h-84 relative text-white  relative" >
    <img class=" hover:opacity-75 transition-all "
     :src="this.pathImg" :alt="this.imgAlt">
     <div class="text-center text-base sm:text-lg hover:underline " >
           <h1  v-if="this.type=='movie'" >
                  {{this.movieTitle.slice(0,15)}}
            </h1>
           <h1  v-else>
                 {{this.tvshowName.slice(0,15)}}
          </h1>
     </div>
        <div    class="text-center text-base sm:text-lg flex justify-evenly px-2">
            <span class="" v-if="this.type=='movie'">
                Y :  {{this.releaseMovie.slice(0,4)}}
            </span>
            <span class="" v-else>
              Y : {{this.releaseTvshow.slice(0,4)}}
              </span>
              <span class="" v-if="this.type=='movie'" >
                {{this.tvMovieObj.runtime}} min
              </span>
        </div>
        <div>
          <iconsStar  class="inline-block w-11 h-11 absolute top-0 right-0 text-yellow-300"/>
          <span class="absolute text-black text-sm font-medium top-3 right-3"> 
            {{ this.rate }} 
           </span>
           <!-- 
          <span class="absolute text-xl text-red-900 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/5 hover:inline"> 
              <iconsPlay/> 
           </span> -->
        </div>
  </div>
</template> 

<script>
export default {
 props:["tvMovieObj","type"],
 data(){
  return{
    pathImg:`https://image.tmdb.org/t/p/w500/${this.tvMovieObj.poster_path}`,
    imgAlt:`movie image ${this.tvMovieObj.title}`,
    releaseMovie:this.tvMovieObj.release_date,
    releaseTvshow:this.tvMovieObj.first_air_date,
    movieTitle:this.tvMovieObj.title,
    tvshowName:this.tvMovieObj.name,
    rate:this.tvMovieObj.vote_average,
  }
  
 },
// to fix a single number in rating
 created(){ 
  if(this.rate.toString().length==1)
         this.rate=`${this.rate}.0`
 },

}
</script>

<style>

</style>