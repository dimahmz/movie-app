<template>
<transition  name="sideBare" >

   <nav v-if="showSideBar" style="background:#0a361b;"  class="fixed z-10 left-0 top-0 w-3/5 py-5 px-3 bg-indigo-700 text-center flex flex-col items-center justify-between shadow-indigo-500 text-xl font-light font-sans overflow-y-hidden h-screen">

    <span class="absolute right-10 hover:text-black"  @click="closeSideBar" > <iconsClose/></span>

   <NuxtLink to="/">
       <h1 class="hover:text-black absolute left-10 font-bold text-xl tracking-wide"  >WMoviE</h1>
  </NuxtLink>
   <div class="flex flex-col justify-between  h-5/6">
    <hr>
    <div  class="flex flex-col space-y-8">
      <NuxtLink  class="inline-block mx-auto  hover:text-black" to="/Movies"  > MOVIES </NuxtLink>
      <NuxtLink  class=" inline-block mx-auto hover:text-black"  to="/Tvshows"  >TVSHOWS </NuxtLink>
    </div>

  <hr>
 <div class="h-3/6  cursor-pointer">
    <section class="flex flex-col h-full items-center justufy-between">
     <p >2022</p> 
     <p>buit with :</p>
     <p><a class="hover:underline"  target="_blank"  href="https://tailwindcss.com/">Tailwind</a> & <a  class="hover:underline" target="_blank" href="https://nuxtjs.org/">Nuxtjs</a></p>
    <p>data provided by 
    <a  class="hover:underline" href="">TMBD</a></p>
    <p> code <a target="_blank"  class="hover:underline" 
    href="https://github.com/hamzaLap/movie-app">github</a></p>
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
    showSideBar:true
  }
},
methods:{
  closeSideBar(){
    this.showSideBar=false
  }
}


}
</script>

<style>
.sideBare-enter-active,
 .sideBare-leave-active 
 { transition: all .5s; }
.sideBare-enter, .sideBare-leave-active { transform: translateX(0%); }
/* <!-- .sidebar-enter{
  transform: translateX(0);

}
.sidebar-enter-to{
    transform: translateX(100%);

  
}
.sidebar-enter-active{
  transition: all .5s ease;
} --> */
</style >