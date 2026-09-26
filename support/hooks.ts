import { Before, After } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { CustomWorld } from './world';
import { HomePage } from '../pages/HomePage';

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({ headless: false });
  this.page = await this.browser.newPage();
  this.homePage = new HomePage(this.page);
});

After(async function (this: CustomWorld) {
  await this.browser.close();
});