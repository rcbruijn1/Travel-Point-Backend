process.env.NODE_ENV = "test";

const assert = require('assert');
const mongoose = require('mongoose');
const config = require('../config/env');

const expect = require("chai").expect;
const request = require("supertest");
const app = require("../server");

describe("POST / VALIDATION", () => {
    before(done => {
      mongoose.connect(config.dburl)
        .then(() => done())
        .catch(err => done(err));
    });
   

    describe("NORMAL USER POST", () => {
        it("CREATES a new user", done => {
          request(app)
            .post("/api/v1/user/register")
            .send({
              name: "name",
              username: "name",
              email: "name@gmail.com",
              password: "password"
            })
            .then(res => {
              const body = res.body;
              expect(body).to.contain.property("success");
              expect(body.success).to.equal(true);
              expect(body).to.contain.property("msg");
              expect(body.msg).to.equal("User registered");
              done();
            })
            .catch(err => done(err));
        });
      });

      describe("JOURNEY VALIDATION", () => {
        it("FAILS to create a new journey - name and dates are required", done => {
          request(app)
            .post("/api/v1/journeys")
            .send({
                description: "text",
                city: "Narnia"
            })
            .then(res => {
              const body = res.body;
              expect(body).to.contain.property("message");
              expect(body).to.contain.property("name");
              expect(body.message).to.equal("Journey validation failed: name: Path `name` is required., departure_date: Path `departure_date` is required., return_date: Path `return_date` is required.");
              expect(body.name).to.equal("ValidationError");
              done();
            })
            .catch(err => done(err));
        });
        
      });

});

