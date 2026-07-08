module.exports = {
  default: {
    requireModule: [
      "ts-node/register"
    ],

    require: [
      "src/step-definitions/**/*.ts",
      "src/hooks/**/*.ts"
    ],

    paths: [
      "src/features/**/*.feature"
    ],

    formatOptions: {
      snippetInterface: "async-await"
    },

    format: [
      "progress-bar",
      "html:reports/cucumber-report.html",
      "json:reports/cucumber-report.json",
      "rerun:rerun/rerun.txt"
    ],

    publishQuiet: true,

    parallel: 1,

    dryRun: false
  }
};