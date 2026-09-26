import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../../support/world';
import { HomePage } from '../../pages/HomePage';
import { setDefaultTimeout } from '@cucumber/cucumber';
setDefaultTimeout(30000);

Given('I am on the TakeUForward homepage', async function (this: CustomWorld) {
  await this.homePage.open();
});

Then('the TakeUForward homepage should be displayed', async function (this: CustomWorld) {
  await this.homePage.verifyPageLoaded();
});

When('I navigate to the DSA page', async function (this: CustomWorld) {
  await this.homePage.goToDsaPage();
});

When('I search for {string}', async function (this: CustomWorld, problem: string) {
  await this.homePage.searchProblem(problem);
});

Then('the search result should be displayed', async function (this: CustomWorld) {
  await this.homePage.verifySearchResult('1. Two Sum');
});

Then('the DSA search box should be displayed', async function (this: CustomWorld) {
  await this.homePage.verifySearchBox();
});

Then('the {string} search result should be displayed', async function (
  this: CustomWorld,
  problem: string
) {
  await this.homePage.verifySearchResult(problem);
});


When('I open the Two Sum problem', async function (this: CustomWorld) {
  this.page = await this.homePage.openTwoSum();
  this.homePage = new HomePage(this.page);
});

Then('the Two Sum page should be displayed', async function (this: CustomWorld) {
  await this.homePage.verifyTwoSumPage();
});

Then('the main heading should be visible', async function (this: CustomWorld) {
  await this.homePage.verifyMainHeading();
});

Then('the DSA page should be displayed', async function (this: CustomWorld) {
  await this.homePage.verifyDsaPage();
});