import { test, expect } from '@playwright/test';

test('GET API test', async ({ request }) => {
  const response = await request.get('https://httpbin.org/get');

  expect(response.status()).toBe(200);

  const body = await response.json();

  console.log(body);

  expect(body.url).toContain('/get');
});

test('POST API test', async ({ request }) => {
  const response = await request.post('https://httpbin.org/post', {
    data: {
      username: 'shivaprasad',
      role: 'QA'
    }
  });

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.json.username).toBe('shivaprasad');
  expect(body.json.role).toBe('QA');
});

test('PUT API test', async ({ request }) => {
  const response = await request.put('https://httpbin.org/put', {
    data: {
      username: 'shivaprasad',
      role: 'QA'
    }
  });

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.json.username).toBe('shivaprasad');
  expect(body.json.role).toBe('QA');
});

test('DELETE API test', async ({ request }) => {
  const response = await request.delete('https://httpbin.org/delete');

  expect(response.status()).toBe(200);
});


test('Query parameter API test', async ({ request }) => {
  const response = await request.get('https://httpbin.org/get', {
    params: {
      search: 'Two Sum'
    }
  });

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.args.search).toBe('Two Sum');
});

test('Custom header API test', async ({ request }) => {
  const response = await request.get('https://httpbin.org/headers', {
    headers: {
      'x-test-user': 'shivaprasad'
    }
  });

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.headers['X-Test-User']).toBe('shivaprasad');
});

test('Basic authentication API test', async ({ request }) => {
  const response = await request.get('https://httpbin.org/basic-auth/shivaprasad/qa', {
    headers: {
      Authorization: `Basic ${Buffer.from('shivaprasad:qa').toString('base64')}`
    }
  });

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.authenticated).toBe(true);
  expect(body.user).toBe('shivaprasad');
});