<template>
   <nav  class="fixed z-10 left-0 top-0 w-3/5 py-5 px-3 bg-indigo-700 text-indigo-50 text-center flex flex-col items-between  justify-between text-lg font-light font-sans overflow-y-hidden h-screen">
   <NuxtLink to="/"><h1 class=""  >WMoviE</h1></NuxtLink>
   <div class="flex flex-col  h-5/6">

    <div class="flex justify-between px-5 mb-16">
      <NuxtLink to="/Movies"  > MOVIES </NuxtLink>
      <NuxtLink  to="/Tvshows"  >TVSHOWS </NuxtLink>
    </div>
    <div class="mb-40 flex flex-col">

     <input class="max-w-5" type="text">

     <button>serch</button>

    </div>

    <div class="h-3/6">

      <about/>

    </div>

   </div>
   
</nav>
</template>

<script>
export default {
props:['ji']



}
</script>

<style>

</style>