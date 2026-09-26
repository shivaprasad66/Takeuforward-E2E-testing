import { World, IWorldOptions, setWorldConstructor } from '@cucumber/cucumber';
import { Browser, Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

export class CustomWorld extends World {
  browser!: Browser;
  page!: Page;
  homePage!: HomePage;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);