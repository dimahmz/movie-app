<template>
  <div class="h-screen text-white bg-black">
    <h1>this path : {{ error.path }} doesn't exit in this website</h1>
    <div class="h-screen grid place-items-center">
      <NuxtLink
        class="rounded-lg bg-black px-4 py-2 border-2 m-2 mt-4 border-black text-white hover:bg-gray-900 hover:text-gray-100 hover:border-white duration-200"
        to="/"
        >Home page
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "noNavbar",
  head() {
    return {
      title: "error",
    };
  },
};
</script>
