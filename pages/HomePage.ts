import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto('https://takeuforward.org', {
  waitUntil: 'domcontentloaded',
  timeout: 30000
});
  }

  async verifyPageLoaded() {
    await expect(this.page).toHaveURL(/takeuforward\.org/);
  }

  async goToDsaPage() {
    await this.page.goto('https://takeuforward.org/practice/dsa');
  }

  async verifySearchBox() {
    await expect(
      this.page.getByPlaceholder('Search problems')
    ).toBeVisible();
  }

  async searchProblem(problem: string) {
    await this.page.getByPlaceholder('Search problems').fill(problem);
  }

  async verifySearchResult(problem: string) {
    await expect(
      this.page.getByText(problem, { exact: false })
    ).toBeVisible();
  }


async openTwoSum() {
  const twoSumLink = this.page
    .locator('a')
    .filter({ hasText: '1. Two Sum' })
    .first();

  const href = await twoSumLink.getAttribute('href');

  if (!href) {
    throw new Error('Two Sum link does not have an href');
  }

  const newPage = await this.page.context().newPage();
  await newPage.goto(new URL(href, this.page.url()).toString());

  return newPage;
}

  async verifyTwoSumPage() {
    await expect(
      this.page.getByRole('heading', { name: '1. Two Sum' })
    ).toBeVisible();
  }

  async verifyDsaPage() {
  await expect(this.page).toHaveURL(/\/practice\/dsa$/);
}
async verifyMainHeading() {
  await expect(
    this.page.getByRole('heading', {
      name: 'One Stop Learning Platform for TECH Interviews'
    })
  ).toBeVisible();
}

}