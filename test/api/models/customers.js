'use strict';
var app = require('sails'),
    when = require('when'),
    _ = require('lodash'),
    sinon = require('sinon'),
    chai = require('chai').use(require('chai-as-promised')),
    should = chai.should();


describe('Customers Model', function() {
    var attrs, next;
    describe('beforeCreate', function() {
        describe('OK', function () {

            before(function() {
                attrs = {
                    store : '53731e8a6f72bb297bcd71fb',
                    company : '53731f7d6f72bb297bcd71fd',
                    time : new Date().getTime()

                };
                next = sinon.spy();
                app.models.customers.beforeCreate(attrs, next);
            });
            after(function () {});
            it('should call next once', function () {
                next.calledOnce.should.be.true;
            });
            it('should not supply an error to next', function () {
                next.args[0].should.have.length(0);
            });
            it('should convert store to a matching objectId', function () {
                attrs.store.should.have.property('_bsontype');
                attrs.store.toString().should.equal('53731e8a6f72bb297bcd71fb');
            });
            it('should convert company to a matching objectId', function () {
                attrs.company.should.have.property('_bsontype');
                attrs.company.toString().should.equal('53731f7d6f72bb297bcd71fd');
            });
            it('should convert time to a date', function () {
                Object.prototype.toString.call(attrs.time).should.equal('[object Date]');
            });
        });
        describe('Fail', function () {

            before(function() {
                attrs = {
                    id : 'fail',
                    name : 'Cam',
                    store : '53731e8a6f72bb297bcd71fb',
                    company : '53731f7d6f72bb297bcd71fd'
                };
                next = sinon.spy();
                app.models.cameras.beforeCreate(attrs, next);
            });
            after(function () {});
            it('should call next with an error', function () {
                next.calledOnce.should.be.true;
                next.args[0].should.have.length(1);
                next.args[0][0].should.not.be.empty;
            });
        });

    });
});