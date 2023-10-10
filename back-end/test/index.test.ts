
import request from 'supertest';
import app from '../src/index';

describe('authentication', () => {
  test('should return auth true for valid username and valid password', async () => {
    const response = await request(app)
      .post('/user/login')
      .send({ username: 'ValidUsername', password: 'ValidPassword' });
    expect(response.status).toBe(200);
    expect(response.body.data).not.toBeNull();
  });

  test('should return auth false for valid username and invalid password', async () => {
    const response = await request(app)
      .post('/user/login')
      .send({ username: 'ValidUsername', password: 'InvalidPassword' });
    expect(response.status).toBe(401);
    expect(response.body.data).toBeNull();
  });

  test('should return auth false for invalid username and valid password', async () => {
    const response = await request(app)
      .post('/user/login')
      .send({ username: 'InvalidUsername', password: 'ValidPassword' });
    expect(response.status).toBe(401);
    expect(response.body.data).toBeNull();
  });

  test('should return auth false for invalid username and invalid password', async () => {
    const response = await request(app)
      .post('/user/login')
      .send({ username: 'InvalidUsername', password: 'InvalidPassword' });
    expect(response.status).toBe(401);
    expect(response.body.data).toBeNull();
  });
});


describe('register', () => {
  test('should return user for valid username and valid password', async () => {
    const response = await request(app)
      .post('/user/register')
      .send({ username: generateRandomString(10), password: generateRandomString(10) });
      expect(response.status).toBe(201);
      expect(response.body.data).not.toBeNull();
  });

  test('should return null for username less than 3 characters', async () => {
    const response = await request(app)
      .post('/user/register')
      .send({ username: generateRandomString(2), password: generateRandomString(10) });
    expect(response.status).toBe(401);
    expect(response.body.data).toBeNull();
  });

  test('should return null for password less than 6 characters', async () => {
    const response = await request(app)
      .post('/user/register')
      .send({ username: generateRandomString(10), password: generateRandomString(2) });
    expect(response.status).toBe(401);
    expect(response.body.data).toBeNull();
  });

  test('should return null if user already exists', async () => {
    const response = await request(app)
      .post('/user/register')
      .send({ username: 'John', password: 'azerty' });
    expect(response.status).toBe(401);
    expect(response.body.data).toBeNull();
  });
});

function generateRandomString(length: number): string {
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  let randomString = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * length);
    randomString += characters.charAt(randomIndex);
  }
  return randomString;
}

describe('sheet', () => {
  test('should return sheet if valid', async () => {
    const response = await request(app)
      .post('/sheets')
      .send({
          "id": Math.random() * (1000 - 100 + 1) + 100,
          "question": "Quelle est la capitale de la France?",
          "answer": "PAris",
          "tags": "géographie",
          "category": 1
      });
      expect(response.status).toBe(201);
      expect(response.body.data).not.toBeNull();
  });
  test('should return null if invalid', async () => {
    const response = await request(app)
      .post('/sheets')
      .send({
        "id": 1,
        "question": "Quelle est la capitale de la France?",
        "answer": "PAris",
        "tags": "géographie",
        "category": 1
    });
    expect(response.status).toBe(409);
    expect(response.body.data).toBeNull();
  });
  test('should return sheet if id exists', async () => {
    const response = await request(app)
      .get('/sheets/1')
      .send();
    expect(response.status).toBe(200);
    expect(response.body.data).not.toBeNull();
  });
  test('should return null if there is no sheet with id', async () => {
    const response = await request(app)
      .get('/sheets/9999999999')
      .send();
    expect(response.status).toBe(404);
    expect(response.body.data).toBeNull();
  });
  test('should return sheet if id exists', async () => {
    const response = await request(app)
      .put('/sheets/1/updateCategory')
      .send({
        "id": 1,
        "question": "Quelle est la capitale de la France?",
        "answer": "PAris",
        "tags": "géographie",
        "category": 1
    });
    expect(response.status).toBe(200);
    expect(response.body.data).not.toBeNull();
  });
  test('should return null if there is no sheet with id', async () => {
    const response = await request(app)
      .put('/sheets/99999999/updateCategory')
      .send({
        "id": 99999999,
        "question": "Quelle est la capitale de la France?",
        "answer": "PAris",
        "tags": "géographie",
        "category": 1
    });
    expect(response.status).toBe(404);
    expect(response.body.data).toBeNull();
  });
});
