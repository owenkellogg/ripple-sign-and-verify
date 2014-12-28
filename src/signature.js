var utils      = require('utils')
var Message    = require(__dirname+'/message')
var PrivateKey = require(__dirname+'/private_key')

class Signature {
  constructor(message, privateKey) {
    utils.assert(message instanceof Message)
    utils.assert(privateKey instanceof PrivateKey)

    // generate signature!
    throw new Error('Signature generation not implemented')
  }
}

module.exports = Signature

