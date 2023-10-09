
import request from 'supertest';
import app from '../src/index';

describe('authentication', () => {
  test('should return auth true for valid sheetname and valid password', async () => {
    const response = await request(app)
      .post('/sheet/login')
      .send({ sheetname: 'ValidUsername', password: 'ValidPassword' });
    expect(response.status).toBe(200);
    expect(response.body).not.toBeNull();
  });

  test('should return auth false for valid sheetname and invalid password', async () => {
    const response = await request(app)
      .post('/sheet/login')
      .send({ sheetname: 'ValidUsername', password: 'InvalidPassword' });
    expect(response.status).toBe(401);
    expect(response.body).toBeNull();
  });

  test('should return auth false for invalid sheetname and valid password', async () => {
    const response = await request(app)
      .post('/sheet/login')
      .send({ sheetname: 'InvalidUsername', password: 'ValidPassword' });
    expect(response.status).toBe(401);
    expect(response.body).toBeNull();
  });

  test('should return auth false for invalid sheetname and invalid password', async () => {
    const response = await request(app)
      .post('/sheet/login')
      .send({ sheetname: 'InvalidUsername', password: 'InvalidPassword' });
    expect(response.status).toBe(401);
    expect(response.body).toBeNull();
  });
});

describe('sheet', () => {
  test('should return sheet if valid', async () => {
    const response = await request(app)
      .post('/sheet')
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
      .post('/sheet')
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
      .get('/sheet/1')
      .send();
    expect(response.status).toBe(200);
    expect(response.body.data).not.toBeNull();
  });
  test('should return null if there is no sheet with id', async () => {
    const response = await request(app)
      .get('/sheet/9999999999')
      .send();
    expect(response.status).toBe(404);
    expect(response.body.data).toBeNull();
  });
  test('should return sheet if id exists', async () => {
    const response = await request(app)
      .put('/sheet/1/updateCategory')
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
      .put('/sheet/99999999/updateCategory')
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