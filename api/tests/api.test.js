const request = require('supertest')
const app = require('../src/app')

describe('GET /api/product', () => {
    describe('GET /api/product/commerce/:id', () => {
        it('responds with json', done=> {
           request(app)
            .get('/api/product/commerce/1')
            .set('Accept', 'application/json')
            .expect(200, done);
        });
      });
  });

  describe('GET api/category', () => {
    describe('GET api/category/commerce/:id', function() {
        it('responds with json', done =>{
            request(app)
            .get('/api/category/commerce/1')
            .set('Accept', 'application/json')
            .expect(200,done);
        });
      });
  });