var assert    = require('assert');
var PrivateKey = require(__dirname+'/../build/private_key');

describe('PrivateKey', function() {

  it('should accept a valid ripple private key', function() {
    assert.ok(new PrivateKey('snYo5W8kWoek9ZVo7oSqi7JHspFHk'));
  });

  it('should reject an invalid ripple private key', function() {
    assert.throws, function() {
      new PrivateKey('12345');
    });
  });

});

