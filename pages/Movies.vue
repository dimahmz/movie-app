<template>
  <main class="min-h-screen bg-black" @click="clicked">
    <!-- loading while fetching -->
    <Loading class="bg-black" v-if="$fetchState.pending" />
    <div v-else class="pb-5 pt-10 px-8">
      <div
        class="text-white flex flex-col items-center justify-center space-x-0 py-6 max-w-4xl space-y-5 mx-auto md:flex-row md:space-y-0 md:space-x-16 md:items-center"
      >
        <!--scroll to the top  -->
        <div
          v-if="upArrow"
          @click="topScroll"
          class="fixed z-50 bottom-3 right-4 grid place-items-center w-5x5 h-5x5 rounded-full cursor-pointer bg-green"
        >
          <iconsUp />
        </div>
        <!-- inputs -->
        <div>
          <h1 class="mb-4 text-lg">Find any Movie</h1>

          <input
            type="text"
            class="text-black px-2 shadow-sm w-48 h-7 border-gray-900 rounded-lg mb-4 focus:ring-2 focus:ring-indigo-200 focus:border-gray-900"
            @keyup.enter="$fetch"
            v-model="query"
          />
          <button
            href=""
            @click="$fetch"
            class="rounded-lg px-4 py-2 border-2 m-2 mt-4 border-gray-900 text-white hover:bg-gray-900 hover:text-gray-100 duration-200"
          >
            search
          </button>
        </div>
        <div>
          <h1 class="mb-4 text-lg">Select type</h1>
          <select
            class="w-48 h-7 text-black mb-4 rounded-lg py-1 px-2"
            v-model="moviesTypes"
          >
            <option value="popular">Popular</option>
            <option value="top_rated">top rated</option>
            <option value="now_playing">now playing</option>
            <option value="upcoming">up coming</option>
          </select>
          <button
            href=""
            @click="$fetch"
            class="rounded-lg px-4 py-2 border-2 m-2 border-gray-900 text-white hover:bg-gray-900 hover:text-gray-100 duration-200"
          >
            search
          </button>
        </div>
      </div>

      <!-- MOvies grid -->

      <section
        class="max-w-4xl py-5 justify-center relative pb-20 mx-auto flex flex-wrap gap-5"
        v-if="MOVIES.length != 0"
        id="movies-grid"
      >
        <div v-for="(movie, index) in MOVIES" :key="index">
          <div>
            <NuxtLink
              :to="{
                name: 'tvormovie',
                params: { tvormovie: `${movie.id}` },
                query: { name: 'movie' },
              }"
            >
              <Card :tvMovieObj="movie" type="movie" />
            </NuxtLink>
          </div>
        </div>
        <div class="pagination">
          <button @click="changePages('left')">&lt;</button>
          <button
            :class="currentPage === page ? 'bg-black' : 'bg-green'"
            v-for="(page, index) in pages"
            @click="
              fetchMovies(moviesTypes, page);
              topScroll();
              clickedPage(page);
            "
            :key="index"
          >
            {{ page }}
          </button>

          <button @click="changePages('right')">&gt;</button>
        </div>
      </section>
      <!-- can't find  -->
      <div v-else>
        <error type="Movie" />
      </div>
    </div>
    <!-- error occurred while fetching -->
    <error v-if="$fetchState.error" type="error" />
  </main>
</template>

<script>
import axios from "axios";
export default {
  scrollToTop: true,
  data() {
    return {
      MOVIES: [],
      query: "",
      moviesTypes: "popular",
      upArrow: false,
      pages: [1, 2, 3, 4, 5, 6, 7, 8],
      currentPage: 1,
    };
  },
  head() {
    return {
      title: "movies page",
    };
  },
  fetchOnServer: false,
  watch: { "$route.query": "$fetch" },
  async fetch() {
    // console.log(this.$nuxt.context);
    // console.log(this.$fetchState.timestamp - Date.now());
    if (this.query === "") {
      await this.fetchMovies(this.moviesTypes, 1);
      return;
    }

    await this.quearedMovie();
  },
  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 70000) this.$fetch();
  },
  mounted() {
    this.onScroll();
  },
  methods: {
    clicked() {
      $nuxt.$emit("outsideClick");
    },
    //pagination function
    changePages(direction) {
      if (direction == "right" && this.pages[this.pages.length - 1] < 40) {
        this.pages.push(this.pages[this.pages.length - 1] + 1);
        this.pages.shift();
      } else if (direction === "left" && this.pages[0] > 1) {
        this.pages.unshift(this.pages[0] - 1);
        this.pages.pop();
      }
    },
    //get the index of the clicked button
    clickedPage(page) {
      this.currentPage = page;
    },
    // scroll to the top function
    onScroll() {
      window.addEventListener("scroll", () => {
        window.scrollY > 150 ? (this.upArrow = true) : (this.upArrow = false);
      });
    },
    topScroll() {
      window.scrollTo(0, 0);
    },
    async quearedMovie() {
      let movieData = axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=c695182479fa9880b1a52cd4525a0caf&language=en-US&page=1&query=${this.query}`
      );
      let searchedMovieObj = await movieData;
      // console.log(searchedMovieObj.data.results)
      this.query = "";
      this.MOVIES = [];
      searchedMovieObj.data.results.forEach((movie) => {
        if (movie.title && movie.poster_path && movie.vote_average)
          this.MOVIES.push(movie);
      });
    },
    async fetchMovies(type, page) {
      let PopMoviesData = axios.get(
        `https://api.themoviedb.org/3/movie/${type}?api_key=c695182479fa9880b1a52cd4525a0caf&page=${page}`
      );
      let moviesObj = await PopMoviesData;
      this.MOVIES = [];
      moviesObj.data.results.forEach((movie) => {
        if (
          movie.title &&
          movie.poster_path &&
          movie.vote_average &&
          movie.popularity
        )
          this.MOVIES.push(movie);
      });
    },
  },
};
</script>
<style scoped>
.pagination {
  @apply bg-green absolute flex px-3 py-2 gap-1 text-white rounded;
  top: calc(100% - 40px);
}
.pagination button {
  @apply w-5 h-7 relative z-10 cursor-pointer text-center rounded  hover:bg-black;
}
</style>
