const request = require('supertest');
const { createApp } = require('../src/app');

describe('Wrong result', () => {
  let app;

  beforeEach(() => {
    app = createApp();
  });

  test('GET / returns 200 and KT3 App', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Wrong result');
  });

  test('GET /health returns 200 and JSON status ok', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });
});
