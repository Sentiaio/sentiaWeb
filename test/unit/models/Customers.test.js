'use strict';
var app = require('sails'),
    Customers = require(process.cwd() + '/api/models/Customers.js'),
    when = require('when'),
    moment = require('moment'),
    sinon = require('sinon'),
    chai = require('chai').use(require('chai-as-promised')),
    should = chai.should();

describe('Models - Customers: ', function () {
    describe('Before validating when passing string values instead of numbers', function () {
        var attrs, next;
        before(function () {
            attrs = {
                cam : "1",
                store : "1",
                company : "1",
                time : new Date().getTime()
            };
            next = sinon.spy();
            Customers.beforeValidation(attrs, next);
        });
        it('should call next once', function () {
            next.calledOnce.should.be.true;
        });
        it('should convert company to a number', function () {
            attrs.company.should.equal(1);
        });
        it('should convert cam to a number', function () {
            attrs.cam.should.equal(1);
        });
        it('should convert store to a number', function () {
            attrs.store.should.equal(1);
        });

    });
});