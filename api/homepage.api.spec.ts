import { test, expect } from '@playwright/test';

test('TakeUForward homepage API check', async ({ request }) => {
  const response = await request.get('https://takeuforward.org');

  console.log('Status:', response.status());
  console.log('Content-Type:', response.headers()['content-type']);

  expect(response.status()).toBe(200);
  expect(response.headers()['content-type']).toContain('text/html');
});