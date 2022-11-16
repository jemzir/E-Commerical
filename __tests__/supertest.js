const request = require('supertest');
const server = 'http://localhost:3000';

beforeAll(done => {
  done();
})

afterAll(done => {
  // import pool and end it here
  done();
})

describe('Routes are configured correctly', () => {
  // describe for '/api' and do it blocks for the 
  // functionalities respective CRUD
  describe('/', () => {
    describe('GET homepage', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect(200)
          .expect('Content-Type', /text\/html/);
      });
    })
  });

  describe('/api', () => {
    describe('GET api', () => {
      it('responds with 200 status and json content type', () => {
        return request(server)
          .get('/api')
          .expect(200)
          .expect('Content-Type', /json/);
      });
    });
    xdescribe('PUT api', () => {
      // need to do more before this..
      it('responds with 200 status', () => {
        return request(server)
          .put('/api')
          .expect(200);
      });
    })
  });
})