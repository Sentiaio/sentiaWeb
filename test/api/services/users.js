'use strict';
var app = require('sails'),
    _ = require('lodash'),
    sinon = require('sinon'),
    chai = require('chai').use(require('chai-as-promised')),
    should = chai.should();


describe('UsersService', function() {
    var users, usersService;
    before(function() {
        users = app.models.users;
        usersService = app.services.usersservice;
    });
    describe('login', function() {
        before(function() {
            // stub out USers.findOne
            sinon.stub(users, 'findOne', function(query, callback) {
                if (query.email === 'err') {
                    callback('err');
                    return;
                }
                if (query.email !== 'user@signal-noise.co.uk') {
                    callback(null, null);
                    return;
                }
                callback(null, {
                    validatePassword: function(password, done) {
                        console.log('');
                        if (password === 'password') {
                            done();
                        } else {
                            done({
                                message: 'Incorrect password.'
                            });
                        }
                    },

                });
            });
        });
        after(function() {
            users.findOne.restore();
        });
        it('should return a promise', function() {
            var promise = app.services.usersservice.login('user@signal-noise.co.uk', 'password');
            promise.then.should.be.a('function');
        });
        it('Should reject on err from findOne', function() {
            return usersService.login('err', 'password')
                .should.be.rejectedWith('err');
        });
        it('should not accept an undefined email', function() {
            return usersService.login(undefined, 'password')
                .should.be.rejectedWith({
                    message: 'Incorrect email.'
                });
        });
        it('should not find fake@signal-noise.co.uk', function() {
            return usersService.login('fake@signal-noise.co.uk', 'password')
                .should.be.rejectedWith({
                    message: 'Incorrect email.'
                });
        });
        it('should not accept an undefined password', function() {
            return usersService.login(undefined, 'password')
                .should.be.rejectedWith({
                    message: 'Incorrect password.'
                });
        });
        it('should not  accept password : "fake"', function() {
            return app.services.usersservice.login('user@signal-noise.co.uk', 'fake')
                .should.be.rejectedWith({
                    message: 'Incorrect password.'
                });
        });
        it('should accept user@signal-noise.co.uk with password: password', function() {
            return usersService.login('user@signal-noise.co.uk', 'password')
                .should.eventually.be.an('object').and.have.keys(['validatePassword']);
        });
    });
});