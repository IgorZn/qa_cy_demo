const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://app2.abtasty.com/',
    env: {
      apiURL: "https://api.abtasty.com",
      apiAUTH: "/api/oauth/login",
      badPWD: "badPWD",
      testEmail: "bob.dude@gmail.com"
    },


    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
