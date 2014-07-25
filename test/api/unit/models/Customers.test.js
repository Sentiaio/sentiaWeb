'use strict';
var app = require('sails'),
    Customers = require('../../../api/models/Customers.js'),
    when = require('when'),
    moment = require('moment'),
    sinon = require('sinon'),
    chai = require('chai').use(require('chai-as-promised')),
    should = chai.should();

describe('Models - Customers: ', function () {
    describe('Before validating when passing string values instead of numbers', function () {
        var output, next;
        before(function () {
            var attrs = {
                cam : "1",
                store : "1",
                company : "1",
                time : new Date().getTime()
            };
            next = sinon.spy();
            Customers.beforeValidate(attrs, next);
        });
        it('should call next once', function () {
            next.calledOnce.should.be.true;
        });
        it('should convert company to a number', function () {
            next.args[0][0].company.should.equal(1);
        });
        it('should convert cam to a number', function () {
            next.args[0][0].cam.should.equal(1);
        });
        it('should convert store to a number', function () {
            next.args[0][0].store.should.equal(1);
        });

    });
});