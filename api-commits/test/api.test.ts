const request = require('supertest');
const app = require('../src/app'); // Adjust the path to your Express app

describe('GET /commits', () => {
  it('responds with json', async () => {
    const res = await request(app)
      .get('/commits')
      .expect('Content-Type', /json/)
      .expect(200);
    // Additional assertions can be made here
  });
});
