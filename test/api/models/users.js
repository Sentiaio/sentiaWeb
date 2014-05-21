'use strict';
var app = require('sails'),
    when = require('when'),
    _ = require('lodash'),
    bcrypt = require('bcrypt'),
    chai = require('chai').use(require('chai-as-promised')),
    should = chai.should();


describe('Users Model', function() {
    var users;
    before(function() {
        users = app.models.users;
    });
    it('should only have 1 beforecreate function ', function() {
        users._callbacks.beforeCreate.should.have.length(1);
    });
    it('should not accept undefined passwords', function() {
        var attrs = {};
        users._callbacks.beforeCreate[0](attrs, function(err) {
            should.exist(err);
        });
    });
    it('should hash new passwords', function(done) {
        var attrs = {
            password: 'password'
        };
        users._callbacks.beforeCreate[0](attrs, function(err) {
            should.not.exist(err);
            attrs.password.should.not.be.equal('password');
            bcrypt.compare("password", attrs.password, function(err, res) {
                should.not.exist(err);
                res.should.be.true;
                done();
            });
        });
    });
    it('should validate passwords', function(done) {
        var attrs = {};
        bcrypt.genSalt(10, function(err, salt) {
            should.not.exist(err);
            bcrypt.hash("password", salt, function(err, hash) {
                should.not.exist(err);
                attrs.password = hash;
                users._instanceMethods.validatePassword.call(attrs, "password", function(err) {
                    should.not.exist(err);
                    done();
                });
            });
        });
    });
    it('should not validate fake passwords', function(done) {
        var attrs = {};
        bcrypt.genSalt(10, function(err, salt) {
            should.not.exist(err);
            bcrypt.hash("password", salt, function(err, hash) {
                should.not.exist(err);
                attrs.password = hash;
                users._instanceMethods.validatePassword.call(attrs, "fake", function(err) {
                    err.should.eql({
                        message: 'Incorrect password'
                    });
                    done();
                });
            });
        });
    });
    it('should delete the password field in JSON', function() {
        var attrs = {
            toObject: function() {
                return {
                    password: 'password'
                };
            }
        };
        users._instanceMethods.toJSON.call(attrs).should.eql({});
    });
});