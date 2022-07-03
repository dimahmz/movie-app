<template>
<div class="min-h-screen absolute bg-black text-white flex justify-center items-center">

  <p   class="text-center text-2xl my-20 leading-relaxed px-20" >Hello, this is a simple movies and tvshows website built with  <a  class="underline" target="_blank" href="https://nuxtjs.org/">Nuxtjs</a> and <a class="underline"  target="_blank"  href="https://tailwindcss.com/">Tailwind</a>, and uses an <a  target="_blank" class="cursor-pointer underline" href="https://www.themoviedb.org/documentation/api">API</a> provided by the <a  target="_blank" class="cursor-pointer underline" href="https://www.themoviedb.org/">TMBD</a>, u can see source code on <a target="_blank"  class="underline" 
    href="https://github.com/hamzaLap/movie-app">github</a>
  </p>

</div>
</template>

<script>
export default {
  name:"about",
   head() {
      return {
        title: "about website",
      
    }
}

}
</script>
