<template>
  <section class="search-dropDown-container">
    <NuxtLink
      class="movie"
      v-for="(movie, index) in Movies"
      :key="index"
      :to="{
        name: 'tvormovie',
        params: { tvormovie: `${movie.id}` },
        query: { name: 'movie' },
      }"
    >
      <img
        class="img"
        :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
        :alt="movie.title"
      />
      <div class="movie-result-info">
        <h2>{{ movie.title }}</h2>
        <div class="movie-info">
          <span>{{ movie.release_date }}</span>
          <span>{{ movie.type }}</span>
        </div>
      </div>
    </NuxtLink>
  </section>
</template>

<script>
export default {
  name: "searchDropDown",
  props: {
    Movies: {
      default: "",
    },
  },
  created() {},
  // data() {
  //   return {
  //     TheMovies: this.Movies,
  //   };
  // },
};
</script>

<style scoped>
.search-dropDown-container {
  @apply absolute z-20  rounded max-w-4xl bg-gray-100 text-black;
}
.movie {
  @apply p-3 flex space-x-4;
}
.movie:hover {
  @apply bg-gray-400 cursor-pointer;
}
.movie-result-info {
  @apply flex flex-col justify-center;
}
.img {
  @apply w-10 inline-block;
}
</style>
