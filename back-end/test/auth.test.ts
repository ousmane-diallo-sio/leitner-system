
import request from 'supertest';
import app from '../src/index';

describe('authentication', () => {
  test('should return auth true for valid username and valid password', async () => {
    const response = await request(app)
      .post('/user/login')
      .send({ username: 'ValidUsername', password: 'ValidPassword' });
    expect(response.status).toBe(200);
    expect(response.body.auth).toBe(true);
  });

  test('should return auth false for valid username and invalid password', async () => {
    const response = await request(app)
      .post('/user/login')
      .send({ username: 'ValidUsername', password: 'InvalidPassword' });
    expect(response.status).toBe(401);
    expect(response.body.auth).toBe(false);
  });

  test('should return auth false for invalid username and valid password', async () => {
    const response = await request(app)
      .post('/user/login')
      .send({ username: 'InvalidUsername', password: 'ValidPassword' });
    expect(response.status).toBe(401);
    expect(response.body.auth).toBe(false);
  });

  test('should return auth false for invalid username and invalid password', async () => {
    const response = await request(app)
      .post('/user/login')
      .send({ username: 'InvalidUsername', password: 'InvalidPassword' });
    expect(response.status).toBe(401);
    expect(response.body.auth).toBe(false);
  });
});
