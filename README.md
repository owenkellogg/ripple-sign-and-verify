
# Ripple Signature -- ALPHA

Prove identity and ownership of a Ripple secret key using digital signatures

## Proposed Usage

    var privateKey = new PrivateKey('shpwJtZ5YmbSMWLhGAPvs4w4pgWqb');
    var publicKey  = new PublicKey('rnw7J57JRZqzj5QgYmpK7z3uL6mVYWvVsA');

    var message    = new Message('important information to verify');

    var signer     = new Signer(privateKey);
    var signature  = signer.sign(message);

    var verifier   = new Verifier(publicKey);
    assert(verifier.verify(message, signature));

