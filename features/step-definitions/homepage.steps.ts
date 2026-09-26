import { Given, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../../support/world';
import { When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('I am on the TakeUForward homepage', async function (this: CustomWorld) {
  await this.homePage.open();
});

Then('the TakeUForward homepage should be displayed', async function (this: CustomWorld) {
  await this.homePage.verifyPageLoaded();
});

Then('the main heading should be visible', async function (this: CustomWorld) {
  await this.homePage.verifyMainHeading();
});

When('I navigate to the DSA page', async function (this: CustomWorld) {
  await this.page.goto('https://takeuforward.org/practice/dsa');
});



Then('the DSA page should be displayed', async function (this: CustomWorld) {
  await this.homePage.goToDsaPage();
});

When('I search for {string}', async function (problem: string) {
  await this.homePage.searchProblem(problem);
});


Then('the search result should be displayed', async function (this: CustomWorld) {
  await this.homePage.verifySearchResult();
});
