'use strict';
var app = require('sails'),
    when = require('when'),
    _ = require('lodash'),
    sinon = require('sinon'),
    chai = require('chai').use(require('chai-as-promised')),
    should = chai.should();


describe('MergeRequest Policy', function() {
    var merge, req, next;
    before(function() {
        merge = app.middleware.policies.mergerequest;
        req = {
            body : {
                "field1": "field1"
            },
            query : {
                "field2": "field2"
            }
        };
        next = sinon.spy();
        merge(req,undefined,next);
    });

    it('should call next once', function() {
        next.calledOnce.should.be.true;
    });
    it('should not alter req.query', function () {
        req.query.should.eql({"field2":"field2"});
    });
    it('should merge body and query into body', function () {
        req.body.should.eql({
            'field1' : 'field1',
            'field2': 'field2'
        });
    });
});