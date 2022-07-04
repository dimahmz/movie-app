<template  >
  <nav
    id="top"
    style="background:#14532d;"
    class="relative w-full py-3 px-4 bg-bulest text-indigo-50 flex justify-between font-sans  shadow-indigo-500">
   <NuxtLink to="/">
    <h1  class="font-black hover:text-black text-2xl tracking-widest" >WMoviE</h1>
    </NuxtLink>
   <!--  @click="toggleBar"  -->
    <NavsSideBar class="block sm:hidden " v-if="showSideBar"/>
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
name:"navbar",

data(){
 return{
  showSideBar:false
 }
},
methods:{
toggleBar(){
  this.showSideBar=!this.showSideBar
 console.log(this.showSideBar)
}
}

}
</script>
