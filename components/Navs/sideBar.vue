<template>
<transition  name="sideBare" >

   <nav v-if="showSideBar" style="background:#0a361b;"  class="fixed z-10 left-0 top-0 w-3/5 py-5 px-3 bg-indigo-700 text-center flex flex-col items-center justify-between shadow-indigo-500 text-xl font-light font-sans overflow-y-hidden h-screen overflow-auto">

    <span  class="absolute right-10 hover:text-black "  @click="closeSideBar" > <iconsClose  /></span>

   <NuxtLink to="/">
       <h1 class="hover:text-black absolute left-10 font-bold text-xl tracking-wide"  >WMoviE</h1>
  </NuxtLink>
   <div class="flex flex-col justify-between  h-5/6">
    <hr>
    <div  class="flex flex-col font-semibold space-y-8">
      <NuxtLink  class="inline-block mx-auto  hover:text-black" to="/Movies"  > MOVIES </NuxtLink>
      <NuxtLink  class=" inline-block mx-auto hover:text-black"  to="/Tvshows"  >TVSHOWS </NuxtLink>
    </div>

  <hr>
 <div class="h-3/6">
    <section class="flex flex-col h-full items-center justify-around">
   
     <p>buit with :</p>
     <p class="cursor-pointer" ><a class="hover:underline"  target="_blank"  href="https://tailwindcss.com/">Tailwind</a> & <a  class="hover:underline" target="_blank" href="https://nuxtjs.org/">Nuxtjs</a></p>
    <p>data provided by 
    <a  target="_blank" class="cursor-pointer hover:underline" href="https://www.themoviedb.org/documentation/api">TMBD</a></p>
    <p> code <a target="_blank"  class="hover:underline" 
    href="https://github.com/hamzaLap/movie-app">github</a></p>
     <p >2022</p> 
    </section>
   
    </div>

   </div>
   
</nav>
</transition>
</template>

<script>
export default {
data(){
  return{
    showSideBar:false
  }
},
methods:{
  closeSideBar(){
    this.showSideBar=false
  }
},
created(){
  this.$nuxt.$on("outsideClick",()=>{
      this.showSideBar=false;
  });
  this.$nuxt.$on("toggleSideBar",()=>{
      this.showSideBar=!this.showSideBar;
  });




}


}
</script>

<style>
    /* .sideBare-enter-active,
    .sideBare-leave-active
    {
        transition: all 1s ease;
    }
    .sideBare-enter-to , .sideBare-leave-from {
     transform: translateX(100%);
    }
    .sideBare-leave-to ,.sideBare-enter-from {
        transform: translateX(-100%);
    } */

</style >