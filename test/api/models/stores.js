'use strict';
var app = require('sails'),
    when = require('when'),
    _ = require('lodash'),
    sinon = require('sinon'),
    chai = require('chai').use(require('chai-as-promised')),
    should = chai.should();


describe('Stores Model', function() {
    var attrs, next;
    describe('beforeCreate', function() {
        describe('OK', function () {
            before(function() {
                attrs = {
                    id : '53731c9b6f72bb297bcd71f8',
                    company : '53731f7d6f72bb297bcd71fd',
                    time : new Date().getTime()

                };
                next = sinon.spy();
                app.models.stores.beforeCreate(attrs, next);
            });
            after(function () {});
            it('should call next once', function () {
                next.calledOnce.should.be.true;
            });
            it('should not supply an error to next', function () {
                next.args[0].should.have.length(0);
            });
            it('should convert id to a matching objectId', function () {
                attrs.id.should.have.property('_bsontype');
                attrs.id.toString().should.equal('53731c9b6f72bb297bcd71f8');
            });
            it('should convert company to a matching objectId', function () {
                attrs.company.should.have.property('_bsontype');
                attrs.company.toString().should.equal('53731f7d6f72bb297bcd71fd');
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