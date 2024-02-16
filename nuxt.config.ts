export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'NASA TechPort',
      meta: [
        { hid: 'description', name: 'description', content: 'NASA TechPort project' },
      ],
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image", '@nuxt/test-utils/module'
  ],
  plugins: ['~/plugins/vue-awesome-paginate']
})