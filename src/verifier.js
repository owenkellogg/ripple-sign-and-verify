var utils     = require('utils')
var PublicKey = require(__dirname+'/public_key')
var Message   = require(__dirname+'/message')
var Signature = require(__dirname+'/signature')

class Verifier {
  constructor(publicKey) {
    utils.assert(publicKey instanceof PublicKey)
    this.publicKey = publicKey
  }

  verify(message, signature) {
    utils.assert(message instanceof Message)
    utils.assert(signature instanceof Signature)
  }
}

module.exports = Verifier

