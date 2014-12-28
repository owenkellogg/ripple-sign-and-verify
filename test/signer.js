var Signer     = require(__dirname+'/../build/signer');
var PrivateKey = require(__dirname+'/../build/private_key');
var Message    = require(__dirname+'/../build/message'); 
var Signature  = require(__dirname+'/../build/signature');

describe('Signer', function() {

  it('should accept a private key', function() {
    var privateKey = new PrivateKey('snYo5W8kWoek9ZVo7oSqi7JHspFHk');
    assert.ok(new Signer(privateKey));
  });

  it('should reject without a private key', function() {
    assert.throws(function() {
      new Signer();
    });
  });

  it('should reject another type of object', function() {
    assert.throws(function() {
      new Signer('snYo5W8kWoek9ZVo7oSqi7JHspFHk');
    });
  });

  it('should sign a message and return a signature', function() {
    var privateKey = new PrivateKey('snYo5W8kWoek9ZVo7oSqi7JHspFHk');
    var signer     = new Signer(privateKey);
    var message    = new Message('important message to verify');

    var signature  = signer.sign(message);
    assert(signature instanceof Signature);
  });
  
  it('signing should reject a non-message', function() {
    var privateKey = new PrivateKey('snYo5W8kWoek9ZVo7oSqi7JHspFHk');
    var signer     = new Signer(privateKey);
    var message    = new Message('important message to verify');

    assert.throws(function() {
      signer.sign('string not a Message');
    });
  });

});

