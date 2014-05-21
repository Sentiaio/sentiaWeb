'use strict';
var app = require('sails'),
    when = require('when'),
    _ = require('lodash'),
    sinon = require('sinon'),
    chai = require('chai').use(require('chai-as-promised')),
    should = chai.should();


describe('Authenticated Policy', function() {
    var authenticated;
    before(function() {
        authenticated = app.middleware.policies.authenticated;
    });
    describe('OK', function() {
        var req, res, next;
        before(function() {
            req = {
                session: {
                    user: {
                        email: 'users@example.com'
                    }
                }
            };
            res = {
                forbidden : sinon.spy()
            };
            next = sinon.spy();
            authenticated(req, res, next);
        });
        it('should call next once', function() {
            next.calledOnce.should.be.true;
        });

        it('should not call res. forbidden', function () {
            res.forbidden.called.should.be.false;
        });
    });
    describe('Fail', function() {
        var req, res, next;
        before(function() {
            req = {
                session: {
                }
            };
            res = {
                forbidden : sinon.spy()
            };
            next = sinon.spy();
            authenticated(req, res, next);
        });
        it('should not call next', function() {
            next.called.should.be.false;
        });

        it('should not call res.forbidden once', function () {
            res.forbidden.calledOnce.should.be.true;
        });
        it('should call forbidden with one argument', function () {
            res.forbidden.args[0].should.have.length(1);
        });
        it('should call forbidden with the right err', function () {
            res.forbidden.args[0][0].should.equal('You are not permitted to perform this action.');
        });
    });

});