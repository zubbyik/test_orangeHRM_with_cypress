import { defineConfig } from 'cypress'

export default defineConfig({
  exclude: [
    '**/cypress/integration/1-getting-started',
    '**/cypress/integration/2-advanced-examples',
  ],
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://192.168.43.227',
  },
})
