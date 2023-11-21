export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'ko',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'apple-touch-fullscreen', content: 'yes' },
      { hid: 'author', name: 'author', content: 'temha.io' },
      { hid: 'title', name: 'title', content: '워크매니저' },
      { hid: 'description', name: 'description', content: '워크매니저' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' },
      { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/style.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/api.plugin.js',
    '@/plugins/common.plugin.js',
    '@/plugins/global.init.js',
    '@/plugins/util.plugin.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: ['@/components', '@/layouts'],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy', '@nuxt/postcss8'],

  // Config
  publicRuntimeConfig: {
    baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : '',
  },

  // Server
  server: {
    port: 8000,
  },

  // Router
  router: {
    base: '/',
  },

  // Loading
  loading: {
    color: '#d91f29',
    height: '2px',
  },
}
