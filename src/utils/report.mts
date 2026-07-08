import * as report from "multiple-cucumber-html-reporter";
report.generate({
  jsonDir: "Reports",
  reportPath: "./Reports/Multiple-cucumberReport",
  reportName: "Playwright BDD Report",
  pageTitle: "Demo web shop test report",
  displayDuration: false,
  metadata: {
    browser: {
      name: "chrome",
      version: "118",
    },
device: "Samiha - Machine",
    platform: {
      name: "Windows",
      version: "10",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "Demo Web shop" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "Smoke-1" },      ],    },  });