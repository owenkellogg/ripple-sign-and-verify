var Signer     = require(__dirname+'/../build/signer');
var Verifier   = require(__dirname+'/../build/verifier');
var PrivateKey = require(__dirname+'/../build/private_key');
var PublicKey  = require(__dirname+'/../build/public_key');
var Message    = require(__dirname+'/../build/message'); 
var Signature  = require(__dirname+'/../build/signature');

describe('Verifier', function() {

  it('should accept a public key', function() {
    var privateKey = new PublicKey('rwGh7sath1ZrAvSCe1Ep5VbC1zSGr5rcCL');
    assert.ok(new Verifier(publicKey));
  });

  it('should reject without a public key', function() {
    assert.throws(function() {
      new Verifier();
    });
  });

  it('should reject another type of object', function() {
    assert.throws(function() {
      new Verifier('snYo5W8kWoek9ZVo7oSqi7JHspFHk');
    });
  });

  it('should verify a message and signature', function() {
    var privateKey = new PublicKey('rwGh7sath1ZrAvSCe1Ep5VbC1zSGr5rcCL');
    var privateKey = new PrivateKey('snYo5W8kWoek9ZVo7oSqi7JHspFHk');
    var signer     = new Signer(privateKey);
    var verifier   = new Verifier(publicKey);
    var message    = new Message('important message to verify');
    var badMessage = new Message('another message');

    var signature  = signer.sign(message);
    assert(verifier.verify(message, signature));
  });

  it('shoud throw on an invalid signature', function() {
    var privateKey = new PublicKey('rwGh7sath1ZrAvSCe1Ep5VbC1zSGr5rcCL');
    var privateKey = new PrivateKey('snYo5W8kWoek9ZVo7oSqi7JHspFHk');
    var signer     = new Signer(privateKey);
    var verifier   = new Verifier(publicKey);
    var message    = new Message('important message to verify');
    var badMessage = new Message('another message');

    var signature  = signer.sign(message);
    assert.throws(function() {

      verifier.verify(badMessage, signature);
    });
  });
});

