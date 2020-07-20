// const request = require('supertest');
const express = require('express');
const app = require('../src/components/App/App')

//const app = express();
//const app = require('./server');
const supertest = require('supertest');
const request = supertest(app)
//const entryRouter = require('./routes/entry.router')



app.get('/api/entry', async (req,res) =>{
  res.json({message:'pass!'})
})

it('Gets the endpoint', async done => {
  const response = await request.get('/api/entry');
  expect(response.status).toBe(200);
  expect(response.body.message).toBe('pass!')
  done()
})

// app.post('/api/entry', async done => {

// })

// it('should parse JSON', async done =>{
//   const response = await request.post('/api/entry', {user_id:1, });
//   expect(response.status).toBe(200);
//   done()
// })

describe('POST /entry', function () {
  let data = {
    "id":100,
    "user_id":1,
    "emotion_value":5,
    "note":"ugh",
    "date_logged":"01/01/01"
  }
  it('respond with 201 created', function(done){
    request(app)
    .post('/api/entry')
    .send(data)
    .set('Accept','application/json')
    .expect('Content-Type',/json/)
    .expect(201)
    .end((err)=>{
      if (err) return done(err);
      done();
    })
  })
})

// app.get('/api/entry', function(req,res){
//   res.status(200).json({first_name:'Meep'});
// })

// request(app)
// .get(/entry)
// .expect('Content-Type',/json/)
// .expect('Content-Length','15')
// .expect(200)
// .end(function(err,res){
//   if (err) throw err;
// })