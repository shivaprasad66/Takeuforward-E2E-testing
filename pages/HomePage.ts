import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto('https://takeuforward.org');
  }

  async verifyPageLoaded() {
    await expect(this.page).toHaveURL(/takeuforward\.org/);
  }

  async verifyMainHeading() {
  await expect(
    this.page.getByRole('heading', {
      name: 'One Stop Learning Platform for TECH Interviews'
    })
  ).toBeVisible();
}

    async goToDsaPage() {
  await this.page.goto('https://takeuforward.org/practice/dsa');
}
    async searchProblem(problem: string) {
  await this.page.getByPlaceholder('Search problems').fill(problem);
}
 async verifySearchResult() {
  await expect(this.page.getByText('1. Two Sum')).toBeVisible();
}
}
