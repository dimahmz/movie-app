<template>
  <div style="background:#14532d;" class="w-40 h-70 md:w-52 md:h-84 relative text-white  relative" >
    <img class=" hover:opacity-75 transition-all  h-66  md:h-80"
     :src="`https://image.tmdb.org/t/p/w500/${this.tvMovieObj.poster_path}`"   :alt="imgAlt"/>
     <div class="text-center text-base sm:text-lg hover:underline " >
           <h1  v-if="type=='movie'" >
                  {{this.tvMovieObj.title.slice(0,15)}}
            </h1>
           <h1  v-else>
                 {{this.tvMovieObj.name.slice(0,15)}}
          </h1>
     </div>
        <div    class="text-center text-base sm:text-lg flex justify-evenly px-2">
            <span class="" v-if="type=='movie'">
                Y : {{this.tvMovieObj.release_date.slice(0,4)}}
            </span>
            <span class="" v-else>
              Y : {{this.tvMovieObj.first_air_date.slice(0,4)}}
              </span>
        </div>
        <div>
          <iconsStar  class="inline-block w-11 h-11 absolute top-0 right-0 text-yellow-300"/>
          <span class="absolute text-black text-sm font-medium top-3 right-3"> 
            {{rate }} 
           </span>
        </div>
  </div>
</template> 

<script>
export default {
 props:["tvMovieObj","type"],
 data(){
  return{
    pathImg:`https://image.tmdb.org/t/p/w500/${this.tvMovieObj.poster_path}`,
    imgAlt:"",
    rate:this.tvMovieObj.vote_average 
  }
  
 },
// to fix a single number in rating
 created(){ 
  if(this.rate.toString().length==1)
         this.rate=`${this.rate}.0`
  if(this.type=="movie")
    this.imgAlt=`movie image ${this.tvMovieObj.title}`
  else this.imgAlt=`tv show image ${this.tvMovieObj.name}`
 }


}
</script>

<style>

</style>