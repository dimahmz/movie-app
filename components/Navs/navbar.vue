<template>
  <nav
    id="top"
    class="thenav bg-green mx-auto relative py-3 px-4 text-indigo-50 flex justify-between">
   <NuxtLink to="/">
       <h1  class="font-black hover:text-black text-2xl tracking-widest" >WMoviE</h1>
    </NuxtLink>
   <!--  @click="toggleBar"  -->
    <NavsSideBar class="block sm:hidden " />
   <div class="sm:hidden inline-block">
    <div @click="toggleBar" >
      <iconsIconBar class="hover:text-black" />
    </div>
   </div>
   <div class="hidden text-xl font-meduim w-3/5 justify-between sm:flex">
    <div class="flex w-3/5 justify-between">
      <NuxtLink class="hover:text-black"   to="/Movies"> MOVIES </NuxtLink>
      <NuxtLink class="hover:text-black" to="/Tvshows">TVSHOWS </NuxtLink>
    </div>
     <NuxtLink class="hover:text-black"   to="/about">ABOUT </NuxtLink>
    
   </div>
   
</nav>
</template>

<script>

export default{
name:"thenavbar",

methods:{
toggleBar(){
  $nuxt.$emit("toggleSideBar")
}
}

}
</script>
<style>
  
/* .thenav{
   @apply container mx-auto relative py-3 px-4 text-indigo-50 flex justify-between;
   @apply font-sans  shadow-indigo-500;    
  } */
/* .thenav{
@apply bg-red-900 container mx-auto relative py-3 px-4 text-indigo-50 flex justify-between;

} */

</style>