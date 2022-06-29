<template>
  <nav  class="relative w-full py-3 px-4 bg-indigo-900 text-indigo-50 flex justify-between text-lg font-light font-sans">
   <NuxtLink to="/"><h1>WMoviE</h1></NuxtLink>
   <!--  @click="toggleBar"  -->
    <NavsSideBar class="block sm:hidden " v-if="showSideBar"/>
   <div class="sm:hidden inline-block">
    <div @click="toggleBar" >
      <NavsIconBar  />
    </div>
   </div>
   <div class="hidden w-3/5 justify-between sm:flex">
    <div class="flex w-3/5 justify-between">
      <NuxtLink to="/Movies"  > MOVIES </NuxtLink>
      <NuxtLink  to="/Tvshows"  >TVSHOWS </NuxtLink>
    </div>
    <a href="">ABOUT</a>
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
