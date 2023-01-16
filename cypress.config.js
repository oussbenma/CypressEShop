
const { defineConfig } = require("cypress");
const fs = require('fs-extra');
const path = require('path');
const cucumber = require('cypress-cucumber-preprocessor').default;


function getConfigurationByFile(file) {

  const pathToConfigFile = path.resolve('.', 'cypress/config', `${file}.json`);

  if (!fs.existsSync(pathToConfigFile))
  {
    console.log("No custom config file found.")
    return{};
  }
else{
  console.log("custom config file found.")
  return fs.readJson(pathToConfigFile)
}

  
}

module.exports = defineConfig({
  projectId: "i6nuxs",
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportFilename: "[name]_[datetime]_[status]--report",
    reportPageTitle: 'Deichmann-DSD-Regression-Tests',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  defaultCommandTimeout: 8000,
  projectId: "i6nuxs",
  e2e: {
    baseUrl: 'https://www.deichmann.com/de-de',
    experimentalWebKitSupport	: true,
    //chromeWebSecurity: false,
    retries: { runMode: 2, openMode: 0 },
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      const file = config.env.configFile
      require('cypress-mochawesome-reporter/plugin')(on);
      return getConfigurationByFile(file)
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    env: {
      viewPort: "macbook-11",
    }
    
  },
});
