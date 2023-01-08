import { type PlaywrightTestConfig , devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir:'tests',
  use:{
    baseURL:"http://zero.webappsecurity.com",
    browserName:"chromium",
    headless:true,
    video:"on-first-retry",
    screenshot:"only-on-failure"
  },
  timeout:10000,
  fullyParallel:true,
  workers:2,
  retries:0,
  reporter:[["dot"],["json",{
    outputFile:"jsonReports/jsonReport.json"
  }],["html",{open:"on-failure"}],['line'], ['allure-playwright', {
    detail: true,
    outputFolder: 'my-allure-results',
    suiteTitle: false
  }]],
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ]
    
};

export default config;
