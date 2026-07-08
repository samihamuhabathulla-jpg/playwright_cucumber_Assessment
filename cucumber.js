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

        publishQuiet: true,
        dryRun: false,

        format: [
            "progress",
            "html:reports/cucumber-report.html",
            "json:reports/cucumber-report.json"
        ]
    }
};