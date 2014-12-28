var assert    = require('assert');
var PublicKey = require(__dirname+'/../build/public_key');

describe('PublicKey', function() {

  it('should accept a valid ripple public key', function() {
    assert.ok(new PublicKey('rwGh7sath1ZrAvSCe1Ep5VbC1zSGr5rcCL'));
  });

  it('should reject an invalid ripple public key', function() {
    assert.throws, function() {
      new PublicKey('12345');
    });
  });

});

