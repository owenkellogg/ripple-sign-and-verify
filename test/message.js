var assert  = require('assert');
var Message = require(__dirname+'/../build/message');

describe('Message', function() {

  it('should accept a string', function() {
    assert.ok(new Message('important document to sign'));
  });

  it('should reject no message', function() {
    assert.throws(function() {
      new Message();
    })
  });

  it('should reject an empty string', function() {
    assert.throws(function() {
      new Message('');
    })
  });

  it('should reject an object', function() {
    assert.throws(function() {
      new Message({
        json: 'object'
      });
    })
  });
});

