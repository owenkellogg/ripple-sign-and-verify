var utils      = require('utils')
var PrivateKey = require(__dirname+'/private_key')
var Message    = require(__dirname+'/message')
var Signature  = require(__dirname+'/signature')

class Signer {

  constructor(privateKey) {
    utils.assert(privateKey instanceof PrivateKey)
    this.privateKey = privateKey
  }

  sign(message) {
    assert(message instanceof Message)
    return new Signature(message, this.privateKey)
  }
}

module.exports = Signer

