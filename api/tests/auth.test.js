const request = require('supertest')
const app = require('../src/app')


describe('POST /auth', () => {
    it('Succesfully authentication', done => {
      request(app)
            .post('/auth')
            .send({email: 'rodemore@espol.edu.ec', password:"123456789"})
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200,done);
    });
    it('Fail authentication', done => {
        request(app)
          .post('/auth')
          .send({email: 'rodemore@espol.edu.ec', password:"password"})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(404, done);
      });
  });