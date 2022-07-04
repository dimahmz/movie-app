export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  mode: 'jit',
  head: {
    title: 'movie-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  theme: {
    screens: {
      'vsm': '400px',
      'sm': '646px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      bulest: '#164e63'
    }
  },
  //  loding pages
  loading: {
    color: 'black',
    failedColor: 'red',
    height: '5px',
    continuous: true,
    throttle: 0,
    duration: 3000
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],
  variants: {
    extend: {
      scale: ['group-hover', 'hover'],
    }
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
