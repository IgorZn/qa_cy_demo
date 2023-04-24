const {defineConfig} = require("cypress");
const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin');

module.exports = defineConfig({
    screenshotsFolder: './cypress/snapshots/actual',
    e2e: {
        baseUrl: 'https://app2.abtasty.com/',
        env: {
            apiURL: "https://api.abtasty.com",
            apiAUTH: "/api/oauth/login",
            badPWD: "badPWD",
            testEmail: "bob.dude@gmail.com",
            ALWAYS_GENERATE_DIFF: false,
            ALLOW_VISUAL_REGRESSION_TO_FAIL: true
        },

        setupNodeEvents(on, config) {
            getCompareSnapshotsPlugin(on, config)
        },
    },
});
