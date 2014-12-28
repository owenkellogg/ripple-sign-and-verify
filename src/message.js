
class Message {
  constructor(message) {
    if (!(typeof message === 'string') || message.length === 0) {
      throw new Error('message must be a string of at least one character')
    }
    this.message = message
  }
}

module.exports = Message

