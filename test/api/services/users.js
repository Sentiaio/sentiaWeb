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
});