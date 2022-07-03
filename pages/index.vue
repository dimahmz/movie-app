<template >

<div class="relative bg-black ">
  <img 
  class="h-screen w-full opacity-95 object-cover"
   src="@/static/images/backimg.jpg" alt="random movies on a single image ">
   

  <div 
    class="absolute w-full top-16 md:top-24   text-white p-8">
       <h1 
       class="text-white text-4xl md:font-black font-extrabold text-center"
          >welcom to WMoviE </h1>
      <p style="max-width:600px;" 
        class="text-2xl mx-auto text-center tracking-wide     font-medium font-medium mt-16 sm:mt-32 " >Watch movies online free full movie - Watch hd movies online and   download free hd movies online with WMoviE With our free streaming service, you can watch full movies online without registration.</p>
    <div class="flex justify-around items-center my-16  sm:justify-center sm:space-x-10" >
       <button> 
          <NuxtLink 
          style=""
          class="rounded-lg bg-black px-4 py-2 border-2 m-2 mt-4 border-black text-white hover:bg-gray-900 hover:text-gray-100 hover:border-white duration-200"
          to="/Movies"  > MOVIES  </NuxtLink>
             </button> 
      <button> 
         <NuxtLink  
         style=""
         class="rounded-lg bg-black px-4 py-2 border-2 m-2 mt-4 border-black text-white hover:bg-gray-900 hover:text-gray-100 hover:border-white duration-200"
         to="/Tvshows"  >TVSHOWS </NuxtLink>
      </button>
    </div>
</div>
  </div>

</template>


<script>
export default {
   head() {
      return {
        title: "WMovie",
      
    }
}
}

</script>
<style>

/* active links styling  */
.nuxt-link-exact-active{
   border-bottom: 1px solid  #fff;
   transition: border .5s ease-in-out;
}
</style>
